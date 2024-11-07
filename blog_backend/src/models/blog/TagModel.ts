import mongoose, { Schema } from 'mongoose'
import TimestampsPlugin from '../plugins/TimestampsPlugin'
import ITag from '../../types/blog/ITag'

export const TagSchema: Schema<ITag> = new Schema<ITag>({
  name: {
    type: String,
    unique: true,
    required: [true, 'Tag name is required'],
  },
})

const TagModel = mongoose.model<ITag>('Tag', TimestampsPlugin(TagSchema))
export default TagModel
