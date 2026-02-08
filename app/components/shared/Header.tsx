"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 glass-panel border-b-0 top-0 transition-all duration-300 ${
        scrolled ? "shadow-lg border-slate-800" : "border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        <Link
          href="#"
          className="font-mono font-bold text-lg tracking-tight flex items-center gap-2 text-white"
        >
          <span className="text-primary-500">&lt;</span>TomoyaIde
          <span className="text-primary-500">/&gt;</span>
        </Link>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <Link href="#about">
              About
            </Link>
            <Link href="#skills">
              Skills
            </Link>
            <Link href="#works">
              Works
            </Link>
            <Link href="#future">
              Vision
            </Link>
          </div>
          <Link
            href="#contact"
            className="hidden md:inline-flex px-4 py-2 bg-slate-800 text-white text-sm font-medium rounded-lg border border-slate-700"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
