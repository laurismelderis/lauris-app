import React from 'react'
import { getEvent } from '@/src/libs/cv'
import { notFound } from 'next/navigation'
import { IEvent } from '@/src/models/Event'
import { auth } from '@clerk/nextjs/server'
import Unauthorized from '@/src/components/Unauthorized'
import EditEventForm from '@/src/app/cv/(components)/EditEventForm'

interface EventPageProps {
  params: { slug: string }
}

const EventPage = async ({ params: { slug } }: EventPageProps) => {
  const { has } = auth()
  let event: IEvent

  try {
    event = (await getEvent({ value: slug, type: 'slug' })) || {}
  } catch (e) {
    notFound()
  }

  if (!event || Object.keys(event).length === 0) {
    notFound()
  }

  const isAdmin = has({ role: 'org:admin' })

  if (!isAdmin) return <Unauthorized />

  return (
    <div className='relative mx-auto flex w-4/6 flex-col gap-4'>
      <EditEventForm {...JSON.parse(JSON.stringify(event))} />
    </div>
  )
}

export default EventPage
