'use client'

import React, { useState } from 'react'
import Event from '../Event'
import EventFormDescription from './EventFormDescription'
import { Button, SelectInput, TextInput } from '@/src/components/common'
import { getMonthNumber } from '@/src/utils/helpers'
import EditableDate from './EditableDate'
import { DescriptionTypes, IEvent } from '@/src/models/Event'

type EventFormProps = {
  event: IEvent
  onSave?: (currentEvent: IEvent) => void
  onCancel?: () => void
  onDelete?: () => void
}

const EventForm = ({ event, onSave, onCancel, onDelete }: EventFormProps) => {
  const [slug, setSlug] = useState(event.slug)
  const [title, setTitle] = useState(event.title)
  const [day, setDay] = useState<string>(event?.day?.toString() || '1')
  const [month, setMonth] = useState<string>(event?.month?.toString())
  const [year, setYear] = useState<string>(event?.year?.toString())
  const [isDraft, setIsDraft] = useState(event.isDraft)

  const [description, setDescription] = useState(event.description)
  const [descriptionType, setDescriptionType] = useState(event.descriptionType)

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
    if (onSave) {
      onSave({
        ...event,
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
    if (onDelete) {
      onDelete()
    }
  }

  const handleCancel = () => {
    if (onCancel) {
      onCancel()
    }
  }

  return (
    <div className='flex flex-col items-center gap-8'>
      <div className='flex w-full flex-row items-start justify-start gap-4'>
        <label className='w-48 border-b-2 border-transparent text-right'>
          Provide slug:
        </label>
        <TextInput
          variant='transparent'
          placeholder='Slug'
          value={slug}
          onChange={handleSlugChange}
          immutable={event.slug.length !== 0}
        />
      </div>
      <div className='flex min-h-20 w-full flex-col gap-8 text-3xl md:flex-row md:text-5xl'>
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
      <div className='w-full border-b-4 pb-4 text-3xl text-light-green md:text-5xl'>
        Preview
      </div>
      <div className='w-full'>
        <Event
          showReadMore={false}
          shortDescription={false}
          event={{
            ...event,
            _id: null,
            isDraft: false,
            descriptionType,
            description,
            month: parseInt(month, 10),
            title,
            year: parseInt(year, 10),
            slug,
          }}
        />
      </div>
      <div className='flex gap-4'>
        <Button type='primary' value='success' onClick={handleSave}>
          Save
        </Button>
        {onDelete ? (
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
