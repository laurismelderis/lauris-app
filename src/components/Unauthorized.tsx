import React from 'react'
import usePageHeightClassName from '../hooks/usePageHeightClassName'

const Unauthorized = () => {
  const heightClassName = usePageHeightClassName()

  return (
    <div
      className={`flex flex-col justify-center items-center text-green ${heightClassName}`}
    >
      Unauthorized
    </div>
  )
}

export default Unauthorized
