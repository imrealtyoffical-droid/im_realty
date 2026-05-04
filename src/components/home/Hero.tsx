"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Globe, Mail, Phone, ChevronRight } from "lucide-react";

const Hero = () => {
  const carouselItems = [
    { title: "Sunraj Solitaire", location: "Dombivli", img: "/images/Elevation.jpg" },
    { title: "The Wellness Club", location: "Dombivli", img: "/images/Clubhouse.jpg" },
    { title: "Aqua Horizon", location: "Dombivli", img: "/images/SwimmigPool.jpg" },
    { title: "Luxury Interiors", location: "Dombivli", img: "/images/WhatsApp Image 2026-01-08 at 2.21.07 PM.jpeg" },
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Elevation.jpg"
          alt="Luxury Real Estate"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      </div>

      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="h-full w-[1px] bg-white/10 absolute right-4 md:right-32 top-0 hidden md:block" />
        <div className="w-full h-[1px] bg-white/10 absolute top-20 md:top-24 left-0" />
        <div className="h-full w-[1px] bg-white/5 absolute left-4 md:left-24 top-0 hidden md:block" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 h-full flex items-center px-6 md:px-24 pb-20 md:pb-10">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* <span className="text-6xl md:text-[120px] font-serif text-white/5 absolute -top-12 md:-top-24 -left-2 md:-left-8">
              01
            </span> */}
            <h1 className="text-3xl md:text-6xl font-serif leading-[1.1] mb-6 tracking-tight">
              Industrial. Commercial. <br />
              Residential. <br />
              <span className="italic text-primary-red">One Trusted</span> Realty Partner.
            </h1>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/80 mb-8 max-w-xl leading-relaxed">
              From industrial hubs to luxury residences, we curate spaces that reflect your ambition and legacy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex items-center space-x-4 md:space-x-6"
          >
            <Link href="/about">
              <button className="px-6 md:px-8 py-3 border border-white/30 text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.4em] hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-sm">
                Learn More
              </button>
            </Link>
            <div className="w-8 md:w-12 h-[1px] bg-white/30" />
            <Link href="/projects">
              <span className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.4em] text-white/50 cursor-pointer hover:text-white transition-colors">Discover</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Left Sidebar - Scroll Down */}
      <div className="absolute left-4 md:left-8 bottom-12 z-20 hidden md:flex flex-col items-center space-y-8">
        <div className="h-24 w-[1px] bg-gradient-to-b from-transparent via-white/50 to-white" />
        <span className="text-[10px] uppercase tracking-[0.5em] rotate-180 [writing-mode:vertical-lr] text-white/70">
          Scroll Down
        </span>
      </div>

      {/* Right Sidebar - Socials */}
      <div className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col space-y-10 items-center">
        <Globe size={18} className="text-white/40 hover:text-primary-red cursor-pointer transition-colors" />
        <Mail size={18} className="text-white/40 hover:text-primary-red cursor-pointer transition-colors" />
        <Phone size={18} className="text-white/40 hover:text-primary-red cursor-pointer transition-colors" />
        <div className="w-[1px] h-20 bg-white/10" />
      </div>

      {/* Bottom Carousel / Gallery Tabs */}
      <div className="absolute bottom-0 left-0 w-full z-30 px-6 md:px-24 pb-6 md:pb-8">
        <div className="max-w-[1400px] mx-auto overflow-x-auto no-scrollbar flex space-x-4 md:space-x-8">
          {carouselItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              className={`min-w-[200px] md:min-w-[300px] glass p-4 group cursor-pointer transition-all duration-500 ${index === 0 ? "border-primary-red/50 bg-white/5" : "border-white/5"
                }`}
            >
              <div className="flex space-x-4 items-center">
                <div className="relative w-16 h-12 overflow-hidden bg-zinc-800">
                  <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-white/90 mb-1">{item.title}</h4>
                  <p className="text-[8px] uppercase tracking-widest text-white/40">{item.location}</p>
                </div>
              </div>
              {index === 0 && (
                <Link href="/projects" className="mt-4 flex items-center justify-between group/link">
                  <span className="text-[8px] uppercase tracking-widest text-primary-red font-bold">Explore</span>
                  <ChevronRight size={12} className="text-primary-red group-hover/link:translate-x-1 transition-transform" />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Right - Language */}
      <div className="absolute right-8 bottom-12 z-20 hidden md:block">
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/70 hover:text-primary-red cursor-pointer transition-colors font-medium">
          EN / IN
        </span>
      </div>
    </section>
  );
};

export default Hero;
