import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Link2, ExternalLink } from 'lucide-react';

import servicehubImg from '../assets/servicehub.png.png';
import ProjectModal from './ProjectModal';

const featuredProjects = [
  {
    id: 1,
    title: "ServiceHub Platform",
    category: "React Vite, Node.js, PostgreSQL",
    description: "Full-stack services platform built with an interactive frontend state structure and backed by relational database engines.",
    image: servicehubImg,
    url: "https://servicehub-theta.vercel.app/",
    status: "Live Demo"
  },
  {
    id: 2,
    title: "Agriculture Livestock & Products",
    category: "Full Stack Platform",
    description: "A comprehensive marketplace for buying and selling agriculture animals, along with associated products like food and medicine.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2064&auto=format&fit=crop", // Agriculture/Farm
    url: "#",
    status: "Coming Soon"
  },
  {
    id: 3,
    title: "Real Estate Management Ecosystem",
    category: "WordPress, Elementor Engine",
    description: "Provisioned custom dynamic layouts for property portfolios. Managed clean relational data blocks optimized for rapid rendering.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop", // Real Estate
    url: "#",
    status: "Architecture View",
    links: [
      { name: "Architecture 1", url: "https://drive.google.com/file/d/1D6XWMdHkwtGS_1ZXRu8zeSstemYIiKYl/view" },
      { name: "Architecture 2", url: "https://drive.google.com/file/d/1rFTMm-WQtZnXhshkVRTNRYC7wU6dZ9au/view" }
    ]
  }
];

const ProjectCard = ({ project, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
      className="group flex flex-col gap-6 w-full"
    >
      <div className="relative w-full aspect-video overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-900 shadow-sm border border-slate-200/50 dark:border-slate-800/50">
        <div onClick={onClick} className="block w-full h-full cursor-pointer">
          <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 dark:group-hover:bg-black/30 transition-colors duration-500 z-10" />
          
          <div className="w-full h-full">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          <div className="absolute top-4 right-4 z-20 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
            <div className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white p-3 rounded-full shadow-lg">
              <ArrowUpRight size={20} />
            </div>
          </div>
          
          {/* Status Badge */}
          <div className="absolute top-4 left-4 z-20">
             <span className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full shadow-sm backdrop-blur-md ${project.status === 'Coming Soon' ? 'bg-amber-100/90 text-amber-800' : 'bg-blue-100/90 text-blue-800'}`}>
                {project.status}
             </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {project.title}
          </h3>
          <span className="text-xs font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400">
            {project.category}
          </span>
        </div>
        
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base max-w-xl">
          {project.description}
        </p>

        {project.links && (
           <div className="flex flex-wrap gap-3 mt-2">
              {project.links.map((link, idx) => (
                <a key={idx} href={link.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-700 px-3 py-1.5 rounded-full">
                  <ExternalLink size={14} />
                  {link.name}
                </a>
              ))}
           </div>
        )}
      </div>
    </motion.div>
  );
};

const FeaturedProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="bg-white dark:bg-slate-950 text-slate-900 py-32 px-6 md:px-12 border-t border-slate-100 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-200 pb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
               <span className="h-px w-8 bg-blue-600"></span>
               <span className="text-xs font-bold tracking-widest uppercase text-blue-600">Featured Work</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors break-words">
              Full-Stack <br className="hidden md:block"/> Implementations.
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400 text-lg max-w-sm leading-relaxed transition-colors"
          >
            A showcase of comprehensive platforms, ongoing developments, and architectural solutions engineered for scale.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          {featuredProjects.map((project, index) => (
             <ProjectCard key={project.id} project={project} index={index} onClick={() => setSelectedProject(project)} />
          ))}
        </div>
      </div>
      
      <ProjectModal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        project={selectedProject} 
      />
    </section>
  );
};

export default FeaturedProjects;
