import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Cpu,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

/* ------------------ DATA ------------------ */

const experience = {
  company: "Groww Park Technologies",
  role: "Frontend Developer",
  period: "2025 – Present",
  desc: "Currently working as a Frontend Developer, building responsive, user-friendly web interfaces using React and Tailwind CSS with a strong focus on clean UI and performance."
};

const internship = {
  company: "Nutz Technovation",
  role: "React Frontend Developer (Intern)",
  period: "Jun 2024 – Oct 2024",
  projects: [
    "MobileMart – React-based e-commerce platform",
    "Glamora – Beauty product platform using React Vite & Tailwind CSS",
  ],
};

const education = [
  {
    degree: "M.Sc. Software Systems (Pursuing)",
    school: "Kongu Engineering College",
    score: "CGPA 7.48",
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
  <section className="py-24">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-12">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

/* ------------------ MAIN ------------------ */

export default function Portfolio() {
  return (
    <div className="bg-[#FDFDFD] text-slate-900 font-sans">

      {/* EXPERIENCE */}
      <Section title="Experience">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div className="border-l-2 border-blue-600 pl-6">
            <div className="flex items-center gap-2 mb-2 text-blue-600">
              <Briefcase size={18} />
              <span className="font-medium">
                {experience.role}
              </span>
            </div>
            <p className="font-semibold">{experience.company}</p>
            <p className="text-sm text-slate-500 mb-3">{experience.period}</p>
            <p className="text-slate-600 leading-relaxed max-w-2xl">
              {experience.desc}
            </p>
          </div>

          <div className="border-l-2 border-slate-200 pl-6">
            <p className="font-semibold">{internship.company}</p>
            <p className="text-sm text-slate-500 mb-3">
              {internship.role} • {internship.period}
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-1">
              {internship.projects.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </Section>

      {/* RESEARCH */}
      <Section title="Research & Publication">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-slate-900 text-white rounded-2xl p-8 md:p-12"
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
            className="border border-slate-200 rounded-xl p-6 max-w-xl"
          >
            <div className="flex items-center gap-2 mb-2 text-teal-600">
              <GraduationCap size={18} />
              <span className="font-medium">{edu.degree}</span>
            </div>
            <p className="text-slate-700">{edu.school}</p>
            <p className="text-sm text-slate-500 mt-1">{edu.score}</p>
          </motion.div>
        ))}
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 py-12">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-4">
          <h3 className="text-xl font-semibold">Let’s Connect</h3>
          <div className="flex flex-wrap justify-center gap-6 text-slate-600">
            <span className="flex items-center gap-2">
              <MapPin size={16} /> Erode, India
            </span>
            <a
              href="mailto:praneashp@gmail.com"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <Mail size={16} /> praneashp@gmail.com
            </a>
            <span className="flex items-center gap-2">
              <Phone size={16} /> +91 9715499118
            </span>
          </div>
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Praneash M G
          </p>
        </div>
      </footer>
    </div>
  );
}
