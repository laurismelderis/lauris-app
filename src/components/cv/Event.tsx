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
  <div className='container flex flex-col md:flex-row min-h-20 text-3xl md:text-5xl gap-8 text-white'>
    <Date id={id} day={day} month={month} year={year} />
    <div className='container flex flex-col gap-4 pb-8 border-b-2 md:border-none border-light-blue'>
      <div>{title}</div>
      <div className='text-base md:text-lg font-light'>
        {(() => {
          switch (descriptionType) {
            case 'MARKDOWN':
              return <Markdown>{children}</Markdown>
            case 'HTML':
              return (
                <div dangerouslySetInnerHTML={{ __html: children || '' }} />
              )
            default:
              return children
          }
        })()}
      </div>
    </div>
  </div>
)

export default Event
