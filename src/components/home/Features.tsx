"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Wind, Droplets, Map, Key, Plus, Maximize2 } from "lucide-react";

const features = [
  {
    id: "A.01",
    icon: <Shield size={20} />,
    title: "Multi-Tier Security",
    desc: "AI-powered RFID vehicle entry, video door phones, and 24/7 centralized monitoring for absolute peace of mind.",
  },
  {
    id: "A.02",
    icon: <Zap size={20} />,
    title: "Smart Automation",
    desc: "Next-gen home automation ready for Alexa & Google Home, controlling lighting, climate, and security from your smartphone.",
  },
  {
    id: "A.03",
    icon: <Droplets size={20} />,
    title: "Sustainable Grid",
    desc: "Advanced sewage treatment plants (STP) and rainwater harvesting systems exceeding IGBC Gold standards.",
  },
  {
    id: "A.04",
    icon: <Wind size={20} />,
    title: "Vastu Brilliance",
    desc: "Scientifically designed layouts optimized for natural cross-ventilation and positive energy flow in every room.",
  },
  {
    id: "A.05",
    icon: <Map size={20} />,
    title: "EV Infrastructure",
    desc: "Dedicated high-speed electric vehicle charging points provided for every parking bay to power the future.",
  },
  {
    id: "A.06",
    icon: <Key size={20} />,
    title: "Vertical Transit",
    desc: "Precision Japanese elevators with 2.5m/s high-speed movement and automatic rescue devices (ARD).",
  },
];

const Features = () => {
  return (
    <section className="bg-[#0a0a0a] text-white py-24 md:py-40 px-6 md:px-24 overflow-hidden relative font-sans">
      {/* Cinematic Grid Layout - Following Hero */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="h-full w-[1px] bg-white absolute right-4 md:right-32 top-0 hidden md:block" />
        <div className="h-full w-[1px] bg-white absolute left-4 md:left-32 top-0 hidden md:block" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Vertical Data - Left */}
        <div className="absolute -left-16 top-0 hidden xl:flex flex-col items-center space-y-12">
          <span className="text-[10px] uppercase tracking-[0.5em] rotate-180 [writing-mode:vertical-lr] text-primary-red font-bold">
            Amenities / 02
          </span>
          <div className="w-[1px] h-32 bg-gradient-to-b from-primary-red to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 md:mb-32 items-start">
          <div className="lg:col-span-8 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-[60px] md:text-[180px] font-serif text-white/5 absolute -top-12 md:-top-32 -left-2 md:-left-16 pointer-events-none">
                04
              </span>
              <h2 className="text-3xl md:text-8xl font-bold uppercase tracking-tighter leading-none mb-8 md:mb-12 relative z-10">
                Advanced <br />
                <span className="text-primary-red italic font-serif">Infrastructure</span>
              </h2>
            </motion.div>
          </div>
          <div className="lg:col-span-4 flex justify-start md:justify-end pt-0 md:pt-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col items-start md:items-end space-y-4"
            >
              <span className="text-[10px] uppercase tracking-[0.4em] text-silver/40 font-bold">Specifications / V2.6</span>
              <div className="w-16 md:w-24 h-[1px] bg-primary-red" />
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 bg-white/5">
          {features.map((f, i) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group bg-[#0a0a0a] p-8 md:p-12 relative h-auto md:h-[380px] flex flex-col justify-between hover:bg-white/5 transition-all duration-700 overflow-hidden border border-transparent hover:border-primary-red/30"
            >
              {/* Background ID */}
              <span className="absolute top-6 md:top-8 right-6 md:right-8 text-[10px] font-bold text-white/20 group-hover:text-primary-red/40 transition-colors tracking-[0.3em]">
                {f.id}
              </span>

              <div className="mb-8 md:mb-0">
                <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-primary-red mb-8 md:mb-10 border border-primary-red/20 group-hover:bg-primary-red group-hover:text-white transition-all duration-500 shadow-xl shadow-primary-red/5">
                  {f.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-4 group-hover:text-primary-red transition-colors">
                  {f.title}
                </h3>
                <p className="text-[10px] md:text-xs text-silver/40 leading-loose group-hover:text-silver/60 transition-colors">
                  {f.desc}
                </p>
              </div>

              <div className="flex items-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                <Maximize2 size={16} className="text-primary-red" />
                <span className="text-[8px] uppercase tracking-widest font-bold text-primary-red">View Technical Manual</span>
              </div>

              {/* Hover Line Animation */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary-red group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Technical Scanlines Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
    </section>
  );
};

export default Features;
