'use client'

import React from 'react'
import { getMonthName, months } from '@/src/utils/helpers'
import { SelectInput, TextInput } from '../common'
import _ from 'lodash'

interface EditableDateProps {
  day?: string | null
  month: string
  year: string
  onDayChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  onMonthChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  onYearChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const EditableDate = ({
  day,
  month,
  year,
  onDayChange,
  onMonthChange,
  onYearChange,
}: EditableDateProps) => {
  const monthName = getMonthName(parseInt(month, 10))

  return (
    <div
      className={`
    flex flex-col text-light-green transition-all duration-[2s] 
    ${'opacity-100 translate-x-0'}
  `}
    >
      <div className='flex items-center justify-start'>
        <TextInput
          variant='transparent'
          type='number'
          value={year}
          className='w-48'
          name='year'
          placeholder='Year'
          onChange={onYearChange}
        />
      </div>
      <div
        className={`flex items-center justify-between text-lg font-light w-full`}
      >
        <div className='flex items-center'>
          <SelectInput
            variant='transparent'
            name='day'
            value={day || ''}
            onChange={onDayChange}
            options={[''].concat(
              _.range(31).map((num: number) => (num + 1).toString())
            )}
          />
        </div>
        <SelectInput
          variant='transparent'
          value={monthName}
          options={months}
          className='grow'
          name='month'
          onChange={onMonthChange}
        />
      </div>
    </div>
  )
}

export default EditableDate
