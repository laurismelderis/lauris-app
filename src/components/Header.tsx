'use client'

import React from 'react'
import HeaderLink from './HeaderLink'
import ProgressBar from './common/ProgressBar'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

const Header = () => {
  const loading = useSelector((state: RootState) => state.global.loading)

  return (
    <div className='w-full bg-dark-gray sticky top-0 z-50'>
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
