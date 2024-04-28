import React from 'react'
import { getEvent, removeEvent, updateEvent } from '@/src/libs/cv'
import { notFound, redirect } from 'next/navigation'
import EventForm from '@/src/components/cv/EventForm'
import { revalidatePath } from 'next/cache'
import { getMonthNumber } from '@/src/utils/helpers'
import { DescriptionTypes, IEvent } from '@/src/models/Event'

export const dymanic = 'auto'

interface EventPageProps {
  params: { id: string }
}

const EventPage = async ({ params: { id } }: EventPageProps) => {
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

  async function handleEvent(formData: FormData) {
    'use server'

    const type: string | null = formData.get('submit-button') as string

    if (type) {
      if (type === 'success') {
        handleUpdateEvent(formData)
      } else if (type === 'failure') {
        handleRemoveEvent()
      }
      revalidatePath('/cv')
      redirect('/cv')
    }
  }

  return (
    <div className='pt-8 mx-auto w-4/6 relative flex flex-col gap-4'>
      <EventForm
        day={day?.toString()}
        month={month.toString()}
        year={year.toString()}
        title={title}
        description={description}
        descriptionType={descriptionType}
        action={handleEvent}
        actionTitle='Update event'
      />
    </div>
  )
}

export default EventPage
