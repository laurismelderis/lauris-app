import React from 'react'
import HeaderLink from './HeaderLink'

const Header = () => {
  return (
    <div className='w-full flex justify-around bg-black fixed'>
      <HeaderLink href='/'>Home</HeaderLink>
      <HeaderLink href='/cv'>CV</HeaderLink>
      <HeaderLink href='#'>Other</HeaderLink>
    </div>
  )
}

export default Header
