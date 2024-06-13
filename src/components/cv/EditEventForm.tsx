'use client'

import React, { useState } from 'react'
import EventForm from './EventForm'
import { DescriptionTypes, IEvent } from '@/src/models/Event'
import { useRouter } from 'next/navigation'
import Notification from '../common/Notification'

type EditEventFormProps = {
  id: string
  day?: string | null
  month?: string
  year?: string
  title?: string
  description?: string
  descriptionType?: DescriptionTypes
}

const EditEventForm = ({
  id,
  day,
  month,
  year = '2000',
  title,
  description,
  descriptionType,
}: EditEventFormProps) => {
  const router = useRouter()
  const [error, setError] = useState<string>()

  const handleUpdateEvent = async (currentEvent: Omit<IEvent, '_id'>) => {
    try {
      const newEvent = {
        id,
        title: currentEvent.title,
        descriptionType: currentEvent.descriptionType,
        description: currentEvent.description,
        month: currentEvent.month,
        year: currentEvent.year,
        day: currentEvent.day,
      }

      const resp = await fetch('/api/events', {
        method: 'PUT',
        body: JSON.stringify(newEvent),
      }).then((r) => r.json())

      if (resp.status !== 200) {
        throw new Error(`Failed to update. ${resp.status}: ${resp.message}`)
      }

      setError('')

      router.push('/cv')
      router.refresh()
    } catch (error) {
      setError(String(error))
    }
  }

  const handleDelete = async () => {
    try {
      const resp = await fetch('/api/events', {
        method: 'DELETE',
        body: JSON.stringify({ id }),
      }).then((r) => r.json())

      if (resp.status !== 200) {
        throw new Error(`Failed to delete. ${resp.status}: ${resp.message}`)
      }

      setError('')

      router.push('/cv')
      router.refresh()
    } catch (error) {
      setError(String(error))
    }
  }

  const handleCancel = () => {
    router.push('/cv')
  }

  return (
    <>
      <Notification error={error} />
      <EventForm
        day={day}
        month={month}
        year={year}
        title={title}
        description={description}
        descriptionType={descriptionType}
        onSave={handleUpdateEvent}
        onCancel={handleCancel}
        onDelete={handleDelete}
      />
    </>
  )
}

export default EditEventForm
