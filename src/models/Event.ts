import mongoose, { Schema } from 'mongoose'

export enum DescriptionTypes {
  Raw = 'RAW',
  Markdown = 'MARKDOWN',
  Html = 'HTML',
}

export interface IEvent {
  _id: string | null
  day?: number | null
  month: number
  year: number
  title: string
  description?: string
  descriptionType: DescriptionTypes
  isDraft: boolean
  slug: string
  createdAt: Date | null
  lastModified: Date | null
}

const eventSchema = new Schema<IEvent>({
  day: Number,
  month: { type: Number, required: true },
  year: { type: Number, required: true },
  title: { type: String, required: true },
  description: String,
  descriptionType: {
    type: String,
    enum: ['RAW', 'MARKDOWN', 'HTML'],
    default: DescriptionTypes.Markdown,
  },
  isDraft: {
    type: Boolean,
    default: false,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    immutable: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
  lastModified: {
    type: Date,
    default: Date.now,
  },
})

const Event = mongoose?.models?.Event || mongoose.model('Event', eventSchema)

export default Event
