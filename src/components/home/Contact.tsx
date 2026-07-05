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
    <section className="bg-[#f9f8f3] min-h-screen w-full flex flex-col lg:flex-row overflow-hidden font-sans selection:bg-[#ff3447] selection:text-white">
      {/* --- Left Side: Content & Form --- */}
      <div className="w-full lg:w-[60%] pt-28 md:pt-36 pb-24 px-6 md:px-20 flex flex-col justify-start bg-[#f9f8f3] text-[#333333]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Section ID tag */}
          <div className="mb-6">
            <span className="text-[10px] font-bold text-[#ff3447] uppercase tracking-[0.6em]">Inquiry</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif text-[#0b3d2c] uppercase tracking-widest leading-none mb-10">
            Connect
          </h1>

          <div className="mb-12">
            <p className="text-xs uppercase tracking-widest leading-relaxed text-gray-600 max-w-md font-medium">
              Strategic acquisition and architectural consultations are managed through our private portal.
            </p>
          </div>

          {/* --- High Visibility Contact Form --- */}
          <form onSubmit={handleSubmit} className="max-w-2xl space-y-8 border-t border-gray-200 pt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative group">
                <label className="text-[10px] uppercase tracking-widest text-[#0b3d2c] font-bold mb-2 block">Name / Entity</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="ENTER YOUR NAME"
                  className="w-full bg-white border border-gray-200 rounded-none px-4 py-3.5 text-xs uppercase tracking-widest placeholder:text-gray-400 focus:outline-none focus:border-[#ff3447] focus:ring-1 focus:ring-[#ff3447] text-gray-800 transition-all duration-300"
                />
              </div>
              <div className="relative group">
                <label className="text-[10px] uppercase tracking-widest text-[#0b3d2c] font-bold mb-2 block">Secure Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ENTER EMAIL ADDRESS"
                  className="w-full bg-white border border-gray-200 rounded-none px-4 py-3.5 text-xs uppercase tracking-widest placeholder:text-gray-400 focus:outline-none focus:border-[#ff3447] focus:ring-1 focus:ring-[#ff3447] text-gray-800 transition-all duration-300"
                />
              </div>
            </div>

            <div className="relative group">
              <label className="text-[10px] uppercase tracking-widest text-[#0b3d2c] font-bold mb-2 block">Project Selection</label>
              <div className="relative">
                <select
                  required
                  value={selectedProject}
                  onChange={(e) => setSelectedProject(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-none px-4 py-3.5 text-xs uppercase tracking-widest focus:outline-none focus:border-[#ff3447] focus:ring-1 focus:ring-[#ff3447] text-gray-800 transition-all appearance-none font-medium"
                >
                  <option value="" disabled className="text-gray-400">SELECT PROJECT OF INTEREST</option>
                  {projects.map((p) => (
                    <option key={p} value={p} className="text-gray-800 py-2">{p}</option>
                  ))}
                </select>
                <Plus size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#ff3447] pointer-events-none group-hover:rotate-90 transition-transform duration-500" />
              </div>
            </div>

            <div className="relative group">
              <label className="text-[10px] uppercase tracking-widest text-[#0b3d2c] font-bold mb-2 block">Message / Intent</label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="DESCRIBE YOUR ARCHITECTURAL VISION"
                rows={4}
                className="w-full bg-white border border-gray-200 rounded-none px-4 py-3.5 text-xs uppercase tracking-widest placeholder:text-gray-400 focus:outline-none focus:border-[#ff3447] focus:ring-1 focus:ring-[#ff3447] text-gray-800 transition-all duration-300 resize-none"
              />
            </div>

            {status.message && (
              <div className={`text-xs uppercase tracking-widest font-bold ${status.type === "success" ? "text-green-600" : "text-[#ff3447]"}`}>
                {status.message}
              </div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className={`w-full md:w-auto px-12 py-4 bg-[#ff3447] text-white text-xs font-bold uppercase tracking-[0.4em] flex items-center justify-center space-x-6 hover:bg-[#0b3d2c] transition-all duration-500 shadow-md ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <span>{isSubmitting ? "TRANSMITTING..." : "TRANSMIT REQUEST"}</span>
              <Send size={14} />
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* --- Right Side: Cinematic Image --- */}
      <div className="w-full lg:w-[40%] h-[50vh] lg:h-auto relative order-first lg:order-last border-l border-gray-200">
        <Image
          src="/images/project1.png"
          alt="Contact Visual"
          fill
          className="object-cover brightness-95 contrast-105 hover:brightness-100 transition-all duration-1000"
        />
      </div>
    </section>
  );
};

export default Contact;
