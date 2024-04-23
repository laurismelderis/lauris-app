'use client'

import React, { useState } from 'react'
import TextInput from '../common/TextInput'
import TextareaInput from '../common/TextareaInput'
import Button from '../common/Button'
import EditableDate from './EditableDate'
import { getMonthNumber } from '@/src/utils/helpers'
import { updateEvent } from '@/src/libs/cv'
import { SelectInput } from '../common'

export enum DescriptionTypes {
  Raw = 'RAW',
  Markdown = 'MARKDOWN',
  Html = 'HTML',
}

interface EventFormProps {
  id: string
  day?: string
  month?: string
  year?: string
  title?: string
  description?: string
  descriptionType?: DescriptionTypes
}

const EventForm = (props: EventFormProps) => {
  const [title, setTitle] = useState(props.title || '')
  const [description, setDescription] = useState(props.description || '')
  const [descriptionType, setDescriptionType] = useState<DescriptionTypes>(
    props.descriptionType || DescriptionTypes.Markdown
  )
  const [day, setDay] = useState(props.day || '')
  const [month, setMonth] = useState(props.month || '')
  const [year, setYear] = useState(props.year || '')

  const handleTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value)
  const handleDescriptionChanged = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => setDescription(e.target.value)
  const handleYearChanged = (e: React.ChangeEvent<HTMLInputElement>) =>
    setYear(e.target.value)
  const handleMonthChanged = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setMonth(getMonthNumber(e.target.value).toString())
  const handleDayChanged = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDay(e.target.value)
  const handleDesriptionTypeChanged = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setDescriptionType(e.target.value as DescriptionTypes)
  }
  const handleUpdateEvent = () => {
    updateEvent(props.id, {
      _id: props.id,
      title,
      descriptionType,
      description,
      day: parseInt(day, 10),
      month: parseInt(month, 10),
      year: parseInt(year, 10),
    })
      .then((resp) => console.log(resp))
      .catch((err) => console.error(err))
  }

  return (
    <div className='flex flex-col items-center'>
      <div className='container flex flex-col md:flex-row min-h-20 text-3xl md:text-5xl gap-8'>
        <EditableDate
          id={props.id}
          day={day}
          month={month}
          year={year}
          onYearChange={handleYearChanged}
          onMonthChange={handleMonthChanged}
          onDayChange={handleDayChanged}
        />
        <div className='container flex flex-col gap-4 pb-8 border-b-2 md:border-none border-light-blue'>
          <TextInput
            variant='transparent'
            value={title}
            onChange={handleTitleChanged}
          />
          <TextareaInput
            variant='transparent'
            value={description}
            onChange={handleDescriptionChanged}
            className='text-base md:text-lg font-light'
            cacheMeasurements
          />
        </div>
      </div>
      <div className='flex gap-4 items-center w-full'>
        <label className='w-48 text-right border-b-2 border-transparent'>
          Select description type:
        </label>
        <SelectInput
          value={descriptionType}
          onChange={handleDesriptionTypeChanged}
          options={Object.values(DescriptionTypes)}
          variant='transparent'
        />
      </div>
      <div className='flex gap-4'>
        <Button type='primary' onClick={handleUpdateEvent}>
          Update event
        </Button>
        <Button type='error'>Delete event</Button>
      </div>
    </div>
  )
}

export default EventForm
