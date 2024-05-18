import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Experience } from "../Experience/Experience";
import { Projects } from "../Projects/Projects";
import Chrome from "../Chrome";
import Cards from "../Cards";
import { Contact } from "../Contact/contact";

export const Navbar = () => {
  const [show,setshow]=useState(false);
  return (
    <div>
      
       
       <nav style={{ pointerEvents: show ? 'none' : 'auto' }} className={styles.navbar}>
       <button  className="  text-white mt-[-2]" onClick={(e)=>{
           setshow(!show);
           setTimeout(()=>{
            setshow(false);
           },10000)
           setTimeout(()=>{
            setshow(true);
           },10)
      }}>ToggleEffect</button>
        <div className="flex justify-between items-center w-full px-3">
          <img src={getImageUrl("hero/MotionArtEffect-logo.png")} />
          <div>
            <div className="px-9 hidden lg:block py-3 bg-white text-black pointers-events-auto text-lg rounded-md border-2 border-white transition duration-600 ease-out cursor-pointer hover:bg-transparent hover:text-white hover:border-2 hover:border-white">
              <a href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891"
              onMouseLeave={()=>{
                 setshow(true);
              }}  onMouseEnter={()=>{
                setshow(false);
              }}      >
            
                Purchase Now
              </a>
            </div>
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
  );
};
