import React from 'react'

type SecondsPointerProps = {
  id: React.ComponentProps<'div'>['id']
}

const SecondsPointer = ({ id }: SecondsPointerProps) => {
  return (
    <div className='w-full h-full flex items-center absolute' id={id}>
      <div className='w-1/12 h-1 bg-transparent origin-center'></div>
      <div className='w-5/12 h-1 bg-green origin-center' />
    </div>
  )
}

export default SecondsPointer
