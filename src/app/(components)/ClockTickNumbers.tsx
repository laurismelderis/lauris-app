import React from 'react'

const ClockTickNumbers = () => {
  return (
    <div className='w-full h-full [&_*]:absolute'>
      <div style={{ right: '25%', top: '6.5%' }}>1</div>
      <div style={{ right: '8%', top: '23%' }}>2</div>
      <div style={{ right: '1%', top: 'calc(50% - 10px)' }}>3</div>
      <div style={{ right: '8%', top: '68%' }}>4</div>
      <div style={{ right: '24%', top: '85%' }}>5</div>
      <div style={{ right: 'calc(50% - 5px)', top: 'calc(99% - 20px)' }}>6</div>
      <div style={{ left: '24%', top: '85%' }}>7</div>
      <div style={{ left: '8%', top: '68%' }}>8</div>
      <div style={{ left: '1%', top: 'calc(50% - 10px)' }}>9</div>
      <div style={{ left: '8%', top: '23%' }}>10</div>
      <div style={{ left: '25%', top: '6.5%' }}>11</div>
      <div style={{ right: 'calc(50% - 10px)', top: '1%' }}>12</div>
    </div>
  )
}

export default ClockTickNumbers
