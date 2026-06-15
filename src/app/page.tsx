import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import { townGroups, towns } from "@/lib/towns";

export const metadata: Metadata = {
  alternates: { canonical: "https://honorhome.care" },
};

const featuredServices = [
  {
    n: "01",
    title: "Memory Care Support",
    desc: "Structured routines, cognitive stimulation, and therapeutic engagement tailored to each stage of Alzheimer's and dementia.",
    href: "/services#memory-care",
  },
  {
    n: "02",
    title: "Personal Care & Daily Living",
    desc: "Respectful, dignified assistance with daily activities — bathing, dressing, mobility, and nutrition — in the comfort of your loved one's own home.",
    href: "/services#personal-care",
  },
  {
    n: "03",
    title: "Overnight & 24-Hour Care",
    desc: "Round-the-clock supervision for individuals with sundowning, wandering, or complex care needs — available across Massachusetts.",
    href: "/services#overnight",
  },
];


export default function HomePage() {
  return (
    <>
      <Hero />

      {/* ── Services preview ── */}
      <section className="py-24 bg-base-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <p className="text-[11px] font-semibold tracking-[3px] uppercase text-primary mb-3">What We Offer</p>
              <h2 className="font-serif text-[clamp(30px,4vw,46px)] text-base-content leading-[1.1]">
                Specialist Dementia Care<br />Across Massachusetts
              </h2>
            </div>
            <Link href="/services"
              className="btn btn-ghost border border-base-300 btn-sm rounded-md text-base-content/70 font-medium normal-case flex-shrink-0">
              All services →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featuredServices.map((s) => (
              <Link key={s.n} href={s.href}
                className="card bg-base-100 border border-base-300 shadow-none hover:border-primary/30 hover:shadow-sm transition-all duration-200 group">
                <div className="card-body p-7 gap-3">
                  <p className="font-serif text-[38px] font-medium leading-none text-base-300 group-hover:text-primary/20 transition-colors">
                    {s.n}
                  </p>
                  <h3 className="font-semibold text-[15px] text-base-content">{s.title}</h3>
                  <p className="text-[13px] text-base-content/60 leading-relaxed">{s.desc}</p>
                  <p className="text-[12px] text-primary font-semibold mt-1 group-hover:underline">Learn more →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── About preview ── */}
      <section className="py-24 bg-base-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/images/holding-hands.jpg"
                  alt="Caregiver with an elderly person in a Massachusetts home"
                  fill className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-5 -right-4 bg-base-100 rounded-xl shadow-md border border-base-300 px-5 py-4">
                <p className="font-serif text-3xl text-base-content font-semibold leading-none">2013</p>
                <p className="text-[11px] text-base-content/50 mt-1 font-medium">Est. Waltham, MA</p>
              </div>
            </div>

            <div>
              <p className="text-[11px] font-semibold tracking-[3px] uppercase text-primary mb-4">Who We Are</p>
              <h2 className="font-serif text-[clamp(30px,4vw,46px)] text-base-content leading-[1.1] mb-5">
                Massachusetts-Rooted,<br />Family-Centered Care
              </h2>
              <p className="text-[15px] text-base-content/60 leading-relaxed mb-4">
                Founded in Waltham, MA in 2013 by gerontologists and nurses who saw
                firsthand the gap between what Massachusetts families needed and what
                the homecare industry was providing.
              </p>
              <p className="text-[15px] text-base-content/60 leading-relaxed mb-8">
                We now serve hundreds of families across the Greater Boston area and
                MetroWest with a care model endorsed by the Alzheimer&apos;s Association
                and built around each person — not a generic schedule.
              </p>
              <blockquote className="border-l-2 border-primary pl-5 mb-8">
                <p className="text-[14px] italic text-base-content/70 leading-relaxed">
                  &ldquo;Every person living with dementia deserves to be treated with
                  respect, patience, and individualized attention.&rdquo;
                </p>
                <p className="text-[12px] font-semibold text-primary mt-2">
                  — Dr. Sarah Mitchell, Medical Director
                </p>
              </blockquote>
              <Link href="/about"
                className="btn btn-primary rounded-md text-white font-semibold normal-case btn-sm px-6">
                Our story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why us strip ── */}
      <section className="py-16 bg-base-200 border-y border-base-300">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-base-300">
            {[
              { icon: "🎓", title: "80-Hour Certification",  desc: "Every caregiver before first placement" },
              { icon: "👩‍⚕️", title: "RN-Supervised",        desc: "Monthly home visits by a registered nurse" },
              { icon: "🤝", title: "Consistent Caregivers",  desc: "Same trusted caregiver, every visit" },
              { icon: "📱", title: "Family Portal",          desc: "Real-time updates for MA families" },
            ].map((item) => (
              <div key={item.title} className="px-6 py-4 text-center first:pl-0 last:pr-0">
                <div className="text-2xl mb-2">{item.icon}</div>
                <p className="font-semibold text-[13px] text-base-content mb-0.5">{item.title}</p>
                <p className="text-[12px] text-base-content/50">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Areas ── */}
      <section id="service-areas" className="py-24 bg-base-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-[11px] font-semibold tracking-[3px] uppercase text-primary mb-3">Where We Serve</p>
              <h2 className="font-serif text-[clamp(30px,4vw,46px)] text-base-content leading-[1.1]">
                Caring for Families<br />Across Massachusetts
              </h2>
            </div>
            <p className="text-[14px] text-base-content/55 max-w-sm lg:text-right">
              Based in Waltham, MA — specialist dementia care across Greater Boston and MetroWest.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {townGroups.map((group) => (
              <div key={group.region} className="card bg-base-200 border border-base-300 shadow-none">
                <div className="card-body p-6 gap-3">
                  <p className="text-[10px] font-semibold tracking-[2px] uppercase text-primary">{group.region}</p>
                  <ul className="flex flex-col gap-1.5">
                    {group.towns.map((name) => {
                      const t = towns.find((x) => x.name === name);
                      return t ? (
                        <li key={name}>
                          <Link href={`/areas/${t.slug}`} className="flex items-center gap-2 text-[13px] text-base-content/70 hover:text-primary transition-colors">
                            <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                            {name}
                          </Link>
                        </li>
                      ) : null;
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="alert bg-base-200 border border-base-300 shadow-none rounded-xl">
            <div className="flex flex-col sm:flex-row w-full items-start sm:items-center justify-between gap-4">
              <p className="text-[13px] text-base-content/60">
                Don&apos;t see your town? <span className="text-base-content font-medium">We may still serve your area</span> — call us to check coverage.
              </p>
              <a href="tel:+15086653872"
                className="btn btn-primary btn-sm rounded-md text-white flex-shrink-0 normal-case">
                +1 (508) 665-3872
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── MA Insurance note ── */}
      <section className="py-16 bg-base-200 border-y border-base-300">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "MassHealth / Medicaid", desc: "Many of our services are covered under MassHealth waiver programs. Our team will review your eligibility at no charge." },
              { title: "Long-Term Care Insurance", desc: "We work directly with Massachusetts long-term care insurers to streamline claims and billing on your behalf." },
              { title: "Veterans' Benefits (VA)", desc: "Massachusetts veterans may qualify for in-home care support through VA programs. We help navigate the process." },
            ].map((item) => (
              <div key={item.title} className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-primary font-bold text-sm">✓</span>
                  <h3 className="font-semibold text-[14px] text-base-content">{item.title}</h3>
                </div>
                <p className="text-[13px] text-base-content/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CtaBanner />
    </>
  );
}
