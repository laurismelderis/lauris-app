import Event from '@/src/models/Event'
import connectMongoDb from '../../../libs/mongodb'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async () => {
  try {
    await connectMongoDb()
    const events = await Event.find()

    return NextResponse.json(events)
  } catch (error) {
    return NextResponse.json({ messsage: String(error) }, { status: 500 })
  }
}

export const POST = async (request: NextRequest) => {
  const body = await request.json()

  try {
    await connectMongoDb()

    const event = new Event({
      ...body,
    })

    const error = event.validateSync()
    if (error) NextResponse.json({ messsage: error.message }, { status: 422 })

    await event.save()

    return NextResponse.json({ message: 'Event Created.' }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ messsage: String(error) }, { status: 500 })
  }
}

export const DELETE = async (request: NextRequest) => {
  const id = request.nextUrl.searchParams.get('id')

  try {
    await connectMongoDb()
    await Event.findByIdAndDelete(id)

    return NextResponse.json({ message: 'Event deleted' })
  } catch (error) {
    return NextResponse.json({ messsage: String(error) }, { status: 500 })
  }
}
