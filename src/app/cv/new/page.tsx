import React from 'react'
import { auth } from '@clerk/nextjs/server'
import Unauthorized from '@/src/components/Unauthorized'
import AddEventForm from '@/src/components/cv/AddEventForm'

const NewCV = () => {
  const { has } = auth()

  const isAdmin = has({ role: 'org:admin' })

  if (!isAdmin) return <Unauthorized />

  return (
    <div className='pt-8 mx-auto w-4/6 relative flex flex-col gap-4'>
      <AddEventForm />
    </div>
  )
}

export default NewCV
