"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";

const projectModules = [
  {
    id: "01",
    title: "The Elevation",
    desc: "A vertical masterpiece redefining the skyline of Dombivli. Sunraj Solitaire stands as a testament to modern architectural ambition.",
    image: "/images/Elevation.jpg",
    tags: ["Iconic Design", "Premium Facade", "Structural Brilliance"]
  },
  {
    id: "02",
    title: "The Wellness Club",
    desc: "A sanctuary for the body and mind. Our state-of-the-art clubhouse offers world-class fitness and social experiences.",
    image: "/images/Clubhouse.jpg",
    tags: ["Designer Gym", "Social Hub", "Premium Spa"]
  },
  {
    id: "03",
    title: "Aqua Horizon",
    desc: "Experience tranquility at our infinity pool, where water meets the sky in a seamless blend of luxury and relaxation.",
    image: "/images/SwimmigPool.jpg",
    tags: ["Infinity Pool", "Sunken Deck", "Ambient Lighting"]
  },
  {
    id: "04",
    title: "Architectural Detail",
    desc: "Every corner of Solitaire is meticulously crafted to ensure a life of unparalleled elegance and comfort.",
    image: "/images/WhatsApp Image 2026-01-08 at 2.21.07 PM.jpeg",
    tags: ["Grand Lobby", "Bespoke Interiors", "Elite Finish"]
  },
  {
    id: "05",
    title: "The Promenade",
    desc: "Lush green spaces and open walkways designed to bring you closer to nature while living in the heart of the city.",
    image: "/images/WhatsApp Image 2026-01-08 at 2.29.20 PM.jpeg",
    tags: ["Landscape Design", "Open Spaces", "Evening Trails"]
  }
];

const ProjectFeaturedVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(videoRef, { amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      videoRef.current?.play().catch(() => {});
    } else {
      videoRef.current?.pause();
    }
  }, [isInView]);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-16 mb-32 md:mb-64">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full lg:w-1/2 relative"
      >
        <span className="text-primary-red text-[10px] font-bold tracking-[0.5em] uppercase mb-6 block">Vision in Motion / 2026</span>
        <h2 className="text-4xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.9]">
          The <br /> <span className="text-white/10 italic font-serif lowercase block mt-2">Blueprint</span>
        </h2>
        <div className="mt-12 max-w-sm">
          <div className="w-16 h-[1px] bg-primary-red mb-8" />
          <p className="text-[10px] uppercase tracking-[0.3em] text-silver/40 leading-loose">
            Witness the transformation of strategy into structural reality. Every frame captures our dedication to high-performance real estate.
          </p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="w-full lg:w-1/2 max-w-md aspect-[9/16] lg:aspect-auto h-auto lg:h-[600px] overflow-hidden border border-white/10 bg-[#0a0a0a] relative"
      >
        <video 
          ref={videoRef}
          src="/images/advertice.mp4"
          loop 
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
      </motion.div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="bg-black py-24 md:py-40 px-6 md:px-24 overflow-hidden relative">
      {/* Background Decorative Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5">
        <div className="h-full w-[1px] bg-white absolute left-4 md:left-32 hidden md:block" />
        <div className="h-full w-[1px] bg-white absolute right-4 md:right-32 hidden md:block" />
        <div className="w-full h-[1px] bg-white absolute top-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <ProjectFeaturedVideo />
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 md:mb-32 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-primary-red text-[10px] font-bold tracking-[0.5em] uppercase mb-6 block">Flagship Development / 2026</span>
            <h2 className="text-4xl md:text-8xl font-bold uppercase tracking-tighter leading-none">
              Elevation<br /> <span className="text-white/10 italic font-serif lowercase"></span>
            </h2>
            <div className="flex items-center space-x-4 mt-8">
              <div className="w-12 h-[1px] bg-primary-red" />
              <p className="text-[10px] uppercase tracking-[0.4em] text-silver/60">Dombivli, Thane</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="max-w-md text-silver/40 text-[9px] md:text-[10px] uppercase tracking-widest leading-loose text-left md:text-right"
          >
            <p>Our commitment to excellence is embodied in Sunraj Solitaire. A singular vision of luxury that combines next-generation engineering with timeless aesthetic appeal.</p>
            <Link href="/contact">
              <button className="mt-8 px-8 md:px-10 py-3 md:py-4 bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] hover:bg-primary-red hover:text-white transition-all duration-500">
                Download Brochure
              </button>
            </Link>
          </motion.div>
        </div>

        <div className="space-y-24 md:space-y-64">
          {projectModules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className={`group flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}
            >
              {/* Module Image */}
              <div className="w-full lg:w-7/12 relative h-[400px] md:h-[700px] overflow-hidden group">
                <motion.div
                  initial={{ filter: "grayscale(100%) brightness(60%)" }}
                  whileInView={{ filter: "grayscale(0%) brightness(100%)" }}
                  viewport={{ once: false, amount: 0.6 }}
                  transition={{ duration: 1 }}
                  className="h-full w-full"
                >
                  <Image
                    src={module.image}
                    alt={module.title}
                    fill
                    className="object-cover transition-all duration-1000 md:grayscale md:group-hover:grayscale-0 md:brightness-[0.6] md:group-hover:brightness-100"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute top-10 right-10 z-20">
                  <span className="text-white/20 text-6xl font-serif italic group-hover:text-primary-red transition-colors duration-1000">{module.id}</span>
                </div>
              </div>

              {/* Module Info */}
              <div className="w-full lg:w-5/12 space-y-10">
                <motion.span
                  className="text-primary-red text-[10px] font-bold tracking-[0.6em] uppercase"
                >
                  Phase / 0{index + 1}
                </motion.span>
                <h3 className="text-4xl md:text-6xl font-serif italic tracking-tighter leading-tight group-hover:text-primary-red transition-colors duration-500">
                  {module.title}
                </h3>
                <p className="text-silver/40 text-sm leading-loose max-w-sm">
                  {module.desc}
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  {module.tags.map((tag) => (
                    <span key={tag} className="text-[8px] uppercase tracking-widest text-white/40 border border-white/10 px-4 py-2 hover:border-primary-red hover:text-white transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-8">
                  <Link href="/projects" className="flex items-center space-x-6 group/btn">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:border-primary-red transition-colors">
                      <Plus size={16} className="text-white group-hover/btn:text-primary-red transition-colors" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-white/50 group-hover/btn:text-white transition-colors">Learn More</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
