import React from 'react'
import Unauthorized from '@/src/components/Unauthorized'
import { auth } from '@clerk/nextjs/server'

const withAuth = (Component: any) => {
  return function WithAuth(props: any) {
    const { has } = auth()

    const isAdmin = has({ role: 'org:admin' })

    if (!isAdmin) return <Unauthorized />

    return <Component {...props} />
  }
}

export default withAuth
