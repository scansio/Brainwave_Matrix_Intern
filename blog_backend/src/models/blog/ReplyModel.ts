import mongoose, { Schema } from 'mongoose'
import TimestampsPlugin from '../plugins/TimestampsPlugin'
import IReply from '../../types/blog/IReply'
import CommentModel from './CommentModel'
import UserModel from '../UserModel'

export const ReplySchema: Schema<IReply> = new Schema<IReply>({
  uid: {
    type: Schema.Types.ObjectId,
    ref: UserModel.modelName,
    required: [true, 'Comment ID is required'],
  },
  commentId: {
    type: Schema.Types.ObjectId,
    ref: CommentModel.modelName,
    required: [true, 'Comment ID is required'],
  },
  content: {
    type: String,
    required: [true, 'Reply content is required'],
  },
  like: Number,
})

const ReplyModel = mongoose.model<IReply>('Reply', TimestampsPlugin(ReplySchema))
export default ReplyModel
