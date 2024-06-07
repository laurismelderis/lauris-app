'use client'

import React from 'react'
import './ProgressBar.css'

interface ProgressBarProps {
  loading?: boolean
  className?: React.ComponentProps<'div'>['className']
}

const ProgressBar = ({
  loading = false,
  className,
}: ProgressBarProps) => {
  return (
    <div
      className={`w-full h-2 ${loading ? 'bg-gray' : 'bg-light-blue'} ${className}`}
    >
      {loading ? <div className='loading-bar' /> : null}
    </div>
  )
}

export default ProgressBar
