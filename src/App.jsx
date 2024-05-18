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

function App() {
  const img = getImageUrl('projects/project.png');

  return (
    <>
     <Canvas/>
    <div className={styles.App}>
     
      <Navbar />
      {/* <Hero />
      <About />
      <Experience />
      <Projects />
      <Chrome />
      <Cards />
      <Contact /> */}

      </div>
    </>
  );
}

export default App;
