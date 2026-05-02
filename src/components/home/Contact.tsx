"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Plus, Send } from "lucide-react";
import { useState } from "react";
import { sendEmail } from "@/app/actions/email";

const Contact = () => {
  const [selectedProject, setSelectedProject] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const projects = [
    "Elevation",
    "Sunraj Solitaire",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !selectedProject || !formData.message) {
      setStatus({ type: "error", message: "Please fill in all fields." });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const result = await sendEmail({
        ...formData,
        project: selectedProject,
      });

      if (result.success) {
        setStatus({ type: "success", message: "Request transmitted successfully." });
        setFormData({ name: "", email: "", message: "" });
        setSelectedProject("");
      } else {
        setStatus({ type: "error", message: result.error || "Failed to transmit request." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "An unexpected error occurred." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-black min-h-screen w-full flex flex-col lg:flex-row overflow-hidden font-sans selection:bg-primary-red selection:text-white">
      {/* --- Left Side: Content & Form --- */}
      <div className="w-full lg:w-[60%] pt-24 md:pt-42 pb-24 px-6 md:px-24 flex flex-col justify-start bg-[#0a0a0a] text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Section ID tag */}
          <div className="mb-8">
            <span className="text-[10px] font-bold text-primary-red uppercase tracking-[0.6em]">Inquiry </span>
          </div>

          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-none mb-12 text-white">
            Connect
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <p className="text-[10px] uppercase tracking-widest leading-loose text-white/50 max-w-xs">
                Strategic acquisition and architectural consultations are managed through our private portal.
              </p>

              <div className="space-y-6">
                {/* <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary-red mb-2">Direct Channel</h4>
                  <p className="text-sm font-medium">Kaustubh & sachin</p>
                  <p className="text-xs text-white/40">imrealtyoffical@gmail.com</p>
                </div> */}
              </div>
            </div>

            <div className="space-y-6">
              {/* <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary-red mb-2">Technical Support</h4>
                <p className="text-xs text-white/40">imrealtyoffical@gmail.com</p>
                <p className="text-xs text-white/40">+91 00000 00000</p>
              </div> */}
            </div>
          </div>

          {/* --- High Visibility Contact Form --- */}
          <form onSubmit={handleSubmit} className="max-w-2xl space-y-10 border-t border-white/10 pt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="relative group">
                <label className="text-[8px] uppercase tracking-widest text-primary-red font-bold mb-2 block">Name / Entity</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full bg-transparent border-b border-white/30 py-3 text-[10px] uppercase tracking-widest placeholder:text-white/50 focus:outline-none focus:border-primary-red transition-all duration-500"
                />
              </div>
              <div className="relative group">
                <label className="text-[8px] uppercase tracking-widest text-primary-red font-bold mb-2 block">Secure Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter email address"
                  className="w-full bg-transparent border-b border-white/30 py-3 text-[10px] uppercase tracking-widest placeholder:text-white/50 focus:outline-none focus:border-primary-red transition-all duration-500"
                />
              </div>
            </div>

            <div className="relative group">
              <label className="text-[8px] uppercase tracking-widest text-primary-red font-bold mb-2 block">Project Selection</label>
              <select
                required
                value={selectedProject}
                onChange={(e) => setSelectedProject(e.target.value)}
                className="w-full bg-transparent border-b border-white/30 py-3 text-[10px] uppercase tracking-widest focus:outline-none focus:border-primary-red transition-all appearance-none text-white font-medium"
              >
                <option value="" disabled className="bg-black">SELECT PROJECT OF INTEREST</option>
                {projects.map((p) => (
                  <option key={p} value={p} className="bg-[#0a0a0a] text-white py-2">{p}</option>
                ))}
              </select>
              <Plus size={14} className="absolute right-0 bottom-4 text-primary-red pointer-events-none group-hover:rotate-90 transition-transform duration-500" />
            </div>

            <div className="relative group">
              <label className="text-[8px] uppercase tracking-widest text-primary-red font-bold mb-2 block">Message / Intent</label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe your architectural vision"
                rows={3}
                className="w-full bg-transparent border-b border-white/30 py-3 text-[10px] uppercase tracking-widest placeholder:text-white/50 focus:outline-none focus:border-primary-red transition-all duration-500 resize-none"
              />
            </div>

            {status.message && (
              <div className={`text-[10px] uppercase tracking-widest ${status.type === "success" ? "text-green-500" : "text-primary-red"}`}>
                {status.message}
              </div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full md:w-auto px-12 py-4 bg-primary-red text-[10px] font-bold uppercase tracking-[0.5em] flex items-center justify-center space-x-6 hover:bg-white hover:text-black transition-all duration-700 shadow-xl shadow-primary-red/10 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <span>{isSubmitting ? "Transmitting..." : "Transmit Request"}</span>
              <Send size={14} />
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* --- Right Side: Cinematic Image --- */}
      <div className="w-full lg:w-[40%] h-[50vh] lg:h-auto relative order-first lg:order-last border-l border-white/5">
        <Image
          src="/images/project1.png"
          alt="Contact Visual"
          fill
          className="object-cover grayscale brightness-50 contrast-125 hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] lg:hidden" />
      </div>
    </section>
  );
};

export default Contact;
