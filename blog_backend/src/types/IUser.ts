import { AuthenticationLevel } from '../configs/constants'
import ITimestamp from './ITimestamp'

interface IUser extends ITimestamp {
  _id: number
  firstname: string
  lastname: string
  email: string
  password?: string
  role: AuthenticationLevel
  dob: Date
  refID: number
  pin?: string
  oauth: boolean
  phone: number
  slug: string,
  bio: string,
  avatar: string,
}

export default IUser
