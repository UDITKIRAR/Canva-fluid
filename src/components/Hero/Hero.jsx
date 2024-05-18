import React from 'react'
import styles from "./hero.module.css";
import { getImageUrl } from '../../utils';
export const Hero = () => {
   return (
      <div className='flex-col z-21 justify-center pointers-none items-center md:items-start md:justify-start md:flex-row flex gap-5 p-6 mt-11'>
         <div className='flex flex-col   text-xl   text-white'>

            <h1 className='text-transparent  bg-gradient-to-r-custom  bg-clip-text'>Transform  </h1>
            <h1 className='text-transparent  bg-gradient-to-r-custom  bg-clip-text lg:whitespace-nowrap '>Your Website</h1>

            <p className='mt-2  text-lg'>With Motion </p>
            <p className='lg:whitespace-nowrap text-lg'>Art Effect</p>

         </div>
         <div className='flex text-white flex-col justify-start items-start w-full md:ml-40 ml-0 '>
            <div className='md:w-100 w-full text-lg text-custom-purple'>
               <div className=' leading-10' >
                  <h1 style={{ fontFamily: 'Sora, sans-serif' }} className='text-6xl lg:whitespace-nowrap ' >Attract Your Visitors </h1>
                  <h1 style={{ fontFamily: 'Sora, sans-serif' }} className='text-6xl
               lg:whitespace-nowrap  py-2' > Attention With</h1>
                  <h1 style={{ fontFamily: 'Sora, sans-serif' }} className='text-6xl
               lg:whitespace-nowrap py-2' >Colorful</h1>
                  <h1 style={{ fontFamily: 'Sora, sans-serif' }} className=' text-6xl
              lg: whitespace-nowrap py-2'> <span className='text-transparent bg-gradient-to-r-custom  bg-clip-text'>Motion</span> <span className='text-[#5e11ff]'>Art Effect</span></h1>
               </div>
               <div className='mt-3 text-custom-purple'>
                  <p className=' lg:whitespace-nowrap '>Unleash the power of creativity with Motion Art for Elementor - your ultimate </p>
                  <p className=' lg:whitespace-nowrap '>solution for seamlessly integrating captivating animations into your website. </p>
               </div>

            </div>
         </div>
      </div>
   )
}
