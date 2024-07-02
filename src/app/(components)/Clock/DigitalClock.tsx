'use client'

import React, { useEffect } from 'react'
import { getLatviaTime } from '@/src/utils/helpers'
const DigitalClock = () => {
  const getCurrentTime = () => {
    const date = getLatviaTime()
    let hours = String(date.getHours())
    let minutes = String(date.getMinutes())

    if (minutes.length === 1) {
      minutes = `0${minutes}`
    }
    if (hours.length === 1) {
      hours = `0${hours}`
    }
    return `${hours}:${minutes}`
  }

  useEffect(() => {
    const updateClock = () => {
      const digitalClock = document.getElementById('digital-clock')

      if (digitalClock) {
        digitalClock.innerHTML = getCurrentTime()
      }
    }

    updateClock()

    const runner = setInterval(() => {
      updateClock()
    }, 1000)

    return () => {
      clearInterval(runner)
    }
  }, [])

  return (
    <div id='digital-clock' className='text-xl md:text-4xl'>
      {getCurrentTime()}
    </div>
  )
}

export default DigitalClock
