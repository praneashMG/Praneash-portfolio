// src/App.jsx
import React from 'react';
import Portfolio from './components/Hero'; // Adjust path if your file name or folder is different
import './App.css';
import AboutUs from './components/AboutUs'
import AboutMe from './components/AboutMe'
// import ProjectShowcase from './components/ProjectShowcase';
import HorizontalGallery from './components/HorizontalGallery';
// import ProjectGallery from './components/ProjectGallery';
function App() {
  return (
    <div className="App">
      <Portfolio />
       <section id="projects">
      </section>
      <AboutMe/>
      {/* <ProjectGallery/> */}
        {/* <ProjectShowcase/> */}
      <HorizontalGallery/>
      <section id="about">
        <AboutUs />
      </section>
      <section id="contact">
      </section>
    </div>
  );
}


export default App;
