import React from 'react'
import styles from "./hero.module.css";
import { getImageUrl } from '../../utils';
export const Hero = () => {
   const gradientStyle = {
      background: 'linear-gradient(90deg, #F87516 0%, #5E11FF 100%)'
    };
   return (
      <div className='mt-[-4px]'>
      <div className='flex-col  justify-center items-center md:items-start md:justify-start md:flex-row flex gap-6 p-6 '>
         <div className='flex flex-col   text-lg   text-white'>

            <h1 className='text-transparent tracking-wider text-[19px]  bg-gradient-to-r-custom-2 font-[600] bg-clip-text'>Transform  </h1>
            <h1 className='text-transparent tracking-wider md:pb-2 text-[19px]   bg-gradient-to-r-custom-2  font-[600] bg-clip-text lg:whitespace-nowrap '>Your Website</h1>

            <p className='md:mt-2 mt-4 inline text-custom-purple    text-lg'>With Motion <span>  <p className='lg:whitespace-nowrap md:hidden text-custom-purple  inline text-lg'>Art Effect</p></span> </p>
            <p className='lg:whitespace-nowrap inline text-custom-purple hidden  md:block text-lg'>Art Effect</p>

         </div>
         <div className='flex    flex-col justify-start items-start w-full md:ml-40 ml-[1]   '>
            <div className='md:w-100   w-full text-lg text-custom-purple '>
               <div className='lg:flex lg:flex-col   md:leading-10 ' >
                  <h1 style={{ fontFamily: 'Sora, sans-serif' }} className='lg:text-[56px] pb-3 md:pb-4 lg:py-4 text-4xl lg:whitespace-nowrap font-[500] ' >Attract Your Visitors </h1>
                  <h1 style={{ fontFamily: 'Sora, sans-serif' }} className='lg:text-[56px]   md:pb-4  font-[500]   text-4xl 
               lg:whitespace-nowrap  lg:py-4' > Attention With <span><h1 style={{ fontFamily: 'Sora, sans-serif' }} className='lg:text-[56px] inline md:block font-[500]      lg:hidden  text-4xl 
                lg:py-4 pt-4 pb-2' >Colorful</h1></span></h1>
                  <h1 style={{ fontFamily: 'Sora, sans-serif' }} className='lg:text-[56px] font-[500]  hidden lg:block text-4xl 
               lg:whitespace-nowrap lg:py-4' >Colorful</h1>
                  <h1 style={{ fontFamily: 'Sora, sans-serif' }} className=' lg:text-[56px]  text-4xl  md:py-0 py-4
              lg: whitespace-nowrap lg:py-4'> <span style={{ fontFamily: 'Sora, sans-serif' }} className='text-transparent  bg-gradient-to-r-custom-2 font-[500]    bg-clip-text'>Motion Art Effect</span></h1>
               </div>
               <div className='mt-4 md:mt-6  text-custom-purple'>
                  <p className=' inline md:block lg:whitespace-nowrap text-base lg:text-lg  text-[#b8b0c9] '>Unleash the power of creativity with Motion Art for Elementor - your ultimate </p>
                  <p className=' inline md:block lg:whitespace-nowrap text-base  lg:text-lg text-[#b8b0c9] '>solution for seamlessly integrating captivating animations into your website. </p>
               </div>

            </div>
         </div>
      </div>
      </div>
   )
}
