import React from 'react'
import TextInput from '../common/TextInput'
import Button from '../common/Button'
import EditableDate from './EditableDate'
import { updateEvent } from '@/src/libs/cv'
import { SelectInput, TextareaInput } from '../common'
import { getMonthNumber } from '@/src/utils/helpers'
import { revalidatePath } from 'next/cache'

export enum DescriptionTypes {
  Raw = 'RAW',
  Markdown = 'MARKDOWN',
  Html = 'HTML',
}

interface EventFormProps {
  id: string
  day?: string
  month?: string
  year?: string
  title?: string
  description?: string
  descriptionType?: DescriptionTypes
}

async function EventFormServer({
  id,
  day = '1',
  month = '1',
  year = '2000',
  title = '',
  description,
  descriptionType = DescriptionTypes.Markdown,
}: EventFormProps) {
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

    await updateEvent(id, {
      _id: id,
      title: form.title,
      descriptionType: form.descriptionType,
      description: form.description,
      day: parseInt(form.day, 10),
      month: getMonthNumber(form.month),
      year: parseInt(form.year, 10),
    })

    revalidatePath('/cv')
  }

  return (
    <form action={handleUpdateEvent} className='flex flex-col items-center'>
      <div className='container flex flex-col md:flex-row min-h-20 text-3xl md:text-5xl gap-8'>
        <EditableDate id={id} day={day} month={month} year={year} />
        <div className='container flex flex-col gap-4 pb-8 border-b-2 md:border-none border-light-blue'>
          <TextInput name='title' variant='transparent' defaultValue={title} />
          <TextareaInput
            name='description'
            variant='transparent'
            defaultValue={description}
            className='text-base md:text-lg font-light'
          />
        </div>
      </div>
      <div className='flex gap-4 items-center w-full'>
        <label className='w-48 text-right border-b-2 border-transparent'>
          Select description type:
        </label>
        <SelectInput
          options={Object.values(DescriptionTypes)}
          defaultValue={descriptionType}
          variant='transparent'
          name='descriptionType'
        />
      </div>
      <div className='flex gap-4'>
        <Button type='primary' submit>
          Update server event
        </Button>
        <Button type='error'>Delete event</Button>
      </div>
    </form>
  )
}

export default EventFormServer
