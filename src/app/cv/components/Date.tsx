'use client'

import useOnScreen from '../../hooks/useOnScreen'
import React, { useEffect, useRef, useState } from 'react'
import styles from './Date.module.css'
import { getDatePostfix, getMonthName } from '../../helpers'

interface DateProps {
  day?: number
  month: number
  year: number
}

const Date = ({ day, month, year }: DateProps) => {
  const dateRef = useRef<HTMLDivElement>(null)
  const isVisible = useOnScreen(dateRef)
  const monthName = getMonthName(month - 1)
  const dayPrefix = getDatePostfix(day)

  const [pernamentVisible, setPernamentVisible] = useState(false)

  useEffect(() => {
    if (isVisible) {
      setPernamentVisible(true)
    }
  }, [isVisible])

  return (
    <div
      ref={dateRef}
      className={`flex flex-col text-white ${styles.date} ${pernamentVisible || isVisible ? styles.dateVisible : styles.dateHidden}`}
    >
      <div className='min-w-48'>{year}</div>
      <div className={`text-lg font-light ${styles.dateAndMonth}`}>
        {day ? `${day}${dayPrefix} of ${monthName}` : monthName}
      </div>
    </div>
  )
}

export default Date
