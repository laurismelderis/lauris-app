'use client'

import React, { useState } from 'react'
import EventForm from '../../(components)/EventForm'
import { useRouter } from 'next/navigation'
import { DescriptionTypes, IEvent } from '@/src/models/Event'
import Notification from '@/src/app/(components)/Notification'

const AddEventForm = () => {
  const router = useRouter()
  const [error, setError] = useState<string>()

  const handleSaveEvent = async (currentEvent: IEvent) => {
    try {
      const resp = await fetch('/api/events', {
        method: 'POST',
        body: JSON.stringify({ ...currentEvent }),
      })

      if (resp.status !== 201) {
        const body = await resp.json()
        throw new Error(
          `Failed to create new event. ${resp.status}: ${body.message}`
        )
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
        event={{
          _id: null,
          slug: '',
          descriptionType: DescriptionTypes.Raw,
          isDraft: true,
          month: 0,
          title: '',
          year: 2000,
          lastModified: null,
          createdAt: null,
        }}
        onSave={handleSaveEvent}
        onCancel={handleCancel}
      />
    </>
  )
}

export default AddEventForm
