import React from 'react'
import { currentUser } from '@clerk/nextjs/server'
import { SignIn } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

const Login = async () => {
  const user = await currentUser()

  if (!user) {
    return (
      <div className='flex flex-col justify-center items-center text-light-blue min-h-[calc(100vh-100px)]'>
        <SignIn />
      </div>
    )
  }

  return redirect('/')
}

export default Login
