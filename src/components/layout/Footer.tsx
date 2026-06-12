"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp, Instagram, Facebook, MessageCircle } from "lucide-react";
import { useTheme } from "next-themes";

const Footer = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc = mounted && resolvedTheme === "light"
    ? "/images/I Am Realty Logo (1).png"
    : "/images/logo w.png";

  return (
    <footer className="bg-black py-16 px-6 md:px-24 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-8">
            <Link href="/" className="inline-block">
              <Image 
                src={logoSrc} 
                alt="I Am Realty Logo" 
                width={180} 
                height={60} 
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-xs uppercase tracking-[0.3em] text-silver/50 leading-loose max-w-sm">
              Helping families, investors and businesses discover exceptional properties with trust, transparency and expertise.
            </p>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-7 flex justify-center">
  <div className="relative w-full max-w-xl h-[260px]">

    {/* Inverted Triangle */}
    <div
      className="absolute inset-0 border border-white/10"
      style={{
        clipPath: "polygon(50% 100%, 0 0, 100% 0)",
      }}
    />

    {/* Address */}
    <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center">
      <p className="text-primary-red text-[10px] uppercase tracking-[0.4em]">
        Address
      </p>

      <p className="mt-3 text-sm text-white/80">
        Dombivli, Maharashtra
      </p>
    </div>

    {/* Phone */}
    <div className="absolute top-24 left-8 md:left-12 text-center">
      <p className="text-primary-red text-[10px] uppercase tracking-[0.4em]">
        Phone
      </p>

      <p className="mt-2 text-sm text-white/80">
        +91 75875 85555
      </p>
    </div>

    {/* Email */}
    <div className="absolute top-24 right-8 md:right-12 text-center">
      <p className="text-primary-red text-[10px] uppercase tracking-[0.4em]">
        Email
      </p>

      <p className="mt-2 text-sm text-white/80">
        info@iamrealty.in
      </p>
    </div>

    {/* Socials */}
   {/* Socials */}
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-8 text-white/70">

  <a
    href="https://www.instagram.com/imrealty.in?igsh=MTExem5meWcxMThjNA=="
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-primary-red hover:scale-110 transition-all duration-300"
  >
    <Instagram size={20} />
  </a>

  <a
    href="https://www.facebook.com/profile.php?id=61579703850383"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-primary-red hover:scale-110 transition-all duration-300"
  >
    <Facebook size={20} />
  </a>

  <a
    href="https://wa.me/917587585555?text=Hi%20I%20would%20like%20to%20know%20more%20about%20your%20properties."
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-primary-red hover:scale-110 transition-all duration-300"
  >
    <MessageCircle size={20} />
  </a>

</div>
    </div> {/* End triangle container */}
</div> {/* End md:col-span-7 */}
</div> {/* End top grid */}

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
          <p className="text-[8px] uppercase tracking-[0.5em] text-white/40 text-center md:text-left">
  © 2026 I Am Realty. All Rights Reserved.
</p>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center space-x-4"
          >
            <span className="text-[8px] uppercase tracking-[0.4em] text-white/20 group-hover:text-white transition-colors">Back to Summit</span>
            <div className="w-10 h-10 border border-white/5 flex items-center justify-center group-hover:bg-primary-red group-hover:border-primary-red transition-all duration-500">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
