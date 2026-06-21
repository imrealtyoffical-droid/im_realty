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

      {/* Premium Overlay */}
<div className="absolute inset-0 bg-black/20 z-10" />
<div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent z-10" />

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
          className="max-w-2xl"
        >
          <h1 className="text-white text-5xl md:text-8xl font-serif leading-none tracking-tight drop-shadow-[0_8px_30px_rgba(0,0,0,1)]">
  I M REALTY
</h1>

          <p className="text-sm md:text-lg uppercase tracking-[0.3em] text-primary-red mt-6">
            Industrial • Commercial • Residential
          </p>

          <p className="text-sm md:text-base text-white/95 mt-6 max-w-3xl leading-relaxed drop-shadow-lg">
  At I M REALTY, people are at the heart of everything we do. We are
  committed to creating an inclusive, respectful, and growth-driven
  workplace where talent is nurtured, achievements are celebrated,
  and opportunities are accessible to all.

  <br /><br />

  We believe in empowering individuals, fostering innovation, and
  building a culture where everyone can thrive, contribute, and
  grow together.
</p>

          <div className="flex flex-wrap gap-4 mt-10">
            <Link href="/contact">
              <button className=" px-8 py-4 bg-primary-red text-white text-[10px] uppercase tracking-[0.3em] shadow-[0_10px_30px_rgba(220,38,38,0.4)] hover:scale-105 transition-all duration-300 ">
                Contact Us
              </button>
            </Link>

            <Link href="/projects">
              <button className=" px-8 py-4 border border-white/60 bg-white/10 backdrop-blur-md text-white text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-300 ">
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
