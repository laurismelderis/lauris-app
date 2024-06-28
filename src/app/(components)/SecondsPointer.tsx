import React from 'react'

type SecondsPointerProps = {
  id: React.ComponentProps<'div'>['id']
}

const SecondsPointer = ({ id }: SecondsPointerProps) => {
  return (
    <div className='w-full h-full flex items-center absolute' id={id}>
      <div className='w-1/12 h-1 bg-transparent'></div>
      <div className='w-5/12 h-1 bg-green' />
    </div>
  )
}

export default SecondsPointer
