"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const otherTeamMembers = [
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

        {/* 7. Visionaries Section */}
        <div className="mb-32 border-t border-gray-200 pt-16">
          <h2 className="text-3xl md:text-5xl font-serif text-[#0b3d2c] mb-20 uppercase tracking-widest">
            Leadership & Partners
          </h2>

          {/* Visionary 1 - Sachin */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start mb-32">
            <div className="md:col-span-5 relative h-[450px] md:h-[600px] lg:h-[700px] shadow-2xl shadow-black/100 overflow-hidden rounded-sm">
              <Image
                src="/images/sachin.jpg"
                alt="Sachin Sunil Pagare"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:col-span-7 space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#0b3d2c] font-bold uppercase tracking-widest">Sachin Sunil Pagare</h3>
                <p className="text-sm md:text-base font-bold text-gray-500 uppercase tracking-wider mt-2">Owner & Managing Director</p>
              </div>
              <div className="space-y-6 text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                <p>
                  Sachin leads the operational strategy and business development efforts. He oversees structural partnerships
                  with premier developers, establishing commercial agreements and managing transactional execution.
                </p>
                <p>
                  His focus on transparency and client-first operations ensures that every sales mandate is handled with
                  absolute efficiency, maintaining the high standards expected in luxury real estate transactions.
                </p>
                <p>
                  With over fifteen years of corporate real estate experience, Sachin has orchestrated some of the region's largest developer sales mandates.
                  He acts as the key interface for developer boards, aligning I M REALTY's sales teams with developers' financial goals and construction timelines to ensure project success.
                </p>
              </div>
            </div>
          </div>

          {/* Visionary 2 - Kaustubh */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start mb-32">
            <div className="md:col-span-7 space-y-8 md:order-1 order-2">
              <div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#0b3d2c] font-bold uppercase tracking-widest">Kaustubh ( KK ) Krishnaraj</h3>
                <p className="text-sm md:text-base font-bold text-gray-500 uppercase tracking-wider mt-2">Owner & Creative Director</p>
              </div>
              <div className="space-y-6 text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                <p>
                  As Owner and Creative Director, Kaustubh shapes the strategic identity and visual communication of
                  I M REALTY's portfolio. His focus is on elevating how premium properties are presented and experienced
                  by high-net-worth buyers.
                </p>
                <p>
                  Believing that premium real estate is a synthesis of art and lifestyle, Kaustubh works closely with architectural
                  firms and creative agencies to translate developers' visions into compelling narratives that drive buyer interest and premium sales.
                </p>
                <p>
                  With a background in creative design and high-end brand consulting, he ensures that marketing assets, physical showrooms,
                  and digital experiences match the architectural caliber of the properties we represent, establishing I M REALTY as the agency of choice for luxury developers.
                </p>
              </div>
            </div>
            <div className="md:col-span-5 relative h-[450px] md:h-[600px] lg:h-[700px] md:order-2 order-1 shadow-2xl shadow-black/100 overflow-hidden rounded-sm">
              <Image
                src="/images/kaustubh .png"
                alt="Kaustubh ( KK ) Krishnaraj"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Visionary 3 - Rushikesh */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start mb-32">
            <div className="md:col-span-5 relative h-[450px] md:h-[600px] lg:h-[700px] shadow-2xl shadow-black/100 overflow-hidden rounded-sm">
              <Image
                src="/images/rushikesh.png"
                alt="Rushikesh Komaskar"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="md:col-span-7 space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#0b3d2c] font-bold uppercase tracking-widest">Rushikesh Komaskar</h3>
                <p className="text-sm md:text-base font-bold text-gray-500 uppercase tracking-wider mt-2">Board Member & Legal Advisor</p>
              </div>
              <div className="space-y-6 text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                <p>
                  As a Board Member and Legal Advisor, Rushikesh brings strategic foresight and strict governance to I M REALTY.
                  His expertise ensures that every transaction is rooted in transparency and comprehensive legal compliance.
                </p>
                <p>
                  He oversees the formulation of commercial agreements and structural partnerships, providing developers and high-net-worth buyers
                  with absolute confidence and security throughout the acquisition process.
                </p>
                <p>
                  Rushikesh's insights help shape our long-term vision, ensuring we remain at the forefront of the luxury real estate market while upholding the highest standards of professional integrity.
                </p>
              </div>
            </div>
          </div>

          {/* Visionary 4 - Pramila */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">
            <div className="md:col-span-7 space-y-8 md:order-1 order-2">
              <div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#0b3d2c] font-bold uppercase tracking-widest">Pramila Krishnaraj</h3>
                <p className="text-sm md:text-base font-bold text-gray-500 uppercase tracking-wider mt-2">HR Head & Co-Owner</p>
              </div>
              <div className="space-y-6 text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                <p>
                  As HR Head and Co-Owner, Pramila plays a vital role in building and managing I M REALTY's elite team.
                  She believes that a company's greatest asset is its people and works to cultivate an inclusive, high-performance
                  culture where operational staff and consultants thrive.
                </p>
                <p>
                  Pramila oversees recruitment, structural development, and workplace culture initiatives, ensuring that
                  every agent, consultant, and representative embodies our core values of trust and professional integrity.
                </p>
                <p>
                  She designs and implements advanced training programs that equip our sales force with deep consultancy and advisory skills,
                  shifting their roles from simple agents to trusted asset advisors. Under her guidance, I M REALTY has maintained a reputation
                  for having the most professional workforce in the industry, which is a key reason developers entrust us with their exclusive inventory.
                </p>
              </div>
            </div>
            <div className="md:col-span-5 relative h-[450px] md:h-[600px] lg:h-[700px] md:order-2 order-1 shadow-2xl shadow-black/100 overflow-hidden rounded-sm">
              <Image
                src="/images/Pramila.png"
                alt="Pramila Krishnaraj"
                fill
                className="object-cover"
              />
            </div>
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
