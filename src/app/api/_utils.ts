import { getAuth } from '@clerk/nextjs/server'
import { NextRequest } from 'next/server'

export type Response = {
  message: string
  status: number
}

export const auth = (req: NextRequest): Response => {
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
