import mongoose, { Schema } from 'mongoose'
import TimestampsPlugin from '../plugins/TimestampsPlugin'
import INewsletter from '../../types/blog/INewsletter'

export const NewsletterSchema: Schema<INewsletter> = new Schema<INewsletter>({
  email: {
    type: String,
    unique: true,
    required: [true, 'Email is required'],
  },
  interestTagIds: {
    type: [String],
    default: [],
  },
})

const NewsletterModel = mongoose.model<INewsletter>('Newsletter', TimestampsPlugin(NewsletterSchema))
export default NewsletterModel
