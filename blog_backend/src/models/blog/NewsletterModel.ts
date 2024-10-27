import mongoose, { Schema } from 'mongoose'
import TimestampsPlugin from '../plugins/TimestampsPlugin'
import INewsletter from '../../types/blog/INewsletter'
import TagModel from './TagModel'

export const NewsletterSchema: Schema<INewsletter> = new Schema<INewsletter>({
  email: {
    type: String,
    required: [true, 'Email is required'],
  },
  interestTagIds: {
    type: [Schema.Types.ObjectId],
    ref: TagModel.modelName,
    default: [],
  },
})

const NewsletterModel = mongoose.model<INewsletter>('Newsletter', TimestampsPlugin(NewsletterSchema))
export default NewsletterModel
