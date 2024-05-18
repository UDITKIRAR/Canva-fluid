import React from 'react'
import { getImageUrl } from '../utils';
import Carding from './Carding/Carding';
const Cards = () => {
  return (
    <div className='mt-20  flex  md:p-3  flex-col gap-4'>
        <div>
        <h1 style={{ fontFamily: 'Sora, sans-serif' }} className='text-custom-purple lg:whitespace-nowrap text-4xl leading-10 font-bold text-center'>An All-Round Plugin With Powerful <span className='md:hidden text-4xl leading-8 font-bold my-4 text-center'>Features</span> </h1>
        <h1 style={{ fontFamily: 'Sora, sans-serif' }} className=' hidden md:block text-custom-purple lg:whitespace-nowrap text-4xl leading-8 font-bold my-4 text-center'>Features</h1>
        </div>
        <div className=''>
        <p className=' text-[#EEE5FFBD]   whitespace-nowrap  text-lg text-center '>Whether you're a seasoned web designer or just starting out, Motion Art for</p>
        <p className=' text-[#EEE5FFBD]  md:whitespace-nowrap text-lg text-center '>Elementor seamlessly integrates with the Elementor platform, providing you </p>
        <p className=' text-[#EEE5FFBD] whitespace-nowrap  text-lg text-center '> with a seamless and intuitive experience.</p>
        </div>         
        <div className='mt-16 mx-4  flex flex-col items-center md:flex-wrap   md:flex-row gap-4 md:justify-evenly rounded-xl'>
                 <Carding val={"hero/motionarteffect-img9.png"} h={"Light Weight"} p={"Motion Art for Elementor is designed to be lightweight."}></Carding>
                 <Carding val={"hero/motionarteffect-img6.png"} h={"100% Responsive"} p={"Create a consistent visual experience across all devices."}  ></Carding>
                 <Carding val={"hero/motionarteffect-img7.png"} h={"User Friendly Interface"} p={"Ensure a smooth experience for both applicants and administrators."}></Carding>
        </div>
   </div>
  )
}

export default Cards;