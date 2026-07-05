"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-[#f9f8f3] relative overflow-hidden min-h-[400px] flex flex-col justify-end">

      {/* 1. Skyline Background Image (Positioned at the bottom) */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] md:h-[400px] z-0 select-none pointer-events-none">
        <Image
          src="/images/footer_bg.png"
          alt="Skyline Background"
          fill
          className="object-cover object-bottom opacity-60"
          priority
        />
        {/* Subtle white/beige gradient from top to bottom to blend the top of the skyline image */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f9f8f3] via-[#f9f8f3]/20 to-transparent" />
      </div>

      {/* 2. Footer Content Overlay (Positioned on top of the image) */}
      <div className="relative z-10 w-full py-12 px-6 flex flex-col items-center justify-center font-sans text-[#1c1c1c]">

        {/* Social Icons (Circles with SVG Logos) */}
        <div className="flex items-center justify-center gap-8 mb-8">
          <a
            href="https://www.instagram.com/imrealty.in?igsh=MTExem5meWcxMThjNA=="
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-black/30 flex items-center justify-center text-gray-800 hover:bg-[#0b3d2c] hover:text-white hover:border-[#0b3d2c] transition-all duration-300"
            aria-label="Instagram"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61579703850383"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-black/30 flex items-center justify-center text-gray-800 hover:bg-[#0b3d2c] hover:text-white hover:border-[#0b3d2c] transition-all duration-300"
            aria-label="Facebook"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href="https://wa.me/917587585555?text=Hi%20I%20would%20like%20to%20know%20more%20about%20your%20properties."
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-black/30 flex items-center justify-center text-gray-800 hover:bg-[#0b3d2c] hover:text-white hover:border-[#0b3d2c] transition-all duration-300"
            aria-label="WhatsApp"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.187 1.449 4.725 1.451 5.485.002 9.948-4.463 9.95-9.952.002-2.659-1.03-5.158-2.906-7.037a9.882 9.882 0 0 0-7.042-2.909c-5.489 0-9.954 4.465-9.956 9.956-.002 1.63.435 3.22 1.267 4.628L1.084 22.17l4.316-1.132-1.161-1.885zm12.52-5.419c-.31-.155-1.837-.906-2.116-1.008-.278-.1-.482-.152-.684.152-.202.304-.782.984-.959 1.186-.177.202-.354.228-.664.073-1.055-.528-1.747-.978-2.433-2.155-.177-.304-.177-.522-.023-.676.14-.137.31-.362.465-.544.155-.182.207-.312.31-.52.104-.207.052-.39-.026-.544-.078-.155-.684-1.65-.937-2.258-.247-.593-.497-.513-.684-.522-.177-.008-.38-.01-.582-.01-.202 0-.53.076-.807.38-.278.304-1.062 1.037-1.062 2.529 0 1.491 1.085 2.929 1.237 3.131.152.202 2.137 3.263 5.176 4.57.723.311 1.287.497 1.727.637.727.231 1.388.198 1.91.121.582-.087 1.837-.75 2.09-1.474.253-.725.253-1.346.177-1.474-.076-.128-.278-.204-.588-.36z" />
            </svg>
          </a>
        </div>

        {/* Corporate Info Block (Single Row - Increased Font Size) */}
        <div className="mb-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center text-sm md:text-base lg:text-lg font-semibold tracking-wider text-gray-800">
          <span>imrealtyglobal@gmail.com</span>
          <span className="hidden md:inline text-gray-400">|</span>
          <span>+91 75875 85555</span>
          <span className="hidden md:inline text-gray-400">|</span>
          <span className="uppercase tracking-[0.2em] text-[#0b3d2c] font-bold">Dombivli, Maharashtra</span>
        </div>

        {/* Links (Increased Font Size) */}
        <div className="mb-6 text-center">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-gray-600 hover:text-black transition-colors duration-300 cursor-pointer font-bold">
            Terms & Conditions &nbsp;|&nbsp; Privacy Policy
          </p>
        </div>

        {/* Copyright (Increased Font Size) */}
        <div className="text-center">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-gray-500 font-bold">
            © {new Date().getFullYear()} I M REALTY. ALL RIGHTS RESERVED.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
