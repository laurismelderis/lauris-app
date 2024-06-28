'use client'

import React, { CSSProperties, useEffect } from 'react'
import SecondsPointer from './SecondsPointer'
import MinutesPointer from './MinutesPointer'
import HoursPointer from './HoursPointer'
import ClockTicks from './ClockTicks'

type ClockProps = {
  width?: string
  height?: string
  className?: React.ComponentProps<'canvas'>['className']
  style?: CSSProperties
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Clock = (props: ClockProps) => {
  useEffect(() => {
    const runner = setInterval(() => {
      const secondsPointer = document.getElementById('clock-seconds-pointer')
      const date = new Date()
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
        const currentRotation = (((hours % 12) + 1) / 12) * 360 + 90
        hoursPointer.style.rotate = currentRotation + 'deg'
      }
    }, 1000)

    return () => {
      clearInterval(runner)
    }
  }, [])

  return (
    <>
      <div className='flex items-center justify-center w-64 h-64 border-4 rounded-full relative'>
        <ClockTicks />
        <SecondsPointer id='clock-seconds-pointer' />
        <MinutesPointer id='clock-minutes-pointer' />
        <HoursPointer id='clock-hours-pointer' />
      </div>
    </>
  )
}

export default Clock
