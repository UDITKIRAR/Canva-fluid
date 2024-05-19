import React from 'react'
import { getImageUrl } from '../utils';
const Chrome = () => {
  return (
    <div style={{background: "linear-gradient(to bottom, #0f0821, #241d34)"}} className='mx-5 border-2 border-[#332c42] lg:mt-40 mt-10 rounded-3xl px-3 pb-3 pt-5'>
   <div className='flex  p-8 flex-col gap-7 md:pb-6 md:gap-5'>
        <h1 style={{ fontFamily: 'Sora, sans-serif' }} className='text-custom-purple md:text-2xl text-xl tracking-wider font-semibold text-center'>Supported by All Popular Browsers</h1>
        <p className='text-[#b8b0c9] text-lg  text-center '>Rest assured, Motion Art is designed to be <br></br> compatible  with  all major web browsers.</p>
        <div className=' flex justify-evenly p-4'>
        <img  className='md:fixed-size h-auto w-auto ' src={getImageUrl("hero/motionarteffect-img8.png")} alt='none'></img>
        </div>
   </div>
   </div>
  )
}

export default Chrome;