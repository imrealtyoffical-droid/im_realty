"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import MissionVisionValues from "./MissionVisionValues";

const otherTeamMembers = [
  {
    name: "Pramila Krishnaraj",
    role: "HR Head & Co-Owner",
    image: "/images/Pramila.png",
    description: "As HR Head and Co-Owner, Pramila plays a vital role in building and managing I M REALTY's elite team. She oversees recruitment, training, structural development, and workplace culture initiatives, ensuring that every consultant embodies our core values of trust and professional integrity."
  },
  {
    name: "Rushikesh Komaskar",
    role: "Board Member & Legal Advisor",
    image: "/images/rushikesh.png",
    description: "Serving as a Board Member and Legal Advisor, Rushikesh brings strategic foresight and governance to I M REALTY. He oversees the formulation of commercial agreements and structural partnerships, ensuring that every transaction is rooted in transparency and strict legal compliance."
  },
  {
    name: "Kajol Rai",
    role: "SME (Sales Subject Matter Expert)",
    image: "/images/kajol.png",
    description: "Kajol leverages her deep product knowledge and market expertise to guide our sales strategy. As our Subject Matter Expert, she ensures our sales force operates with precision and the highest level of advisory competency."
  },
  {
    name: "Antima Vishwakarma",
    role: "Sales Executive",
    image: "/images/antima.png",
    description: "Antima is a dedicated Sales Executive who excels at client relations and property showcasing. Her proactive approach and commitment to service make the home-buying journey seamless and enjoyable for our clients."
  },
  {
    name: "Roshan (Robbie) Gaikwad",
    role: "Relationship Manager",
    image: "/images/roshan.png",
    description: "As a Relationship Manager, Roshan bridges the gap between clients and developers. He builds lasting connections, ensuring that every client feels valued and supported throughout their real estate journey."
  }
];

