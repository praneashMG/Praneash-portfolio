import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all ${
        isScrolled
          ? "bg-white/100 backdrop-blur-md border-slate-200 py-4 shadow-sm"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <span className="text-xl md:text-2xl font-extrabold tracking-[0.2em] bg-gradient-to-r from-slate-900 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
          PRANEASH MG
        </span>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/praneashMG"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-slate-500 hover:text-blue-600 hover:bg-slate-100 rounded-full transition"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/praneash-m-g-9a2075286"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-slate-500 hover:text-blue-600 hover:bg-slate-100 rounded-full transition"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:praneashp@gmail.com"
            className="p-2 text-slate-500 hover:text-blue-600 hover:bg-slate-100 rounded-full transition"
          >
            <Mail size={20} />
          </a>

          <a
            href="tel:+919715499118"
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-full"
          >
            <Phone size={14} />
            Book a Call
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
