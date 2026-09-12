"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Who I Help", href: "#services" },
    { name: "Expertise", href: "#expertise" },
    { name: "How I Work", href: "#how-i-work" },
    { name: "Our Office", href: "#our-office" },
    { name: "FAQ", href: "#faq" },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#ddd8ce] bg-[#f7f4ee]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a
          href="#home"
          className="group flex flex-col"
          onClick={handleLinkClick}
        >
          <span className="text-xl font-semibold tracking-[-0.02em] text-[#26332d] sm:text-2xl">
            Maya Reynolds
          </span>

          <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#687968] sm:text-[11px]">
            PsyD · Clinical Psychologist
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative py-2 text-sm font-medium text-[#4f5c54] transition-colors duration-200 hover:text-[#687968]"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="ml-2 rounded-full bg-[#687968] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#4f6050] hover:shadow-md"
          >
            Book a Consultation
          </a>
        </nav>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ddd8ce] text-[#26332d] transition-colors hover:bg-[#eee9df] lg:hidden"
        >
          <span className="sr-only">
            {isMenuOpen ? "Close menu" : "Open menu"}
          </span>

          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-[#26332d] transition-transform duration-200 ${
                isMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`block h-0.5 w-5 bg-[#26332d] transition-opacity duration-200 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />

            <span
              className={`block h-0.5 w-5 bg-[#26332d] transition-transform duration-200 ${
                isMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-[#ddd8ce] bg-[#f7f4ee] transition-all duration-300 lg:hidden ${
          isMenuOpen
            ? "max-h-[600px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-6 py-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="border-b border-[#ddd8ce] py-4 text-base font-medium text-[#26332d] transition-colors hover:text-[#687968]"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={handleLinkClick}
            className="mt-5 rounded-full bg-[#687968] px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-[#4f6050]"
          >
            Book a Consultation
          </a>
        </nav>
      </div>
    </header>
  );
}