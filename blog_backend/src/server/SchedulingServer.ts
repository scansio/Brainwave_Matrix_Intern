import dotenv from 'dotenv'
import express, { Router } from 'express'
import mongoose from 'mongoose'
import Logger from '../miscs/Logger'
import CronDefinition from '../cronjobs/config/CronDefinition'
import createSecureServer, { onClose } from './createSecureServer'
import { validatePaystackHook } from '../libs/Paystack'
;(async () => {
  const app = express()
  dotenv.config()
  const serverName = 'SchedulingServer'
  const SCHEDULING_SERVER_PORT = process.env.SCHEDULING_SERVER_PORT
  const SCHEDULING_SERVER_SCHEME = process.env.SCHEDULING_SERVER_SCHEME || ''
  const router = Router()
  const server = createSecureServer({
    app,
    serverName,
    router,
    scheme: SCHEDULING_SERVER_SCHEME,
    port: SCHEDULING_SERVER_PORT as string,
  })

  //Paystack hook event
  router.get('/paystack', validatePaystackHook)

  const dbConnectionString: string = (
    process.env.ENVIRONMENT === 'production' ? process.env.MONGO_URI_PASS : process.env.MONGO_URI_PASS_LOCAL
  ) as string

  mongoose.set('strictQuery', true)

  try {
    const mongodb = await mongoose.connect(dbConnectionString)
    server.listen(SCHEDULING_SERVER_PORT, () => {
      console.log(`${serverName} running on port ${SCHEDULING_SERVER_PORT}`)

      new CronDefinition().start().catch((error) => {
        Logger.log('error', error)
        //console.log(error, '\n\n')
      })
    })
    onClose(server, mongodb.disconnect)
  } catch (error) {
    Logger.log('error', error)
    //console.log(error, '\n\n')
    process.exit()
  }
  return app
})()
