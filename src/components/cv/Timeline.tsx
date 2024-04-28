import React from 'react'
import { IEvent } from '@/src/models/Event'
import { getEvents } from '@/src/libs/cv'
import { DescriptionTypes } from './EventForm'
import Event from './Event'
import ReactMarkdown from 'react-markdown'

export const dynamic = 'force-dynamic'

const Timeline = async () => {
  const events = await getEvents()

  return (
    <div className='mx-auto w-4/6 relative flex flex-col gap-4'>
      <div className='flex flex-col gap-4'>
        {events?.map(
          (
            {
              _id,
              day,
              month,
              year,
              title,
              description,
              descriptionType,
            }: IEvent,
            index: number
          ) => {
            return (
              <Event
                key={_id}
                id={_id}
                title={title}
                year={year}
                month={month}
                day={day}
              >
                {descriptionType === DescriptionTypes.Markdown ? (
                  <ReactMarkdown>{description}</ReactMarkdown>
                ) : (
                  description || ''
                )}
              </Event>
            )
          }
        )}
      </div>
    </div>
  )
}

export default Timeline
