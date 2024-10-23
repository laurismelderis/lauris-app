import { addEvent, removeEvent, updateEvent } from '@/src/libs/cv'
import { NextRequest, NextResponse } from 'next/server'
import { auth } from '../_utils'
import { IEvent } from '@/src/models/Event'

export const POST = async (req: NextRequest) => {
  try {
    const { status, message } = auth(req)
    if (status !== 200) return NextResponse.json({ message }, { status })

    const body: IEvent = await req.json()

    const resp = await addEvent({ ...body })

    return NextResponse.json({ message: resp }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ message: String(error) }, { status: 500 })
  }
}

export const PUT = async (req: NextRequest) => {
  try {
    const { status, message } = auth(req)
    if (status !== 200) return NextResponse.json({ message }, { status })

    const body = await req.json()

    const { id, ...rest } = body

    const resp = await updateEvent(id, { ...rest })

    return NextResponse.json({ message: resp }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: String(error) }, { status: 500 })
  }
}

export const DELETE = async (req: NextRequest) => {
  try {
    const { status, message } = auth(req)
    if (status !== 200) return NextResponse.json({ message }, { status })

    const body = await req.json()

    const { id } = body

    const resp = await removeEvent(id)

    return NextResponse.json({ message: resp }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: String(error) }, { status: 500 })
  }
}
