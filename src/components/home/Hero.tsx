"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Image */}

      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="h-full w-[1px] bg-white/10 absolute right-4 md:right-32 top-0 hidden md:block" />
        <div className="w-full h-[1px] bg-white/10 absolute top-20 md:top-24 left-0" />
        <div className="h-full w-[1px] bg-white/5 absolute left-4 md:left-24 top-0 hidden md:block" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex items-center px-6 md:px-24 py-24">
  <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">

    {/* Left Side */}
    <div>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-8xl font-serif leading-none mb-6 tracking-tight">
          I AM REALTY
        </h1>

        <p className="text-sm md:text-lg uppercase tracking-[0.3em] text-primary-red mb-4">
          Industrial • Commercial • Residential
        </p>

        <p className="text-sm md:text-base text-white/80 mb-10 max-w-xl leading-relaxed">
          Your trusted partner for premium industrial,
          commercial and residential properties.
        </p>
      </motion.div>

      <div className="flex flex-wrap gap-4">
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
    </div>

    {/* Right Side Video */}
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="flex justify-center"
    >
      <div className="w-full max-w-sm md:max-w-md lg:max-w-lg overflow-hidden rounded-[32px] border border-white/10 bg-black shadow-[0_0_50px_rgba(255,255,255,0.05)]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full aspect-[9/16] object-cover"
        >
          <source src="/images/web_video.mp4" type="video/mp4" />
        </video>
      </div>
    </motion.div>

  </div>
</div>
    </section>
  );
};

export default Hero;
      

