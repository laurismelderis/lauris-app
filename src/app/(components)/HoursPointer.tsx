import React from 'react'

type HoursPointerProps = {
  id: React.ComponentProps<'div'>['id']
}

const HoursPointer = ({ id }: HoursPointerProps) => {
  return (
    <div className='w-full h-full flex items-center absolute' id={id}>
      <div className='w-3/12 h-1 bg-transparent origin-center'></div>
      <div className='w-3/12 h-1 bg-green origin-center' />
    </div>
  )
}

export default HoursPointer
