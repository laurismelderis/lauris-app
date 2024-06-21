import usePageHeightClassName from '../hooks/usePageHeightClassName'
import SocialMediaLinks from './(components)/SocialMediaLinks'

const Home = () => {
  const heightClassName = usePageHeightClassName()

  return (
    <div
      className={`flex flex-col justify-center items-center text-green gap-6 ${heightClassName}`}
    >
      <div className='text-4xl md:text-9xl text-center font-extralight'>
        Lauris Melderis
      </div>
      <div className='text-md md:text-xl text-center font-extralight italic'>
        lauris.melderis77@gmail.com
      </div>
      <SocialMediaLinks />
    </div>
  )
}

export default Home
