import React from 'react'

type MinutesPointerProps = {
  id: React.ComponentProps<'div'>['id']
}

const MinutesPointer = ({ id }: MinutesPointerProps) => {
  return (
    <div className='absolute flex h-full w-full items-center' id={id}>
      <div className='h-[2px] w-2/12 origin-center bg-transparent lg:h-[3px]'></div>
      <div className='h-[2px] w-4/12 origin-center bg-green lg:h-[3px]' />
    </div>
  )
}

export default MinutesPointer
