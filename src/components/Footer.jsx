import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 py-12 bg-[#FDFDFD]">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-4">
        <h3 className="text-xl font-semibold text-slate-900">Let’s Connect</h3>
        <div className="flex flex-wrap justify-center gap-6 text-slate-600">
          <span className="flex items-center gap-2">
            <MapPin size={16} /> Erode, India
          </span>
          <a
            href="mailto:praneashp@gmail.com"
            className="flex items-center gap-2 hover:text-blue-600 transition"
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
  );
};

export default Footer;
