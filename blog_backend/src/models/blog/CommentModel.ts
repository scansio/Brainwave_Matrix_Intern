import mongoose, { Schema } from 'mongoose'
import TimestampsPlugin from '../plugins/TimestampsPlugin'
import IComment from '../../types/blog/IComment'
import ArticleModel from './ArticleModel'

export const CommentSchema: Schema<IComment> = new Schema<IComment>({
  articleId: {
    type: Number,
    ref: ArticleModel.modelName,
    required: [true, 'Article ID is required'],
  },
  replyIds: {
    type: [Schema.Types.ObjectId],
    ref: 'Reply',
  },
  content: {
    type: String,
    required: [true, 'Comment body is required'],
  },
  like: Number,
})

const CommentModel = mongoose.model<IComment>('Comment', TimestampsPlugin(CommentSchema))
export default CommentModel
