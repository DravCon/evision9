"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-400 ease-out ${
        scrolled
          ? "py-3 px-8 bg-white/92 backdrop-blur-xl border-b border-black/[0.06]"
          : "py-5 px-8 bg-transparent"
      }`}
    >
      <Link href="/" className="flex items-center gap-2.5 no-underline">
        <div
          className="w-9 h-9 rounded-[10px] flex items-center justify-center text-white font-black text-base"
          style={{
            fontFamily: "'Dela Gothic One', cursive",
            background: "linear-gradient(135deg, #FF6B35, #F7C948, #E84393)",
          }}
        >
          E9
        </div>
        <span
          className="text-brand-navy text-lg tracking-tight"
          style={{ fontFamily: "'Dela Gothic One', cursive" }}
        >
          Evision9
        </span>
      </Link>

      <div className="flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-brand-navy/50 no-underline text-sm font-semibold uppercase tracking-wide hover:text-brand-navy transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
