import ITimestamp from '../ITimestamp'
import IUser from '../IUser'
import IArticle from './IArticle'
import IReply from './IReply'

interface IComment extends ITimestamp {
  uid: IUser['_id']
  articleId: IArticle['_id']
  replyIds: IReply['_id'][]
  content: string
  like: number
}

export default IComment
