import ITimestamp from '../ITimestamp'
import IUser from '../IUser'
import IComment from './IComment'

interface IReply extends ITimestamp {
  uid: IUser['_id']
  commentId: IComment['_id']
  content: string
  like: number
}

export default IReply
