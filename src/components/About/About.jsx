import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";
import { IoIosStar } from "react-icons/io";
export const About = () => {
  return (
    <div className='mt-12 mt-20 flex flex-col'>
      <p className='text-center mt-10 tracking-wider whitespace-nowrap text-xl md:text-2xl text-custom-purple'>Trusted by thousands of users around the world</p>
      <div className='flex gap-8 md:flex-nowrap flex-wrap mt-10 flex-row justify-evenly md:justify-between p-5'>
        <div style={{ fontFamily: 'Sora, sans-serif' }}  className='flex flex-row gap-5 items-center mb-3 md:mb-0' >
          <img src={getImageUrl("hero/motionarteffect-img2.png")} />
          <div className='flex flex-col gap-5'>
              <div>
              <img src={getImageUrl("hero/motionarteffect-img4.png")} />
                </div>
            <p style={{ fontFamily: 'Sora, sans-serif' }}  className='whitespace-nowrap text-sm  text-[#b8b0c9]'><span className='font-bold'>4.5</span> Score, 9 Reviews</p>
          </div>
        </div>
        <div className='flex flex-row gap-5 items-center mb-3 md:mb-0' >
          <img src={getImageUrl("hero/motionarteffect-img1.png")} />
          <div className='flex flex-col gap-5'>
          <div>
              <img src={getImageUrl("hero/motionarteffect-img4.png")} />
                </div>
            <p style={{ fontFamily: 'Sora, sans-serif' }}  className='whitespace-nowrap text-sm text-[#b8b0c9] '><span className='font-bold'>4.5</span> Score, 9 Reviews</p>
          </div>
        </div>
        <div className='flex flex-row gap-6 items-center mb-3 md:mb-0' >
          <img src={getImageUrl("hero/motionarteffect-img3.png")} />
          <div className='flex  flex-col gap-5'>
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
