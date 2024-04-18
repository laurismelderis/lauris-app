'use client'

import React, { useEffect } from 'react'
import Event from './Event'
import { cvEntries } from '../../data/cvEntries'

const Timeline = () => (
  <div className='mx-auto w-4/6 relative flex flex-col gap-4'>
    {cvEntries.map(({ day, month, year, title, description }, index) => (
      <Event key={index} title={title} year={year} month={month} day={day}>
        {description}
      </Event>
    ))}
  </div>
)

export default Timeline
