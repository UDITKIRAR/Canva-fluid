import React from 'react'
import { getImageUrl } from '../../utils';
import { FaArrowRightLong } from "react-icons/fa6";
export const Experience = () => {
  return (
  
    <div className='mt-10 z-[0] relative pointer-event-auto relative flex grid-cols-5 md:grid flex-col wrap justify-center items-center md:flex-row md:justify-between'>
      <div className=' mt-10 pointers-event-auto  p-5 flex flex-col gap-4 col-span-3'>
        <p className='text-custom-purple text-3xl tracking-widest  font-bold'>Turn Your Cursor Into A Colorful Magic <br /> Wand & Charm Your Visitors</p>
        <div className='mt-3 text-custom-purple w-full '>
          <p className=' text-lg lg:whitespace-nowrap '>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse </p>
          <p className=' text-lg lg:whitespace-nowrap '>your website with visually stunning motion art elements. </p>
        </div>
        <div  className='border-3px cursor-pointer z-1 relative pointer-event-auto rounded-md w-full h-auto flex justify-center md:block mt-4'>
          <div className='p-4 pointer-event-auto relative px-16 inline-flex justify-center items-center gap-6  bg-gradient-to-r from-indigo-800 to-orange-500 rounded-2xl px-8'>
            <div className=' '>
              <a className='text-white text-xl ' href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891">Purchase from Envato</a>
            </div>
            <div>
              <FaArrowRightLong className='text-white text-xl font-thin' />
            </div>
          </div>
        </div>
      </div>



      <div className='md:justify-end z-1 relative pointer-event-auto flex justify-center  col-span-2'>
          <img  className='fixed-size' src={getImageUrl("hero/motionarteffect-img5.png")} alt='none'></img>
      </div>
      </div>
      
  )
}