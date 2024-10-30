import { config } from 'dotenv'
import { APIVersionStatus } from '../../APIVersionStatus'
import IAPIVersionInfo from '../../interfaces/IAPIVersionInfo'
import { AuthenticationLevel } from '../../../configs/constants'
config()

const info: IAPIVersionInfo = {
  title: 'Blog API',
  description: 'API for Blogging platform',
  version: 'v1',
  servers: [process.env.MAIN_SERVER_URL || '/main'],
  status: APIVersionStatus.ENABLED,
  miscModel: {
    AuthenticationLevel,
  },
}

export default info
