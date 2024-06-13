'use client'

import React from 'react'
import EventFormClient from './EventFormClient'
import { DescriptionTypes, IEvent } from '@/src/models/Event'
import { useRouter } from 'next/navigation'

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

      await fetch('/api/events', {
        method: 'PUT',
        body: JSON.stringify(newEvent),
      })
      router.push('/cv')
      router.refresh()
    } catch (error) {
      console.log(error)
    }
  }

  const handleCancel = () => {
    router.push('/cv')
  }

  return (
    <EventFormClient
      day={day}
      month={month}
      year={year}
      title={title}
      description={description}
      descriptionType={descriptionType}
      onSave={handleUpdateEvent}
      onCancel={handleCancel}
    />
  )
}

export default EditEventForm
