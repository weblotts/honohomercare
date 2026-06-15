"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "About",      href: "/about" },
  { label: "Services",   href: "/services" },
  { label: "How It Works", href: "/services#how-it-works" },
  { label: "Our Team",   href: "/team" },
  { label: "Contact",    href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-border transition-shadow duration-300 ${
          scrolled ? "nav-scrolled" : ""
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href="/" aria-label="Honor Home Care home">
              <Image
                src="/logo.png"
                alt="Honor Home Care"
                width={160}
                height={52}
                priority
                className="object-contain h-[48px] w-auto"
              />
            </Link>

            {/* Desktop nav links */}
            <ul
              className="hidden md:flex items-center gap-8 list-none"
              role="list"
            >
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-[var(--text-mid)] hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+15086653872"
                className="text-sm font-semibold text-primary flex items-center gap-1.5"
              >
                📞 (508) 665-3872
              </a>
              <a
                href="/contact"
                className="btn-primary text-sm px-5 py-2.5 rounded-full font-semibold text-white bg-accent hover:bg-accent-hover transition-all duration-200 hover:-translate-y-0.5"
              >
                Get Care Now
              </a>
            </div>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span
                className={`block w-6 h-0.5 bg-[var(--text-dark)] rounded transition-all duration-300 ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-[var(--text-dark)] rounded transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-[var(--text-dark)] rounded transition-all duration-300 ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile nav */}
      {menuOpen && (
        <div
          className="fixed top-[72px] left-0 right-0 bg-white border-b border-brand-border z-40 shadow-brand-lg"
          role="dialog"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col list-none px-6 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={close}
                  className="block py-3 text-base font-medium text-[var(--text-dark)] border-b border-brand-border last:border-0"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-6 pb-5">
            <a
              href="/contact"
              onClick={close}
              className="block w-full text-center bg-primary text-white font-semibold rounded-full py-3 hover:bg-primary-dark transition-colors"
            >
              Request a Free Consultation
            </a>
          </div>
        </div>
      )}
    </>
  );
}
