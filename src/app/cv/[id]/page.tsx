import React from 'react'
import { getEvent, removeEvent, updateEvent } from '@/src/libs/cv'
import { notFound } from 'next/navigation'
import EventForm from '@/src/components/cv/EventForm'
import { getMonthNumber } from '@/src/utils/helpers'
import { DescriptionTypes, IEvent } from '@/src/models/Event'
import { auth } from '@clerk/nextjs/server'
import Unauthorized from '@/src/components/Unauthorized'

interface EventPageProps {
  params: { id: string }
}

const EventPage = async ({ params: { id } }: EventPageProps) => {
  const { has } = auth()
  let resp: IEvent

  try {
    resp = (await getEvent(id)) || {}
  } catch (e) {
    notFound()
  }

  const { _id, day, month, year, title, description, descriptionType } = resp

  if (!_id) {
    notFound()
  }

  async function handleUpdateEvent(formData: FormData) {
    'use server'

    const form = {
      day: formData.get('day') as string,
      month: formData.get('month') as string,
      year: formData.get('year') as string,
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      descriptionType: formData.get('descriptionType') as DescriptionTypes,
    }

    const newEvent: IEvent = {
      _id: id,
      title: form.title,
      descriptionType: form.descriptionType,
      description: form.description,
      month: getMonthNumber(form.month),
      year: parseInt(form.year, 10),
    }

    if (form?.day) {
      newEvent.day = parseInt(form.day, 10)
    } else {
      newEvent.day = null
    }

    await updateEvent(id, newEvent)
  }

  async function handleRemoveEvent() {
    'use server'

    await removeEvent(id)
  }

  const isAdmin = has({ role: 'org:admin' })

  if (!isAdmin) return <Unauthorized />

  return (
    <div className='pt-8 mx-auto w-4/6 relative flex flex-col gap-4'>
      <EventForm
        day={day?.toString()}
        month={month.toString()}
        year={year.toString()}
        title={title}
        description={description}
        descriptionType={descriptionType}
        onSuccessSubmit={handleUpdateEvent}
        onFailureSubmit={handleRemoveEvent}
        submitSuccessTitle='Update event'
        submitFailureTitle='Remove event'
      />
    </div>
  )
}

export default EventPage
