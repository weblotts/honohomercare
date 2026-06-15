import Image from "next/image";
import Link from "next/link";
import { towns } from "@/lib/towns";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_2fr] gap-10 mb-10 pb-10 border-b border-gray-800">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image src="/logo-white.png" alt="Honor Home Care" width={130} height={42} className="h-9 w-auto" />
            </Link>
            <p className="text-sm leading-relaxed max-w-xs mb-5">
              Specialist in-home dementia care across Greater Boston and MetroWest Massachusetts. Serving families since 2013.
            </p>
            <a href="tel:+15086653872" className="text-white text-sm font-semibold hover:text-gray-300 transition-colors">
              +1 (508) 665-3872
            </a>
            <p className="text-xs mt-1">Available 24/7</p>
            <p className="text-xs mt-3">care@honorhome.care</p>
            <p className="text-xs mt-1">738 Main St, Waltham MA 02451</p>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Services</p>
            <ul className="flex flex-col gap-2.5 text-sm">
              {["Memory Care", "Personal Care", "Medication Management", "Overnight Care", "Respite Care"].map((s) => (
                <li key={s}><Link href="/services" className="hover:text-gray-200 transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Company</p>
            <ul className="flex flex-col gap-2.5 text-sm">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Team", href: "/team" },
                { label: "Contact",  href: "/contact" },
                { label: "Careers",  href: "#" },
              ].map((l) => (
                <li key={l.label}><Link href={l.href} className="hover:text-gray-200 transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Service Areas</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {towns.map((t) => (
                <Link
                  key={t.slug}
                  href={`/areas/${t.slug}`}
                  className="text-sm hover:text-gray-200 transition-colors"
                >
                  {t.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Honor Home Care, LLC. All rights reserved.</p>
          <div className="flex gap-5">
            {[
              { name: "Privacy Policy",   href: "/privacy" },
              { name: "Terms of Service", href: "/terms" },
              { name: "Accessibility",    href: "/accessibility" },
            ].map((l) => (
              <Link key={l.name} href={l.href} className="hover:text-gray-300 transition-colors">{l.name}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
