'use client'

import { useClerk } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import React from 'react'
import HeaderLink from './HeaderLink'

const Logout = () => {
  const pathname = usePathname()
  const { signOut } = useClerk()

  const handleSignout = () => signOut({ redirectUrl: pathname })

  return <HeaderLink onClick={handleSignout}>Log out</HeaderLink>
}

export default Logout
