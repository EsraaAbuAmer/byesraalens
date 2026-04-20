"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Gallery", href: "/gallery" },
  { name: "Exhibitions", href: "/exhibitions" },
  { name: "Archive", href: "/archive" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex w-full items-center justify-between px-6 py-6 md:px-12 md:py-8">
        <Link
          href="/"
          className="font-headline text-2xl italic tracking-tight text-stone-900"
        >
          The Curated Lens
        </Link>

        <div className="hidden items-center gap-12 md:flex">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-headline text-lg tracking-tight transition-colors duration-300 ${
                index === 0
                  ? "border-b border-stone-800 pb-1 text-stone-900"
                  : "text-stone-400 hover:text-stone-900"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-sm uppercase tracking-[0.2em] text-stone-800 md:hidden"
        >
          Menu
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-stone-200 bg-white md:hidden">
          <div className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-3 font-headline text-lg text-stone-700 transition-colors hover:text-stone-900"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}