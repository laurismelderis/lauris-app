'use client'

import React, { useState } from 'react'
import EventPreview from './EventPreview'
import EventFormDescription from './EventFormDescription'
import { Button, SelectInput, TextInput } from '../common'
import { getMonthNumber } from '@/src/utils/helpers'
import EditableDate from './EditableDate'
import { DescriptionTypes, IEvent } from '@/src/models/Event'

type EventFormClient = {
  day?: string | null
  month?: string
  year?: string
  title?: string
  description?: string
  descriptionType?: DescriptionTypes
  onSave?: (currentEvent: Omit<IEvent, '_id'>) => void
  onCancel?: () => void
}

const EventFormClient = (props: EventFormClient) => {
  const [title, setTitle] = useState(props.title || '')
  const [day, setDay] = useState(props.day)
  const [month, setMonth] = useState(props.month || '')
  const [year, setYear] = useState(props.year || '2000')

  const [description, setDescription] = useState(props.description || '')
  const [descriptionType, setDescriptionType] = useState(
    props.descriptionType || DescriptionTypes.Raw
  )

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value)
  const handleDescriptionChange = (value: string) => setDescription(value)
  const handleDescriptionTypeChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => setDescriptionType(e.target.value as DescriptionTypes)
  const handleDayChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setDay(e.target.value)
  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMonth(getMonthNumber(e.target.value).toString())
  }
  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setYear(e.target.value)

  const handleSave = () => {
    const { onSave } = props

    if (onSave) {
      onSave({
        day: day ? parseInt(day, 10) : null,
        month: parseInt(month, 10),
        year: parseInt(year, 10),
        title,
        description,
        descriptionType,
      })
    }
  }

  const handleCancel = () => {
    const { onCancel } = props
    if (onCancel) {
      onCancel()
    }
  }

  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='container flex flex-col md:flex-row min-h-20 text-3xl md:text-5xl gap-8'>
        <EditableDate
          day={day}
          month={month}
          year={year}
          onDayChange={handleDayChange}
          onMonthChange={handleMonthChange}
          onYearChange={handleYearChange}
        />
        <div className='container flex flex-col gap-4 pb-8 border-b-2 md:border-none border-light-blue'>
          <TextInput
            variant='transparent'
            placeholder='Title'
            value={title}
            onChange={handleTitleChange}
          />
          <EventFormDescription
            value={description}
            descriptionType={descriptionType}
            onChange={handleDescriptionChange}
          />
        </div>
      </div>
      <div className='flex gap-4 items-center w-full'>
        <label className='w-48 text-right border-b-2 border-transparent'>
          Select description type:
        </label>
        <SelectInput
          options={Object.values(DescriptionTypes)}
          value={descriptionType}
          onChange={handleDescriptionTypeChange}
          variant='transparent'
          name='descriptionType'
        />
      </div>
      <div>
        <EventPreview
          descriptionType={descriptionType}
          description={description}
        />
      </div>
      <div className='flex gap-4'>
        <Button type='primary' value='success' onClick={handleSave}>
          Save
        </Button>
        <Button type='error' value='failure' onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </div>
  )
}

export default EventFormClient
