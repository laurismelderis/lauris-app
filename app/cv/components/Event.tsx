'use client'

import React from 'react'
import styles from './Event.module.css'
import Date from './Date'

interface EventProps {
  title?: string
  children?: React.JSX.Element | string
  date: string
}

const Event = ({ title, children, date }: EventProps) => {
  const [day, month, year] = date.split('-')

  return (
    <div className='container flex'>
      <Date day={parseInt(day)} month={parseInt(month)} year={parseInt(year)} />
      <div className={styles.circle} />
      <div className='container'>
        <div>{title}</div>
        <div className='text-2xl font-light'>{children}</div>
      </div>
    </div>
  )
}

export default Event
