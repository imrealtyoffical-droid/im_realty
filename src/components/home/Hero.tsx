"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden text-white">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/web_video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-10" />

      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="h-full w-[1px] bg-white/10 absolute right-4 md:right-32 top-0 hidden md:block" />
        <div className="w-full h-[1px] bg-white/10 absolute top-20 md:top-24 left-0" />
        <div className="h-full w-[1px] bg-white/5 absolute left-4 md:left-24 top-0 hidden md:block" />
      </div>

      {/* Content */}
      <div className="relative z-30 min-h-screen flex items-center px-6 md:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl"
        >
          <h1 className="text-white text-5xl md:text-8xl font-serif leading-none tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
            I AM REALTY
          </h1>

          <p className="text-sm md:text-lg uppercase tracking-[0.3em] text-primary-red mt-6">
            Industrial • Commercial • Residential
          </p>

          <p className="text-sm md:text-base text-white mt-6 max-w-2xl mx-auto leading-relaxed">
            Your trusted partner for premium industrial,
            commercial and residential properties.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <Link href="/contact">
              <button className="px-8 py-4 bg-primary-red text-white text-[10px] uppercase tracking-[0.3em] hover:opacity-90 transition">
                Contact Us
              </button>
            </Link>

            <Link href="/projects">
              <button className="px-8 py-4 border border-white/30 text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition">
                Start Buying
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
