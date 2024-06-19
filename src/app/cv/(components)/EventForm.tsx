'use client'

import React, { useState } from 'react'
import EventPreview from './EventPreview'
import EventFormDescription from './EventFormDescription'
import { Button, SelectInput, TextInput } from '../../../components/common'
import { getMonthNumber } from '@/src/utils/helpers'
import EditableDate from './EditableDate'
import { DescriptionTypes, IEvent } from '@/src/models/Event'

type EventForm = {
  day?: string | null
  month?: string
  year?: string
  title?: string
  description?: string
  descriptionType?: DescriptionTypes
  onSave?: (currentEvent: Omit<IEvent, '_id'>) => void
  onCancel?: () => void
  onDelete?: () => void
  isDraft?: boolean
}

const EventForm = (props: EventForm) => {
  const [title, setTitle] = useState(props.title || '')
  const [day, setDay] = useState(props.day)
  const [month, setMonth] = useState(props.month || '0')
  const [year, setYear] = useState(props.year || '2000')
  const [isDraft, setIsDraft] = useState(props.isDraft || false)

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
  const handleIsDraftChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setIsDraft(e.target.value === 'Yes' ? true : false)

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
        isDraft,
      })
    }
  }

  const handleDelete = () => {
    const { onDelete } = props

    if (onDelete) {
      onDelete()
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
        <div className='container flex flex-col gap-4 pb-8 border-b-2 md:border-none border-green'>
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
      <div className='w-full flex flex-col items-start justify-start gap-4'>
        <div className='flex flex-row gap-4 items-start justify-start w-full'>
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
        <div className='flex flex-row gap-4 items-start justify-start w-full'>
          <label className='w-48 text-right border-b-2 border-transparent'>
            Is draft:
          </label>
          <SelectInput
            options={['Yes', 'No']}
            value={isDraft ? 'Yes' : 'No'}
            onChange={handleIsDraftChange}
            variant='transparent'
            name='isDraft'
          />
        </div>
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
        {props?.onDelete ? (
          <Button type='error' value='failure' onClick={handleDelete}>
            Delete
          </Button>
        ) : null}
        <Button type='secondary' value='cancel' onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </div>
  )
}

export default EventForm
