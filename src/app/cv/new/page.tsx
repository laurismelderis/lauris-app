import React from 'react'

import AddEventForm from './(components)/AddEventForm'
import withAuth from '../../(components)/withAuth'

const NewCV = () => (
  <div className='relative mx-auto flex w-4/6 flex-col gap-4'>
    <AddEventForm />
  </div>
)

export default withAuth(NewCV)
