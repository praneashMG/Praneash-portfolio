import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Code2, Database, Layout } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-3xl shadow-2xl flex flex-col md:flex-row border border-slate-200 dark:border-slate-800 no-scrollbar transition-colors duration-300"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-full text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            {/* Left side: Image/Media */}
            <div className="w-full md:w-2/5 h-[300px] md:h-auto relative bg-slate-100 dark:bg-slate-950 flex-shrink-0">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent md:hidden" />
              <div className="absolute bottom-4 left-4 right-4 md:hidden">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider rounded-full">
                  {project.category}
                </span>
                <h3 className="text-3xl font-bold text-white mt-2">{project.title}</h3>
              </div>
            </div>

            {/* Right side: Content */}
            <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col">
              
              <div className="hidden md:block mb-8">
                <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider rounded-full">
                  {project.category}
                </span>
                <h3 className="text-4xl font-bold text-slate-900 dark:text-white mt-4">{project.title}</h3>
              </div>

              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light mb-8">
                  {project.description}
                </p>

                {/* Simulated Details Sections based on project context */}
                <div className="space-y-6">
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-slate-900 dark:text-white mb-2">
                      <Layout size={18} className="text-blue-500" /> Architecture & UI
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      Designed with a modular component architecture ensuring rapid re-usability and fluid responsive states across all modern viewports.
                    </p>
                  </div>
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-slate-900 dark:text-white mb-2">
                      <Database size={18} className="text-emerald-500" /> Backend Infrastructure
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      Secured API endpoints handling complex relational queries, optimized for low-latency responses and high concurrent loads.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-10 flex flex-wrap gap-4">
                {project.url !== "#" && (
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors shadow-lg shadow-blue-600/20"
                  >
                    View Live Site <ExternalLink size={18} />
                  </a>
                )}
                {project.links && project.links.map((link, idx) => (
                  <a 
                    key={idx}
                    href={link.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white px-6 py-3 rounded-xl font-medium transition-colors"
                  >
                    {link.name} <ExternalLink size={18} />
                  </a>
                ))}
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
