import React from 'react'
import { currentUser } from '@clerk/nextjs/server'
import { SignIn } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import usePageHeightClassName from '@/src/hooks/usePageHeightClassName'

const Login = async () => {
  const pageHeightClassName = usePageHeightClassName()
  const user = await currentUser()

  if (!user) {
    return (
      <div
        className={`flex flex-col items-center justify-center text-green ${pageHeightClassName}`}
      >
        <SignIn
          appearance={{
            elements: {
              dividerRow: 'hidden',
              form: 'hidden',
            },
          }}
        />
      </div>
    )
  }

  return redirect('/')
}

export default Login
