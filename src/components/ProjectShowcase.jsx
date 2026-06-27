import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// --- Data: Refined & Professional ---
const projects = [
  {
    id: 1,
    title: "MobileMart",
    category: "E-Commerce Architecture",
    description: "A comprehensive full-stack e-commerce solution featuring complex inventory management, real-time order tracking, and a high-performance mobile-first interface.",
    tags: ["React", "Node.js", "Redux", "Payment Gateway"],
    image: "https://images.unsplash.com/photo-1512428559087-560fa0cec34f?q=80&w=2070&auto=format&fit=crop", // Phone/App vibe
    link: "#"
  },
  {
    id: 2,
    title: "Glamora",
    category: "Beauty Marketplace",
    description: "Modern beauty retail platform implementing advanced filtering logic, user reviews, and optimized image delivery for a visually rich shopping experience.",
    tags: ["React", "Tailwind CSS", "UX Design"],
    image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1974&auto=format&fit=crop", // Beauty/Product
    link: "#"
  },
  {
    id: 3,
    title: "Luxe Jewellery",
    category: "Luxury Retail",
    description: "A premium digital storefront focused on brand storytelling. Features high-fidelity galleries, zoom interactions, and a bespoke checkout flow.",
    tags: ["React", "Framer Motion", "Stripe"],
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop", // Jewelry
    link: "#"
  },
  {
    id: 4,
    title: "PGR Restaurant",
    category: "Hospitality Platform",
    description: "Interactive single-page application for reservation management and dynamic menu rendering, improving operational efficiency for staff and guests.",
    tags: ["React", "Firebase", "Real-time DB"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop", // Restaurant
    link: "#"
  },
  {
    id: 5,
    title: "Physio Portal",
    category: "Healthcare Management",
    description: "Secure patient management system designed for physiotherapy clinics. Handles scheduling, patient records, and treatment tracking with strict data privacy.",
    tags: ["React", "Dashboard", "Secure Auth"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop", // Medical/Clean
    link: "#"
  },
  {
    id: 6,
    title: "IoT Smart Lock",
    category: "Hardware Integration",
    description: "Bridging hardware and software. A web interface interacting with IoT devices to control security access, log entry data, and manage user permissions remotely.",
    tags: ["IoT", "WebSockets", "React", "Hardware"],
    image: "https://images.unsplash.com/photo-1558002038-109177381792?q=80&w=2070&auto=format&fit=crop", // Tech/Hardware
    link: "#"
  },
  {
    id: 7,
    title: "Academic Predictor",
    category: "Machine Learning (IEEE)",
    description: "Research-driven project utilizing machine learning algorithms to analyze student data and predict academic performance trends. Published under IEEE standards.",
    tags: ["Python", "ML Algorithms", "Data Analysis", "Research"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", // Data/Analytics
    link: "#"
  }
];

// --- Sub-Component: The Scroll Card ---
const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  
  // Parallax Effect: Image moves slightly slower than scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]); // Subtle 10% parallax

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }} // Triggers when 100px into view
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.1 }}
      className="group flex flex-col gap-6 w-full"
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100 shadow-sm">
        <a href={project.link} className="block w-full h-full cursor-pointer">
          <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/10 transition-colors duration-500 z-10" />
          
          {/* Parallax Image */}
          <motion.div style={{ y }} className="w-full h-full">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-[115%] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </motion.div>

          {/* Hover Arrow Reveal */}
          <div className="absolute top-4 right-4 z-20 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
            <div className="bg-white text-neutral-900 p-3 rounded-full shadow-lg">
              <ArrowUpRight size={20} />
            </div>
          </div>
        </a>
      </div>

      {/* Text Content - Editorial Style */}
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-baseline">
          <h3 className="text-2xl font-medium text-neutral-900 tracking-tight group-hover:text-neutral-600 transition-colors duration-300">
            {project.title}
          </h3>
          <span className="text-xs font-medium uppercase tracking-widest text-neutral-400">
            {project.category}
          </span>
        </div>
        
        <p className="text-neutral-600 leading-relaxed text-base max-w-xl">
          {project.description}
        </p>

        {/* Minimal Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="px-3 py-1 bg-neutral-100 text-neutral-500 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Section ---
const ProjectShowcase = () => {
  return (
    <section className="bg-[#FAFAFA] text-neutral-900 py-32 px-6 md:px-12 relative overflow-hidden">
      
      {/* Subtle Grain Texture (Optional - adds premium feel) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise.png")' }} 
      />

      <div className="max-w-7xl mx-auto">
        
        {/* Header - Editorial Layout */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-neutral-200 pb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
               <div className="w-1.5 h-1.5 bg-neutral-900 rounded-full" />
               <span className="text-xs font-bold tracking-widest uppercase text-neutral-500">Selected Works</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-neutral-900">
              Crafting Digital <br className="hidden md:block"/> Reliability.
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-500 text-lg max-w-sm leading-relaxed"
          >
            A curated selection of frontend, full-stack, and research projects focused on usability, performance, and real-world implementation.
          </motion.p>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((project, index) => (
             <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectShowcase;