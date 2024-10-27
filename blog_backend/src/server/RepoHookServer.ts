import express, { Express, Router } from 'express'
import Logger from '../miscs/Logger'
import RepoHooks from '../RepoHooks'
import dotenv from 'dotenv'
import createSecureServer from './createSecureServer'
;(async () => {
  dotenv.config()
  const app: Express = express()
  const serverName = 'RepoHookServer'
  const REPO_HOOK_SERVER_PORT = process.env.REPO_HOOK_SERVER_PORT
  const REPO_HOOK_SERVER_SCHEME = process.env.REPO_HOOK_SERVER_SCHEME || ''
  const router = Router()
  const server = createSecureServer({
    app,
    serverName,
    router,
    scheme: REPO_HOOK_SERVER_SCHEME,
    port: REPO_HOOK_SERVER_PORT as string,
  })

  await RepoHooks.instance(router)

  try {
    server.listen(REPO_HOOK_SERVER_PORT, () => {
      console.log(`${serverName} running on port ${REPO_HOOK_SERVER_PORT}`)
    })
  } catch (error) {
    console.log(error)
    Logger.log('error', error)
  }
  return app
})()
