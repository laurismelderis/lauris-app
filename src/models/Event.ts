import mongoose, { Schema } from 'mongoose'

export enum DescriptionTypes {
  Raw = 'RAW',
  Markdown = 'MARKDOWN',
  Html = 'HTML',
}

export interface IEvent {
  _id: string
  day?: number | null
  month: number
  year: number
  title: string
  description?: string
  descriptionType: DescriptionTypes
  isDraft: boolean
  slug: string
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
})

const Event = mongoose?.models?.Event || mongoose.model('Event', eventSchema)

export default Event
