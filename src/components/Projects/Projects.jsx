import React from 'react'
import { getImageUrl } from '../../utils';
import Section from './Section';
import Page from './Page';
export const Projects = () => {
  return (
    <div className='flex mt-36 flex-col p-3'>
      <p className='text-center  font-bold  lg:whitespace-nowrap text-3xl md:text-4xl text-white'>Apply On Any Section Or  Enable  <br></br>
      </p>
      <p className='text-center mb-16  font-bold mt-3 lg:whitespace-nowrap  text-3xl  tracking-wider md:text-4xl text-white'>For Whole Page</p>
      <div className='mx-4'>
        <div className='flex  flex-col gap-3 md:flex-row md:flex md:justify-around '>
          <div className='p-8 mb-12  rounded-xl ' style={{ background: "linear-gradient(to bottom, #0f0810, #0f0830)" }}>
            <Section></Section>
          </div>
          <div className='p-8  mt-12  rounded-xl  ' style={{ background: "linear-gradient(to bottom, #0f0810, #0f0830)" }}>
          <Page></Page>
          </div>



        </div>
      </div>

    </div>


  )
}
