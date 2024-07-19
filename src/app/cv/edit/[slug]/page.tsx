import React from 'react'
import { getEvent } from '@/src/libs/cv'
import { notFound } from 'next/navigation'
import { IEvent } from '@/src/models/Event'
import EditEventForm from './(components)/EditEventForm'
import withAuth from '@/src/app/(components)/withAuth'

type EditEventPageProps = {
  params: { slug: string }
}

const EditEventPage = async ({ params: { slug } }: EditEventPageProps) => {
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
      <EditEventForm {...JSON.parse(JSON.stringify(event))} />
    </div>
  )
}

export default withAuth(EditEventPage)
