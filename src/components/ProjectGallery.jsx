import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  Code2, 
  Cpu, 
  BrainCircuit, 
  Database, 
  ShoppingBag, 
  Utensils, 
  Gem, 
  Smartphone 
} from "lucide-react";

// --- Data (Exact Content) ---
const projects = [
  {
    id: 1,
    title: "MobileMart",
    description: "A comprehensive mobile e-commerce platform engineered for seamless shopping experiences and high conversion.",
    image: "https://images.unsplash.com/photo-1512428559087-560fa0db7901?q=80&w=800&auto=format&fit=crop", // Mobile/App
    tags: ["React", "Mobile", "UX/UI"],
    url: "#",
    icon: <Smartphone className="w-5 h-5" />
  },
  {
    id: 2,
    title: "Glamora",
    description: "High-performance beauty marketplace utilizing React Vite for speed and Tailwind for bespoke styling.",
    image: "https://images.unsplash.com/photo-1612817288484-969160d0d419?q=80&w=800&auto=format&fit=crop", // Beauty/Cosmetics
    tags: ["React Vite", "Tailwind CSS"],
    url: "#",
    icon: <Code2 className="w-5 h-5" />
  },
  {
    id: 3,
    title: "Luxe Jewellery",
    description: "An elegant digital storefront for luxury items, focusing on visual fidelity and premium brand identity.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop", // Jewelry
    tags: ["React", "E-commerce"],
    url: "#",
    icon: <Gem className="w-5 h-5" />
  },
  {
    id: 4,
    title: "PGR Restaurant",
    description: "Interactive dining platform featuring dynamic menus, reservation systems, and smooth transitions.",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop", // Restaurant
    tags: ["Frontend", "Interactive"],
    url: "#",
    icon: <Utensils className="w-5 h-5" />
  },
  {
    id: 5,
    title: "Physio Portal",
    description: "Secure clinic management system with a robust PHP/SQL backend for patient data handling.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop", // Medical
    tags: ["PHP", "SQL", "Full Stack"],
    url: "#",
    icon: <Database className="w-5 h-5" />
  },
  {
    id: 6,
    title: "IoT Smart Lock",
    description: "Hardware-software integration POC for secure remote access control systems via mobile app.",
    image: "https://images.unsplash.com/photo-1558002038-1091a1661116?q=80&w=800&auto=format&fit=crop", // IoT/Hardware
    tags: ["IoT", "Embedded", "POC"],
    url: "#",
    icon: <Cpu className="w-5 h-5" />
  },
  {
    id: 7,
    title: "Academic Predictor",
    description: "IEEE published Machine Learning ensemble for analyzing and predicting student performance trends.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop", // ML/Code
    tags: ["Python", "ML", "Research"],
    url: "#",
    icon: <BrainCircuit className="w-5 h-5" />
  }
];

// --- Animations (Premium Feel) ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } // Custom cubic-bezier for "Apple-like" smooth stop
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

export default function ProjectGallery() {
  return (
    <section className="relative w-full min-h-screen bg-slate-50 py-24 px-6 md:px-12 lg:px-20 overflow-hidden font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      
      {/* Background Texture: Subtle Dot Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.4]" 
           style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="max-w-3xl mb-20"
        >
          <motion.div variants={fadeInUp} className="flex items-center space-x-3 mb-6">
            <span className="h-px w-8 bg-blue-600"></span>
            <span className="text-blue-600 font-bold tracking-widest text-xs uppercase">Selected Works</span>
          </motion.div>
          
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-8">
            Engineering digital experiences with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">precision.</span>
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl font-light">
            A curated showcase of technical projects ranging from full-stack web applications 
            to machine learning research and IoT integrations.
          </motion.p>
        </motion.div>

        {/* Grid Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              className="group block h-full outline-none cursor-pointer"
            >
              <article className="h-full flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-500 ease-out hover:-translate-y-2">
                
                {/* Image Container */}
                <div className="relative w-full h-64 overflow-hidden bg-slate-100 border-b border-slate-100">
                  
                  {/* Image */}
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                  
                  {/* Subtle Dark Overlay on Hover */}
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-500" />
                  
                  {/* Floating Action Button (Arrow) */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2.5 rounded-full shadow-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-[0.22,1,0.36,1]">
                    <ArrowUpRight className="w-5 h-5 text-slate-900" />
                  </div>

                  {/* Icon Badge (Bottom Left) */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md p-2 rounded-lg shadow-sm border border-slate-100">
                    <div className="text-blue-600">
                      {project.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                     {project.title}
                  </h3>
                  
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-slate-100">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="px-2.5 py-1 text-xs font-semibold text-slate-500 bg-slate-50 rounded-md border border-slate-200 group-hover:border-blue-100 group-hover:text-blue-600 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer/Call to Action */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <a href="https://github.com/praneashMG" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium transition-colors border-b border-transparent hover:border-slate-900 pb-1">
            View Github Profile <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}