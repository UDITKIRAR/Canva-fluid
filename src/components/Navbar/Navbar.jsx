import React from 'react';
import styles from "./Navbar.module.css";
import { getImageUrl } from '../../utils';
import { Hero } from '../Hero/Hero';
import { About } from '../About/About';
import { Experience } from '../Experience/Experience';
import { Projects } from '../Projects/Projects';
import Chrome from '../Chrome';
import Cards from '../Cards';
import { Contact } from '../Contact/contact';



export const Navbar = () => {
  return (
    <div>

    <nav className={styles.navbar}>
      <div className='flex justify-between items-center w-full'>


      <img src={getImageUrl("hero/MotionArtEffect-logo.png")} />
      <div className="px-9 hidden lg:block py-3 bg-white text-black text-lg rounded-md border-2 border-white transition duration-600 ease-out cursor-pointer hover:bg-transparent hover:text-white hover:border-2 hover:border-white">

        <a href='https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891'>Purchase Now</a>


      </div>
      </div>
      

    <Hero />
      <About />
      <Experience />
      <Projects />
      <Chrome />
      <Cards />
      <Contact />
    </nav>
    </div>
  )
};
