import mongoose, { Schema } from 'mongoose'

export enum DescriptionTypes {
  Raw = 'RAW',
  Markdown = 'MARKDOWN',
  Html = 'HTML',
}

export interface IEvent {
  _id: string
  day?: number
  month: number
  year: number
  title: string
  description?: string
  descriptionType: DescriptionTypes
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
})

const Event = mongoose.models.Event || mongoose.model('Event', eventSchema)

export default Event
