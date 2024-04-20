'use client'

import React, { useState } from 'react'
import TextInput from './common/TextInput'

const EventForm = () => {
  const [visible, setVisible] = useState(true)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  console.log(title, description)

  const handleVisible = () => setVisible((prev) => !prev)
  const handleTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value)
  const handleDescriptionChanged = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDescription(e.target.value)

  return (
    <div>
      <button
        type='button'
        className='text-left border-2 border-light-blue p-2 w-max hover:bg-light-blue'
        onClick={handleVisible}
      >
        Add Event
      </button>

      {visible ? (
        <div className='flex flex-col gap-4 my-4'>
          <TextInput
            placeholder='Title'
            value={title}
            onChange={handleTitleChanged}
          />
          <TextInput
            placeholder='Description'
            value={description}
            onChange={handleDescriptionChanged}
          />
        </div>
      ) : null}
    </div>
  )
}

export default EventForm
