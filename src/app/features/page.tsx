"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Flame,
  Dumbbell,
  Smile,
  Compass,
  Trees,
  Gamepad2,
  Users,
  Lock,
  Car,
  MapPin,
  Briefcase,
  ChevronDown,
  ArrowUpRight,
  Plus
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Categories data
const categoryAmenities = [
  {
    title: "The Clubhouse",
    icon: <Users className="w-5 h-5" />,
    desc: "A 5000+ sq.ft designer social hub for elite community gatherings and celebrations.",
    image: "/images/amenity_clubhouse.png",
  },
  {
    title: "Infinity Pool",
    icon: <Flame className="w-5 h-5" />,
    desc: "A stunning horizontal horizon pool with sunken decks and private cabanas.",
    image: "/images/amenity_pool.png",
  },
  {
    title: "Wellness Gym",
    icon: <Dumbbell className="w-5 h-5" />,
    desc: "State-of-the-art cardiovascular and strength conditioning equipment with trainers.",
    image: "/images/amenity_gym.png",
  },
  {
    title: "Kids Play Zone",
    icon: <Smile className="w-5 h-5" />,
    desc: "Safe, creatively mapped indoor and outdoor zones for early child development.",
    image: "/images/amenity_kids.png",
  },
  {
    title: "Jogging Trails",
    icon: <Compass className="w-5 h-5" />,
    desc: "Soft-cushioned paths winding through botanical settings for morning cardio.",
    image: "/images/amenity_jogging.png",
  },
  {
    title: "Botanical Garden",
    icon: <Trees className="w-5 h-5" />,
    desc: "Lush themed gardens with seating niches and aromatic flora for meditation.",
    image: "/images/amenity_garden.png",
  },
  {
    title: "Indoor Lounge",
    icon: <Gamepad2 className="w-5 h-5" />,
    desc: "Snooker tables, table tennis, and virtual arcade setups for weekend leisure.",
    image: "/images/amenity_lounge.png",
  },
  {
    title: "Multipurpose Hall",
    icon: <Users className="w-5 h-5" />,
    desc: "Spacious banquets configured for private birthday parties and board presentations.",
    image: "/images/amenity_clubhouse.png",
  },
  {
    title: "Smart Security",
    icon: <Lock className="w-5 h-5" />,
    desc: "RFID vehicular access controls and multi-tier monitoring arrays 24/7.",
    image: "/images/amenity_security.png",
  },
  {
    title: "Private Parking",
    icon: <Car className="w-5 h-5" />,
    desc: "Secured, well-lit spaces dedicated for residents and high-speed EV chargers.",
    image: "/images/amenity_parking.png",
  },
  {
    title: "Yoga & Zen Deck",
    icon: <MapPin className="w-5 h-5" />,
    desc: "Elevated, open-air wooden deck configured for sunrise yoga and breathing work.",
    image: "/images/amenity_yoga.png",
  },
  {
    title: "Business Lounge",
    icon: <Briefcase className="w-5 h-5" />,
    desc: "High-speed Wi-Fi, meeting spaces, and printing hubs for home office needs.",
    image: "/images/amenity_business.png",
  }
];

// Showcase data
const showcaseAmenities = [
  {
    title: "A Masterpiece of Social Living",
    subtitle: "THE CLUBHOUSE",
    desc: "Spanning over 5,000 square feet of curated architectural spaces, the clubhouse is the center of social life. Designed with tall ceilings, glass brick facades, and warm, custom-lit acoustics, it features private dining saloons, a banquet hall, and lounge bars that transition seamlessly onto the garden decks.",
    image: "/images/amenity_clubhouse.png",
    features: ["5,000+ Sq.Ft Footprint", "Private Dining Rooms", "Indoor Banquets", "Acoustically Treated Lounge"]
  },
  {
    title: "Water Meets Horizon",
    subtitle: "INFINITY POOL",
    desc: "Positioned to receive optimal solar warmth throughout the day, our infinity pool blends structural concrete with clean water views. Float at the horizon edge or unwind in sunken dry-fire decks, while kids play in their own temperature-regulated splash zones.",
    image: "/images/amenity_pool.png",
    features: ["Infinity Edge View", "Temperature Regulated Kids Pool", "Sunken Dry-Fire Lounge", "Private Poolside Cabanas"]
  },
  {
    title: "Botanical Tranquility",
    subtitle: "LANDSCAPED GARDENS",
    desc: "Curated by master arborists, the botanical parks feature aromatic walking pathways, quiet zen deck spaces, and water springs that block out external city sounds. It is a breathing habitat designed for silent meditation, walks, and birdwatching.",
    image: "/images/amenity_garden.png",
    features: ["Aromatic Flora Walkways", "Water Springs & Streams", "Zen Meditation Niches", "Pet Friendly Trails"]
  }
];

