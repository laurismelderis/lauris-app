import React from 'react'
import { IEvent } from '@/src/models/Event'
import { getEvent } from '@/src/libs/cv'
import { notFound } from 'next/navigation'
import Event from '../(components)/Event'
import ReturnToPreviousPage from '../../(components)/ReturnToPreviousPage'

type EventPageProps = {
  params: { slug: string }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  try {
    const event = (await getEvent({ value: params.slug, type: 'slug' })) || {}

    if (event && Object.keys(event).length > 0) {
      return {
        title: event.title,
        description: event.description,
      }
    }

    throw new Error('Not found')
  } catch (e) {
    return {
      title: 'Not found',
      description: 'The page you are looking for does not exist.',
    }
  }
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
