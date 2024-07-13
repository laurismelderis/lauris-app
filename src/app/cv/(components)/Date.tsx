'use client'

import useOnScreen from '../../../hooks/useOnScreen'
import React, { useEffect, useRef, useState } from 'react'
import { getDatePostfix, getMonthName } from '../../../utils/helpers'
import { IconPen } from '../../../components/icons'
import { useRouter } from 'next/navigation'
import { Protect } from '@clerk/nextjs'

interface DateProps {
  slug: string
  day?: number | null
  month: number
  year: number
}

const Date = ({ slug, day, month, year }: DateProps) => {
  const router = useRouter()

  const dateRef = useRef<HTMLDivElement>(null)
  const isVisible = useOnScreen(dateRef)
  const monthName = getMonthName(month)
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
      className={`flex flex-col text-light-green transition-all duration-[2s] ${
        pernamentVisible || isVisible
          ? 'translate-x-0 opacity-100'
          : 'translate-x-[-200px] opacity-0'
      } `}
    >
      <div className='flex items-center justify-start'>
        <div className='min-w-32 text-green'>{year}</div>
        <Protect role='org:admin'>
          <div onClick={() => router.push(`/cv/edit/${slug}`)}>
            <IconPen className='cursor-pointer hover:fill-light-green' />
          </div>
        </Protect>
      </div>
      <div className={`text-lg font-light`}>
        {day ? `${day}${dayPrefix} of ${monthName}` : monthName}
      </div>
    </div>
  )
}

export default Date
