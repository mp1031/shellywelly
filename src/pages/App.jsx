import React, { useState } from "react";
import NavBar from './NavBar';
import Background from './Background'
import Intro from './Intro';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';


function App() {
  return (
    <div>
        <Background />
        <NavBar />
        <Intro />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
