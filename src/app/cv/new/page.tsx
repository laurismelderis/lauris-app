import React from 'react'
import { addEvent } from '@/src/libs/cv'
import { DescriptionTypes } from '@/src/models/Event'
import { getMonthNumber } from '@/src/utils/helpers'
import { AddEventProps } from '@/src/libs/cv/addEvent'
import { auth } from '@clerk/nextjs/server'
import Unauthorized from '@/src/components/Unauthorized'
import Link from 'next/link'

const NewCV = () => {
  const { has } = auth()

  const isAdmin = has({ role: 'org:admin' })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async function handleAddEvent(formData: FormData) {
    'use server'

    const form = {
      day: formData.get('day') as string,
      month: formData.get('month') as string,
      year: formData.get('year') as string,
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      descriptionType: formData.get('descriptionType') as DescriptionTypes,
    }

    const newEvent: AddEventProps = {
      title: form.title,
      descriptionType: form.descriptionType,
      description: form.description,
      month: getMonthNumber(form.month),
      year: parseInt(form.year, 10),
    }

    if (form?.day) {
      newEvent.day = parseInt(form.day, 10)
    }

    await addEvent(newEvent)
  }

  if (!isAdmin) return <Unauthorized />

  return (
    <div className='pt-8 mx-auto w-4/6 relative flex flex-col gap-4'>
      <Link href='/cv'>Return</Link>
      {/* <EventFormClient /> */}
      {/* <EventForm
        onSuccessSubmit={handleAddEvent}
        submitSuccessTitle='Add event'
        submitFailureTitle='Cancel'
      /> */}
    </div>
  )
}

export default NewCV