const AboutContent = () => {
  const [currentMemberIndex, setCurrentMemberIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMemberIndex((prev) => (prev + 1) % otherTeamMembers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const safeIndex = currentMemberIndex >= otherTeamMembers.length ? 0 : currentMemberIndex;

  return (
    <div className="bg-[#f9f8f3] text-[#1c1c1c] font-serif pt-24 min-h-screen">

      {/* 1. Hero Image */}
      <div className="relative w-full h-[450px] md:h-[750px] lg:h-[850px] overflow-hidden">
        <Image
          src="/images/Team3.png"
          alt="I M REALTY Team"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent mix-blend-overlay" />
      </div>

      {/* Main Content Container - Expanded max-width and reduced padding to fill page */}
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-16 py-24">

        {/* 2. Header & Intro */}
        <div className="mb-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#0b3d2c] mb-10 uppercase tracking-widest leading-tight">
            Bridging Developers <br /> and Discerning Buyers
          </h1>
          <div className="space-y-8 text-base md:text-lg lg:text-xl leading-relaxed text-gray-800 font-medium">
            <p>
              I M REALTY is a premier real estate sales and consultancy enterprise. We represent
              distinguished real estate developers, managing the strategic marketing, positioning,
              and acquisition of their most exclusive properties.
            </p>
            <p>
              Rather than traditional development, our expertise lies in identifying exceptional residential
              and commercial assets and matching them with buyers who demand excellence. We serve as the
              ultimate advisory and transactional partner, delivering results through market insights and absolute transparency.
            </p>
          </div>
        </div>

        {/* 3. Dark Green Callout Box */}
        <div className="bg-[#ff3447] text-white p-10 md:p-16 shadow-xl mb-28 rounded-sm">
          <p className="text-base md:text-lg lg:text-2xl leading-relaxed font-medium italic">
            "We do not just list properties; we represent architectural masterpieces. By managing developer portfolios
            with precision and care, we ensure our clients gain access to unmatched investment opportunities and bespoke lifestyles."
          </p>
        </div>


        {/* 5. Values Section */}
        <div className="mb-28 border-t border-gray-200 pt-16">
          <h2 className="text-3xl md:text-5xl font-serif text-[#0b3d2c] mb-10 uppercase tracking-widest">
            Beyond Sales: Developer Representation
          </h2>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700">
            For developers, we are an extension of their vision. We take charge of branding, marketing campaigns, client qualification, and sales execution,
            allowing developers to focus entirely on engineering and construction. For buyers, we are a trusted filter—curating only the finest properties,
            verifying legal clearances, and negotiating terms with transparency and professionalism.
          </p>
        </div>

        {/* 6. People & Culture Section */}
        <div className="mb-28 border-t border-gray-200 pt-16">
          <h2 className="text-3xl md:text-5xl font-serif text-[#0b3d2c] mb-10 uppercase tracking-widest">
            People & Culture
          </h2>
          <div className="space-y-6 text-base md:text-lg lg:text-xl leading-relaxed text-gray-700">
            <p>
              At I M REALTY, we believe great businesses are built by great people. We are committed to fostering a workplace founded on respect, integrity, equal opportunity, and professional growth.
            </p>
            <p>
              We welcome talent from all backgrounds and evaluate every individual based on merit, performance, and potential. Our culture encourages collaboration, innovation, and continuous learning, empowering our team members to grow alongside the organization.
            </p>
            <p>
              At I M REALTY, diversity is valued, excellence is recognized, and every individual is given the opportunity to succeed.
            </p>
          </div>
        </div>

      </div>

      {/* 6.5 Mission, Vision & Core Values Section */}
      <MissionVisionValues />

      {/* Reopen Main Content Container */}
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-16 py-24">

        {/* 7. Visionaries Section */}
        {/* 7. Leadership Section - Flip Cards */}
        <div className="mb-32 border-t border-gray-200 pt-20">
          <div className="text-center mb-16 font-sans">
            <span className="text-[#ff3447] text-xs font-bold uppercase tracking-[0.25em] block mb-3">Leadership</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-[#22252a] tracking-tight leading-tight max-w-4xl mx-auto">
              The Masterminds Behind <span className="text-[#ff3447]">the Visionary Development</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4 justify-center">
            {[
              {
                name: "Sachin Sunil Pagare",
                role: "Owner & Managing Director",
                image: "/images/sachin.jpg",
                objectPos: "object-center",
                bio: [
                  "An MBA graduate and young entrepreneur, Sachin leads IM Realty with a vision built on innovation, transparency, and trust. His customer-first approach and strategic mindset drive the company's commitment to delivering reliable real estate solutions and creating long-term value for every client."
                ]
              },
              {
                name: "Kaustubh ( KK ) Krishnaraj",
                role: "Owner & Creative Director",
                image: "/images/kaustubh .png",
                objectPos: "object-center",
                bio: [
                  "A creative entrepreneur with a passion for branding and design, Kaustubh shapes the visual identity and marketing direction of IM Realty. Through innovative storytelling and thoughtful design, he ensures every client experiences a modern, professional, and memorable real estate journey."
                ]
              }
            ].map((leader, index) => (
              <div
                key={index}
                className="w-full h-[520px] cursor-pointer"
                style={{ perspective: "1200px" }}
              >
                <motion.div
                  className="relative w-full h-full"
                  style={{ transformStyle: "preserve-3d" }}
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  {/* Front Side */}
                  <div
                    className="absolute inset-0 w-full h-full bg-white rounded-2xl p-8 flex flex-col items-center justify-center border border-gray-100 shadow-lg text-center"
                    style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                  >
                    <div className="relative w-60 h-60 rounded-full overflow-hidden border-4 border-gray-50 shadow-[0_0_30px_rgba(0,0,0,0.05)] mb-8">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className={`object-cover ${leader.objectPos}`}
                      />
                    </div>
                    <h3 className="text-2xl font-sans text-[#1e293b] font-bold uppercase tracking-wider leading-tight">
                      {leader.name}
                    </h3>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-4 leading-relaxed">
                      {leader.role}
                    </p>
                  </div>

                  {/* Back Side */}
                  <div
                    className="absolute inset-0 w-full h-full bg-[#ff3447] rounded-2xl p-10 flex flex-col items-center justify-center text-center text-white shadow-lg"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(180deg)"
                    }}
                  >
                    <div className="font-sans text-base md:text-lg lg:text-xl leading-relaxed tracking-wide text-white/95 space-y-4 overflow-y-auto max-h-[440px] pr-2">
                      {leader.bio.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Team - Auto Slider */}
        <div className="mb-32 border-t border-gray-200 pt-20">
          <h2 className="text-3xl md:text-5xl font-serif text-[#0b3d2c] mb-16 uppercase tracking-widest text-center">
            Our Core Team
          </h2>

          <div className="relative h-[700px] md:h-[600px] lg:h-[700px] max-w-[1200px] mx-auto overflow-hidden bg-white shadow-xl rounded-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMemberIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 grid grid-cols-1 md:grid-cols-2"
              >
                {/* Left: Image */}
                <div className="relative h-[300px] md:h-full w-full">
                  <Image
                    src={otherTeamMembers[safeIndex].image}
                    alt={otherTeamMembers[safeIndex].name}
                    fill
                    className="object-cover object-top"
                  />
                </div>

                {/* Right: Info */}
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#0b3d2c] font-bold uppercase tracking-widest mb-4">
                    {otherTeamMembers[safeIndex].name}
                  </h3>
                  <p className="text-sm md:text-base font-bold text-[#ff3447] uppercase tracking-wider mb-8">
                    {otherTeamMembers[safeIndex].role}
                  </p>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-12">
                    {otherTeamMembers[safeIndex].description}
                  </p>

                  {/* Custom Progress Dots */}
                  <div className="flex space-x-3 mt-auto">
                    {otherTeamMembers.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentMemberIndex(idx)}
                        className={`w-12 h-1.5 transition-colors duration-300 ${idx === currentMemberIndex ? 'bg-[#ff3447]' : 'bg-gray-200 hover:bg-gray-300'
                          }`}
                        aria-label={`View ${otherTeamMembers[idx].name}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* 8. Pre-footer Text */}
        <div className="text-center pb-20 border-b border-gray-200">
          <h2 className="text-4xl md:text-5xl font-serif text-[#0b3d2c] mb-6 uppercase tracking-widest">
            Together at I M REALTY
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Together, we are not just presenting homes; we are building lifelong relationships of trust. Join us in our journey
            as we continue to match premier developments with discerning buyers, one exceptional property at a time.
          </p>
        </div>

      </div>
    </div>
  );
};

export default AboutContent;
