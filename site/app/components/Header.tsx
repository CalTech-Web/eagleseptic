"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#0c4a6e] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-[#0a2d42] flex items-center justify-center border-2 border-[#16a34a]">
            <svg className="w-5 h-5 text-[#16a34a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <div>
            <div className="font-bold text-sm leading-tight">Eagle Septic</div>
            <div className="text-xs text-blue-200 leading-tight">Septic Information Guide</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="hover:text-blue-200 transition-colors">Home</Link>
          <Link href="/blog" className="hover:text-blue-200 transition-colors">Blog</Link>
          <Link href="/resources" className="hover:text-blue-200 transition-colors">Guides</Link>
          <Link href="/faq" className="hover:text-blue-200 transition-colors">FAQ</Link>
          <Link href="/services" className="hover:text-blue-200 transition-colors">Services</Link>
          <Link href="/emergency" className="hover:text-blue-200 transition-colors">Emergency Help</Link>
          <Link href="/about" className="hover:text-blue-200 transition-colors">About</Link>
          <Link href="/blog" className="bg-[#16a34a] hover:bg-[#15803d] text-white px-4 py-2 rounded-lg font-medium transition-colors">Read Guides</Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-[#075985] px-4 pb-4">
          <nav className="flex flex-col gap-3 text-sm">
            <Link href="/" onClick={() => setMenuOpen(false)} className="py-2 hover:text-blue-200">Home</Link>
            <Link href="/blog" onClick={() => setMenuOpen(false)} className="py-2 hover:text-blue-200">Blog</Link>
            <Link href="/resources" onClick={() => setMenuOpen(false)} className="py-2 hover:text-blue-200">Guides</Link>
            <Link href="/faq" onClick={() => setMenuOpen(false)} className="py-2 hover:text-blue-200">FAQ</Link>
            <Link href="/services" onClick={() => setMenuOpen(false)} className="py-2 hover:text-blue-200">Services</Link>
            <Link href="/emergency" onClick={() => setMenuOpen(false)} className="py-2 hover:text-blue-200">Emergency Help</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="py-2 hover:text-blue-200">About</Link>
            <Link href="/blog" onClick={() => setMenuOpen(false)} className="bg-[#16a34a] text-white px-4 py-2 rounded-lg text-center font-medium">Read Guides</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
