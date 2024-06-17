'use client'

import React from 'react'
import HeaderLink from './HeaderLink'
import ProgressBar from './common/ProgressBar'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import Logout from './Logout'
import { SignedIn, useAuth } from '@clerk/nextjs'
import Todo from './Todo'

const Header = () => {
  const loading = useSelector((state: RootState) => state.global.loading)
  const { orgRole } = useAuth()

  return (
    <div className='w-full bg-dark-green sticky top-0 z-50'>
      <SignedIn>
        <div className='flex justify-between'>
          <Logout />
          {orgRole === 'org:admin' ? <Todo /> : null}
        </div>
      </SignedIn>
      <div className='flex justify-around'>
        <HeaderLink href='/'>Home</HeaderLink>
        <HeaderLink href='/cv'>CV</HeaderLink>
        <HeaderLink href='#'>Other</HeaderLink>
      </div>
      <ProgressBar loading={loading} />
    </div>
  )
}

export default Header
