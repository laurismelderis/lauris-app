import usePageHeightClassName from '../hooks/usePageHeightClassName'

const Home = () => {
  const heightClassName = usePageHeightClassName()

  return (
    <div
      className={`flex flex-col justify-center items-center text-green ${heightClassName}`}
    >
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
