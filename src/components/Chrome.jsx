import React from 'react'
import { getImageUrl } from '../utils';
const Chrome = () => {
  return (
    <div style={{background: "linear-gradient(to bottom, #0f0810, #0f0830)"}} className='mx-4 mt-40 rounded-xl p-4'>
   <div className='flex  p-8 flex-col gap-6'>
        <h1 style={{ fontFamily: 'Sora, sans-serif' }} className='text-custom-purple text-2xl tracking-wider font-semibold text-center'>Supported by All Popular Browsers</h1>
        <p className='text-[#b8b0c9] text-lg text-center '>Rest assured, Motion Art is designed to be compatible <br></br> with  all major web browsers.</p>
        <div className=' flex justify-evenly'>
        <img  className='fixed-size' src={getImageUrl("hero/motionarteffect-img8.png")} alt='none'></img>
        </div>
   </div>
   </div>
  )
}

export default Chrome;