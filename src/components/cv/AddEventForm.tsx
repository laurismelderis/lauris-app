'use client'

import React from 'react'
import EventFormClient from './EventFormClient'
import { useRouter } from 'next/navigation'
import { IEvent } from '@/src/models/Event'

const AddEventForm = () => {
  const router = useRouter()

  const handleSaveEvent = async (currentEvent: Omit<IEvent, '_id'>) => {
    try {
      await fetch('/api/events', {
        method: 'POST',
        body: JSON.stringify({ ...currentEvent }),
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

  return <EventFormClient onSave={handleSaveEvent} onCancel={handleCancel} />
}

export default AddEventForm
