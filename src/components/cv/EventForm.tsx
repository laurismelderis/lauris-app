import React from 'react'
import TextInput from '../common/TextInput'
import Button from '../common/Button'
import EditableDate from './EditableDate'
import { SelectInput, TextareaInput } from '../common'

export enum DescriptionTypes {
  Raw = 'RAW',
  Markdown = 'MARKDOWN',
  Html = 'HTML',
}

interface EventFormProps {
  day?: string | null
  month?: string
  year?: string
  title?: string
  description?: string
  descriptionType?: DescriptionTypes
  action?: (formData: FormData) => void
  actionTitle?: string
}

async function EventForm({
  day = '1',
  month = '1',
  year = '2000',
  title = '',
  description,
  descriptionType = DescriptionTypes.Markdown,
  action,
  actionTitle = '',
}: EventFormProps) {
  return (
    <form action={action} className='flex flex-col items-center'>
      <div className='container flex flex-col md:flex-row min-h-20 text-3xl md:text-5xl gap-8'>
        <EditableDate day={day} month={month} year={year} />
        <div className='container flex flex-col gap-4 pb-8 border-b-2 md:border-none border-light-blue'>
          <TextInput
            name='title'
            variant='transparent'
            defaultValue={title}
            placeholder='Title'
          />
          <TextareaInput
            name='description'
            variant='transparent'
            defaultValue={description}
            className='text-base md:text-lg font-light'
            placeholder='Description'
            rows={8}
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
        <Button type='primary' submit name='submit-button' value='success'>
          {actionTitle}
        </Button>
        <Button type='error' submit name='submit-button' value='failure'>
          Delete event
        </Button>
      </div>
    </form>
  )
}

export default EventForm
