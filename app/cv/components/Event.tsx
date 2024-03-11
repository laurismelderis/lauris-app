import React from 'react'
import styles from './Event.module.css'

interface EventProps {
  title?: string
  children?: React.JSX.Element | string
}

const Event = ({ title, children }: EventProps) => {
  return (
    <div className='container flex'>
      <div className={`flex flex-col ${styles.date}`}>
        <div>2000</div>
        <div className='text-lg font-light'>15th of September</div>
      </div>
      <div className={styles.circle} />
      <div className='container'>
        <div>{title}</div>
        <div className='text-2xl font-light'>{children}</div>
      </div>
    </div>
  )
}

export default Event
