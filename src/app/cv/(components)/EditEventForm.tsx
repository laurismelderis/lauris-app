'use client'

import React, { useState } from 'react'
import EventForm from './EventForm'
import { DescriptionTypes, IEvent } from '@/src/models/Event'
import { useRouter } from 'next/navigation'
import Notification from '../../../components/common/Notification'

type EditEventFormProps = {
  id: string
  day?: string | null
  month?: string
  year?: string
  title?: string
  description?: string
  descriptionType?: DescriptionTypes
  isDraft?: boolean
}

const EditEventForm = ({
  id,
  day,
  month,
  year = '2000',
  title,
  description,
  descriptionType,
  isDraft,
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
        isDraft: currentEvent.isDraft,
      }

      const resp = await fetch('/api/events', {
        method: 'PUT',
        body: JSON.stringify(newEvent),
      })

      if (resp.status !== 200) {
        const body = await resp.json()
        throw new Error(`Failed to update. ${resp.status}: ${body.message}`)
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
      })

      if (resp.status !== 200) {
        const body = await resp.json()
        throw new Error(`Failed to update. ${resp.status}: ${body.message}`)
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
        isDraft={isDraft}
      />
    </>
  )
}

export default EditEventForm
