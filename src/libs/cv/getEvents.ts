import Event from '@/src/models/Event'
import connectMongoDb from '../mongodb'

const getEvents = async () => {
  try {
    await connectMongoDb()
    const events = await Event.find()

    return events
  } catch (error) {
    throw new Error(String(error))
  }
}

export default getEvents
