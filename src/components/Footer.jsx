import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-12 bg-[#FDFDFD] dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-4">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white transition-colors">Let’s Connect</h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-slate-600 dark:text-slate-400">
          <p className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">
            <MapPin size={18} className="text-blue-600 dark:text-blue-400" /> Erode, Tamil Nadu, India
          </p>
          <a href="mailto:praneashp@gmail.com" className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition-colors">
            <Mail size={18} className="text-blue-600 dark:text-blue-400" /> praneashp@gmail.com
          </a>
          <a href="tel:+919715499118" className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition-colors">
            <Phone size={18} className="text-blue-600 dark:text-blue-400" /> +91 97154 99118
          </a>
        </div>
        <div className="pt-8 text-sm text-slate-500 dark:text-slate-500 mt-4 border-t border-slate-100 dark:border-slate-900">
          <p>© {new Date().getFullYear()} Praneash M G. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
