import React, { Suspense } from 'react'
import EventList from './(components)/EventList'
import AddEvent from '@/src/app/cv/(components)/AddEvent'
import Loading from './loading'
import { auth } from '@clerk/nextjs/server'

const Cv = () => {
  const { has } = auth()

  const isAdmin = has({ role: 'org:admin' })

  return (
    <div className='relative mx-auto flex w-4/6 flex-col gap-4'>
      {isAdmin ? <AddEvent /> : null}
      <Suspense fallback={<Loading />}>
        <EventList />
      </Suspense>
    </div>
  )
}

export default Cv
