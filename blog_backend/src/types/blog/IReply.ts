import ITimestamp from '../ITimestamp'
import IUser from '../IUser'
import IComment from './IComment'

interface IReply extends ITimestamp {
  uid: IUser['_id']
  commentId: IComment['_id']
  content: string
  likeByIds: IUser['_id'][]
}

export default IReply
