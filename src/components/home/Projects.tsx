"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";

const ProjectFeaturedVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(videoRef, { amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      videoRef.current?.play().catch(() => { });
    } else {
      videoRef.current?.pause();
    }
  }, [isInView]);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-16 mb-32 md:mb-48 relative">

      {/* Decorative background depth indicator */}
      <div className="absolute top-0 left-0 text-[12rem] md:text-[18rem] font-serif font-bold text-black/[0.02] select-none pointer-events-none z-0">
        01
      </div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full lg:w-1/2 relative z-10 space-y-8"
      >
        <div className="inline-flex items-center gap-3 px-3 py-1 bg-[#0b3d2c]/5 border border-[#0b3d2c]/10 rounded-full">
          <span className="w-1.5 h-1.5 bg-[#c82222] rounded-full animate-pulse" />
          <span className="text-[#0b3d2c] text-[9px] font-bold tracking-[0.3em] uppercase">Vision in Motion / 2026</span>
        </div>

        <h2 className="text-4xl md:text-8xl font-serif text-[#1c1c1c] uppercase tracking-tighter leading-[0.9] pt-2">
          The <br />
          <span className="text-[#c82222] italic font-serif lowercase block mt-2 relative">
            blueprint
          </span>
        </h2>

        <div className="max-w-md pt-4 space-y-4">
          <p className="text-xs uppercase tracking-widest text-gray-500 leading-relaxed font-medium">
            Witness the transformation of strategy into structural reality. Every frame captures our dedication to high-performance real estate operations, buyer consulting, and exclusive developer mandates.
          </p>
          <p className="text-xs uppercase tracking-widest text-gray-500 leading-relaxed font-medium">
            At I M REALTY, we represent select developer portfolios across Dombivli, Thane, and Bhiwandi. Our legacy is built on absolute transparency, structured sales mandates, and an unwavering commitment to bringing premium residential and logistics assets to market.
          </p>
        </div>
      </motion.div>

      {/* Right Video Container with Offset Decorative Outline Grid */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <div className="relative w-full max-w-md aspect-[9/16] lg:aspect-auto h-auto lg:h-[600px]">
          {/* Offset Outline Border behind the video card for premium depth */}
          <div className="absolute -top-4 -left-4 w-full h-full border border-[#0b3d2c]/20 rounded-lg pointer-events-none z-0 hidden sm:block" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="w-full h-full overflow-hidden border border-black/10 bg-[#f1efe7] relative shadow-2xl rounded-lg z-10"
          >
            <video
              ref={videoRef}
              src="/images/advertice.mp4"
              loop
              playsInline
              controls
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 pointer-events-none" />

            {/* Interactive Play/Live overlay indicator */}
            <div className="absolute top-6 left-6 z-20 flex items-center gap-2.5 bg-black/40 backdrop-blur-md px-3.5 py-2 rounded border border-white/10">
              <span className="w-2 h-2 bg-[#c82222] rounded-full animate-ping" />
              <span className="w-2 h-2 bg-[#c82222] rounded-full absolute" />
              <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-white">LIVE STREAM</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="bg-[#f9f8f3] text-[#1c1c1c] py-16 md:py-24 px-6 md:px-24 overflow-hidden relative">

      <div className="max-w-7xl mx-auto relative z-10">
        <ProjectFeaturedVideo />

        {/* SECTION HEADER */}
        <div className="mb-24">
          <span className="text-[#0b3d2c] text-[10px] font-bold tracking-[0.5em] uppercase mb-4 block">Residential Showcase</span>
          <h2 className="text-3xl md:text-6xl font-serif text-[#1c1c1c] uppercase tracking-widest leading-none">
            Our Portfolios
          </h2>
          <div className="w-20 h-[1px] bg-[#0b3d2c] mt-6" />
        </div>

        {/* SHOWCASE STRUCTURES */}
        <div className="space-y-40 md:space-y-64">

          {/* PROJECT 1: THE ELEVATION (Structure Style 1: Split banner text on left card, large image on right) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col lg:flex-row gap-8 items-stretch shadow-md overflow-hidden bg-white rounded-lg border border-black/5"
          >
            {/* Left Info Panel */}
            <div className="w-full lg:w-[35%] bg-[#fcfbf9] p-8 md:p-12 flex flex-col justify-between">
              <div>
                <span className="text-[#c82222] text-[10px] font-bold tracking-[0.4em] uppercase block mb-6">PROJECT / 01</span>
                <h3 className="text-3xl md:text-4xl font-serif text-[#1c1c1c] mb-6 leading-tight">
                  The Elevation
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-8">
                  A vertical masterpiece redefining the skyline of Dombivli. Sunraj Solitaire stands as a testament to modern architectural ambition, combining premium design with structural strength.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[9px] uppercase tracking-widest text-[#0b3d2c] bg-[#0b3d2c]/5 border border-[#0b3d2c]/20 px-3 py-1.5 rounded">Iconic Design</span>
                  <span className="text-[9px] uppercase tracking-widest text-[#0b3d2c] bg-[#0b3d2c]/5 border border-[#0b3d2c]/20 px-3 py-1.5 rounded">Premium Facade</span>
                </div>
              </div>
              <div className="pt-8">
                <Link href="/contact" className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#0b3d2c] hover:text-[#c82222] transition-colors">
                  Inquire Now <span className="text-sm">→</span>
                </Link>
              </div>
            </div>

            {/* Right Wide Image */}
            <div className="w-full lg:w-[65%] min-h-[300px] md:min-h-[450px] relative">
              <Image
                src="/images/Elevation.jpg"
                alt="The Elevation"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>


          {/* PROJECT 2: WELLNESS CLUB (Structure Style 3: 3-column split panel layout) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col lg:flex-row gap-6 items-stretch"
          >
            {/* Column 1: Vertical Portrait Image */}
            <div className="w-full lg:w-[30%] min-h-[350px] relative rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/Clubhouse.jpg"
                alt="Clubhouse Portrait"
                fill
                className="object-cover"
              />
            </div>

            {/* Column 2: Vertical Text Block (Light cream background) */}
            <div className="w-full lg:w-[25%] bg-[#f1efe7] rounded-lg flex items-center justify-center py-16 px-8 relative overflow-hidden min-h-[200px]">
              <span className="absolute text-black/5 text-8xl font-serif rotate-90 font-bold select-none pointer-events-none">CLUB</span>
              <h4 className="text-3xl md:text-5xl font-serif text-[#0b3d2c] uppercase tracking-[0.3em] writing-mode-vertical text-center select-none font-bold">
                WELLNESS
              </h4>
            </div>

            {/* Column 3: Main Info details Card */}
            <div className="w-full lg:w-[45%] bg-white rounded-lg p-8 md:p-12 flex flex-col justify-between border border-black/5 shadow-md">
              <div>
                <span className="text-[#c82222] text-[10px] font-bold tracking-[0.4em] uppercase block mb-6">PROJECT / 02</span>
                <h3 className="text-3xl md:text-4xl font-serif text-[#1c1c1c] mb-6">
                  The Wellness Club
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-8">
                  A sanctuary designed for both body and mind. The luxury clubhouse at Sunraj Solitaire provides state-of-the-art health, social, and fitness spaces curated specifically for the wellness of homeowners.
                </p>
                <div className="grid grid-cols-2 gap-4 border-t border-black/5 pt-6">
                  <div>
                    <h5 className="text-[10px] uppercase font-bold text-gray-500 mb-1">Developer Details</h5>
                    <p className="text-xs text-gray-800 font-semibold">Sunraj Group</p>
                  </div>
                  <div>
                    <h5 className="text-[10px] uppercase font-bold text-gray-500 mb-1">Design Consultant</h5>
                    <p className="text-xs text-gray-800 font-semibold">Urban Space Co.</p>
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <Link href="/contact" className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#0b3d2c] hover:text-[#c82222] transition-colors">
                  Inquire Now <span className="text-sm">→</span>
                </Link>
              </div>
            </div>
          </motion.div>


          {/* PROJECT 3: AQUA HORIZON (Structure Style 4: Left Vertical dark-green bar, Right Split Layout) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col lg:flex-row gap-6 items-stretch"
          >
            {/* Left Vertical Red Sidebar */}
            <div className="w-full lg:w-[15%] bg-[#f34347] text-white flex flex-col justify-between items-center p-6 md:p-8 rounded-lg min-h-[180px] lg:min-h-auto text-center shadow-md">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-60">PHASE 03</span>
              <div className="flex items-center justify-center flex-1 my-6 lg:my-12">
                <h4 className="text-2xl font-serif uppercase tracking-[0.2em] [writing-mode:vertical-lr] lg:rotate-180">
                  AQUA HORIZON
                </h4>
              </div>
              <span className="text-xs opacity-40 hidden lg:block">© 2026</span>
            </div>

            {/* Right Main Split Content */}
            <div className="w-full lg:w-[85%] flex flex-col md:flex-row gap-6">

              {/* Content Card */}
              <div className="w-full md:w-1/2 bg-white rounded-lg p-8 md:p-12 border border-black/5 shadow-md flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-serif text-[#1c1c1c] mb-6">
                    Infinity Horizon Pool
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    Water meets the sky at our signature infinity pool. A masterfully engineered recreation zone featuring sunken decks, ambient underwater LED arrays, and clear filtration systems.
                  </p>
                  <ul className="space-y-2 border-t border-black/5 pt-6 text-xs text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#c82222] rounded-full"></span>
                      Infinity-Edge Glass Framing
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#c82222] rounded-full"></span>
                      Ambient Sunken Fire Decks
                    </li>
                  </ul>
                </div>
                <div className="pt-8">
                  <Link href="/contact" className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#0b3d2c] hover:text-[#c82222] transition-colors">
                    Inquire Now <span className="text-sm">→</span>
                  </Link>
                </div>
              </div>

              {/* Pool Showcase Image */}
              <div className="w-full md:w-1/2 min-h-[300px] relative rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/SwimmigPool.jpg"
                  alt="Aqua Horizon Pool"
                  fill
                  className="object-cover"
                />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
