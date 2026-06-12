"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Footer from "@/components/layout/Footer";
import IntroLoader from "@/components/layout/IntroLoader";
import FirstHomeVideo from "@/components/home/FirstHomeVideo";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showIntro]);

  return (
    <main className="min-h-screen bg-black selection:bg-primary-red selection:text-white">
      <AnimatePresence mode="wait">
        {showIntro && (
          <IntroLoader
            key="intro"
            onComplete={() => setShowIntro(false)}
          />
        )}
      </AnimatePresence>

      {!showIntro && (
        <>
          <Navbar />
          <Hero />
          <About />
          <FirstHomeVideo />
          <WhyChooseUs />
          <Footer />
        </>
      )}
    </main>
  );
}
