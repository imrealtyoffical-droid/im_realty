"use client";

import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const points = [
    {
      title: "Market Intelligence",
      desc: "Deep analytical insight into high-growth industrial and luxury corridors."
    },
    {
      title: "Seamless Execution",
      desc: "A symphony of strategy and action ensuring transaction excellence."
    },
    {
      title: "Legacy Focus",
      desc: "Curating spaces that reflect your ambition and stand the test of time."
    },
    {
      title: "Strategic Trust",
      desc: "Your single, reliable partner across industrial, commercial, and residential."
    }
  ];

  return (
    <section className="bg-black py-24 md:py-40 px-6 md:px-24 overflow-hidden relative">
      {/* Cinematic Grid Layout Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5">
        <div className="h-full w-[1px] bg-white absolute right-4 md:right-32 top-0 hidden md:block" />
        <div className="h-full w-[1px] bg-white absolute left-4 md:left-32 top-0 hidden md:block" />
        <div className="w-full h-[1px] bg-white absolute top-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-2/3 relative"
          >
            <span className="text-[60px] md:text-[150px] font-serif text-white/5 absolute -top-12 md:-top-32 -left-2 md:-left-16 pointer-events-none">
              03
            </span>
            <span className="text-primary-red text-[10px] font-bold tracking-[0.5em] uppercase mb-6 block relative z-10">Our Distinction / 2026</span>
            <h2 className="text-4xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.9] relative z-10">
              Why <br /> <span className="text-white/10 italic font-serif lowercase block mt-2">Choose Us</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="lg:w-1/3"
          >
            <div className="w-16 h-[1px] bg-primary-red mb-8" />
            <p className="text-[12px] uppercase tracking-[0.3em] text-black/80 leading-loose">
              Setting new standards in high-performance structural methodology and bespoke luxury delivery through vision and execution.
            </p>
          </motion.div>
        </div>

        {/* Value Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-px bg-white/5 border border-white/5">
          {points.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="bg-black p-10 group hover:bg-red/5 transition-all duration-500"
            >
              <span className="text-primary-red text-[10px] font-bold tracking-widest block mb-6">0{index + 1}</span>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4 group-hover:text-primary-red transition-colors">{point.title}</h3>
              <p className="text-[10px] text-silver/40 uppercase tracking-[0.2em] leading-loose">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
