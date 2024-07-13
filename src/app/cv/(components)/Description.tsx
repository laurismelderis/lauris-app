import Markdown from '@/src/components/common/Markdown'
import { DescriptionTypes } from '@/src/models/Event'
import React from 'react'
import config from '../../config'

type DescriptionProps = {
  children?: string
  shortDescription?: boolean
  type: DescriptionTypes
}

const Description = ({
  type,
  children,
  shortDescription = false,
}: DescriptionProps) => {
  const truncatedDescription =
    children?.substring(0, config.TRUNCATED_TEXT_LENGTH) + '...'

  const description = shortDescription ? truncatedDescription : children

  return (
    <div className='text-base font-light md:text-lg'>
      {(() => {
        switch (type) {
          case 'MARKDOWN':
            return <Markdown>{description}</Markdown>
          case 'HTML':
            return (
              <div
                dangerouslySetInnerHTML={{
                  __html: description || '',
                }}
              />
            )
          default:
            return description
        }
      })()}
    </div>
  )
}

export default Description
