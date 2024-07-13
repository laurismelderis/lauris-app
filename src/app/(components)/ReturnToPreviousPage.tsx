'use client'

import React from 'react'
import { Button } from '@/src/components/common'
import { useRouter } from 'next/navigation'

type ReturnToPreviousPageProps = {
  text?: string
}

const ReturnToPreviousPage = ({
  text = 'Return',
}: ReturnToPreviousPageProps) => {
  const router = useRouter()

  const handleReturn = () => {
    router.back()
  }

  return (
    <Button type='secondary' onClick={handleReturn}>
      {text}
    </Button>
  )
}

export default ReturnToPreviousPage
