import React from 'react'
import TextInput from '../common/TextInput'
import Button from '../common/Button'
import EditableDate from './EditableDate'
import { SelectInput, TextareaInput } from '../common'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import Link from 'next/link'

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
  submitSuccessTitle?: string
  submitFailureTitle?: string
  onSuccessSubmit?: (formData: FormData) => void
  onFailureSubmit?: (formData: FormData) => void
}

async function EventForm({
  day = '1',
  month = '0',
  year = '2000',
  title = '',
  description,
  descriptionType = DescriptionTypes.Markdown,
  onSuccessSubmit,
  onFailureSubmit,
  submitSuccessTitle = '',
  submitFailureTitle = '',
}: EventFormProps) {
  async function handleEvent(formData: FormData) {
    'use server'

    const type: string | null = formData.get('submit-button') as string

    if (type) {
      if (type === 'success' && onSuccessSubmit) {
        onSuccessSubmit(formData)
      } else if (type === 'failure' && onFailureSubmit) {
        onFailureSubmit(formData)
      }
      revalidatePath('/cv')
      redirect('/cv')
    }
  }

  return (
    <form action={handleEvent} className='flex flex-col items-center gap-4'>
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
          {submitSuccessTitle}
        </Button>
        <Button type='error' submit name='submit-button' value='failure'>
          {submitFailureTitle}
        </Button>
      </div>
      <Link href='/cv'>
        <Button type='secondary'>Back</Button>
      </Link>
    </form>
  )
}

export default EventForm
