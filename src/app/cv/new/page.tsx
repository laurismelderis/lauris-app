import React from 'react'
import { auth } from '@clerk/nextjs/server'
import Unauthorized from '@/src/components/Unauthorized'
import AddEventForm from '@/src/app/cv/(components)/AddEventForm'

const NewCV = () => {
  const { has } = auth()

  const isAdmin = has({ role: 'org:admin' })

  if (!isAdmin) return <Unauthorized />

  return (
    <div className='relative mx-auto flex w-4/6 flex-col gap-4'>
      <AddEventForm />
    </div>
  )
}

export default NewCV
