import React from 'react'
import { getImageUrl } from '../../utils'
const Carding = (props) => {
  return (
    
    <div  style={{background: "linear-gradient(to bottom, #0f0810, #0f0830)"}} className='    pb-5 px-8 w-full  md:h-[400px]   md:flex-1  flex flex-col  md:py-1  rounded-3xl  gap-5'>
 
    <div className='w-full'>
    <img className='ml-[-2.25rem]' src={getImageUrl(props.val)} alt='none'></img>
    </div>  
    <h1 className='font-bold text-custom-purple text-2xl '>{props.h}
    </h1>
    <p className='  text-[#b8b0c9] leading-7   text-lg '>{props.p}
    </p>
  
  </div>
  )
}

export default Carding