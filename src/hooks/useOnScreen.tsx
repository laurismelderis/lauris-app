'use client'

import { useEffect, useState } from 'react'

const useOnScreen = (ref: React.RefObject<HTMLElement>) => {
  const [isIntersecting, setIntersecting] = useState(false)
  const [observer, setObserver] = useState<IntersectionObserver | null>(null)

  useEffect(() => {
    setObserver(
      new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting)
      )
    )
    return () => {
      if (observer) {
        observer.disconnect()
      }
    }
  }, [])

  useEffect(() => {
    if (ref.current && observer) {
      observer.observe(ref.current)
      return () => observer?.disconnect()
    }

    return () => {
      if (observer) {
        observer.disconnect()
      }
    }
  }, [observer])

  return isIntersecting
}

export default useOnScreen
