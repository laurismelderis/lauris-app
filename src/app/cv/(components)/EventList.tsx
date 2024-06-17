import React from 'react'
import { IEvent } from '@/src/models/Event'
import { getEvents } from '@/src/libs/cv'
import Event from './Event'

export const dynamic = 'force-dynamic'

const EventList = async () => {
  const events = await getEvents()

  return (
    <div className='flex flex-col gap-4'>
      {events
        ?.sort((e1: IEvent, e2: IEvent) => {
          const date1 = new Date(e1.year, e1.month, e1.day || 1).getTime()
          const date2 = new Date(e2.year, e2.month, e2.day || 1).getTime()

          return date1 - date2
        })
        .map(
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
          ) => {
            return (
              <Event
                key={_id.toString()}
                id={_id.toString()}
                title={title}
                year={year}
                month={month}
                day={day}
                descriptionType={descriptionType}
              >
                {description}
              </Event>
            )
          }
        )}
    </div>
  )
}

export default EventList
