'use client'

import React from 'react'
import { DescriptionTypes } from '@/src/models/Event'
import Markdown from '../common/Markdown'

const EventPreview = ({
  descriptionType,
  description,
}: {
  descriptionType: DescriptionTypes
  description: string
}) => {
  return (() => {
    switch (descriptionType) {
      case 'MARKDOWN':
        return <Markdown>{description}</Markdown>
      case 'HTML':
        return (
          <div
            className='text-light-green'
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )
      default:
        return description
    }
  })()
}

export default EventPreview
