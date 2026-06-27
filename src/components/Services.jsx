import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Cpu } from 'lucide-react';

const services = [
  {
    icon: <Layout size={32} />,
    title: "Frontend Architecture",
    description: "Transforming structural vector schemas from Figma into highly responsive, accessible DOM structures using React, Vite, and Tailwind CSS.",
  },
  {
    icon: <Server size={32} />,
    title: "Full-Stack Platforms",
    description: "Architecting end-to-end web applications with interactive frontend state structures backed by relational database engines like PostgreSQL and MySQL.",
  },
  {
    icon: <Cpu size={32} />,
    title: "CMS Engineering",
    description: "Provisioning custom dynamic layouts and data blocks for WordPress and Elementor, optimizing them for rapid rendering and fluid user experiences.",
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900 px-6 md:px-12 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16 flex flex-col md:items-center text-center">
          <div className="flex items-center gap-3 mb-4 md:justify-center">
            <span className="h-px w-8 bg-blue-600"></span>
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400">What I Do</span>
            <span className="h-px w-8 bg-blue-600 hidden md:block"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors">
            Services & Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white dark:bg-slate-950 p-10 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-xl bg-blue-50 dark:bg-slate-900 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-500 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
