import Event from '@/src/models/Event'
import connectMongoDb from '../mongodb'

const getEvent = async (id: string) => {
  try {
    await connectMongoDb()

    const event = await Event.findById(id)
    return event
  } catch (error) {
    throw new Error(String(error))
  }
}

export default getEvent
