'use client'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center text-light-blue min-h-[calc(100vh-94px)]'>
      <div className='text-4xl md:text-9xl text-center font-extralight p-6'>
        Lauris Melderis
      </div>
      <div className='italic font-extralight text-xl'>
        lauris.melderis77@gmail.com
      </div>
    </div>
  )
}

export default Home
