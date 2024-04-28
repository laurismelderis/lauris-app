import React from 'react'
import { getEvent } from '@/src/libs/cv'
import { notFound } from 'next/navigation'
import EventForm from '@/src/components/cv/EventForm'

export const dymanic = 'auto'

interface EventPageProps {
  params: { id: string }
}

const EventPage = async ({ params: { id } }: EventPageProps) => {
  const { _id, day, month, year, title, description, descriptionType } =
    await getEvent(id)

  if (!_id) {
    notFound()
  }

  return (
    <div className='pt-8 mx-auto w-4/6 relative flex flex-col gap-4'>
      <EventForm
        id={_id.toString()}
        day={day}
        month={month}
        year={year}
        title={title}
        description={description}
        descriptionType={descriptionType}
      />
    </div>
  )
}

export default EventPage
