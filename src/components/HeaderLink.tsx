'use client'

import React from 'react'
import Link from 'next/link'

interface HeaderLinkProps {
  href?: string
  children: string
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

const HeaderLink = ({ href = '', children, onClick }: HeaderLinkProps) => {
  return (
    <Link
      href={href}
      className='text-xl text-center cursor-pointer font-extralight text-light-green p-8 w-full hover:bg-green hover:text-dark-green'
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

export default HeaderLink
