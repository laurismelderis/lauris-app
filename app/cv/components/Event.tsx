'use client'

import React from 'react'
import styles from './Event.module.css'
import Date from './Date'

interface EventProps {
  title?: string
  children?: React.JSX.Element | string
  day?: number
  month: number
  year: number
}

const Event = ({ title, children, day, month, year }: EventProps) => (
  <div className='container flex min-h-20 mb-8'>
    <Date day={day} month={month} year={year} />
    <div className='container'>
      <div>{title}</div>
      <div className='text-2xl font-light'>{children}</div>
    </div>
  </div>
)

export default Event
