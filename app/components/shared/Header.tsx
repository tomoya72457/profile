"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed w-full z-50 glass-panel border-b-0 top-0 transition-all duration-300 ${
          scrolled ? "shadow-lg border-slate-800" : "border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <Link
            href="#"
            className="font-mono font-bold text-lg tracking-tight flex items-center gap-2 text-white hover:text-primary-400 transition-colors"
          >
            <span className="text-primary-500">&lt;</span>TomoyaIde
            <span className="text-primary-500">/&gt;</span>
          </Link>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
              <Link href="#about" className="hover:text-primary-400 transition-colors">
                About
              </Link>
              <Link href="#skills" className="hover:text-primary-400 transition-colors">
                Skills
              </Link>
              <Link href="#works" className="hover:text-primary-400 transition-colors">
                Works
              </Link>
              <Link href="#future" className="hover:text-primary-400 transition-colors">
                Vision
              </Link>
            </div>
            <Link
              href="#contact"
              className="hidden md:inline-flex px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-lg border border-slate-700 transition-all"
            >
              Contact
            </Link>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={closeMenu}
        ></div>
        
        {/* Menu Panel */}
        <div
          className={`absolute top-16 right-0 w-64 h-[calc(100vh-4rem)] glass-panel border-l border-slate-800 transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col p-6 space-y-6">
            <Link
              href="#about"
              onClick={closeMenu}
              className="text-slate-300 hover:text-primary-400 transition-colors text-lg font-medium"
            >
              About
            </Link>
            <Link
              href="#skills"
              onClick={closeMenu}
              className="text-slate-300 hover:text-primary-400 transition-colors text-lg font-medium"
            >
              Skills
            </Link>
            <Link
              href="#works"
              onClick={closeMenu}
              className="text-slate-300 hover:text-primary-400 transition-colors text-lg font-medium"
            >
              Works
            </Link>
            <Link
              href="#future"
              onClick={closeMenu}
              className="text-slate-300 hover:text-primary-400 transition-colors text-lg font-medium"
            >
              Vision
            </Link>
            <Link
              href="#contact"
              onClick={closeMenu}
              className="inline-flex justify-center px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-lg border border-slate-700 transition-all"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
