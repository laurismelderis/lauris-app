import usePageHeightClassName from '../hooks/usePageHeightClassName'
import Clock from './(components)/Clock'
import DigitalClock from './(components)/DigitalClock'
import SocialMediaLinks from './(components)/SocialMediaLinks'

const Home = () => {
  const heightClassName = usePageHeightClassName()

  return (
    <div
      className={`flex flex-col items-center justify-center gap-14 text-green ${heightClassName}`}
    >
      <div className='flex w-1/4 max-w-screen-lg flex-col items-center justify-between gap-4 sm:w-1/2 sm:flex-row sm:items-start md:w-4/6 lg:w-1/2 xl:w-5/12 2xl:w-1/3'>
        <DigitalClock />
        <div className='flex flex-col items-center justify-center sm:items-start'>
          <div className='text-md text-center md:text-xl'>Time in Latvia</div>
          <div className='text-center text-xs md:text-lg'>(UTC+3)</div>
        </div>
        <Clock />
      </div>
      <div className='flex flex-col items-center justify-center gap-8'>
        <div className='text-center text-4xl font-extralight sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl'>
          Lauris Melderis
        </div>
        <div className='text-md text-center font-extralight italic md:text-xl'>
          lauris.melderis77@gmail.com
        </div>
        <SocialMediaLinks />
      </div>
    </div>
  )
}

export default Home
