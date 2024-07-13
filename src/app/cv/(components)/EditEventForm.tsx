'use client'

import React, { useState } from 'react'
import EventForm from './EventForm'
import { IEvent } from '@/src/models/Event'
import { useRouter } from 'next/navigation'
import Notification from '../../../components/common/Notification'

const EditEventForm = (event: IEvent) => {
  const router = useRouter()
  const [error, setError] = useState<string>()

  const handleUpdateEvent = async (currentEvent: Omit<IEvent, '_id'>) => {
    try {
      const newEvent = {
        id: event._id,
        ...currentEvent,
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
        body: JSON.stringify({ id: event._id }),
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
        {...event}
        onSave={handleUpdateEvent}
        onCancel={handleCancel}
        onDelete={handleDelete}
      />
    </>
  )
}

export default EditEventForm
