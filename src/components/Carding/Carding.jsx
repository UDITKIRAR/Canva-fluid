import React from 'react'
import { getImageUrl } from '../../utils'
const Carding = (props) => {
  return (
    
    <div  style={{background: "linear-gradient(to bottom, #0f0821, #241d34)"}} className=' border-2 border-[#332c42]    md:pb-4 px-8 w-full  md:h-[400px]   md:flex-1  flex flex-col pb-10 md:py-1  rounded-3xl  gap-5'>
 
    <div className='w-full'>
    <img className='ml-[-2.25rem]' src={getImageUrl(props.val)} alt='none'></img>
    </div>  
    <h1 className='font-bold text-custom-purple text-xl md:text-2xl '>{props.h}
    </h1>
    <p className='  text-[#b8b0c9] leading-7   md:text-lg '>{props.p}
    </p>
  
  </div>
  )
}

export default Carding