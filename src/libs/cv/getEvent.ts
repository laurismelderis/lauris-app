import Event from '@/src/models/Event'
import connectMongoDb from '../mongodb'

type getEventProps = {
  value: string
  type: 'id' | 'slug'
}

const getEvent = async ({ value, type }: getEventProps) => {
  try {
    if (!type) {
      throw new Error('Missing property "type"')
    }

    await connectMongoDb()

    if (type === 'id') {
      const event = await Event.findById(value)
      return event
    }
    if (type === 'slug') {
      const event = await Event.findOne({ slug: value })
      return event
    }
    throw new Error('Wrong property "type". Possible values: "id" or "slug".')
  } catch (error) {
    throw new Error(String(error))
  }
}

export default getEvent
