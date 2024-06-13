'use client'

import React, { useState } from 'react'
import EventForm from './EventForm'
import { useRouter } from 'next/navigation'
import { IEvent } from '@/src/models/Event'
import Notification from '../common/Notification'

const AddEventForm = () => {
  const router = useRouter()
  const [error, setError] = useState<string>()

  const handleSaveEvent = async (currentEvent: Omit<IEvent, '_id'>) => {
    try {
      const resp = await fetch('/api/events', {
        method: 'POST',
        body: JSON.stringify({ ...currentEvent }),
      }).then((r) => r.json())

      if (resp.status !== 200) {
        throw new Error(
          `Failed to create new event. ${resp.status}: ${resp.message}`
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
      <EventForm onSave={handleSaveEvent} onCancel={handleCancel} />
    </>
  )
}

export default AddEventForm
