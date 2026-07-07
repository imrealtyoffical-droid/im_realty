"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Amenities", href: "/features" },
    { name: "Contact", href: "/contact" },
  ];

  const isHome = pathname === "/";
  const isDarkText = !isHome || isScrolled;
  const textColor = isDarkText ? "#000000" : "#ffffff";
  const logoSrc = isDarkText ? "/images/I Am Realty Logo (1).png" : "/images/logo w.png";

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-700 px-6 pt-6 pb-4 md:px-16 md:py-4",
        isScrolled ? "bg-white/20 backdrop-blur-md shadow-sm !py-4" : "bg-transparent "
      )}
    >
      <div className="max-w-[1800px] mx-auto flex items-center justify-between relative">
        <Link href="/" className="relative z-50">
          <Image
            src={logoSrc}
            alt="I Am Realty Logo"
            width={160}
            height={50}
            className="h-8 md:h-12 w-auto object-contain transition-all duration-300"
          />
        </Link>

        {/* Desktop Menu - Always Centered & Uppercase */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-sm font-bold tracking-wider hover:text-primary-red transition-all duration-300 uppercase group"
              style={{ color: textColor }}
            >
              {link.name}
              {/* Active Indicator Line (Hover Effect) */}
              <span
                className="absolute -bottom-2 left-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-full group-hover:left-0"
                style={{ backgroundColor: textColor }}
              ></span>
            </Link>
          ))}
        </div>

        {/* Right Side - Hamburger Menu */}
        <div className="hidden lg:flex items-center relative z-50">
          <button style={{ color: textColor }} className="hover:text-primary-red transition-colors duration-300">
            <Menu size={28} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-3 relative z-50">
          <button
            style={{ color: textColor }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-[#FAF9F6] flex flex-col items-center justify-center space-y-10 lg:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-3xl font-serif uppercase tracking-[0.4em] text-[#111111] hover:text-primary-red transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex space-x-8 pt-10">
              <a href="https://www.instagram.com/imrealty.in/" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest text-[#666666] hover:text-primary-red transition-colors">IG</a>
              <span className="text-[10px] uppercase tracking-widest text-[#666666]">FB</span>
              <span className="text-[10px] uppercase tracking-widest text-[#666666]">TW</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

