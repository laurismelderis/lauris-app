import { updateEvent } from '@/src/libs/cv'
import { NextRequest, NextResponse } from 'next/server'

export const PUT = async (req: NextRequest) => {
  try {
    const body = await req.json()

    const { id, ...rest } = body

    const resp = await updateEvent(id, { ...rest })

    return NextResponse.json({ message: resp }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: String(error) }, { status: 500 })
  }
}
