'use client'

import React from 'react'
import HeaderLink from './HeaderLink'

const Header = () => {
  return (
    <div className='w-full flex justify-around bg-dark-gray sticky top-0 z-50 border-b-2 border-light-blue'>
      <HeaderLink href='/'>Home</HeaderLink>
      <HeaderLink href='/cv'>CV</HeaderLink>
      <HeaderLink href='#'>Other</HeaderLink>
    </div>
  )
}

export default Header
