'use client'

import React from 'react'
import { Button } from '../common'
import { useRouter } from 'next/navigation'

const AddEvent = () => {
  const router = useRouter()

  const handleAddEvent = () => router.push('/cv/new')

  return <Button onClick={handleAddEvent}>Add new event</Button>
}

export default AddEvent
