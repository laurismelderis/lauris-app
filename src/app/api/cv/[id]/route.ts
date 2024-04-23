import Event from '@/src/models/Event'
import connectMongoDb from '@/src/libs/mongodb'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (
  request: NextRequest,
  context: { params: { id: string } }
) => {
  const { id } = context.params

  try {
    await connectMongoDb()
    const event = await Event.findById(id)

    return NextResponse.json(event)
  } catch (error) {
    return NextResponse.json({ messsage: String(error) }, { status: 500 })
  }
}

export const PUT = async (
  request: NextRequest,
  context: { params: { id: string } }
) => {
  const { id } = context.params

  const body = await request.json()

  try {
    await connectMongoDb()

    const event = new Event({
      ...body,
    })
    const error = event.validateSync()

    if (error) NextResponse.json({ message: error.message }, { status: 422 })

    await Event.findByIdAndUpdate(id, { ...body })

    return NextResponse.json(event, { status: 200 })
  } catch (error) {
    return NextResponse.json({ messsage: String(error) }, { status: 500 })
  }
}
