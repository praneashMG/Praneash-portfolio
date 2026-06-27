import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Frontend Development",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Vite", "Tailwind CSS"],
    color: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800/50"
  },
  {
    category: "Backend Development",
    skills: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "MySQL", "PHP", "Core SQL"],
    color: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800/50"
  },
  {
    category: "CMS & Platforms",
    skills: ["WordPress Development", "Elementor Pro", "Custom UI/Layout Engineering"],
    color: "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800/50"
  },
  {
    category: "Tools & Workflow",
    skills: ["Git", "GitHub", "Figma", "Vercel", "Netlify", "Version Control Workflows"],
    color: "bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700"
  }
];

const Skills = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 px-6 md:px-12 border-t border-slate-100 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16 flex flex-col md:items-center text-center">
          <div className="flex items-center gap-3 mb-4 md:justify-center">
            <span className="h-px w-8 bg-blue-600"></span>
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400">Expertise</span>
            <span className="h-px w-8 bg-blue-600 hidden md:block"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors">
            Core Technical Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {skillsData.map((section, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col gap-4"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 transition-colors">
                {section.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {section.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${section.color}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
