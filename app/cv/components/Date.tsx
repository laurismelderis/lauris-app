'use client'

import useOnScreen from '@/app/hooks/useOnScreen'
import React, { useEffect, useRef, useState } from 'react'
import styles from './Date.module.css'

interface DateProps {
  day?: number
  month: number
  year: number
}

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const datePostfixes = ['st', 'nd', 'rd', 'th']

const Date = ({ day, month, year }: DateProps) => {
  const dateRef = useRef<HTMLDivElement>(null)
  const isVisible = useOnScreen(dateRef)

  const [pernamentVisible, setPernamentVisible] = useState(false)

  useEffect(() => {
    if (isVisible) {
      setPernamentVisible(true)
    }
  }, [isVisible])

  return (
    <div
      ref={dateRef}
      className={`flex flex-col ${styles.date} ${pernamentVisible || isVisible ? styles.dateVisible : styles.dateHidden}`}
    >
      <div>{year}</div>
      <div className={`text-lg font-light ${styles.dateAndMonth}`}>
        {day
          ? `${day}${datePostfixes[(day - 1) % 10 < 4 ? (day - 1) % 10 : 3]} of ${months[month + 1]}`
          : months[month + 1]}
      </div>
    </div>
  )
}

export default Date
