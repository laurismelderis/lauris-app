import Event, { IEvent } from '@/src/models/Event'
import connectMongoDb from '../mongodb'

export type UpdateEventProps = Omit<IEvent, '_id'>

const updateEvent = async (id: string, event: UpdateEventProps) => {
  try {
    await connectMongoDb()

    const newEvent = new Event({
      ...event,
    })

    const error = newEvent.validateSync()

    if (error) throw new Error(String(error))

    await Event.findByIdAndUpdate(id, {
      ...event,
    })
  } catch (error) {
    throw new Error(String(error))
  }
}

export default updateEvent