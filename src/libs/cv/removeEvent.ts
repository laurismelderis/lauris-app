import Event from '@/src/models/Event'
import connectMongoDb from '../mongodb'

const removeEvent = async (id: string) => {
  try {
    await connectMongoDb()
    await Event.findByIdAndDelete(id)
  } catch (error) {
    throw new Error(String(error))
  }
}

export default removeEvent
