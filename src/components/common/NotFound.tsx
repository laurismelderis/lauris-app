'use client'

import React from 'react'

interface NotFoundProps {
  children?: React.ReactNode | string
}

const NotFound = ({
  children = '404 The page was not found!',
}: NotFoundProps) => {
  return (
    <div className='flex items-center text-center justify-center text-2xl min-h-[calc(100vh-100px)] p-8'>
      {children}
    </div>
  )
}

export default NotFound
