import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Cpu,
} from "lucide-react";

/* ------------------ DATA ------------------ */

const experiences = [
  {
    company: "Groww Park Technologies",
    isCurrent: true,
    roles: [
      {
        title: "Full Stack Developer",
        period: "Promotion (Recent)",
        desc: "Transitioned to full-stack engineering, architecting both frontend interfaces and scalable backend solutions using Node.js and PostgreSQL."
      },
      {
        title: "Frontend Developer",
        period: "6 Months",
        desc: "Built responsive, user-friendly web interfaces using React and Tailwind CSS with a strong focus on clean UI and performance."
      }
    ]
  },
  {
    company: "Nutz Technovation",
    isCurrent: false,
    roles: [
      {
        title: "React Frontend Developer (Intern)",
        period: "Jun 2024 – Oct 2024",
        desc: "Developed MobileMart (React-based e-commerce) and Glamora (Beauty product platform using React Vite & Tailwind CSS)."
      }
    ]
  }
];

const education = [
  {
    degree: "M.Sc. Software Systems (Completed)",
    school: "Kongu Engineering College",
    score: "CGPA 7.51",
  },
];

const research = {
  title: "Improved Student Performance Prediction",
  subtitle: "Stacking Ensemble Learning",
  desc: "Published IEEE Conference Paper (2025). Built a machine learning ensemble combining Decision Tree, KNN, and Random Forest to predict academic performance with improved accuracy.",
};

/* ------------------ ANIMATION ------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/* ------------------ COMPONENTS ------------------ */

const Section = ({ title, children }) => (
  <section className="py-24 bg-[#FDFDFD] dark:bg-slate-950 transition-colors duration-300">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white mb-12 transition-colors">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

/* ------------------ MAIN ------------------ */

export default function AboutUs() {
  return (
    <div className="text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">

      {/* EXPERIENCE */}
      <Section title="Experience">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {experiences.map((exp, idx) => (
            <div key={idx} className={`border-l-2 pl-6 md:pl-8 ${exp.isCurrent ? 'border-blue-600' : 'border-slate-200 dark:border-slate-800'}`}>
              <div className="flex items-center gap-2 mb-4">
                <Briefcase size={20} className={exp.isCurrent ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400'} />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.company}</h3>
              </div>
              
              <div className="space-y-8 mt-6">
                {exp.roles.map((role, rIdx) => (
                  <div key={rIdx} className="relative">
                    {/* Timeline dot */}
                    <div className={`absolute -left-[35px] md:-left-[43px] top-1.5 w-3 h-3 rounded-full border-2 border-white dark:border-slate-950 ${rIdx === 0 && exp.isCurrent ? 'bg-blue-600' : 'bg-slate-300 dark:bg-slate-700'}`}></div>
                    
                    <h4 className="font-semibold text-lg text-slate-900 dark:text-white mb-1">{role.title}</h4>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">{role.period}</p>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                      {role.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </Section>

      {/* RESEARCH */}
      <Section title="Research & Publication">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-slate-900 dark:bg-slate-800 border border-transparent dark:border-slate-700 text-white rounded-2xl p-8 md:p-12 transition-colors duration-300"
        >
          <div className="flex items-center gap-2 text-blue-400 mb-4">
            <Cpu size={18} />
            <span className="uppercase tracking-wide text-sm">
              IEEE Conference Paper
            </span>
          </div>
          <h3 className="text-2xl font-semibold mb-2">{research.title}</h3>
          <p className="text-blue-200 mb-4">{research.subtitle}</p>
          <p className="text-slate-300 leading-relaxed max-w-3xl">
            {research.desc}
          </p>
        </motion.div>
      </Section>

      {/* EDUCATION */}
      <Section title="Education">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="border border-slate-200 dark:border-slate-800 rounded-xl p-6 max-w-xl mb-4 transition-colors"
          >
            <div className="flex items-center gap-2 mb-2 text-teal-600 dark:text-teal-400">
              <GraduationCap size={18} />
              <span className="font-medium">{edu.degree}</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300">{edu.school}</p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{edu.score}</p>
          </motion.div>
        ))}
      </Section>

    </div>
  );
}
