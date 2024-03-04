import React from 'react'
import HeaderLink from './HeaderLink'

const Header = () => {
  return (
    <div className='w-full flex justify-around bg-black'>
      <HeaderLink href='#'>One</HeaderLink>
      <HeaderLink href='#'>CV</HeaderLink>
      <HeaderLink href='#'>Three</HeaderLink>
    </div>
  )
}

export default Header
