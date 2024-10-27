/* eslint-disable @typescript-eslint/no-explicit-any */
import { WebSocket, WebSocketServer } from 'ws'
import Authenticate from './Authenticate'
import { AuthenticationLevel, SocketAction } from '../configs/constants'
import IAny from '../types/IAny'
import IUser from '../types/IUser'
import { IOnAuthenticateRequest } from '../types/messaging/IOnAuthenticateRequest'
import { IOnAuthenticateResponse } from '../types/messaging/IOnAuthenticateResponse'
import { IOnMessageSeenResponse } from '../types/messaging/IOnMessageSeenResponse'
import { IOnSendMessageResponse } from '../types/messaging/IOnSendMessageResponse'
import { IOnStatusResponse } from '../types/messaging/IOnStatusResponse'
import { startNewMessageListener } from '../server/messageEvent'
import IMessage from '../types/messaging/IMessage'
import { IOnSendMessageRequest } from '../types/messaging/IOnSendMessageRequest'
import { IOnMessageSeenRequest } from '../types/messaging/IOnMessageSeenRequest'
import { IOnStatusRequest } from '../types/messaging/IOnStatusRequest'
import MessageModel from '../models/MessageModel'
import { IOnRecieveMessageResponse } from '../types/messaging/IOnRecieveMessageResponse'
import { IInvalidResponse } from '../types/messaging/IInvalidResponse'
import { IOnMessageRecieveEditResponse } from '../types/messaging/IOnMessageRecieveEditResponse'
import { IOnMessageEditResponse } from '../types/messaging/IOnMessageEditResponse'
import { IOnMessageEditRequest } from '../types/messaging/IOnMessageEditRequest'
import { IOnLocationUpdateRideRequest } from '../types/messaging/IOnLocationUpdateRideRequest'
import { IOnLocationUpdateBookedRideRequest } from '../types/messaging/IOnLocationUpdateBookedRideRequest'
import { IOnLocationUpdateBookedRideResponse } from '../types/messaging/IOnLocationUpdateBookedRideResponse'
import { IOnLocationUpdateRideResponse } from '../types/messaging/IOnLocationUpdateRideResponse'
import RideModel from '../models/ride/RideModel'
import BookedRideModel from '../models/ride/BookedRideModel'
import IRide from '../types/ride/IRide'
import IBookedRide from '../types/ride/IBookedRide'
import { IOnLocationBroadcastRideResponse } from '../types/messaging/IOnLocationBroadcastRideResponse'
import { IOnLocationBroadcastBookedRideResponse } from '../types/messaging/IOnLocationBroadcastBookedRideResponse'
import {
  startBookedRideLocationBroadcastListener,
  startRideLocationBroadcastListener,
} from '../server/locationUpdateEvent'

type UserSocket = WebSocket & { user: IUser; authenticated: boolean }
type IResponseData =
  | IOnAuthenticateResponse
  | IOnMessageSeenResponse
  | IOnSendMessageResponse
  | IOnStatusResponse
  | IOnRecieveMessageResponse
  | IInvalidResponse
  | IOnMessageRecieveEditResponse
  | IOnMessageEditResponse
  | IOnLocationUpdateRideResponse
  | IOnLocationUpdateBookedRideResponse

type IRequestData =
  | IOnAuthenticateRequest
  | IOnMessageSeenRequest
  | IOnSendMessageRequest
  | IOnStatusRequest
  | IOnMessageEditRequest
  | IOnLocationUpdateRideRequest
  | IOnLocationUpdateBookedRideRequest

class SocketManager {
  clients: Map<number, UserSocket>

  constructor(private wss: WebSocketServer) {
    this.clients = new Map()

    wss.on('connection', (ws) => {
      this.notifyAdmins().catch(() => {})

      ws.on('message', this.handler(ws as UserSocket))

      ws.onclose = async (ev) => {
        ;(ev.target as any)?.user?.uid && this.clients.delete((ev.target as any)?.user?.uid)
        this.notifyAdmins().catch(() => {})
        this.notifyUserOnline((ev.target as any)?.user?.uid, false).catch(() => {})
      }
    })
  }

  invalidRequestError = (ws: UserSocket) => {
    this.send(ws, { action: SocketAction.INVALID_REQUEST, error: new Error('Invalid request') })
  }

