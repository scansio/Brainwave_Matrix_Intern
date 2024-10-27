import fs from 'fs'
import { resolve } from 'path'
import IRide from '../types/ride/IRide'
import IBookedRide from '../types/ride/IBookedRide'

//Ride
const RIDELOCATIONBROADCAST_FILE_PATH = resolve(__dirname, 'ridelocationbroadcast-ipc')

export const startRideLocationBroadcastListener = (cb: (ride: IRide) => Promise<void>) => {
  fs.watchFile(RIDELOCATIONBROADCAST_FILE_PATH, (curr, prev) => {
    if (curr.mtime > prev.mtime) {
      const data = fs.readFileSync(RIDELOCATIONBROADCAST_FILE_PATH)
      if (!data) return
      const decodedMessage = JSON.parse(`${data}`)
      cb(decodedMessage)
    }
  })
}

export const triggerRideLocationBroadcastEvent = (ride: IRide) =>
  fs.writeFileSync(RIDELOCATIONBROADCAST_FILE_PATH, `${JSON.stringify(ride)}`)

//Booked Ride
const BOOKEDRIDELOCATIONBROADCAST_PATH = resolve(__dirname, 'bookedridelocationbroadcast-ipc')

export const startBookedRideLocationBroadcastListener = (cb: (bookedRide: IBookedRide) => Promise<void>) => {
  fs.watchFile(BOOKEDRIDELOCATIONBROADCAST_PATH, (curr, prev) => {
    if (curr.mtime > prev.mtime) {
      const data = fs.readFileSync(BOOKEDRIDELOCATIONBROADCAST_PATH)
      if (!data) return
      const decodedMessage = JSON.parse(`${data}`)
      cb(decodedMessage)
    }
  })
}

export const triggerBookedRideLocationBroadcastEvent = (bookedRide: IBookedRide) =>
  fs.writeFileSync(BOOKEDRIDELOCATIONBROADCAST_PATH, `${JSON.stringify(bookedRide)}`)
