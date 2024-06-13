'use client'

import React from 'react'

type NotificationProps = {
  success?: string
  loading?: boolean
  error?: string
  className?: React.ComponentProps<'div'>['className']
}

const Notification = ({
  success,
  loading = false,
  error,
  className,
}: NotificationProps) => {
  if (loading) {
    return 'Loading'
  }

  if (error && error.length > 0) {
    return <div className={`w-full flex bg-red p-2 ${className}`}>{error}</div>
  }

  return success
}

export default Notification
