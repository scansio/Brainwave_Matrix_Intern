/* eslint-disable @typescript-eslint/no-explicit-any */
import dotenv from 'dotenv'
import express, { Express, Router } from 'express'
import createSecureServer from './createSecureServer'
import WebSocket from 'ws'
import SocketManager from '../miscs/SocketManager'
;(async () => {
  const app: Express = express()
  dotenv.config()
  const serverName = 'SocketServer'
  const SOCKET_SERVER_PORT = process.env.SOCKET_SERVER_PORT
  const SOCKET_SERVER_SCHEME = process.env.SOCKET_SERVER_SCHEME || ''
  const router = Router()
  const server = createSecureServer({
    app,
    serverName,
    router,
    scheme: SOCKET_SERVER_SCHEME,
    port: SOCKET_SERVER_PORT as string,
  })

  const wss = new WebSocket.Server({ server })
  const socketManager = new SocketManager(wss)

  try {
    server.listen(SOCKET_SERVER_PORT, () => {
      console.log(`${serverName} running on port ${SOCKET_SERVER_PORT}`)
      socketManager.listen()
    })
  } catch (error) {
    console.log(error)
  }
  return app
})()
