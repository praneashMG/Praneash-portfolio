import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import AboutMe from './components/AboutMe';
import HorizontalGallery from './components/HorizontalGallery';
import FeaturedProjects from './components/FeaturedProjects';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App bg-slate-50 min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <FeaturedProjects />
        <HorizontalGallery />
        <section id="about">
          <AboutUs />
        </section>
      </main>
      <Footer />
    </div>
  );
}


export default App;
