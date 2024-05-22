'use client'

import useOnScreen from '../../hooks/useOnScreen'
import React, { useEffect, useRef, useState } from 'react'
import { getDatePostfix, getMonthName } from '../../utils/helpers'
import { IconPen } from '../icons'
import Link from 'next/link'
import { Environments } from '@/src/utils/constants'

interface DateProps {
  id: string
  day?: number | null
  month: number
  year: number
}

const Date = ({ id, day, month, year }: DateProps) => {
  const dateRef = useRef<HTMLDivElement>(null)
  const isVisible = useOnScreen(dateRef)
  const monthName = getMonthName(month)
  const dayPrefix = getDatePostfix(day)

  const [pernamentVisible, setPernamentVisible] = useState(false)
  console.log(process.env.NODE_ENV)

  useEffect(() => {
    if (isVisible) {
      setPernamentVisible(true)
    }
  }, [isVisible])

  return (
    <div
      ref={dateRef}
      className={`
        flex flex-col text-white transition-all duration-[2s] 
        ${
          pernamentVisible || isVisible
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-[-200px]'
        }
      `}
    >
      <div className='flex items-center justify-start'>
        <div className='min-w-32'>{year}</div>
        {process.env.NODE_ENV === Environments.DEVELOPMENT ? (
          <Link href={`/cv/${id}`}>
            <IconPen className='cursor-pointer hover:fill-white' />
          </Link>
        ) : null}
      </div>
      <div className={`text-lg font-light`}>
        {day ? `${day}${dayPrefix} of ${monthName}` : monthName}
      </div>
    </div>
  )
}

export default Date
