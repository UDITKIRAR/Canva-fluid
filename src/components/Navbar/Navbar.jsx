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
import { FaArrowRightLong } from "react-icons/fa6";

export const Navbar = () => {
  const gradientStyle = {
    background: 'linear-gradient(90deg, #5e11f5 0%, #5e11f5 30%,#F87516 100%)'

  };
  return (
    <div className="flex flex-col  ">
      <nav className="order-3 flex  flex-col md:flex-row md:justify-between mt-18 md:mt-16   ">
        <div className="flex flex-col-reverse  ">
          <div className={styles.navbar3}>
            <div className=" mt-10 pointers-event-auto  p-4 flex flex-col gap-4 col-span-3">
              <p className="text-custom-purple lg:text-4xl md:text-3xl text-[26px] tracking-wide  lg:leading-normal md:leading-relaxed font-bold   ">
               Turn Your Cursor Into A Colorful Magic Wand & Charm Your
                Visitors
              </p>
              
              <div className="mt-3 text-custom-purple ">
                <p className=" lg:text-lg md:whitespace-wrap text-[#b8b0c9]  ">
                  Motion Art for Elementor is a groundbreaking plugin that
                  empowers you to effortlessly infuse  your website with visually stunning motion art elements.
                </p>
              </div>
            </div>
          </div>
          <div className="flex  z-100 relative justify-between items-center w-full px-3">
            <div className="border-3px   rounded-md w-full h-auto flex justify-center md:block mt-4">
              <a style={gradientStyle}  href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891" className="p-4 pointer-event-auto relative px-18 inline-flex justify-center items-center gap-6   rounded-2xl px-8">
                <div className=" ">
                  <a style={{fontFamily:'Outfit'
                  }}
                    className="text-white text-[21px]  "
                    href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891"
                  >
                    Purchase from Envato
                  </a>
                </div>
                <div>
                  <FaArrowRightLong className="text-white text-xl font-thin" />
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* <div className={styles.navbar3}> */}
        <div style={{}} className={`${styles.img}   relative pointers-event-auto text-gradient z-1 flex justify-center  items-center md:ml-24  pt-8`}>
          <img className=" md:w-[300px] md:h-auto "
            src={getImageUrl("hero/motionarteffect-img5.png")}
            alt="none"
          ></img>
        </div>
        {/* </div> */}
      </nav>

      <nav className="order-1">
        <div className="flex md:mt-18 mt-20 z-0 relative justify-between items-center w-full px-3">
          <img
            className="cursor-pointer"
            src={getImageUrl("hero/MotionArtEffect-logo.png")}
          />
          <div>
            <div className="px-9 hidden  lg:block py-[11px] bg-white text-black text-lg rounded-md border-2 border-white transition duration-800 ease-out cursor-pointer hover:bg-transparent hover:text-white hover:border-2 hover:border-white">
              <a href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891">
                Purchase Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      <nav className={styles.navbar}>
        <Hero />
        <About />
      </nav>

      <nav className={styles.navbar1}>
        {/* <Experience /> */}
        <Projects />
        <Chrome />
        <Cards />
      </nav>
      {/* <Contact /> */}
    </div>
  );
};
