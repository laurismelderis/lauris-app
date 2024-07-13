'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import EventForm from '@/src/app/cv/(components)/EventForm'
import Notification from '@/src/app/(components)/Notification'
import { IEvent } from '@/src/models/Event'

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
    router.back()
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
