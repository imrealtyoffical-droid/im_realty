"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";

const warehouseModules = [
  {
    id: "01",
    title: "Phase 1: Structural Exterior",
    desc: "A massive commercial warehouse footprint designed for maximum logistical efficiency and durability in the heart of Bhiwandi's industrial hub.",
    images: ["/images/out.jpeg", "/images/out 2.jpeg", "/images/out 3.jpeg", "/images/out 4.jpeg"],
    tags: ["High-Load Flooring", "Wide Span Design", "Logistical Hub"]
  },
  {
    id: "02",
    title: "Phase 2: Strategic Interiors",
    desc: "Optimized internal volumes with advanced ventilation and lighting systems, tailored for large-scale enterprise storage and distribution.",
    images: ["/images/in1.jpeg", "/images/in2.jpeg", "/images/in3.jpeg", "/images/in4.jpeg"],
    tags: ["Volume Optimization", "Natural Ventilation", "Smart Storage"]
  }
];

const ImageSlider = ({ images }: { images: string[] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="h-full w-full overflow-hidden relative group/slider">
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={index}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full w-full"
        >
          <Image
            src={images[index]}
            alt="Exterior Development"
            fill
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Indicator dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
        {images.map((_, i) => (
          <div 
            key={i} 
            className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${i === index ? 'bg-primary-red w-4' : 'bg-white/30'}`}
          />
        ))}
      </div>
    </div>
  );
};

const CommercialProject = () => {
  return (
    <section className="bg-[#050505] py-24 md:py-40 px-6 md:px-24 overflow-hidden relative">
      {/* Background Decorative Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5">
        <div className="h-full w-[1px] bg-white absolute left-4 md:left-32 hidden md:block" />
        <div className="h-full w-[1px] bg-white absolute right-4 md:right-32 hidden md:block" />
        <div className="w-full h-[1px] bg-white absolute top-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 md:mb-32 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-primary-red text-[10px] font-bold tracking-[0.5em] uppercase mb-6 block">Industrial Development / 2026</span>
            <h2 className="text-4xl md:text-8xl font-bold uppercase tracking-tighter leading-none">
              Commercial<br /> <span className="text-white/10 italic font-serif lowercase text-5xl md:text-7xl block mt-2">Logistics</span>
            </h2>
            <div className="flex items-center space-x-4 mt-8">
              <div className="w-12 h-[1px] bg-primary-red" />
              <p className="text-[10px] uppercase tracking-[0.4em] text-silver/60">Bhiwandi, Maharashtra</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="max-w-md text-silver/40 text-[9px] md:text-[10px] uppercase tracking-widest leading-loose text-left md:text-right"
          >
            <p>Our industrial expansion in Bhiwandi sets a new benchmark for commercial warehouse infrastructure, blending strategic location with high-performance structural methodology.</p>
            <Link href="/contact">
              <button className="mt-8 px-8 md:px-10 py-3 md:py-4 bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] hover:bg-primary-red hover:text-white transition-all duration-500">
                Inquire Now
              </button>
            </Link>
          </motion.div>
        </div>

        <div className="space-y-24 md:space-y-64">
          {warehouseModules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className={`group flex flex-col ${index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-20 items-center`}
            >
              {/* Module Image */}
              <div className="w-full lg:w-7/12 relative h-[400px] md:h-[700px] overflow-hidden group border border-white/5">
                <motion.div
                  initial={{ filter: "grayscale(100%) brightness(60%)" }}
                  whileInView={{ filter: "grayscale(0%) brightness(100%)" }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ duration: 1 }}
                  className="h-full w-full"
                >
                  <ImageSlider images={module.images} />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 pointer-events-none" />
                <div className="absolute top-10 right-10 z-20">
                  <span className="text-white/20 text-6xl font-serif italic group-hover:text-primary-red transition-colors duration-1000">{module.id}</span>
                </div>
              </div>

              {/* Module Info */}
              <div className="w-full lg:w-5/12 space-y-10">
                <motion.span
                  className="text-primary-red text-[10px] font-bold tracking-[0.6em] uppercase"
                >
                  Phase / 0{index + 1}
                </motion.span>
                <h3 className="text-4xl md:text-6xl font-serif italic tracking-tighter leading-tight group-hover:text-primary-red transition-colors duration-500">
                  {module.title}
                </h3>
                <p className="text-silver/40 text-sm leading-loose max-w-sm">
                  {module.desc}
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  {module.tags.map((tag) => (
                    <span key={tag} className="text-[8px] uppercase tracking-widest text-white/40 border border-white/10 px-4 py-2 hover:border-primary-red hover:text-white transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-8">
                  <Link href="/contact" className="flex items-center space-x-6 group/btn">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:border-primary-red transition-colors">
                      <Plus size={16} className="text-white group-hover/btn:text-primary-red transition-colors" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-white/50 group-hover/btn:text-white transition-colors">Learn More</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommercialProject;
