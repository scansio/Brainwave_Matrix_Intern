import mongoose, { Schema } from 'mongoose'
import TimestampsPlugin from '../plugins/TimestampsPlugin'
import UserModel from '../UserModel'
import IArticle from '../../types/blog/IArticle'

export const ArticleSchema: Schema<IArticle> = new Schema<IArticle>({
  author: {
    type: Number,
    ref: UserModel.modelName,
    required: [true, 'Author ID is required'],
  },
  slug: {
    type: String,
    required: [true, 'Slug: Nice looking readable url like pattern is required'],
  },
  content: {
    type: String,
    required: [true, 'Article body is required'],
  },
  like: Number,
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  coverImageUrl: {
    type: String,
    required: [true, 'Cover image is required'],
  },
  seoDescription: {
    type: String,
    required: [true, 'Seo description is required'],
  },
})

const ArticleModel = mongoose.model<IArticle>('Article', TimestampsPlugin(ArticleSchema))
export default ArticleModel
