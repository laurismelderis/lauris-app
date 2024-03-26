'use client'

import React, { useEffect } from 'react'
import Event from './Event'

const Timeline = () => {
  const onScroll = (e: Event) => {
    // console.log(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <>
      <div className='mx-auto px-8 w-4/6 text-5xl border-l-8 relative'>
        <Event title='Born date' date='15-09-2000'>
          Lauris was born at 2000 15th of September
        </Event>
        <Event title='Secondary school graduation' date='15-09-2000'>
          Graduated at 2018 of May, Rigas 84th secondary school
        </Event>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => (
          <Event title={id.toString()} key={id} date='15-09-2000'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
            doloribus voluptatibus corporis necessitatibus reiciendis tempora
            dolor non soluta eum. Cupiditate, alias in itaque deleniti ut
            asperiores molestiae ea id corporis.
          </Event>
        ))}
        <Event title='Secondary school graduation' date='15-09-2000'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
          doloribus voluptatibus corporis necessitatibus reiciendis tempora
          dolor non soluta eum. Cupiditate, alias in itaque deleniti ut
          asperiores molestiae ea id corporis.
        </Event>
      </div>
    </>
  )
}

export default Timeline
