import React from 'react';
export const Contact = () => {

 
    const gradientStyle = {
      background: 'linear-gradient(90deg, #F87516 0%, #5E11FF 100%)'
    };
  
  return (
   
        <div style={gradientStyle} className=' md:mt-32 mt-4 text-[#EEE5FFBD] justify-start  md:pt-5 text-sm md:p-6  gap-4 md:mb-[-1rem] mb-[0rem] flex flex-col flex-col-reverse content-end items-center md:flex-row md:justify-between md:px-2  ' >
             <p >© 2023 Copywrite. All rights reserved by QodeMatrix</p>
             <div className='flex  flex-row gap-4 justify-evenly'>
                 <div>
                 <a href='https://qodematrix.com/docs/motion-art-for-elementor/'>Documentation</a>
                 </div>
                 <div>
                 <a href='https://support.qodematrix.com/login'>Support</a>
                 </div>
             </div>
        </div>
      
  )
}
