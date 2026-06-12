"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/team_image.png"
          alt="Luxury Real Estate"
          fill
          className="object-cover opacity-70"
          priority
        />
       <div className="absolute inset-0 bg-black/55" />
<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
      </div>

      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="h-full w-[1px] bg-white/10 absolute right-4 md:right-32 top-0 hidden md:block" />
        <div className="w-full h-[1px] bg-white/10 absolute top-20 md:top-24 left-0" />
        <div className="h-full w-[1px] bg-white/5 absolute left-4 md:left-24 top-0 hidden md:block" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 h-full flex items-center px-6 md:px-24">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* <span className="text-6xl md:text-[120px] font-serif text-white/5 absolute -top-12 md:-top-24 -left-2 md:-left-8">
              01
            </span> */}
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex items-center space-x-4 md:space-x-6"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
      

