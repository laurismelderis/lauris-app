import React from 'react'
import ReactMarkdown from 'react-markdown'
import Event from './Event'
import { IEvent } from '@/src/models/Event'

const getEvents = async () => {
  const resp = await fetch('http://localhost:3000/api/cv')
  const data = await resp.json()

  return data
}

const Events = async () => {
  const events = await getEvents()

  return (
    <div>
      {events?.map(
        ({ day, month, year, title, description }: IEvent, index: number) => (
          <Event key={index} title={title} year={year} month={month} day={day}>
            <ReactMarkdown>{description}</ReactMarkdown>
          </Event>
        )
      )}
    </div>
  )
}

export default Events
