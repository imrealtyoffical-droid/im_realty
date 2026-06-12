"use client";

import { motion } from "framer-motion";

export default function FirstHomeVideo() {
  return (
    <section className="bg-black py-20 md:py-32 px-6 md:px-24">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-primary-red uppercase tracking-[0.4em] text-xs mb-4">
            Every Journey Begins Somewhere
          </p>

          <h2 className="text-4xl md:text-6xl font-serif text-white">
            The Joy Of A First Home
          </h2>

          <p className="mt-6 text-white/70 max-w-2xl mx-auto">
            More than a property. A place where dreams,
            memories and new beginnings come to life.
          </p>
        </motion.div>

        <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full aspect-video object-cover"
          >
            <source src="/images/web_video.mp4" type="video/mp4" />
          </video>
        </div>

      </div>
    </section>
  );
}
