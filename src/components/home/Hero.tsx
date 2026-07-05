"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Play } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    // Check if the intro has already played in this session
    const introPlayed = sessionStorage.getItem("introPlayed");
    if (!introPlayed) {
      setShowIntro(true);
      // Set the flag immediately so even if they refresh while it's playing, it won't play again
      sessionStorage.setItem("introPlayed", "true");
    }
  }, []);

  const handleIntroEnd = () => {
    setShowIntro(false);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden text-white flex flex-col justify-center">

      {/* Intro Splash Video (Plays only once) */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-[100] bg-black"
          >
            <video
              autoPlay
              muted
              playsInline
              onEnded={handleIntroEnd}
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/images/0428 (online-video-cutter.com).mp4" type="video/mp4" />
            </video>
            <button
              onClick={handleIntroEnd}
              className="absolute bottom-8 right-8 z-[101] text-white/50 hover:text-white transition-colors text-sm font-medium tracking-widest uppercase"
            >
              Skip Intro
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/Herosection (1).mp4" type="video/mp4" />
      </video>

      {/* Premium Overlay - Left gradient for readability */}
      <div className="absolute inset-0 z-10" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }} />
      <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)' }} />

      {/* Main Left-Aligned Content */}
      <div className="relative z-30 w-full px-6 md:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl flex flex-col items-start pt-20"
        >
          {/* Top Subheading */}
          <h2
            className="text-xl md:text-3xl font-bold tracking-[0.2em] uppercase mb-1 drop-shadow-md"
            style={{ color: '#ff3447' }}
          >
            WELCOME TO
          </h2>

          {/* Main Huge Title */}
          <h1
            className="text-[4rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[9rem] font-sans font-black leading-none tracking-tight uppercase drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            style={{ color: 'rgba(255, 255, 255, 0.6)' }}
          >
            I M REALTY
          </h1>

          {/* Paragraph with left border */}
          <div className="mt-10 pl-6 border-l-2 border-white/60">
            <p
              className="text-sm md:text-base leading-relaxed font-medium max-w-2xl drop-shadow-md"
              style={{ color: 'rgba(255, 255, 255, 0.9)' }}
            >
              At I M REALTY, people are at the heart of everything we do. We are committed to creating an inclusive, respectful, and growth-driven workplace. Experience excellence across Industrial, Commercial, and Residential real estate.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-12 w-full sm:w-auto">
            <Link href="/contact" className="w-full sm:w-auto">
              <button
                className="w-full px-8 md:px-12 py-4 text-white text-sm font-bold tracking-wider transition-all duration-300 shadow-lg hover:-translate-y-1 hover:brightness-110 corner rounded-full"
                style={{ backgroundColor: '#ff3447' }}
              >
                Contact Us
              </button>
            </Link>

            <Link href="/projects" className="w-full sm:w-auto">
              <button
                className="w-full px-8 md:px-12 py-4 border border-white text-sm font-bold tracking-wider hover:bg-white/10 transition-all duration-300 shadow-lg hover:-translate-y-1 corner rounded-full"
                style={{ color: '#ffffff' }}
              >
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
