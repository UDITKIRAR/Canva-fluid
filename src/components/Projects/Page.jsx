import React from 'react'
import { getImageUrl } from '../../utils'
const Page = () => {
  return (
    <div className='flex  p-4 flex-col items-start gap-4'>
     <h1 style={{ fontFamily: 'Sora, sans-serif' }} className='font-bold  md:whitespace-nowrap  text-2xl text-custom-purple'>Apply On Page
          </h1>
          <p className=' leading-7 text-[#b8b0c9] '>Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.</p>
          
          <div className=''>
          <img className='' src={getImageUrl("hero/motionarteffect-img10.png")} alt='none'></img>
        
          </div>
   
  </div>
  
  )
}

export default Page