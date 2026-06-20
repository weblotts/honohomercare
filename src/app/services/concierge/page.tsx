import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Concierge Home Care Services in Massachusetts | Honor Home Care",
  description: "Premium concierge home care for families who want more. Appointment coordination, errands, companionship, travel assistance, and personalized care coordination across Massachusetts.",
  alternates: { canonical: "https://honorhome.care/services/concierge" },
  openGraph: {
    title: "Concierge Care Services — Massachusetts | Honor Home Care",
    description: "Premium non-medical support for seniors who want extra. Serving Greater Boston and MetroWest MA.",
    url: "https://honorhome.care/services/concierge",
  },
};

const services = [
  { title: "Appointment coordination", desc: "We schedule, confirm, and manage all medical and non-medical appointments — and accompany your loved one to each one." },
  { title: "Errand services", desc: "Grocery shopping, prescription pickup, dry cleaning, banking, and any other errand handled with care and attention to detail." },
  { title: "Companionship & social engagement", desc: "Regular outings, conversation, games, shared meals, and meaningful activities that keep your loved one connected and engaged." },
  { title: "Family communication & updates", desc: "Detailed written updates after every visit. Families who live far away always know exactly how their loved one is doing." },
  { title: "Travel assistance", desc: "Support for local trips, vacation travel, and visits to family — including airport accompaniment, packing, and in-transit care." },
  { title: "Personalized care coordination", desc: "A dedicated coordinator who knows your loved one's preferences, manages the care team, and is your single point of contact." },
  { title: "Home organization", desc: "Help organizing the home for comfort and safety — decluttering, mail management, filing, and setting up adaptive equipment." },
  { title: "Special occasion support", desc: "Extra care around holidays, family events, and milestones — so your loved one can participate fully and comfortably." },
];

export default function ConciergePage() {
  return (
    <>
      <PageHero
        label="Concierge Care"
        heading="Premium Support That Goes Beyond the Basics"
        subtext="Concierge care from Honor Home Care is for families who want more — more attention, more coordination, and more peace of mind."
        crumbs={[{ label: "Services", href: "/services" }, { label: "Concierge Care" }]}
      />

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-[11px] font-semibold tracking-[3px] uppercase text-primary mb-4">What Is Concierge Care?</p>
            <h2 className="font-serif text-[clamp(28px,4vw,40px)] text-base-content leading-tight mb-5">
              Non-medical support elevated to a premium standard
            </h2>
            <p className="text-[15px] text-base-content/60 leading-relaxed mb-4">
              Concierge care covers the non-medical support that makes life genuinely better — companionship, errands, appointments, coordination, and the dozens of tasks that keep a household running smoothly and a person engaged with the world.
            </p>
            <p className="text-[15px] text-base-content/60 leading-relaxed mb-6">
              For families who live far away, have demanding schedules, or simply want to know that every detail is handled, concierge care provides the extra layer of attention and communication that standard home care doesn&apos;t always offer.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors">
              Discuss Concierge Options
            </Link>
          </div>
          <div className="bg-base-200 border border-base-300 rounded-2xl p-8">
            <p className="text-[11px] font-semibold tracking-[3px] uppercase text-primary mb-4">Who Chooses Concierge Care</p>
            <ul className="flex flex-col gap-4">
              {[
                { label: "Adult children who live out of state", desc: "Want frequent, detailed updates and to know every appointment and errand is handled." },
                { label: "Active seniors who want extra support", desc: "Independent enough for daily life, but want help with logistics, transportation, and staying social." },
                { label: "Families with high standards", desc: "Expect the same level of service and communication they would from a premium hospitality provider." },
                { label: "Clients adding non-medical support to medical care", desc: "Already receiving skilled nursing or personal care and want concierge services layered in." },
              ].map((item) => (
                <li key={item.label} className="border-b border-base-300 pb-4 last:border-0 last:pb-0">
                  <p className="font-semibold text-[13px] text-base-content mb-1">{item.label}</p>
                  <p className="text-[12px] text-base-content/60">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-base-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-xl mb-12">
            <p className="text-[11px] font-semibold tracking-[3px] uppercase text-primary mb-4">What We Provide</p>
            <h2 className="font-serif text-[clamp(28px,4vw,40px)] text-base-content leading-tight">
              Concierge services available from Honor Home Care
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {services.map((item) => (
              <div key={item.title} className="bg-base-100 border border-base-300 rounded-xl p-6">
                <span className="text-primary font-bold text-xs block mb-3">✓</span>
                <h3 className="font-semibold text-[15px] text-base-content mb-2">{item.title}</h3>
                <p className="text-[13px] text-base-content/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA mid-page */}
      <section className="py-14 bg-primary">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-[22px] text-white">Want to talk through what concierge care looks like for your family?</p>
            <p className="text-white/70 text-sm mt-1">Every family is different. We&apos;ll build a plan around what your loved one actually needs.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 bg-white text-primary font-semibold px-7 py-3 rounded-lg hover:bg-gray-50 transition-colors text-sm">
            Get in Touch
          </Link>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
