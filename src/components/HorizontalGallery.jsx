import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import magImage from "../assets/mag.png";
import conImage from "../assets/cons.png";
import portImg from "../assets/port.png";

const projects = [
  {
    id: 1,
    title: "Magazine Platform",
    category: "News & Content",
    image: magImage,
    url: "https://groww-magazine.vercel.app/",
  },
  {
    id: 2,
    title: "Construction Website",
    category: "Business Website",
    image: conImage,
    url: "https://growwconstruction.vercel.app/",
  },
  {
    id: 3,
    title: "Developer Portfolio",
    category: "Portfolio",
    image: portImg,
    url: "https://growwportfolio.vercel.app/",
  },
  {
    id: 4,
    title: "Music Platform",
    category: "Entertainment",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    url: "https://groww-music.vercel.app/",
  },
  {
    id: 5,
    title: "Home Renovation",
    category: "Interior Design",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    url: "https://groww-home-renovation.vercel.app/",
  },
  {
    id: 6,
    title: "Boat Website",
    category: "Product Website",
    image:
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
    url: "https://growwboat.vercel.app/",
  },
  {
    id: 7,
    title: "Tattoo Studio",
    category: "Creative Studio",
    image:
      "https://images.unsplash.com/photo-1542728928-1413d1894ed1",
    url: "https://groww-tattoo-piercing-studio.vercel.app/",
  },
  
];

const duplicated = [...projects, ...projects];

export default function HorizontalGallery() {
  const controls = useAnimation();
  const trackRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      controls.start({
        x: ["0%", "-50%"],
        transition: {
          duration: 35,
          ease: "linear",
          repeat: Infinity,
        },
      });
    }
  }, [controls, isMobile]);

  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="relative w-full">

        <motion.div
          ref={trackRef}
          className="flex gap-10 w-max px-6"
          animate={!isMobile ? controls : undefined}
          drag={isMobile ? "x" : false}
        >
          {(isMobile ? projects : duplicated).map((project, index) => (
            <Card key={index} project={project} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
function Card({ project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="shrink-0 w-[85vw] sm:w-[420px] group"
    >
      <div className="relative overflow-hidden rounded-2xl shadow-lg">

        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[300px] object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 p-6 text-white">

          <p className="text-xs tracking-widest opacity-80 uppercase">
            {project.category}
          </p>

          <h3 className="text-xl font-semibold mt-1">
            {project.title}
          </h3>

          <div className="flex items-center gap-2 mt-3 text-sm opacity-90 group-hover:translate-x-1 transition">
            View Project
            <ArrowUpRight size={16} />
          </div>

        </div>

      </div>
    </a>
  );
}