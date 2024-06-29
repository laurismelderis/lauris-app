import React from 'react'

type MinutesPointerProps = {
  id: React.ComponentProps<'div'>['id']
}

const MinutesPointer = ({ id }: MinutesPointerProps) => {
  return (
    <div className='w-full h-full flex items-center absolute' id={id}>
      <div className='w-2/12 h-1 bg-transparent origin-center'></div>
      <div className='w-4/12 h-1 bg-green origin-center' />
    </div>
  )
}

export default MinutesPointer
