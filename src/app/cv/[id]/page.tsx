import React from 'react'
import { getEvent } from '@/src/libs/cv'
import { notFound } from 'next/navigation'
import { IEvent } from '@/src/models/Event'
import { auth } from '@clerk/nextjs/server'
import Unauthorized from '@/src/components/Unauthorized'
import EditEventForm from '@/src/components/cv/EditEventForm'

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

  const isAdmin = has({ role: 'org:admin' })

  if (!isAdmin) return <Unauthorized />

  return (
    <div className='pt-8 mx-auto w-4/6 relative flex flex-col gap-4'>
      <EditEventForm
        id={id}
        day={day?.toString()}
        month={month.toString()}
        year={year.toString()}
        title={title}
        description={description}
        descriptionType={descriptionType}
      />
    </div>
  )
}

export default EventPage
