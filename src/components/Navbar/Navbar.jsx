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
  return (
    <div className="flex flex-col mt-4 ">
      <nav className="order-3 flex  flex-col md:flex-row md:justify-between  md:mt-20   ">
        <div className="flex flex-col-reverse  ">
          <div className={styles.navbar3}>
            <div className=" mt-10 pointers-event-auto  p-4 flex flex-col gap-4 col-span-3">
              <p className="text-custom-purple lg:text-4xl text-[25px] tracking-wide leading-10 font-bold ">
               Turn Your Cursor Into A Colorful Magic<br /> Wand & Charm Your
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
              <a  href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891" className="p-4 pointer-event-auto relative px-18 inline-flex justify-center items-center gap-6  bg-gradient-to-r from-indigo-800 to-orange-500 rounded-2xl px-8">
                <div className=" ">
                  <a
                    className="text-white text-xl "
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
