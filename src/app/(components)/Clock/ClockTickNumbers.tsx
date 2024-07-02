import React from 'react'
import './ClockTickNumbers.css'

const ClockTickNumbers = () => {
  return (
    <div className='h-[85%] w-[85%] lg:h-[90%] lg:w-[90%]'>
      <div
        className={`relative h-full w-full [&_*]:absolute [&_*]:-translate-x-1/2 [&_*]:-translate-y-1/2 [&_*]:text-center [&_*]:text-sm [&_*]:font-light`}
      >
        <div className='deg60'>1</div>
        <div className='deg30'>2</div>
        <div className='deg0'>3</div>
        <div className='deg330'>4</div>
        <div className='deg300'>5</div>
        <div className='deg270'>6</div>
        <div className='deg240'>7</div>
        <div className='deg210'>8</div>
        <div className='deg180'>9</div>
        <div className='deg150'>10</div>
        <div className='deg120'>11</div>
        <div className='deg90'>12</div>
      </div>
    </div>
  )
}

export default ClockTickNumbers
