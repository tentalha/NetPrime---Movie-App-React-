import React from 'react'
import Loading from './Loadingv2.gif'
function Spinner() {
  return (
    <div className='w-screen flex justify-center items-center bg-inherit'>
        <img src={Loading} alt="Loading" className='mt-4' />
    </div>
  )
}

export default Spinner