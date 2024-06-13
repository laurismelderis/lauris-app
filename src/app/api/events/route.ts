import { addEvent, removeEvent, updateEvent } from '@/src/libs/cv'
import { getAuth } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server'

type Response = {
  message: string
  status: number
}

const auth = (req: NextRequest): Response => {
  const { userId, orgRole } = getAuth(req)

  if (!userId) {
    return {
      message: 'Not authorized',
      status: 401,
    }
  }

  if (orgRole && orgRole === 'org:admin') {
    return {
      message: 'Success',
      status: 200,
    }
  }

  return {
    message: 'Forbidden',
    status: 403,
  }
}

export const POST = async (req: NextRequest) => {
  try {
    const { status, message } = auth(req)
    if (status !== 200) return NextResponse.json({ message }, { status })

    const body = await req.json()

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
