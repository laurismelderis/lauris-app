'use client'

import { getLatviaTime } from '@/src/utils/helpers'
import React, { useEffect } from 'react'

const DigitalClock = () => {
  useEffect(() => {
    const runner = setInterval(() => {
      const digitalClock = document.getElementById('digital-clock')

      if (digitalClock) {
        const date = getLatviaTime()
        let hours = String(date.getHours())
        let minutes = String(date.getMinutes())

        if (minutes.length === 1) {
          minutes = `0${minutes}`
        }
        if (hours.length === 1) {
          hours = `0${hours}`
        }
        digitalClock.innerHTML = `${hours}:${minutes}`
      }
    }, 1000)

    return () => {
      clearInterval(runner)
    }
  }, [])

  return (
    <div id='digital-clock' className='text-xl md:text-4xl'>
      24:00
    </div>
  )
}

export default DigitalClock
