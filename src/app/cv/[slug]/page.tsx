import React from 'react'
import { IEvent } from '@/src/models/Event'
import { getEvent } from '@/src/libs/cv'
import { notFound } from 'next/navigation'
import Event from '../(components)/Event'
import ReturnToPreviousPage from '../../(components)/ReturnToPreviousPage'

type EventPageProps = {
  params: { slug: string }
}

const EventPage = async ({ params: { slug } }: EventPageProps) => {
  let event: IEvent

  try {
    event = (await getEvent({ value: slug, type: 'slug' })) || {}
  } catch (e) {
    notFound()
  }

  if (!event || Object.keys(event).length === 0) {
    notFound()
  }

  return (
    <div className='relative mx-auto flex w-4/6 flex-col gap-4'>
      <Event
        event={JSON.parse(JSON.stringify(event))}
        showReadMore={false}
        shortDescription={false}
      />
      <div className='flex justify-center'>
        <ReturnToPreviousPage />
      </div>
    </div>
  )
}

export default EventPage
