import React from 'react'
import { getEvent } from '@/src/libs/cv'
import { notFound } from 'next/navigation'
import { IEvent } from '@/src/models/Event'
import { auth } from '@clerk/nextjs/server'
import Unauthorized from '@/src/components/Unauthorized'
import EditEventForm from '@/src/app/cv/(components)/EditEventForm'

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

  const {
    _id,
    day,
    month,
    year,
    title,
    description,
    descriptionType,
    isDraft,
  } = resp

  if (!_id) {
    notFound()
  }

  const isAdmin = has({ role: 'org:admin' })

  if (!isAdmin) return <Unauthorized />

  return (
    <div className='relative mx-auto flex w-4/6 flex-col gap-4'>
      <EditEventForm
        id={id}
        day={day?.toString()}
        month={month.toString()}
        year={year.toString()}
        title={title}
        description={description}
        descriptionType={descriptionType}
        isDraft={isDraft}
      />
    </div>
  )
}

export default EventPage
