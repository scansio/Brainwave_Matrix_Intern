import { AuthenticationLevel, UserType } from '../configs/constants'
import ITimestamp from './ITimestamp'

interface IUser extends ITimestamp {
  _id: number
  firstname: string
  lastname: string
  email: string
  password?: string
  role: AuthenticationLevel
  type: UserType
  dob: Date
  refID: number
  pin?: string
  oauth: boolean
  phone: number
}

export default IUser