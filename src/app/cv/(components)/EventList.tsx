import React from 'react'
import { IEvent } from '@/src/models/Event'
import { getEvents } from '@/src/libs/cv'
import Event from './Event'
import config from '../../config'

export const dynamic = 'force-dynamic'

const EventList = async () => {
  const events: IEvent[] = await getEvents()

  return (
    <div className='flex flex-col gap-4'>
      {events
        ?.sort((e1, e2) => {
          const date1 = new Date(e1.year, e1.month, e1.day || 1).getTime()
          const date2 = new Date(e2.year, e2.month, e2.day || 1).getTime()

          return date1 - date2
        })
        .map((event: IEvent) => {
          const isLongText = Boolean(
            event?.description &&
              event.description.length > config.TRUNCATED_TEXT_LENGTH
          )

          return (
            <Event
              key={event._id}
              event={JSON.parse(JSON.stringify(event))}
              shortDescription={isLongText}
              showReadMore={isLongText}
            />
          )
        })}
    </div>
  )
}

export default EventList
