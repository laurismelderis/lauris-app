'use client'

import React from 'react'
import HeaderLink from './HeaderLink'
import ProgressBar from './common/ProgressBar'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import Logout from './Logout'
import { SignedIn } from '@clerk/nextjs'

const Header = () => {
  const loading = useSelector((state: RootState) => state.global.loading)

  return (
    <div className='sticky top-0 z-50 w-full bg-dark-green'>
      <SignedIn>
        <div className='flex justify-between'>
          <Logout />
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
