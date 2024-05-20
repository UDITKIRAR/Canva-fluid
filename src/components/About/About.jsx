import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";
import { IoIosStar } from "react-icons/io";
export const About = () => {
  return (
    <div className='mt-12  md:mt-20 flex flex-col'>
      <p className='text-center  mt-10 tracking-wider whitespace-nowrap text-xl md:text-2xl text-custom-purple'>Trusted by thousands of users around the world</p>
      <div className='flex gap-10  lg:gap-8 lg:flex-nowrap  mt-10 mx-0 lg:flex-row lg:flex flex-col items-center justify-center lg:justify-between p-5 lg:px-2 md:grid md:grid-cols-5 md:grid-rows-2 md:gap-16 md:gap-x-22 md:gap-y-16 md:mr-[100px] lg:mr-[0]   '>
        <div style={{ fontFamily: 'Sora, sans-serif' }}  className='flex flex-row gap-5 items-center mb-3 md:mb-0 md:row-start-1 md:col-start-2 md:col-end-3 md:w-full lg:w-auto ' >
          <img src={getImageUrl("hero/motionarteffect-img2.png")} />
          <div className='flex flex-col  gap-5 pt-[8px]'>
              <div>
              <img src={getImageUrl("hero/motionarteffect-img4.png")} />
                </div>
            <p style={{ fontFamily: 'Sora, sans-serif' }}  className='whitespace-nowrap text-sm  text-[#b8b0c9]'><span className='font-bold'>4.5</span> Score, 9 Reviews</p>
          </div>
        </div>
        <div className='flex flex-row gap-5 items-center mb-3 md:mb-0 md:row-start-1 md:col-start-4 md:col-end-5 ' >
          <img src={getImageUrl("hero/motionarteffect-img1.png")} />
          <div className='flex flex-col pt-[8px] gap-5'>
          <div>
              <img src={getImageUrl("hero/motionarteffect-img4.png")} />
                </div>
            <p style={{ fontFamily: 'Sora, sans-serif' }}  className='whitespace-nowrap text-sm text-[#b8b0c9] '><span className='font-bold'>4.5</span> Score, 9 Reviews</p>
          </div>
        </div>
        <div className='flex flex-row gap-6   items-center mb-3 md:mb-0 md:row-start-2 md:col-start-3' >
          <img src={getImageUrl("hero/motionarteffect-img3.png")} />
          <div className='flex pt-[8px]  flex-col gap-5'>
          <div >
              <img src={getImageUrl("hero/motionarteffect-img4.png")} />
                </div>
            <p style={{ fontFamily: 'Sora, sans-serif' }}  className='whitespace-nowrap text-sm text-[#b8b0c9] '><span className='font-bold'>4.5</span> Score, 9 Reviews</p>
          </div>
        </div>

      </div>

    </div>
  )
}
