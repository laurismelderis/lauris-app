'use client'

import { useClerk } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import React from 'react'

const Logout = () => {
  const pathname = usePathname()
  const { signOut } = useClerk()

  const handleSignout = () => signOut({ redirectUrl: pathname })

  return (
    <button className='w-full p-4 hover:bg-green' onClick={handleSignout}>
      Log out
    </button>
  )
}

export default Logout
