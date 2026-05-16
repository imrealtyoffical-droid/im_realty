"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
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
              Architecting legacy through minimalist perfection and next-generation structural methodology.
            </p>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary-red">Intelligence</h4>
              <ul className="space-y-4">
                <li><Link href="/projects" className="text-[10px] uppercase tracking-widest text-silver/80 hover:text-white transition-colors">Portfolios</Link></li>
                <li><Link href="/about" className="text-[10px] uppercase tracking-widest text-silver/80 hover:text-white transition-colors">Methodology</Link></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary-red">Connect</h4>
              <div className="flex space-x-6">
                <a href="https://www.instagram.com/imrealty.in/" target="_blank" rel="noopener noreferrer" className="text-silver/80 hover:text-primary-red transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" className="text-silver/80 hover:text-primary-red transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
              </div>
            </div>
            <div className="hidden md:block space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary-red">Legal</h4>
              <ul className="space-y-4">
                <li><span className="text-[10px] uppercase tracking-widest text-silver/80 hover:text-white transition-colors cursor-pointer">Privacy</span></li>
                <li><span className="text-[10px] uppercase tracking-widest text-silver/80 hover:text-white transition-colors cursor-pointer">Terms</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
          <p className="text-[8px] uppercase tracking-[0.5em] text-white/40">
            © 2026 I Am Realty Technology & Architecture. <br className="md:hidden" /> ALL RIGHTS RESERVED.
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
