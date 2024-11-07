import mongoose, { Schema } from 'mongoose'
import TimestampsPlugin from '../plugins/TimestampsPlugin'
import IComment from '../../types/blog/IComment'
import ArticleModel from './ArticleModel'
import UserModel from '../UserModel'

export const CommentSchema: Schema<IComment> = new Schema<IComment>({
  uid: {
    type: Number,
    ref: UserModel.modelName,
    required: [true, 'User ID is required'],
  },
  articleId: {
    type: Schema.Types.ObjectId,
    ref: ArticleModel.modelName,
    required: [true, 'Article ID is required'],
  },
  content: {
    type: String,
    required: [true, 'Comment body is required'],
  },
  likeByIds: {
    type: [Number],
    ref: UserModel.modelName,
    default: [],
  },
  numReplys: {
    type: Number,
    default: 0,
  },
})

const CommentModel = mongoose.model<IComment>('Comment', TimestampsPlugin(CommentSchema))
export default CommentModel
