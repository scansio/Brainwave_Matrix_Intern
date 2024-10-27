import ITimestamp from '../ITimestamp'
import IComment from './IComment'

interface IReply extends ITimestamp {
  commentId: IComment['_id']
  content: string
  like: number
}

export default IReply
