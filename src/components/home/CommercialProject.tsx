"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const CommercialProject = () => {
  return (
    <section className="bg-[#f4f2e9] text-[#1c1c1c] py-24 md:py-40 px-6 md:px-24 overflow-hidden relative">

      <div className="max-w-7xl mx-auto relative z-10">

        {/* SECTION HEADER */}
        <div className="mb-24">
          <span className="text-[#0b3d2c] text-[10px] font-bold tracking-[0.5em] uppercase mb-4 block">Commercial Mandates</span>
          <h2 className="text-3xl md:text-6xl font-serif text-[#1c1c1c] uppercase tracking-widest leading-none">
            Logistics Showcase
          </h2>
          <div className="w-20 h-[1px] bg-[#0b3d2c] mt-6" />
        </div>

        {/* SHOWCASE STRUCTURES */}
        <div className="space-y-40 md:space-y-64">

          {/* PHASE 1: STRUCTURAL EXTERIOR (Layout 2: 4 vertical strips side-by-side with vertical title column) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col lg:flex-row gap-8 items-stretch"
          >
            {/* Left Vertical Title Column */}
            <div className="w-full lg:w-[15%] bg-[#f34347] text-white p-6 md:p-8 rounded-lg flex flex-col justify-between items-center min-h-[180px] lg:min-h-auto text-center shadow-md">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-60">INDUSTRIAL</span>
              <div className="flex items-center justify-center flex-1 my-6 lg:my-12">
                <h4 className="text-2xl lg:text-3xl font-serif uppercase tracking-[0.2em] [writing-mode:vertical-lr] lg:rotate-180">
                  BHIWANDI OUT
                </h4>
              </div>
              <span className="text-xs opacity-40 hidden lg:block">PHASE 01</span>
            </div>

            {/* Right: 4 vertical strips side-by-side */}
            <div className="w-full lg:w-[85%] grid grid-cols-2 md:grid-cols-4 gap-4">
              {["/images/out.jpeg", "/images/out 2.jpeg", "/images/out 3.jpeg", "/images/out 4.jpeg"].map((img, i) => (
                <div key={i} className="relative h-[250px] md:h-[450px] rounded-lg overflow-hidden group shadow-md border border-black/5">
                  <Image
                    src={img}
                    alt={`Warehouse Exterior ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>
              ))}
            </div>
          </motion.div>


          {/* PHASE 2: STRATEGIC INTERIORS (Layout 7: Left details panel list, Right 2x2 grid of interior images) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col lg:flex-row gap-8 items-stretch"
          >
            {/* Left Info Panel */}
            <div className="w-full lg:w-[40%] bg-white rounded-lg p-8 md:p-12 border border-black/5 shadow-md flex flex-col justify-between">
              <div>
                <span className="text-[#c82222] text-[10px] font-bold tracking-[0.4em] uppercase block mb-6">PHASE / 02</span>
                <h3 className="text-3xl md:text-4xl font-serif text-[#1c1c1c] mb-6">
                  Strategic Interiors
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-8">
                  Optimized internal volumes with advanced ventilation and lighting systems, tailored for large-scale enterprise storage, heavy load handling, and efficient distribution operations.
                </p>

                <div className="space-y-4 border-t border-black/5 pt-6 text-xs text-gray-600">
                  <div className="flex items-start gap-3">
                    <span className="text-[#0b3d2c] font-bold font-serif text-sm">01/</span>
                    <p><strong className="text-gray-800">Volume Optimization:</strong> Ceiling clearances designed to maximize high-rack racking efficiency.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#0b3d2c] font-bold font-serif text-sm">02/</span>
                    <p><strong className="text-gray-800">Precision Ventilation:</strong> Specialized natural airflow panels to keep environments dry and climate-controlled.</p>
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <Link href="/contact" className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#0b3d2c] hover:text-[#c82222] transition-colors">
                  Inquire Now <span className="text-sm">→</span>
                </Link>
              </div>
            </div>

            {/* Right: 2x2 Grid of 4 images */}
            <div className="w-full lg:w-[60%] grid grid-cols-2 gap-4">
              {["/images/in1.jpeg", "/images/in2.jpeg", "/images/in3.jpeg", "/images/in4.jpeg"].map((img, i) => (
                <div key={i} className="relative h-[180px] md:h-[220px] lg:h-[260px] rounded-lg overflow-hidden group shadow-md border border-black/5">
                  <Image
                    src={img}
                    alt={`Warehouse Interior ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CommercialProject;
