import { NextRequest, NextResponse } from 'next/server'
import { auth } from '../_utils'
import { addTodo, removeTodo, updateTodo } from '@/src/libs/todo'

export const POST = async (req: NextRequest) => {
  try {
    const { status, message } = auth(req)
    if (status !== 200) return NextResponse.json({ message }, { status })

    const body = await req.json()

    const resp = await addTodo({ ...body })

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

    const resp = await updateTodo(id, { ...rest })

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

    const resp = await removeTodo(id)

    return NextResponse.json({ message: resp }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: String(error) }, { status: 500 })
  }
}
