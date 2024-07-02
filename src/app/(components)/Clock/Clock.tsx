'use client'

import React, { CSSProperties, useEffect } from 'react'
import SecondsPointer from './SecondsPointer'
import MinutesPointer from './MinutesPointer'
import HoursPointer from './HoursPointer'
import ClockTickNumbers from './ClockTickNumbers'
import { getLatviaTime } from '@/src/utils/helpers'

type ClockProps = {
  width?: string
  height?: string
  className?: React.ComponentProps<'canvas'>['className']
  style?: CSSProperties
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Clock = (props: ClockProps) => {
  useEffect(() => {
    const updateClock = () => {
      const secondsPointer = document.getElementById('clock-seconds-pointer')
      const date = getLatviaTime()
      if (secondsPointer) {
        const seconds = date.getSeconds()
        const currentRotation = ((seconds + 1) / 60) * 360 + 90
        secondsPointer.style.rotate = currentRotation + 'deg'
      }
      const minutesPointer = document.getElementById('clock-minutes-pointer')
      if (minutesPointer) {
        const minutes = date.getMinutes()
        const currentRotation = ((minutes + 1) / 60) * 360 + 90
        minutesPointer.style.rotate = currentRotation + 'deg'
      }
      const hoursPointer = document.getElementById('clock-hours-pointer')
      if (hoursPointer) {
        const hours = date.getHours()
        const currentRotation = ((hours % 12) / 12) * 360 + 90
        hoursPointer.style.rotate = currentRotation + 'deg'
      }
    }

    // Remove lag on component render
    updateClock()

    const runner = setInterval(() => {
      updateClock()
    }, 1000)

    return () => {
      clearInterval(runner)
    }
  }, [])

  return (
    <>
      <div className='relative flex h-32 w-32 items-center justify-center rounded-full border-2 md:h-48 md:w-48 lg:border-2'>
        <ClockTickNumbers />
        <SecondsPointer id='clock-seconds-pointer' />
        <MinutesPointer id='clock-minutes-pointer' />
        <HoursPointer id='clock-hours-pointer' />
      </div>
    </>
  )
}

export default Clock
