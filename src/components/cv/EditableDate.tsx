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
}

const EditableDate = ({ id, day, month, year }: EditableDateProps) => {
  const monthName = getMonthName(parseInt(month, 10) - 1)
  const dayPrefix = getDatePostfix(parseInt(day || '0', 10))

  return (
    <div
      className={`
    flex flex-col text-white transition-all duration-[2s] 
    ${'opacity-100 translate-x-0'}
  `}
    >
      <div className='flex items-center justify-start'>
        <TextInput
          variant='transparent'
          type='number'
          defaultValue={year}
          className='w-48'
          name='year'
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
              defaultValue={day}
              className='w-5 text-left'
              name='day'
            />
          </span>
          {day ? <span> {dayPrefix} of </span> : monthName}
        </div>
        <SelectInput
          variant='transparent'
          defaultValue={monthName}
          options={months}
          className='grow'
          name='month'
        />
      </div>
    </div>
  )
}

export default EditableDate
