'use client'

import React from 'react'
import { DescriptionTypes } from '@/src/models/Event'
import ReactCodeMirror from '@uiw/react-codemirror'
import { EditorView } from '@codemirror/view'
import { TextareaInput } from '../common'
import { html } from '@codemirror/lang-html'

const EventFormDescription = ({
  descriptionType,
  value,
  onChange,
}: {
  descriptionType: DescriptionTypes
  value: string
  onChange?: (value: string) => void
}) =>
  descriptionType === 'HTML' ? (
    <ReactCodeMirror
      value={value || ''}
      minHeight='400px'
      extensions={[html({}), EditorView.lineWrapping]}
      style={{ wordBreak: 'break-word', fontSize: '16px' }}
      theme={'dark'}
      onChange={onChange ? (value: string) => onChange(value) : () => {}}
    />
  ) : (
    <TextareaInput
      name='description'
      variant='transparent'
      defaultValue={value}
      className='text-base md:text-lg font-light'
      placeholder='Description'
      rows={8}
      onChange={
        onChange
          ? (e: React.ChangeEvent<HTMLTextAreaElement>) =>
              onChange(e.target.value)
          : () => {}
      }
    />
  )

export default EventFormDescription
