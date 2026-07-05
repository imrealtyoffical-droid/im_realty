"use client";

import { motion } from "framer-motion";

export default function FirstHomeVideo() {
  return (
    <section className="bg-black py-20 md:py-32 px-6 md:px-24 overflow-hidden relative">
      
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.02),transparent)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Video with Offset Frame */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-[48%] flex justify-center lg:justify-start relative"
          >
            {/* Offset white border frame */}
            <div className="absolute top-4 left-4 w-full max-w-[390px] aspect-[9/16] border border-white/10 rounded-[32px] pointer-events-none z-0 hidden sm:block" />
            
            <div className="w-full max-w-[390px] overflow-hidden rounded-[32px] border border-white/10 shadow-[0_10px_50px_rgba(255,255,255,0.05)] bg-black z-10">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/images/fhome.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>

          {/* Right Side: Info Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full lg:w-[52%] space-y-8 text-left"
          >
            <div>
              <p className="text-primary-red uppercase tracking-[0.4em] text-xs mb-4">
                Every Journey Begins Somewhere
              </p>
              <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
                The Joy Of <br />A First Home
              </h2>
            </div>

            <div className="space-y-6 text-white/70 leading-relaxed text-sm md:text-base">
              <p>
                A first home is more than an investment in brick and mortar—it is a foundation for your future, a space of personal independence, and the setting for your life's most cherished milestones.
              </p>
              <p className="text-white/50 text-sm">
                At I M REALTY, we understand the profound emotion and responsibility of finding that perfect starting point. Our team is dedicated to guiding first-time homebuyers with patience, expert consulting, and an exclusive portfolio of properties that perfectly balance structural excellence, premium amenities, and prime connectivity.
              </p>
            </div>

            {/* Structured Milestones List for Visual Variety */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10 text-white">
              <div>
                <span className="block text-primary-red font-bold font-serif mb-2">01/</span>
                <h4 className="text-xs uppercase tracking-wider font-semibold mb-1">Tailored Options</h4>
                <p className="text-[10px] text-white/40 leading-normal">Portfolios matching first-time budget allocations.</p>
              </div>
              <div>
                <span className="block text-primary-red font-bold font-serif mb-2">02/</span>
                <h4 className="text-xs uppercase tracking-wider font-semibold mb-1">End-to-End Care</h4>
                <p className="text-[10px] text-white/40 leading-normal">Clear, transparent legal and financial guidance.</p>
              </div>
              <div>
                <span className="block text-primary-red font-bold font-serif mb-2">03/</span>
                <h4 className="text-xs uppercase tracking-wider font-semibold mb-1">Premium Living</h4>
                <p className="text-[10px] text-white/40 leading-normal">Top developer mandates in high-connectivity corridors.</p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
