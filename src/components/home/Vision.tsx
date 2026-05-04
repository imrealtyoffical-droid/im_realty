"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight, Maximize2, Zap } from "lucide-react";
import Link from "next/link";

const Vision = () => {
  const categories = [
    { id: "01", title: "Premium Living", desc: "Elevation & structural design", img: "/images/Elevation.jpg" },
    { id: "02", title: "Wellness First", desc: "Clubhouse & social amenities", img: "/images/Clubhouse.jpg" },
    { id: "03", title: "Aqua Lifestyle", desc: "Infinity pool & deck spaces", img: "/images/SwimmigPool.jpg" },
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white font-sans">
      {/* Background with cinematic overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about.png"
          alt="Visionary Architecture"
          fill
          className="object-cover brightness-[0.3] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </div>

      {/* Grid Lines - Following Hero Layout */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-10 md:opacity-20">
        <div className="h-full w-[1px] bg-white absolute right-8 md:right-32 top-0 hidden md:block" />
        <div className="h-full w-[1px] bg-white absolute left-8 md:left-32 top-0 hidden md:block" />
        <div className="h-[1px] bg-white absolute top-1/2 left-8 md:left-32 right-8 md:right-32" />
      </div>

      {/* Vertical Data - Left */}
      <div className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center space-y-0 mix-blend-difference">
        <span className="text-[10px] uppercase tracking-[0.6em] rotate-180 [writing-mode:vertical-lr] text-primary-red font-bold">
          Coordinates 46.2044° N
        </span>
        <div className="w-[1px] h-20 bg-white/30" />
        <span className="text-[10px] uppercase tracking-[0.6em] rotate-180 [writing-mode:vertical-lr] text-white/40">
          Altitude 1,200m
  </span>
</div>

      {/* Vertical Data - Right */}
      <div className="absolute right-8 md:right-18 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 hidden md:flex flex-col items-center space-y-0">
        <div className="w-[1px] h-20 bg-white/30" />
        <span className="text-[10px] uppercase tracking-[0.5em] [writing-mode:vertical-lr] text-white/40">
          Established 2024
        </span>
        <Maximize2 size={16} className="text-primary-red" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 h-full flex items-center px-6 md:px-40 pb-32 md:pb-64">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[80px] md:text-[200px] font-serif text-white/5 absolute -top-12 md:-top-48 -left-2 md:-left-20 pointer-events-none">
              02
            </span>
            <h2 className="text-2xl md:text-6xl font-serif leading-[1.1] mb-8 md:mb-12">
              Connecting Opportunity <br />
              <span className="italic text-primary-red">with Execution </span> <br />
              Through Strategy.
            </h2>

            <p className="text-[8px] md:text-xs uppercase tracking-[0.1em] md:tracking-[0.2em] text-white/40 mb-8 md:mb-12 max-w-lg leading-relaxed">
              From industrial corridors to luxury residences, we connect opportunity with execution through sharp market intelligence. Every space we close is a statement of strategy, growth, and legacy.
            </p>

            <Link href="/contact">
              <motion.button
                whileHover={{ x: 10 }}
                className="group flex items-center space-x-4 md:space-x-6 text-[8px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.6em] font-bold"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-primary-red flex items-center justify-center group-hover:bg-primary-red transition-all duration-500">
                  <ChevronRight size={14} className="text-primary-red group-hover:text-white" />
                </div>
                <span>Start the Journey</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Horizontal Carousel - Matches Hero Layout */}
      <div className="absolute bottom-0 left-0 w-full z-30 px-6 md:px-32 pb-8 md:pb-16">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between space-y-8 md:space-y-0">
          <div className="flex space-x-6 overflow-x-auto no-scrollbar w-full md:w-auto pb-4 md:pb-0">
            {categories.map((cat, i) => (
              <Link href="/projects" key={cat.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.8 }}
                  className="group cursor-pointer min-w-[180px] md:min-w-[200px]"
                >
                  <div className="relative w-full h-24 md:h-32 overflow-hidden mb-4 border border-white/10 group-hover:border-primary-red transition-colors duration-500">
                    <motion.div
                      initial={{ filter: "grayscale(100%) brightness(50%)" }}
                      whileInView={{ filter: "grayscale(0%) brightness(100%)" }}
                      viewport={{ once: false, amount: 0.8 }}
                      transition={{ duration: 0.8 }}
                      className="h-full w-full"
                    >
                      <Image src={cat.img} alt={cat.title} fill className="object-cover group-hover:scale-110 transition-all duration-700" />
                    </motion.div>
                    <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-md px-2 py-1 text-[8px] font-bold tracking-widest text-primary-red">
                      {cat.id}
                    </div>
                  </div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold mb-1">{cat.title}</h4>
                  <p className="text-[8px] uppercase tracking-widest text-white/40">{cat.desc}</p>
                </motion.div>
              </Link>
            ))}
          </div>

          <div className="flex flex-col items-start md:items-end space-y-4 w-full md:w-auto">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-[1px] bg-white/20" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/40">Our Philosophy</span>
            </div>
            <h3 className="text-xl md:text-3xl font-serif italic text-silver">0% Compromise</h3>
          </div>
        </div>
      </div>

      {/* Technical Scanlines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-40 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
    </section>
  );
};

export default Vision;
