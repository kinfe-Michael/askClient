import React from 'react'
import Hero from '../../components/homePageComponents/hero'
import Items from '../../components/homePageComponents/item'
import { DiGhostSmall } from 'react-icons/di'
function HomePage() {
    
  return (
    <div className=' w-full h-full'>
        <Hero/>
        <div className='flex items-center justify-around flex-wrap'>
        <Items />
        </div>
    </div>
  )
}

export default HomePage