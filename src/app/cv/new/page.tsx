import React from 'react'
import { addEvent } from '@/src/libs/cv'
import EventForm from '@/src/components/cv/EventForm'
import { DescriptionTypes } from '@/src/models/Event'
import { getMonthNumber } from '@/src/utils/helpers'
import { AddEventProps } from '@/src/libs/cv/addEvent'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

const NewCV = () => {
  async function handleAddCv(formData: FormData) {
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

    revalidatePath('/cv')
    redirect('/cv')
  }

  return (
    <div className='pt-8 mx-auto w-4/6 relative flex flex-col gap-4'>
      <EventForm action={handleAddCv} actionTitle='Add event' />
    </div>
  )
}

export default NewCV
