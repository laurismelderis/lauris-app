'use client'

import React from 'react'
import Date from './Date'

import 'katex/dist/katex.min.css'
import Markdown from '../common/Markdown'

interface EventProps {
  id: string
  title?: string
  children?: string
  day?: number | null
  descriptionType: 'HTML' | 'MARKDOWN' | 'RAW'
  month: number
  year: number
}

const Event = ({
  id,
  title,
  children,
  day,
  month,
  year,
  descriptionType,
}: EventProps) => (
  <div className='container flex flex-col md:flex-row min-h-20 text-3xl md:text-5xl gap-8'>
    <Date id={id} day={day} month={month} year={year} />
    <div className='container flex flex-col gap-4 pb-8 border-b-2 md:border-none border-light-blue'>
      <div>{title}</div>
      <div className='text-base md:text-lg font-light'>
        {descriptionType === 'MARKDOWN' ? (
          <Markdown>{children}</Markdown>
        ) : (
          children || ''
        )}
      </div>
    </div>
  </div>
)

export default Event