  handler = (ws: UserSocket) => async (message: Buffer) => {
    const data: IRequestData = JSON.parse(`${message}`)

    if (!data || !data.action) {
      this.invalidRequestError(ws)
    }

    switch (data.action) {
      case SocketAction.RIDE_LOCATION_UPDATE:
        {
          if (!(await this.checkAuthentication(ws, data as IOnAuthenticateRequest))) return
          const update: IOnLocationUpdateRideRequest = data as IOnLocationUpdateRideRequest
          RideModel.findOneAndUpdate(
            { _id: update.rideId, driver: update.uid },
            {
              lastMovingLocation: update.location,
            },
          )
            .then((updated) => {
              if (!updated) {
                throw new Error('Error updating the location or Ride not found')
              }
              this.send(ws, {
                action: SocketAction.RIDE_LOCATION_UPDATE_RESPONSE,
                updated: true,
                location: update.location,
                rideId: update.rideId,
              })
            })
            .catch((reason) =>
              this.send(ws, {
                action: SocketAction.RIDE_LOCATION_UPDATE_RESPONSE,
                updated: false,
                location: update.location,
                rideId: update.rideId,
                error: reason,
              }),
            )
        }
        break

      case SocketAction.BOOKEDRIDE_LOCATION_UPDATE:
        {
          if (!(await this.checkAuthentication(ws, data as IOnAuthenticateRequest))) return
          const update: IOnLocationUpdateBookedRideRequest = data as IOnLocationUpdateBookedRideRequest
          BookedRideModel.findOneAndUpdate(
            { _id: update.bookedRideId, bookedBy: update.uid },
            {
              lastMovingLocation: update.location,
            },
          )
            .then((updated) => {
              if (!updated) {
                throw new Error('Error updating the location or BookedRide not found')
              }
              this.send(ws, {
                action: SocketAction.BOOKEDRIDE_LOCATION_UPDATE_RESPONSE,
                updated: true,
                location: update.location,
                bookedRideId: update.bookedRideId,
              })
            })
            .catch((reason) =>
              this.send(ws, {
                action: SocketAction.BOOKEDRIDE_LOCATION_UPDATE_RESPONSE,
                updated: false,
                location: update.location,
                bookedRideId: update.bookedRideId,
                error: reason,
              }),
            )
        }
        break

      case SocketAction.MESSAGE:
        {
          if (!(await this.checkAuthentication(ws, data as IOnAuthenticateRequest))) return
          const message: IOnSendMessageRequest = data as IOnSendMessageRequest
          MessageModel.create({
            from: ws.user._id,
            to: message.toUID,
            message: message.message,
            replyTo: message.replyToMessageId,
          })
            .then((created) =>
              this.send(ws, { action: SocketAction.MESSAGE, sent: true, message: message.message, created }),
            )
            .catch((reason) =>
              this.send(ws, {
                action: SocketAction.MESSAGE,
                sent: false,
                message: message.message,
                error: reason,
              }),
            )
        }
        break

      case SocketAction.ONLINE_STATUS:
        {
          if (!(await this.checkAuthentication(ws, data as IOnAuthenticateRequest))) return
          const onlineStatusReq: IOnStatusRequest = data as IOnStatusRequest

          const found = this.clients.get(onlineStatusReq.uid)
          if (found) {
            this.send(ws, { action: SocketAction.ONLINE_STATUS, status: 'online', uid: onlineStatusReq.uid })
          } else {
            this.send(ws, { action: SocketAction.ONLINE_STATUS, status: 'offline', uid: onlineStatusReq.uid })
          }
        }
        break

      case SocketAction.MESSAGE_STATUS:
        {
          if (!(await this.checkAuthentication(ws, data as IOnAuthenticateRequest))) return
          const messageStatusReq: IOnMessageSeenRequest = data as IOnMessageSeenRequest
          MessageModel.findOne({ from: ws.user._id, _id: messageStatusReq.messageId })
            .then((found) =>
              this.send(ws, {
                action: SocketAction.MESSAGE_STATUS,
                status: found?.seen ? 'seen' : 'not seen',
                messageId: messageStatusReq.messageId,
              }),
            )
            .catch((reason) =>
              this.send(ws, {
                action: SocketAction.MESSAGE_STATUS,
                status: 'not seen',
                messageId: messageStatusReq.messageId,
                error: reason,
              }),
            )
        }
        break

      case SocketAction.MESSAGE_EDIT:
        {
          if (!(await this.checkAuthentication(ws, data as IOnAuthenticateRequest))) return
          const messageEditReq: IOnMessageEditRequest = data as IOnMessageEditRequest
          MessageModel.findOneAndUpdate(
            { from: ws.user._id, _id: messageEditReq.messageId },
            {
              ...('status' in messageEditReq ? { status: messageEditReq.status } : {}),
              ...('message' in messageEditReq ? { message: messageEditReq.message } : {}),
            },
          )
            .then(() =>
              this.send(ws, {
                action: SocketAction.MESSAGE_EDIT,
                messageId: messageEditReq.messageId,
                edited: true,
              }),
            )
            .catch((reason) =>
              this.send(ws, {
                action: SocketAction.MESSAGE_EDIT,
                messageId: messageEditReq.messageId,
                error: reason,
              }),
            )
        }
        break

      case SocketAction.AUTHENTICATION:
        {
          await this.checkAuthentication(ws, data as IOnAuthenticateRequest)
          return
        }
        break

      default:
        this.invalidRequestError(ws)
        break
    }
  }

