import React from 'react'
import { getImageUrl } from '../../utils'
const Carding = (props) => {
  return (
    
    <div  style={{background: "linear-gradient(to bottom, #0f0821, #241d34)"}} className='  border-2 border-[#332c42]    md:pb-4 px-6 w-full  md:h-[350px]   md:flex-1  flex flex-col pb-10 lg:pb-4   rounded-3xl  gap-5 '>
 
    <div className='ml-[-2.25rem]'>
    <img className='' src={getImageUrl(props.val)} alt='none'></img>
    </div>  
    <h1 className='font-bold text-custom-purple text-xl md:text-2xl '>{props.h}
    </h1>
    <p className='  text-[#b8b0c9] leading-7  md:text-lg '>{props.p}
    </p>
  
  </div>
  )
}

export default Carding