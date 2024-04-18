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
      className='text-xl text-center cursor-pointer font-extralight text-light-blue p-8 w-full hover:bg-gray'
    >
      {children}
    </Link>
  )
}

export default HeaderLink
