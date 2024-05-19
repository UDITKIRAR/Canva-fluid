import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import { getImageUrl } from './utils';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/contact';
import './index.css';
import Chrome from './components/Chrome';
import Cards from './components/Cards';
import Canvas from './components/Canvas';
import { FaArrowRightLong } from "react-icons/fa6";
function App() {
  const img = getImageUrl('projects/project.png');
  
 
  const gradientStyle = {
    background: 'linear-gradient(90deg, #F87516 0%, #5E11FF 100%)'
  };


  return (
    <>
     <div>
   
     
    <div className={styles.App}>

    <Canvas/>
      <Navbar />
      {/* <Hero />
      <About />
   
      <Projects />
      <Chrome />
      <Cards />
      <Contact /> */}

      </div>
    
    </div>
    <div className='pointers-event-auto z-100 relative p-[-100px]  '>
    <div style={gradientStyle} className=' md:mt-32 mt-3 text-[#EEE5FFBD] justify-start md:p-5   text-sm md:pb-3  gap-4 md:mb-[-1rem] mb-[0rem] flex flex-col flex-col-reverse content-end items-center md:flex-row md:justify-between md:px-2 p-5 pb-3 gap-6 ' >
             <p >© 2023 Copywrite. All rights reserved by QodeMatrix</p>
             <div className='flex  flex-row gap-8  justify-evenly'>
                 <div>
                 <a className='hover:text-white ' href='https://qodematrix.com/docs/motion-art-for-elementor/'>Documentation</a>
                 </div>
                 <div>
                 <a className='hover:text-white ' href='https://support.qodematrix.com/login'>Support</a>
                 </div>
             </div>
        </div>
      
      </div>
      </>
  );
}

export default App;
