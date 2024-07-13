'use client'

import React from 'react'
import { useAuth } from '@clerk/nextjs'
import 'katex/dist/katex.min.css'

import { IEvent } from '@/src/models/Event'
import Date from './Date'
import ShowMore from './ShowMore'
import Description from './Description'

type EventProps = {
  event: Omit<IEvent, '_id'>
  showReadMore?: boolean
  shortDescription?: boolean
  editEnabled?: boolean
}

const Event = ({
  event,
  showReadMore = false,
  shortDescription = false,
  editEnabled = false,
}: EventProps) => {
  const {
    isDraft,
    day,
    month,
    year,
    title,
    descriptionType,
    description,
    slug,
  } = event

  const { orgRole } = useAuth()

  if (isDraft && orgRole !== 'org:admin') {
    return null
  }

  return (
    <div className='flex flex-col'>
      {isDraft && <div className='italic text-green underline'>Draft</div>}
      <div className='container flex min-h-20 flex-col gap-8 text-3xl text-light-green md:flex-row md:text-5xl'>
        <Date
          slug={slug}
          day={day}
          month={month}
          year={year}
          editEnabled={editEnabled}
        />
        <div className='container flex flex-col gap-4 border-b-2 border-green pb-8 md:border-none'>
          <div>{title}</div>
          <Description
            type={descriptionType}
            shortDescription={shortDescription}
          >
            {description}
          </Description>
          {showReadMore && <ShowMore href={`/cv/${slug}`} />}
        </div>
      </div>
    </div>
  )
}

export default Event
