import React from 'react'
import TextInput from '../common/TextInput'
import Button from '../common/Button'
import EditableDate from './EditableDate'
import { updateEvent } from '@/src/libs/cv'
import { SelectInput } from '../common'

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
  console.log(title, description)

  async function handleUpdateEvent(formData: any) {
    'use server'

    console.log('FORM DATA', formData)

    await updateEvent(id, {
      _id: id,
      title: formData.get('title') as string,
      descriptionType,
      description: formData.get('description') as string,
      day: parseInt(day, 10),
      month: parseInt(month, 10),
      year: parseInt(year, 10),
    })
      .then((resp) => console.log(resp))
      .catch((err) => console.error(err))
  }

  return (
    <form action={handleUpdateEvent} className='flex flex-col items-center'>
      <div className='container flex flex-col md:flex-row min-h-20 text-3xl md:text-5xl gap-8'>
        <EditableDate id={id} day={day} month={month} year={year} />
        <div className='container flex flex-col gap-4 pb-8 border-b-2 md:border-none border-light-blue'>
          <TextInput name='title' variant='transparent' />
          <TextInput
            name='description'
            variant='transparent'
            className='text-base md:text-lg font-light'
          />
          {/* <TextareaInput
            name='description'
            variant='transparent'
            value={description}
            className='text-base md:text-lg font-light'
            cacheMeasurements
          /> */}
        </div>
      </div>
      <div className='flex gap-4 items-center w-full'>
        <label className='w-48 text-right border-b-2 border-transparent'>
          Select description type:
        </label>
        <SelectInput
          options={Object.values(DescriptionTypes)}
          variant='transparent'
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
