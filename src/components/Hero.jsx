import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Github,
  Linkedin,
  Download,
  Mail,
  Phone,
  ChevronRight,
} from "lucide-react";

import profileImage from "../assets/praneash.jpeg";

/* ------------------ ANIMATIONS ------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

/* ------------------ HERO ------------------ */

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 120]);
  const y2 = useTransform(scrollY, [0, 500], [0, -120]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen bg-slate-50 pt-24  pb-5  overflow-hidden">
      {/* background texture */}
      <div
        className="absolute inset-0 opacity-[0.25] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#94a3b8 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* soft blobs */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute top-0 right-0 w-[420px] h-[420px] bg-blue-100/60 rounded-full blur-[120px]"
      />
      <motion.div
        style={{ y: y2, opacity }}
        className="absolute bottom-0 left-0 w-[520px] h-[520px] bg-indigo-100/60 rounded-full blur-[140px]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* TEXT */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-8"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-50 border border-blue-100 rounded-full"
          >
            Frontend Developer · Groww Park Technologies
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]"
          >
            Building Thoughtful <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Frontend Experiences
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed"
          >
            I’m a frontend engineer focused on building accessible,
            pixel-perfect, and high-performance web interfaces using
            modern frontend architecture.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="/PRANEASH MG 21ISR035.pdf"
              download
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-sm flex items-center justify-center gap-2 hover:bg-blue-700 transition shadow-lg shadow-blue-600/20"
            >
              <Download size={18} /> Download Resume
            </a>

          <a
  href="mailto:praneashp@gmail.com"
  className="group bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-full font-semibold text-sm flex items-center justify-center gap-2 hover:border-slate-300 hover:text-slate-900 transition"
>
  Contact Me
  <ChevronRight
    size={16}
    className="group-hover:translate-x-1 transition-transform"
  />
</a>

          </motion.div>

          {/* tech stack */}
          <motion.div
            variants={fadeUp}
            className="pt-8 border-t border-slate-200 w-full max-w-md"
          >
            <p className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-3">
              Tech Stack
            </p>
   <div className="flex flex-wrap lg:flex-nowrap gap-3">
  {[
    "React",
    "Tailwind CSS",
    "WordPress",
    "Next.js",
    "React Native",
    "Flutter",
  ].map((tech) => (
    <span
      key={tech}
      className="px-3 py-1 text-sm font-medium text-slate-700 bg-slate-100 border border-slate-200 rounded-full whitespace-nowrap"
    >
      {tech}
    </span>
  ))}
</div>


          </motion.div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full border-2 border-slate-200 translate-x-3 translate-y-3" />
            <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl bg-slate-100">
              <img
                src={profileImage}
                alt="Praneash M G"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ------------------ EXPORT ------------------ */

export default Hero;
