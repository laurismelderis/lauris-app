import React from 'react'

type SecondsPointerProps = {
  id: React.ComponentProps<'div'>['id']
}

const SecondsPointer = ({ id }: SecondsPointerProps) => {
  return (
    <div className='absolute flex h-full w-full items-center' id={id}>
      <div className='h-[1px] w-1/12 origin-center bg-transparent lg:h-[2px]'></div>
      <div className='h-[1px] w-5/12 origin-center bg-green lg:h-[2px]' />
    </div>
  )
}

export default SecondsPointer
