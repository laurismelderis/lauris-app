import React, { Suspense } from 'react'
import EventList from './(components)/EventList'
import AddEvent from '@/src/app/cv/(components)/AddEvent'
import Loading from './loading'
import { Protect } from '@clerk/nextjs'

const Cv = () => {
  return (
    <div className='relative mx-auto flex w-4/6 flex-col gap-4' id='testPage'>
      <Protect role='org:admin'>
        <AddEvent />
      </Protect>
      <Suspense fallback={<Loading />}>
        <EventList />
      </Suspense>
    </div>
  )
}

export default Cv