// FAQS
const faqData = [
  {
    q: "Are the clubhouse facilities included in the maintenance fee?",
    a: "Yes, access to the clubhouse, swimming pool, gymnasium, and outdoor parks is part of the basic residency amenities covered under the monthly maintenance program, with no extra subscription fees."
  },
  {
    q: "Is there electric vehicle (EV) charging infrastructure?",
    a: "Absolutely. Every parking bay is routed for high-speed EV chargers, supported by our smart green grid infrastructure to ensure clean, metered charging for your vehicles."
  },
  {
    q: "How secure is the property?",
    a: "We implement a five-tier secure access system: RFID tags for automatic vehicle gate entry, biometric scanner controls at the lobbies, 24/7 high-definition CCTV monitoring, smart video intercoms in every residence, and certified security officers patrolling the grounds."
  },
  {
    q: "Can the multipurpose hall be booked for private events?",
    a: "Yes, residents can easily book the multipurpose hall and private dining saloons through the resident community application for birthdays, family parties, or professional gatherings."
  }
];

export default function AmenitiesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#111111] overflow-x-hidden font-sans relative">
      <Navbar />

      {/* Decorative Blueprint outline watermark */}
      <div className="absolute top-[300px] right-[-100px] w-[500px] h-[500px] border border-[#111111]/[0.03] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[800px] left-[-200px] w-[600px] h-[600px] border border-[#111111]/[0.02] rounded-full pointer-events-none z-0" />

      {/* HERO SECTION */}
      <section className="pt-32 md:pt-48 pb-20 px-6 md:px-16 lg:px-24 max-w-[1600px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Hero text */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-3 px-3.5 py-1 bg-[#111111]/5 border border-[#111111]/10 rounded-full">
              <span className="w-1.5 h-1.5 bg-[#D62839] rounded-full" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#666666]">EXCLUSIVE MANDATE</span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-[0.9] text-[#111111] uppercase"
            >
              World-Class <br />
              <span className="font-light italic text-[#666666] lowercase">amenities</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-base md:text-lg text-[#666666] max-w-xl leading-relaxed"
            >
              Designed around your lifestyle. An editorial compilation of curated residential spaces, health clubs, and relaxation decks engineered for high-performance living.
            </motion.p>
          </div>

          {/* Hero image with premium offset border */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[400px] aspect-[4/5]">
              {/* Offset Outline Border */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-[#111111]/10 rounded-2xl pointer-events-none z-0 hidden sm:block" />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                className="w-full h-full overflow-hidden rounded-2xl border border-[#111111]/10 shadow-2xl relative z-10"
              >
                <Image
                  src="/images/Elevation.jpg"
                  alt="Premium Real Estate Elevation"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </div>

        </div>
      </section>


      {/* CATEGORIES GRID */}
      <section className="py-24 px-6 md:px-16 lg:px-24 max-w-[1600px] mx-auto">
        <div className="mb-16">
          <span className="text-[#D62839] text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">PORTFOLIO OVERVIEW</span>
          <h2 className="text-3xl md:text-5xl font-serif text-[#111111] uppercase tracking-wide">
            Designed for Life
          </h2>
          <div className="w-16 h-[2px] bg-[#D62839] mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {categoryAmenities.map((amenity, i) => (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden border border-[#EAEAEA] hover:border-[#D62839]/30 transition-all duration-500 group shadow-sm hover:shadow-xl"
            >
              {/* Image Frame */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <Image
                  src={amenity.image}
                  alt={amenity.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* Floating Icon badge */}
                <div className="absolute top-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full border border-white/25 flex items-center justify-center text-white shadow-md">
                  {amenity.icon}
                </div>
              </div>

              {/* Text Area */}
              <div className="p-6 md:p-8 space-y-3">
                <h3 className="text-lg md:text-xl font-serif text-[#111111] group-hover:text-[#D62839] transition-colors duration-300">
                  {amenity.title}
                </h3>
                <p className="text-xs text-[#666666] leading-relaxed">
                  {amenity.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* INTERACTIVE EDITORIAL SHOWCASE (Alternating Layouts) */}
      <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-white border-y border-[#EAEAEA] relative overflow-hidden">

        {/* Large faint background watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30rem] font-serif font-bold text-[#111111]/[0.01] select-none pointer-events-none z-0">
          SPACES
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10 space-y-32 md:space-y-48">

          {showcaseAmenities.map((showcase, i) => (
            <motion.div
              key={showcase.subtitle}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-stretch`}
            >
              {/* Picture column */}
              <div className="w-full lg:w-[50%] min-h-[300px] md:min-h-[450px] relative rounded-2xl overflow-hidden shadow-lg border border-[#EAEAEA] group">
                <Image
                  src={showcase.image}
                  alt={showcase.title}
                  fill
                  className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60" />
              </div>

              {/* Copy column */}
              <div className="w-full lg:w-[50%] flex flex-col justify-between py-4">
                <div className="space-y-6">
                  <span className="text-[#D62839] text-[10px] font-bold tracking-[0.4em] uppercase block">
                    {showcase.subtitle}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-serif text-[#111111] leading-tight">
                    {showcase.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#666666] leading-relaxed">
                    {showcase.desc}
                  </p>

                  <ul className="grid grid-cols-2 gap-4 pt-6 border-t border-[#EAEAEA]">
                    {showcase.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2.5 text-xs text-[#666666] font-medium">
                        <span className="w-1.5 h-1.5 bg-[#D62839] rounded-full" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-10">
                  <Link href="/contact" className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-[#111111] hover:text-[#D62839] transition-colors duration-300 group/link">
                    Schedule Tour
                    <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover/link:border-[#D62839] group-hover/link:bg-[#D62839] group-hover/link:text-white transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </section>


      {/* LIFESTYLE EXPERIENCE (Photo Gallery slider style) */}
      <section className="py-24 px-6 md:px-16 lg:px-24 max-w-[1600px] mx-auto text-center">
        <div className="mb-16 max-w-2xl mx-auto space-y-4">
          <span className="text-[#D62839] text-[10px] font-bold tracking-[0.4em] uppercase block">RETREAT EXPERIENCE</span>
          <h2 className="text-3xl md:text-6xl font-serif text-[#111111] uppercase tracking-wide leading-tight">
            Experience Every Day <br />Like A Luxury Retreat
          </h2>
          <p className="text-sm text-[#666666] max-w-md mx-auto">
            A quiet sanctuary crafted away from noise. Relax in the lap of nature, high-performance gyms, and water parks.
          </p>
        </div>

        {/* Gallery cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { img: "/images/amenity_lounge.png", label: "Designer Lounges" },
            { img: "/images/amenity_pool.png", label: "Horizontal Horizon Pools" },
            { img: "/images/amenity_garden.png", label: "Arborist Landscaped Gardens" }
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="relative h-[250px] md:h-[400px] rounded-2xl overflow-hidden shadow-md group border border-[#ffffff]"
            >
              <Image
                src={item.img}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent z-10 pointer-events-none" />
              <div className="absolute bottom-6 left-6 text-left z-20">
                <span className="text-[10px] font-bold text-white/60 tracking-[0.2em] uppercase">EXPERIENCE</span>
                <h4 className="text-xl font-serif !text-white mt-1 uppercase tracking-wider">{item.label}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* PREMIUM HIGHLIGHT BANNER */}
      <section className="relative w-full h-[350px] md:h-[550px] overflow-hidden flex items-center justify-center">
        <Image
          src="/images/Elevation.jpg"
          alt="Premium Architecture highlight banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px] pointer-events-none" />

        <div className="relative z-10 text-center space-y-8 px-6">
          <span className="text-white/60 text-[10px] font-bold tracking-[0.5em] uppercase block">EXCLUSIVE LIVING</span>
          <h2 className="text-3xl md:text-7xl font-serif text-white uppercase tracking-wider leading-none">
            Designed For <br /> <span className="font-light italic text-white/70 lowercase">modern living</span>
          </h2>
          <div className="pt-4">
            <Link href="/contact">
              <button className="px-10 py-4 bg-[#D62839] text-white text-xs font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500 rounded-full shadow-lg">
                Book A Visit
              </button>
            </Link>
          </div>
        </div>
      </section>


      {/* GALLERY (Luxury Masonry Grid) */}
      <section className="py-24 px-6 md:px-16 lg:px-24 max-w-[1600px] mx-auto">
        <div className="mb-16">
          <span className="text-[#D62839] text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">GALLERY MATRIX</span>
          <h2 className="text-3xl md:text-5xl font-serif text-[#111111] uppercase tracking-wide">
            Architectural Elements
          </h2>
          <div className="w-16 h-[2px] bg-[#D62839] mt-6" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[300px]">

          {/* Card 1 */}
          <div className="relative rounded-2xl overflow-hidden sm:col-span-2 lg:col-span-2 lg:row-span-2 border border-[#EAEAEA] group shadow-sm">
            <Image
              src="/images/amenity_yoga.png"
              alt="Yoga Zen Deck"
              fill
              className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-6 left-6 text-left z-20">
              <h4 className="text-lg md:text-2xl font-serif !text-white uppercase tracking-wider">Elevated Zen Yoga Deck</h4>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-2xl overflow-hidden border border-[#EAEAEA] group shadow-sm">
            <Image
              src="/images/amenity_business.png"
              alt="Business Lounge"
              fill
              className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-6 left-6 text-left z-20">
              <h4 className="text-base md:text-lg font-serif !text-white uppercase tracking-wider">Corporate Business Lounge</h4>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative rounded-2xl overflow-hidden border border-[#EAEAEA] group shadow-sm">
            <Image
              src="/images/amenity_gym.png"
              alt="EV Chargers"
              fill
              className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-6 left-6 text-left z-20">
              <h4 className="text-base md:text-lg font-serif !text-white uppercase tracking-wider">EV Charging Infrastructure</h4>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative rounded-2xl overflow-hidden sm:col-span-2 lg:col-span-1 border border-[#EAEAEA] group shadow-sm">
            <Image
              src="/images/amenity_lounge.png"
              alt="Games Lounge"
              fill
              className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-6 left-6 text-left z-20">
              <h4 className="text-base md:text-lg font-serif !text-white uppercase tracking-wider">Recreational Games Lounge</h4>
            </div>
          </div>

          {/* Card 5 */}
          <div className="relative rounded-2xl overflow-hidden sm:col-span-2 lg:col-span-2 border border-[#EAEAEA] group shadow-sm">
            <Image
              src="/images/amenity_clubhouse.png"
              alt="Multipurpose Hall"
              fill
              className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-6 left-6 text-left z-20">
              <h4 className="text-lg md:text-xl font-serif !text-white uppercase tracking-wider">Banquets & Celebrations Hall</h4>
            </div>
          </div>

        </div>
      </section>


      {/* RESIDENT EXPERIENCE (Testimonials) */}
      <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-white border-y border-[#EAEAEA]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Quote mark block */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[6rem] md:text-[8rem] font-serif text-[#D62839]/10 leading-none block -mb-8 select-none">“</span>
            <p className="text-xl md:text-3xl font-serif text-[#111111] leading-relaxed italic">
              Living at I M REALTY represented developments has transformed our daily routine. The wellness clubhouse and landscape gardens feel exactly like an overseas boutique wellness resort.
            </p>
            <div className="pt-6 border-t border-[#EAEAEA] flex items-center gap-4">
              <div>
                <h5 className="font-bold text-gray-800 text-sm md:text-base">Anjali & Rohit </h5>
              </div>
            </div>
          </div>

          {/* Customer Booking celebration image used as portrait testimonial block */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] aspect-[3/4]">
              {/* Offset Outline Border */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-[#111111]/10 rounded-2xl pointer-events-none z-0 hidden sm:block" />

              <div className="w-full h-full overflow-hidden rounded-2xl border border-[#111111]/10 shadow-lg relative z-10">
                <Image
                  src="/images/1.jpeg"
                  alt="Happy Residents"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>



      {/* FINAL CTA SECTION */}
      <section className="bg-white border-t border-[#EAEAEA] py-24 md:py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-10">
          <span className="text-[#D62839] text-[10px] font-bold tracking-[0.5em] uppercase block">PREMIUM APPOINTMENTS</span>
          <h2 className="text-4xl md:text-7xl font-serif text-[#111111] uppercase tracking-wide leading-none">
            Ready to Experience <br />
            <span className="font-light italic text-[#666666] lowercase">premium living?</span>
          </h2>
          <p className="text-sm md:text-base text-[#666666] max-w-md mx-auto leading-relaxed">
            Schedule a private residency preview or download the architectural catalog today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full px-10 py-4 bg-[#D62839] text-white text-xs font-bold uppercase tracking-[0.25em] hover:bg-black hover:text-white transition-all duration-300 rounded-full shadow-md">
                Book Site Visit
              </button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full px-10 py-4 bg-transparent border border-black/15 text-black text-xs font-bold uppercase tracking-[0.25em] hover:bg-black hover:text-white transition-all duration-300 rounded-full">
                Download Brochure
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
