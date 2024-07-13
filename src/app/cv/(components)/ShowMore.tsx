'use client'

import React from 'react'
import Link from 'next/link'

type ShowMoreProps = {
  href: string
}

const ShowMore = ({ href }: ShowMoreProps) => (
  <Link href={href} className='cursor-pointer text-base underline'>
    Read more
  </Link>
)

export default ShowMore
