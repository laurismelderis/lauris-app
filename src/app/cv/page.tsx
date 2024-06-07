import React, { Suspense } from 'react'
import EventList from '../../components/cv/EventList'
import AddEvent from '@/src/components/cv/AddEvent'
import Loading from './loading'

const Cv = () => {
  return (
    <div className='pt-8'>
      <div className='mx-auto w-4/6 relative flex flex-col gap-4'>
        <Suspense fallback={<Loading />}>
          <EventList />
        </Suspense>
        <AddEvent />
      </div>
    </div>
  )
}

export default Cv
