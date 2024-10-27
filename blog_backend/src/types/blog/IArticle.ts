import ITimestamp from '../ITimestamp'
import IUser from '../IUser'

interface IArticle extends ITimestamp {
  author: IUser['_id']
  slug: string
  content: string
  like: number
  title: string
  coverImageUrl: string
  seoDescription: string
}

export default IArticle
