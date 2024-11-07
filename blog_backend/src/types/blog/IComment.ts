import ITimestamp from '../ITimestamp'
import IUser from '../IUser'
import IArticle from './IArticle'
import IReply from './IReply'

interface IComment extends ITimestamp {
  uid: IUser['_id']
  articleId: IArticle['_id']
  content: string
  likeByIds: IUser['_id'][]
  numReplys: number
}

export default IComment
