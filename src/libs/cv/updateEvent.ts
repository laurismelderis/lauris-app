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

    if (!id) throw new Error('Missing event id')

    const response = await Event.findByIdAndUpdate(id, {
      ...event,
    })

    return response
  } catch (error) {
    throw new Error(String(error))
  }
}

export default updateEvent
