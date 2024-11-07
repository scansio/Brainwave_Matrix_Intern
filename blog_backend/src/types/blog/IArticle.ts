import ITimestamp from '../ITimestamp'
import IUser from '../IUser'

interface IArticle extends ITimestamp {
  author: IUser['_id']
  slug: string
  content: string
  likeByIds: IUser['_id'][]
  title: string
  coverImageUrl: string
  seoDescription: string
  numComments: number
  tags: string[]
  readingTimeInMinute: number
  readers: number[]
  published: boolean
}

export default IArticle
