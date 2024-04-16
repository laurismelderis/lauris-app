'use client'

import React, { useEffect } from 'react'
import Event from './Event'
import { cvEntries } from '../../data/cvEntries'

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
      <div className='mx-auto px-8 w-4/6 text-5xl relative'>
        {cvEntries.map(({ day, month, year, title, description }, index) => (
          <Event key={index} title={title} year={year} month={month} day={day}>
            {description}
          </Event>
        ))}
      </div>
    </>
  )
}

export default Timeline
