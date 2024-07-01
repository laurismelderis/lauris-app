import React from 'react'

type HoursPointerProps = {
  id: React.ComponentProps<'div'>['id']
}

const HoursPointer = ({ id }: HoursPointerProps) => {
  return (
    <div className='absolute flex h-full w-full items-center' id={id}>
      <div className='h-[3px] w-3/12 origin-center bg-transparent lg:h-[4px]'></div>
      <div className='h-[3px] w-3/12 origin-center bg-green lg:h-[4px]' />
    </div>
  )
}

export default HoursPointer
