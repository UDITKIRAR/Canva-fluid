import React from 'react'
import { getImageUrl } from '../../utils';
import Section from './Section';
import Page from './Page';
export const Projects = () => {
  return (
    <div className='flex md:mt-36 mt-22  flex-col p-3'>
      <p style={{ fontFamily: 'Sora, sans-serif' }}  className='text-center  md:font-semibold  lg:whitespace-nowrap text-2xl md:text-3xl lg:text-4xl font-[600] text-custom-purple'>Apply On Any Section Or  Enable  <br></br>
      </p>
      <p style={{ fontFamily: 'Sora, sans-serif' }} className='text-center mb-16  md:font-semibold mt-5 lg:whitespace-nowrap  text-2xl md:text-3xl lg:text-4xl font-[600] tracking-wider  text-custom-purple'>For Whole Page</p>
      <div className='md:mx-2 mx-0'>
        <div className='flex  flex-col  md:gap-4 md:flex-row md:flex md:justify-around '>
          <div className='p-8 mb-6   mb-12 border-2 border-b-[0px] border-[#332c42] rounded-2xl 'style={{background: "linear-gradient(to bottom, #0f0821, #241d34)"}}>
            <Section></Section>
          </div>
          <div className='p-8   md:mt-12  rounded-2xl border-2 border-b-[0px] border-[#332c42] ' style={{background: "linear-gradient(to bottom, #0f0821, #241d34)"}}>
          <Page></Page>
          </div>
        </div>
      </div>

    </div>


  )
}
