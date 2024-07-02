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
      className='w-full cursor-pointer bg-dark-green p-8 text-center text-xl font-extralight text-light-green hover:bg-green hover:text-dark-green focus:bg-dark-green focus:text-light-green'
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

export default HeaderLink
