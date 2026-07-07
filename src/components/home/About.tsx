"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Plus, ArrowRight } from "lucide-react";
import Link from "next/link";

const About = () => {

  return (
    <section className="relative bg-[#0a0a0a] text-white py-20 md:py-28 px-6 md:px-24 overflow-hidden font-sans">
      {/* Cinematic Grid Layout - Following Hero */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="h-full w-[1px] bg-white/5 absolute right-8 md:right-32 top-0 hidden md:block" />
        <div className="h-full w-[1px] bg-white/5 absolute left-8 md:left-32 top-0 hidden md:block" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Vertical Data - Left */}
        <div className="absolute -left-16 top-0 hidden xl:flex flex-col items-center space-y-12">
          <span className="text-[10px] uppercase tracking-[0.5em] rotate-180 [writing-mode:vertical-lr] text-primary-red font-bold">
            Chapter / 01
          </span>
          <div className="w-[1px] h-32 bg-gradient-to-b from-primary-red to-transparent" />
        </div>

        {/* --- Top Section: Heading & Modular Cards --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 md:mb-28 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 relative"
          >
            <span className="text-[80px] md:text-[180px] font-serif text-white/5 absolute -top-16 md:-top-32 -left-4 md:-left-16 pointer-events-none">
              01
            </span>
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase leading-none mb-8 md:mb-12 relative z-10">
              People
              <br />
              <span className="text-primary-red italic">
                &
              </span>
              <br />
              Culture
            </h2>
            {/* <div className="w-16 md:w-20 h-[1px] bg-primary-red mb-8 md:mb-12" /> */}
          </motion.div>

          <div className="lg:col-span-5 space-y-6 pt-0 md:pt-12">
            <Link href="/about">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="bg-white/5 backdrop-blur-xl p-8 md:p-10 border border-white/10 relative group cursor-pointer hover:border-primary-red transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-6">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-silver/60 font-bold">Expertise</p>
                  <Plus size={18} className="text-primary-red group-hover:rotate-90 transition-transform duration-500" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 uppercase tracking-tighter">Industrial • Commercial • Residential</h3>
                <p className="text-[10px] md:text-xs text-silver/40 leading-loose">We don't build houses; we curate experiences tailored to the unique rhythms of your life.</p>
              </motion.div>
            </Link>

            <Link href="/about">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="bg-white/5 backdrop-blur-xl p-8 md:p-10 border border-white/10 relative group cursor-pointer hover:border-primary-red transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-6">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-silver/60 font-bold">Approach</p>
                  <Plus size={18} className="text-primary-red group-hover:rotate-90 transition-transform duration-500" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 uppercase tracking-tighter">Trust • Transparency • Results</h3>
                <p className="text-[10px] md:text-xs text-silver/40 leading-loose">Every brick laid and every beam placed is a testament to our dedication to architectural perfection.</p>
              </motion.div>
            </Link>
          </div>
        </div>


        {/* --- Owners Section: The Vision --- */}
        <div className="border-t border-white/10 pt-24 md:pt-40 pb-12 relative">
          <div className="absolute -left-16 top-40 hidden md:flex flex-col items-center space-y-12">
            <div className="w-12 h-12 rounded-full border border-primary-red flex items-center justify-center">
              <span className="text-[8px] font-bold text-primary-red">IM</span>
            </div>
            <div className="w-[1px] h-32 bg-white/10" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-6 relative h-[600px] md:h-[750px] overflow-hidden rounded-[32px]"
            >
              <Image
                src="/images/Team2.png"
                alt="People & Culture"
                fill
                className="object-cover"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-10 left-10">
                <p className="text-3xl font-serif mb-1">I AM REALTY Team</p>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-[1px] bg-primary-red" />
                  <p className="text-[10px] text-primary-red uppercase tracking-[0.3em] font-bold">Our Strength Is Our People</p>
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-6">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-primary-red text-[10px] font-bold tracking-[0.6em] uppercase mb-12 block"
              >
                About us / 01
              </motion.span>
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl font-serif mb-12 italic leading-tight"
              >
                "Building Great Businesses Through Great People."
              </motion.h3>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1 }}
                className="space-y-8 text-silver/60 text-sm leading-loose max-w-xl"
              >
                <p>
                  At I M REALTY, we believe great businesses are built by great people.
                  We are committed to fostering a workplace founded on respect,
                  integrity, equal opportunity, and professional growth.
                </p>

                <p>
                  We welcome talent from all backgrounds and evaluate every individual
                  based on merit, performance, and potential. Our culture encourages
                  collaboration, innovation, and continuous learning, empowering our
                  team members to grow alongside the organization.
                </p>

                <p>
                  At I M REALTY, diversity is valued, excellence is recognized,
                  and every individual is given the opportunity to succeed.
                </p>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-6 text-white hover:text-primary-red transition-all pt-8 group"
                  >
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary-red transition-colors">
                      <ArrowRight size={16} className="text-white group-hover:text-primary-red" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.5em] font-bold">Connect Our Team</span>
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

      </div>


      {/* Team Gallery */}
      <section className="mt-24 border-t border-white/10 pt-24">
        <div className="max-w-7xl mx-auto">

          <div className="mb-12">
            <h3 className="text-4xl md:text-6xl font-bold uppercase text-white">
              Our Team
            </h3>

            <p className="text-silver/60 mt-6 max-w-3xl leading-relaxed">
              Our team is the driving force behind I M REALTY&apos;s success.
              Comprised of passionate professionals with expertise in real estate,
              sales, customer relations and business development, we work together
              to deliver exceptional experiences for our clients.
            </p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {[
              { src: "/images/0.png", duration: 4.2, delay: 0 },
              { src: "/images/1.jpeg", duration: 4.8, delay: 0.3 },
              { src: "/images/2.jpeg", duration: 3.9, delay: 0.1 },
              { src: "/images/3.jpeg", duration: 4.5, delay: 0.6 },
              { src: "/images/4.jpeg", duration: 3.6, delay: 0.2 },
              { src: "/images/5.jpeg", duration: 5.0, delay: 0.4 },
              { src: "/images/6.jpeg", duration: 4.0, delay: 0.7 },
              { src: "/images/7.png", duration: 4.6, delay: 0.5 },
              { src: "/images/8.png", duration: 3.8, delay: 0.8 },
              { src: "/images/9.png", duration: 4.4, delay: 0.9 },
            ].map((img, idx) => (
              <motion.div
                key={idx}
                animate={{
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: img.duration,
                  delay: img.delay,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="break-inside-avoid mb-6 cursor-pointer"
              >
                <Image
                  src={img.src}
                  alt="Happy Customer"
                  width={800}
                  height={600}
                  className="w-full rounded-[24px] shadow-2xl border border-transparent transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,52,71,0.8),_0_0_100px_rgba(255,52,71,0.4)] hover:border-[#ff3447]/40"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Technical Scanlines Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
    </section>
  );
};

export default About;
