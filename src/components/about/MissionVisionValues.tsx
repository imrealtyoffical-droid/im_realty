"use client";

import { motion } from "framer-motion";
import { Target, Eye, Shield, Check } from "lucide-react";

export default function MissionVisionValues() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const, // Apple-like easeOutExpo
      },
    },
  };

  const listVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  const coreValues = [
    "Integrity",
    "Transparency",
    "Customer First",
    "Professionalism",
    "Innovation",
    "Trust",
    "Long-Term Relationships",
    "Excellence",
  ];

  return (
    <section className="relative py-36 overflow-hidden bg-[#F8F7F4] border-t border-gray-100">
      {/* Premium Background Textures & Gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Soft blur gradients */}
        <div className="absolute top-1/4 left-[10%] w-96 h-96 bg-[#ff3447]/3 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-[10%] w-[500px] h-[500px] bg-[#0b3d2c]/3 rounded-full blur-[130px]" />
        
        {/* Architectural Grid Line Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#1F1F1F" strokeWidth="1.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Low opacity abstract wave mesh lines */}
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1600px] h-[800px] opacity-[0.02]" viewBox="0 0 100 100" fill="none" stroke="#1F1F1F" strokeWidth="0.1">
          <path d="M0,50 Q25,20 50,50 T100,50" />
          <path d="M0,53 Q25,23 50,53 T100,53" />
          <path d="M0,47 Q25,17 50,47 T100,47" />
          <path d="M0,56 Q25,26 50,56 T100,56" />
          <path d="M0,44 Q25,14 50,44 T100,44" />
        </svg>
      </div>

      <div className="relative max-w-[1700px] mx-auto px-6 md:px-12 lg:px-20 z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 max-w-[900px] mx-auto font-sans"
        >
          <span className="text-[#ff3447] text-xs md:text-sm font-bold uppercase tracking-[0.25em] block mb-4">
            Our Foundation
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#1F1F1F] tracking-tight leading-tight">
            Mission, Vision & <span className="text-[#ff3447]">Core Values</span>
          </h2>
        </motion.div>

        {/* Content Layout Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          {/* Mission Card */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ 
              y: -10,
              boxShadow: "0 25px 50px -12px rgba(229,57,69,0.08)",
              borderColor: "rgba(229,57,69,0.3)"
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="group bg-white border border-black/5 rounded-[24px] p-12 shadow-sm flex flex-col items-start transition-colors duration-500 h-full"
          >
            <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-[#ff3447] to-[#e53945] flex items-center justify-center shadow-[0_8px_30px_rgba(255,52,71,0.25)] mb-10 transition-transform duration-500 group-hover:rotate-[5deg]">
              <Target className="w-9 h-9 text-white stroke-[1.5]" />
            </div>
            
            <h3 className="text-3xl font-sans font-bold text-[#1F1F1F] mb-6 transition-transform duration-500 group-hover:translate-y-[-2px]">
              Mission
            </h3>
            
            <p className="text-base md:text-[17px] text-[#666666] leading-relaxed transition-transform duration-500 group-hover:translate-y-[-2px]">
              To simplify the real estate journey by delivering transparent, reliable, and client-focused property solutions. We are committed to connecting buyers, sellers, and investors with opportunities that create lasting value and long-term relationships.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ 
              y: -10,
              boxShadow: "0 25px 50px -12px rgba(229,57,69,0.08)",
              borderColor: "rgba(229,57,69,0.3)"
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="group bg-white border border-black/5 rounded-[24px] p-12 shadow-sm flex flex-col items-start transition-colors duration-500 h-full"
          >
            <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-[#ff3447] to-[#e53945] flex items-center justify-center shadow-[0_8px_30px_rgba(255,52,71,0.25)] mb-10 transition-transform duration-500 group-hover:rotate-[5deg]">
              <Eye className="w-9 h-9 text-white stroke-[1.5]" />
            </div>
            
            <h3 className="text-3xl font-sans font-bold text-[#1F1F1F] mb-6 transition-transform duration-500 group-hover:translate-y-[-2px]">
              Vision
            </h3>
            
            <p className="text-base md:text-[17px] text-[#666666] leading-relaxed transition-transform duration-500 group-hover:translate-y-[-2px]">
              To become one of India's most trusted real estate brands, recognized for innovation, integrity, and excellence while helping individuals and businesses achieve their property aspirations with confidence.
            </p>
          </motion.div>

          {/* Core Values Card */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ 
              y: -10,
              boxShadow: "0 25px 50px -12px rgba(229,57,69,0.08)",
              borderColor: "rgba(229,57,69,0.3)"
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="group bg-white border border-black/5 rounded-[24px] p-12 shadow-sm flex flex-col items-start transition-colors duration-500 h-full md:col-span-2 lg:col-span-1"
          >
            <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-[#ff3447] to-[#e53945] flex items-center justify-center shadow-[0_8px_30px_rgba(255,52,71,0.25)] mb-10 transition-transform duration-500 group-hover:rotate-[5deg]">
              <Shield className="w-9 h-9 text-white stroke-[1.5]" />
            </div>
            
            <h3 className="text-3xl font-sans font-bold text-[#1F1F1F] mb-6 transition-transform duration-500 group-hover:translate-y-[-2px]">
              Core Values
            </h3>
            
            <div className="w-full grid grid-cols-2 gap-x-6 gap-y-4 transition-transform duration-500 group-hover:translate-y-[-2px]">
              {coreValues.map((value, idx) => (
                <motion.div
                  key={idx}
                  variants={listVariants}
                  className="flex items-center gap-3 py-2.5 border-b border-gray-100 hover:bg-slate-50/50 hover:pl-1 transition-all duration-300 group/item"
                >
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
                    className="w-5 h-5 rounded-full bg-[#ff3447]/10 flex items-center justify-center text-[#ff3447] transition-colors duration-300 group-hover/item:bg-[#ff3447] group-hover/item:text-white"
                  >
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </motion.div>
                  <span className="text-sm md:text-[15px] font-sans font-medium text-[#666666] group-hover/item:text-[#1F1F1F] transition-colors duration-200">
                    {value}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
