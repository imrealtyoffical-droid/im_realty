"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IntroLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // Fallback timer in case video doesn't fire events correctly
    const timer = setTimeout(() => {
      onComplete();
    }, 5000); // Max 5 seconds on mobile/desktop before force-completing

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
    >
      <video
        autoPlay
        muted
        playsInline
        preload="auto"
        onCanPlayThrough={() => setIsVideoLoaded(true)}
        onEnded={onComplete}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
  isVideoLoaded ? "opacity-100" : "opacity-0"
}`}
      >
        <source src="/images/0428 (online-video-cutter.com).mp4" type="video/mp4" />
      </video>

      {/* Optional: Minimal Brand Logo or Spinner while loading */}
      {!isVideoLoaded && (
        <div className="relative z-10">
          <div className="w-12 h-12 border-2 border-primary-red border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </motion.div>
  );
};

export default IntroLoader;
