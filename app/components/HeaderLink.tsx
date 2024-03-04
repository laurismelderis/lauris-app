import React from 'react'
import Link from 'next/link'

interface HeaderLinkProps {
  href: string
  children: string
}

const HeaderLink = ({ href, children }: HeaderLinkProps) => {
  return (
    <Link
      href={href}
      className='text-xl text-center font-extralight p-8 w-full hover:bg-gray-600'
    >
      {children}
    </Link>
  )
}

export default HeaderLink
