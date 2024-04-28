import Event, { IEvent } from '@/src/models/Event'
import connectMongoDb from '../mongodb'

export type AddEventProps = Omit<IEvent, '_id'>

const addEvent = async (event: AddEventProps) => {
  try {
    await connectMongoDb()

    const newEvent = new Event({
      ...event,
    })

    const error = newEvent.validateSync()
    if (error) throw new Error(String(error))

    await newEvent.save()
  } catch (error) {
    throw new Error(String(error))
  }
}

export default addEvent
