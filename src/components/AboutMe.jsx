import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Briefcase, Code } from 'lucide-react';

// ✅ Using the path you confirmed earlier
import profileImage from '../assets/praneash.jpeg'; 

// --- Animation Variants (Editorial / Smooth) ---
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.9, ease: "easeOut" } 
  }
};

const slideInRight = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } 
  }
};

const containerStagger = {
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};

const AboutMe = () => {
  return (
    <section className="bg-[#FAFAFA] dark:bg-slate-950 py-24 px-6 md:px-12 lg:py-32 overflow-hidden border-b border-neutral-200/60 dark:border-slate-800 transition-colors duration-300">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerStagger}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
      >
        
        {/* --- LEFT COLUMN (Typography Anchor) --- */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full">
          <motion.div variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-8 bg-neutral-900 dark:bg-white"></span>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-400">About Me</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 dark:text-white leading-[1.1] mb-8 transition-colors">
              Praneash M G. <br />
              <span className="text-neutral-400 dark:text-neutral-500">Full Stack Developer.</span>
            </h2>

            <div className="space-y-6 text-lg text-neutral-600 dark:text-neutral-300 font-light leading-relaxed max-w-md transition-colors">
              <p>
                I am a developer from Erode, Tamil Nadu, holding an M.Sc. in Software Systems. 
                I work as a full-stack developer at <strong className="text-neutral-900 dark:text-white font-medium">Groww Park Technologies</strong>, 
                focusing on building clean, responsive, and user-friendly web interfaces and robust backends.
              </p>
              <p>
                I specialize in translating real-world requirements into functional platforms using React, Node.js, PostgreSQL, and Tailwind CSS.
              </p>
            </div>

            <motion.div 
              variants={fadeInUp} 
              className="mt-10 flex items-center gap-2 text-neutral-900 dark:text-white font-medium text-sm group cursor-pointer w-max"
            >
              <span>View my journey</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </motion.div>
          </motion.div>
        </div>

        {/* --- CENTER COLUMN (Visual Anchor) --- */}
        <div className="lg:col-span-4 flex flex-col gap-6 mt-8 lg:mt-0">
          <motion.div 
            variants={imageReveal}
            className="relative w-full aspect-[3/4] rounded-sm overflow-hidden bg-neutral-200 dark:bg-neutral-800 shadow-sm"
          >
            {/* Main Portrait */}
            <img 
              src={profileImage} 
              alt="Praneash M G Portrait" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 hover:scale-105"
            />
          </motion.div>

          {/* Minimal Stat Highlight */}
          <motion.div variants={fadeInUp} className="flex flex-col border-l-2 border-neutral-900 dark:border-white pl-4 py-1">
            <span className="text-3xl font-bold text-neutral-900 dark:text-white leading-none">6+ Months</span>
            <span className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 font-medium uppercase tracking-wide">Real-world Full-Stack Experience</span>
          </motion.div>
        </div>

        {/* --- RIGHT COLUMN (Editorial Details) --- */}
        <div className="lg:col-span-3 flex flex-col gap-10 mt-8 lg:mt-24">
          
          {/* Small Circle Image */}
          <motion.div variants={slideInRight} className="w-20 h-20 rounded-full overflow-hidden border border-white dark:border-slate-800 shadow-md">
             <img 
              src={profileImage} 
              alt="Detail Shot" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
             />
          </motion.div>

          {/* Editorial Statements */}
          <div className="space-y-8">
            <motion.div variants={slideInRight} className="group">
              <div className="flex items-center gap-3 mb-2 text-neutral-900 dark:text-white">
                <Briefcase size={18} className="text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors" />
                <h3 className="font-medium text-sm uppercase tracking-wide">Experience</h3>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed border-l border-neutral-200 dark:border-neutral-700 pl-4 group-hover:border-neutral-400 dark:group-hover:border-neutral-500 transition-colors">
                Formerly a React Developer Intern at <strong className="text-neutral-900 dark:text-white">Nutz Technovation</strong> (6 months). Currently developing at Groww Park Technologies.
              </p>
            </motion.div>

            <motion.div variants={slideInRight} className="group">
              <div className="flex items-center gap-3 mb-2 text-neutral-900 dark:text-white">
                <Code size={18} className="text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors" />
                <h3 className="font-medium text-sm uppercase tracking-wide">Philosophy</h3>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed border-l border-neutral-200 dark:border-neutral-700 pl-4 group-hover:border-neutral-400 dark:group-hover:border-neutral-500 transition-colors">
                I learn by building. My focus is entirely on usability, responsiveness, and creating clean layouts that solve actual UI problems.
              </p>
            </motion.div>

            <motion.div variants={slideInRight} className="group">
              <div className="flex items-center gap-3 mb-2 text-neutral-900 dark:text-white">
                <MapPin size={18} className="text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors" />
                <h3 className="font-medium text-sm uppercase tracking-wide">Location</h3>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed border-l border-neutral-200 dark:border-neutral-700 pl-4 group-hover:border-neutral-400 dark:group-hover:border-neutral-500 transition-colors">
                Based in Erode, Tamil Nadu. Building for the web globally.
              </p>
            </motion.div>
          </div>

        </div>

      </motion.div>
    </section>
  );
};

export default AboutMe;