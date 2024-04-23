import React from 'react'
import ReactMarkdown from 'react-markdown'
import Event from './Event'
import { IEvent } from '@/src/models/Event'
import { DescriptionTypes } from './EventForm'
import { getEvents } from '@/src/libs/cv'

const Events = async () => {
  const events = await getEvents()

  return (
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
        ) => (
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
      )}
    </div>
  )
}

export default Events
