'use client'

import React, { useEffect, useRef, useState } from 'react'
import useOnScreen from '@/src/hooks/useOnScreen'
import { getDatePostfix, getMonthName, months } from '@/src/utils/helpers'
import { SelectInput, TextInput } from '../common'

interface EditableDateProps {
  id: string
  day?: string
  month: string
  year: string
  onDayChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onMonthChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  onYearChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const EditableDate = ({
  id,
  day,
  month,
  year,
  onDayChange,
  onMonthChange,
  onYearChange,
}: EditableDateProps) => {
  const dateRef = useRef<HTMLDivElement>(null)
  const isVisible = useOnScreen(dateRef)
  const monthName = getMonthName(parseInt(month, 10) - 1)
  const dayPrefix = getDatePostfix(parseInt(day || '0', 10))

  const [pernamentVisible, setPernamentVisible] = useState(false)

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
        <TextInput
          variant='transparent'
          type='number'
          value={year}
          onChange={onYearChange}
          className='w-48'
        />
      </div>
      <div
        className={`flex items-center justify-between text-lg font-light w-full`}
      >
        <div className='flex items-center'>
          <span>
            <TextInput
              variant='transparent'
              type='number'
              value={day}
              onChange={onDayChange}
              className='w-5 text-left'
            />
          </span>
          {day ? <span> {dayPrefix} of </span> : monthName}
        </div>
        <SelectInput
          variant='transparent'
          value={monthName}
          options={months}
          onChange={onMonthChange}
          className='grow'
        />
      </div>
    </div>
  )
}

export default EditableDate
