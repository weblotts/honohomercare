"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const TOP_NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "About",    href: "/about" },
  { label: "Contact",  href: "/contact" },
];

const SERVICE_DROPDOWN = [
  { label: "Alzheimer's & Dementia Care",         href: "/services/alzheimers-care" },
  { label: "Live-In Care",                        href: "/services/live-in-care" },
  { label: "Private Pay",                         href: "/services/private-pay" },
  { label: "Long-Term Care Insurance",            href: "/services/long-term-care-insurance" },
  { label: "Concierge Services",                  href: "/services/concierge" },
  { label: "Care in Assisted Living Communities", href: "/services/assisted-living" },
  { label: "Personal Care",                       href: "/services#personal-care" },
  { label: "Overnight Care",                      href: "/services#overnight" },
  { label: "Respite Care",                        href: "/services#respite" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const close = () => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
  };

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
            <ul className="hidden lg:flex items-center gap-6 list-none whitespace-nowrap" role="list">
              {TOP_NAV_LINKS.map((link) =>
                link.label === "Services" ? (
                  <li key={link.href} ref={dropdownRef} className="relative">
                    <button
                      onClick={() => setServicesOpen((o) => !o)}
                      className="flex items-center gap-1 text-sm font-medium text-[var(--text-mid)] hover:text-primary transition-colors duration-200"
                      aria-expanded={servicesOpen}
                    >
                      Services
                      <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {servicesOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-50">
                        <a href="/services" onClick={() => setServicesOpen(false)} className="block px-4 py-2.5 text-sm font-semibold text-primary border-b border-gray-100 mb-1 hover:bg-base-200 transition-colors">
                          All Services
                        </a>
                        {SERVICE_DROPDOWN.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setServicesOpen(false)}
                            className="block px-4 py-2.5 text-sm text-[var(--text-mid)] hover:text-primary hover:bg-base-200 transition-colors"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </li>
                ) : (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm font-medium text-[var(--text-mid)] hover:text-primary transition-colors duration-200">
                      {link.label}
                    </a>
                  </li>
                )
              )}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+15086653872"
                className="text-sm font-semibold text-primary flex items-center gap-1.5 whitespace-nowrap"
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
              className="lg:hidden flex flex-col gap-1.5 p-1 cursor-pointer"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span className={`block w-6 h-0.5 bg-[var(--text-dark)] rounded transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block w-6 h-0.5 bg-[var(--text-dark)] rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-[var(--text-dark)] rounded transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
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
            {TOP_NAV_LINKS.map((link) =>
              link.label === "Services" ? (
                <li key="services">
                  <button
                    onClick={() => setMobileServicesOpen((o) => !o)}
                    className="flex items-center justify-between w-full py-3 text-base font-medium text-[var(--text-dark)] border-b border-brand-border"
                  >
                    Services
                    <svg className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileServicesOpen && (
                    <ul className="flex flex-col bg-base-200 rounded-lg my-2 overflow-hidden">
                      <li>
                        <a href="/services" onClick={close} className="block px-4 py-2.5 text-sm font-semibold text-primary border-b border-base-300">
                          All Services
                        </a>
                      </li>
                      {SERVICE_DROPDOWN.map((sl) => (
                        <li key={sl.label}>
                          <a href={sl.href} onClick={close} className="block px-4 py-2.5 text-sm text-[var(--text-mid)] border-b border-base-300 last:border-0">
                            {sl.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.href}>
                  <a href={link.href} onClick={close} className="block py-3 text-base font-medium text-[var(--text-dark)] border-b border-brand-border last:border-0">
                    {link.label}
                  </a>
                </li>
              )
            )}
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
