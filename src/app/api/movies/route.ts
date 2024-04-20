import Movie from '../../../models/Movie'
import { NextRequest, NextResponse } from 'next/server'

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json()
    console.log(body)
    const movieData = body

    await Movie.create(movieData)

    return NextResponse.json({ message: 'Ticket Created' }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ message: 'Error', error }, { status: 500 })
  }
}
