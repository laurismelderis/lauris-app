'use client'

import React, { useState } from 'react'
import EventPreview from './EventPreview'
import EventFormDescription from './EventFormDescription'
import { Button, SelectInput, TextInput } from '../../../components/common'
import { getMonthNumber } from '@/src/utils/helpers'
import EditableDate from './EditableDate'
import { DescriptionTypes, IEvent } from '@/src/models/Event'

type EventFormProps = Omit<IEvent, '_id'> & {
  onSave?: (currentEvent: Omit<IEvent, '_id'>) => void
  onCancel?: () => void
  onDelete?: () => void
}

const EventForm = (props: EventFormProps) => {
  const [slug, setSlug] = useState(props.slug)
  const [title, setTitle] = useState(props.title)
  const [day, setDay] = useState<string>(props?.day?.toString() || '1')
  const [month, setMonth] = useState<string>(props?.month?.toString())
  const [year, setYear] = useState<string>(props?.year?.toString())
  const [isDraft, setIsDraft] = useState(props.isDraft)

  const [description, setDescription] = useState(props.description)
  const [descriptionType, setDescriptionType] = useState(props.descriptionType)

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value)
  const handleDescriptionChange = (value: string) => setDescription(value)
  const handleDescriptionTypeChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => setDescriptionType(e.target.value as DescriptionTypes)
  const handleDayChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setDay(e.target.value)
  const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSlug(e.target.value)
  }
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
        slug,
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
      <div className='flex w-full flex-row items-start justify-start gap-4'>
        <label className='w-48 border-b-2 border-transparent text-right'>
          Provide slug:
        </label>
        <TextInput
          variant='transparent'
          placeholder='Slug'
          value={slug}
          onChange={handleSlugChange}
          immutable={props.slug.length !== 0}
        />
      </div>
      <div className='container flex min-h-20 flex-col gap-8 text-3xl md:flex-row md:text-5xl'>
        <EditableDate
          day={day}
          month={month}
          year={year}
          onDayChange={handleDayChange}
          onMonthChange={handleMonthChange}
          onYearChange={handleYearChange}
        />
        <div className='container flex flex-col gap-4 border-b-2 border-green pb-8 md:border-none'>
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
      <div className='flex w-full flex-col items-start justify-start gap-4'>
        <div className='flex w-full flex-row items-start justify-start gap-4'>
          <label className='w-48 border-b-2 border-transparent text-right'>
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
        <div className='flex w-full flex-row items-start justify-start gap-4'>
          <label className='w-48 border-b-2 border-transparent text-right'>
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
