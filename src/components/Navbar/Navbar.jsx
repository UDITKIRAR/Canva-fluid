import React from 'react';
import styles from "./Navbar.module.css";
import { getImageUrl } from '../../utils';
export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
    <img  src={getImageUrl("hero/MotionArtEffect-logo.png")}/>
    <div className="px-9 hidden lg:block py-3 bg-white text-black text-lg rounded-md border-2 border-white transition duration-600 ease-out cursor-pointer hover:bg-transparent hover:text-white hover:border-2 hover:border-white">
      
        <a href='https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891'>Purchase Now</a>
       
    </div>
    </nav>
  )
};