  async checkAuthentication(ws: UserSocket, data: IOnAuthenticateRequest) {
    const isAuthenticationRequest = data.action === SocketAction.AUTHENTICATION
    if (isAuthenticationRequest) {
      const decodeData = (await Authenticate.decode(data.Authorization)) as IUser

      if (!decodeData) {
        this.send(ws, { action: SocketAction.AUTHENTICATION, status: 'invalid' })
        return false
      }

      ws.user = decodeData
      ws.authenticated = true
      //This is resource intensive consider if applicable
      this.notifyUserOnline((decodeData as any).uid, true).catch(() => {})
      this.clients.set(decodeData._id, ws)
      this.send(ws, { action: SocketAction.AUTHENTICATION, status: 'authenticated' })
    } else if (!ws.authenticated) {
      ws?.user?._id && this.clients.delete(ws.user._id)
      this.send(ws, { action: SocketAction.AUTHENTICATION, status: 'invalid' })
      return false
    }
    return true
  }

  async notifyAdmins() {
    for (const ws of this.wss.clients.values()) {
      const user: IUser = (ws as unknown as IAny).user as IUser
      if (user && (user.role == AuthenticationLevel.DEVELOPER || user.role == AuthenticationLevel.ADMIN)) {
        ws.send(JSON.stringify({ connected: this.wss.clients.size }))
      }
    }
  }

  async notifyUserOnline(uid: IUser['_id'], isOnline: boolean) {
    if (!uid) return
    for (const ws of this.clients.values()) {
      this.send(ws, { status: isOnline ? 'online' : 'offline', uid, action: SocketAction.ONLINE_STATUS })
    }
  }

  send = <T = IResponseData>(ws: UserSocket, data: T) => {
    ws.send(JSON.stringify(data))
  }

  broadcastNewMessage = async (message: IMessage) => {
    if (!message) return

    const reciever = this.clients.get(message.to)

    if (reciever) {
      if (message.isNew) {
        this.send(reciever, { action: SocketAction.MESSAGE_RECIEVE, message })
      } else {
        this.send(reciever, { action: SocketAction.MESSAGE_RECIEVE_EDIT, message })
      }
    }
  }

  rideBroadcastLocation = async (ride: IRide) => {
    if (!ride || ride.ended) return
    for (const bookedRideId of (ride.bookedRides || []) as IBookedRide['_id'][]) {
      const bookedRide = await BookedRideModel.findById(bookedRideId).exec()
      const reciever = this.clients.get(bookedRide?.bookedBy || 0)

      if (reciever) {
        this.send<IOnLocationBroadcastRideResponse>(reciever, {
          action: SocketAction.RIDE_LOCATION_BROADCAST,
          location: ride.lastMovingLocation,
          rideId: ride._id,
        })
      }
    }
  }

  bookedRidebroadcastLocation = async (bookedRide: IBookedRide) => {
    if (!bookedRide || bookedRide.ended || bookedRide.cancelled) return

    const reciever = this.clients.get(bookedRide.driverId)

    if (reciever) {
      this.send<IOnLocationBroadcastBookedRideResponse>(reciever, {
        action: SocketAction.BOOKEDRIDE_LOCATION_BROADCAST,
        location: bookedRide.lastMovingLocation,
        bookedRide: bookedRide._id,
      })
    }
  }

  listen() {
    startNewMessageListener(this.broadcastNewMessage)
    startRideLocationBroadcastListener(this.rideBroadcastLocation)
    startBookedRideLocationBroadcastListener(this.bookedRidebroadcastLocation)
  }
}

export default SocketManager
