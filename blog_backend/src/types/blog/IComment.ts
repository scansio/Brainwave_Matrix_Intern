import ITimestamp from '../ITimestamp'
import IArticle from './IArticle'
import IReply from './IReply'

interface IComment extends ITimestamp {
  articleId: IArticle['_id']
  replyIds: IReply['_id'][]
  content: string
  like: number
}

export default IComment
