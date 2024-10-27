import { readdirSync } from 'fs'
import { resolve } from 'path'
import { IAPI } from './interfaces/IAPI'
import IAPIVersionInfo from './interfaces/IAPIVersionInfo'
import { writeFile } from 'fs/promises'
import { IControllerRoute } from './interfaces/IControllerRoute'

const API: IAPI = []

const versionsDir = resolve(__dirname, 'versions')
for (const dir of readdirSync(versionsDir)) {
  const dirPath = resolve(versionsDir, dir)
  const controllerRoutes: IControllerRoute[] = []
  let info: IAPIVersionInfo | null = null

  for (const filename of readdirSync(dirPath)) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const fetch = () => require(resolve(dirPath, filename)).default
    if (filename === 'info.js') {
      info = fetch()
    } else {
      controllerRoutes.push(fetch())
    }
  }

  if (info) {
    API.push({ info, controllerRoutes, status: info.status })
  }
}

const APIDocPath = resolve(__dirname, '..', '..', 'cdn', 'APIDoc.json')
const APIDoc = JSON.stringify(API)

writeFile(APIDocPath, APIDoc)

export default API
