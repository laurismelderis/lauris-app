import React, { Suspense } from 'react'
import EventList from './(components)/EventList'
import AddEvent from '@/src/app/cv/(components)/AddEvent'
import Loading from './loading'
import { auth } from '@clerk/nextjs/server'

const Cv = () => {
  const { has } = auth()

  const isAdmin = has({ role: 'org:admin' })

  return (
    <div className='pt-8'>
      <div className='mx-auto w-4/6 relative flex flex-col gap-4'>
        <Suspense fallback={<Loading />}>
          <EventList />
        </Suspense>
        {isAdmin ? <AddEvent /> : null}
      </div>
    </div>
  )
}

export default Cv
