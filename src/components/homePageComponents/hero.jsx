import React from 'react'
import askola from '../../../public/askola.svg'
function Hero() {
  return (
    <div className='w-full flex items-center justify-center flex-col '>
        <img className='mt-16' src={askola} alt="" />
        <h1 className='text-2xl font-semibold mt-10'>Learn more with askola</h1>
        <h3 className='text-sm m-4 font-semibold border-2 rounded-md border-black p-2'>1000 ⭐</h3>
        <hr className='h-2 bg-gray-200 w-full'/>
    </div>
  )
}

export default Hero