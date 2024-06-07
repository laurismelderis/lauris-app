import React, { Suspense } from 'react'
import EventList from '../../components/cv/EventList'
import AddEvent from '@/src/components/cv/AddEvent'
import Loading from './loading'
import { Environments } from '@/src/utils/constants'

const Cv = () => {
  return (
    <div className='pt-8'>
      <div className='mx-auto w-4/6 relative flex flex-col gap-4'>
        <Suspense fallback={<Loading />}>
          <EventList />
        </Suspense>
        {process.env.NODE_ENV === Environments.DEVELOPMENT ? <AddEvent /> : null }
      </div>
    </div>
  )
}

export default Cv
