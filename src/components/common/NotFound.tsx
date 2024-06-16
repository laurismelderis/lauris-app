import React from 'react'
import usePageHeightClassName from '@/src/hooks/usePageHeightClassName'

interface NotFoundProps {
  children?: React.ReactNode | string
}

const NotFound = ({
  children = '404 The page was not found!',
}: NotFoundProps) => {
  const heightClassName = usePageHeightClassName()

  return (
    <div
      className={`flex items-center text-center justify-center text-2xl p-8 ${heightClassName}`}
    >
      {children}
    </div>
  )
}

export default NotFound
