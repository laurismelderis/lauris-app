import React from 'react'

const ClockTicks = () => {
  return (
    <div className='w-full h-full [&_*]:absolute'>
      <div style={{ right: '22%', top: '6.5%' }}>1</div>
      <div style={{ right: '6%', top: '25%' }}>2</div>
      <div style={{ right: '1%', top: 'calc(50% - 10px)' }}>3</div>
      <div style={{ right: '6%', top: '69%' }}>4</div>
      <div style={{ right: '22%', top: '84%' }}>5</div>
      <div style={{ right: 'calc(50% - 5px)', top: 'calc(99% - 20px)' }}>6</div>
      <div style={{ left: '22%', top: '84%' }}>7</div>
      <div style={{ left: '6%', top: '69%' }}>8</div>
      <div style={{ left: '1%', top: 'calc(50% - 10px)' }}>9</div>
      <div style={{ left: '6%', top: '25%' }}>10</div>
      <div style={{ left: '22%', top: '6.5%' }}>11</div>
      <div style={{ right: 'calc(50% - 10px)', top: '1%' }}>12</div>
    </div>
  )
}

export default ClockTicks
