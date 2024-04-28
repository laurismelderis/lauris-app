import React from 'react'
import { getMonthName, months } from '@/src/utils/helpers'
import { SelectInput, TextInput } from '../common'
import _ from 'lodash'

interface EditableDateProps {
  day?: string | null
  month: string
  year: string
}

const EditableDate = ({ day, month, year }: EditableDateProps) => {
  const monthName = getMonthName(parseInt(month, 10))

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
          placeholder='Year'
        />
      </div>
      <div
        className={`flex items-center justify-between text-lg font-light w-full`}
      >
        <div className='flex items-center'>
          <SelectInput
            variant='transparent'
            name='day'
            defaultValue={day || ''}
            options={[''].concat(
              _.range(31).map((num: number) => (num + 1).toString())
            )}
          />
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
