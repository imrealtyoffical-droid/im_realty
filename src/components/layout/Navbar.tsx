"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

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
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Amenities", href: "/features" },
    { name: "Contact", href: "/contact" },
  ];

  const logoSrc = mounted && resolvedTheme === "light"
    ? "/images/I Am Realty Logo (1).png"
    : "/images/logo w.png";

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-700 px-6 pt-8 pb-4 md:px-16 md:py-4",
        isScrolled ? "glass-dark !py-2" : "bg-transparent"
      )}
    >
      <div className="max-w-[1800px] mx-auto flex justify-between items-center">
        <Link href="/" className="relative z-50">
          <Image
            src={logoSrc}
            alt="I Am Realty Logo"
            width={160}
            height={50}
            className="h-8 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-16">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.4em] text-white/70 hover:text-primary-red transition-colors duration-300 font-medium"
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
          <button className="text-white hover:text-primary-red transition-colors duration-300">
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-3 relative z-50">
          <ThemeToggle />
          <button
            className="text-white"
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
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center space-y-10 lg:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-3xl font-serif uppercase tracking-[0.4em] hover:text-primary-red transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex space-x-8 pt-10">
              <a href="https://www.instagram.com/imrealty.in/" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest text-silver hover:text-primary-red transition-colors">IG</a>
              <span className="text-[10px] uppercase tracking-widest text-silver">FB</span>
              <span className="text-[10px] uppercase tracking-widest text-silver">TW</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

