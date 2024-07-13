'use client'

import React from 'react'
import Date from './Date'

import 'katex/dist/katex.min.css'
import Markdown from '../../../components/common/Markdown'
import { useAuth } from '@clerk/nextjs'
import { IEvent } from '@/src/models/Event'

const Event = ({ event }: { event: IEvent }) => {
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
        <Date slug={slug} day={day} month={month} year={year} />
        <div className='container flex flex-col gap-4 border-b-2 border-green pb-8 md:border-none'>
          <div>{title}</div>
          <div className='text-base font-light md:text-lg'>
            {(() => {
              switch (descriptionType) {
                case 'MARKDOWN':
                  return <Markdown>{description}</Markdown>
                case 'HTML':
                  return (
                    <div
                      dangerouslySetInnerHTML={{ __html: description || '' }}
                    />
                  )
                default:
                  return description
              }
            })()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Event
