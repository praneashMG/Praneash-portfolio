import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Services from './components/Services';
import HorizontalGallery from './components/HorizontalGallery';
import FeaturedProjects from './components/FeaturedProjects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="App bg-slate-50 dark:bg-slate-950 min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 transition-colors duration-300 overflow-x-hidden">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Services />
        <FeaturedProjects />
        <HorizontalGallery />
        <section id="about">
          <AboutUs />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}


export default App;
