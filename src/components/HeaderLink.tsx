'use client'

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
      className='text-xl text-center cursor-pointer font-extralight text-light-green p-8 w-full hover:bg-green hover:text-dark-green'
    >
      {children}
    </Link>
  )
}

export default HeaderLink
