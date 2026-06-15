import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Our Team — How We Work Together to Deliver Dementia Care",
  description: "Clinicians, registered nurses, care coordinators, and certified caregivers working as one team to deliver seamless in-home dementia care across Greater Boston and MetroWest Massachusetts.",
  alternates: { canonical: "https://honorhome.care/team" },
  openGraph: {
    title: "Our Team — Honor Home Care Massachusetts",
    description: "Learn how our clinical leaders, RNs, coordinators, and caregivers collaborate to deliver consistent, high-quality dementia care across MA.",
    url: "https://honorhome.care/team",
    images: [{ url: "https://honorhome.care/images/caretaker-elderly.jpg", width: 1200, height: 630 }],
  },
};

const pillars = [
  {
    title: "Clinical Leadership",
    desc: "Our clinical team sets the standards. Every care plan is developed with medical input, reviewed regularly, and updated as a client's needs evolve. Nothing is left to guesswork.",
  },
  {
    title: "Care Coordination",
    desc: "A dedicated coordinator is the single point of contact for every family. They manage scheduling, communicate updates, and make sure nothing falls through the cracks.",
  },
  {
    title: "Caregiver Training",
    desc: "Every caregiver completes an 80-hour Dementia Care Certification before their first placement. Training is ongoing — not a one-time checkbox.",
  },
  {
    title: "RN Supervision",
    desc: "Registered nurses conduct monthly home visits for every active client. They review care delivery, check in with families, and flag anything that needs attention.",
  },
  {
    title: "Family Communication",
    desc: "We keep families informed at every stage — through regular updates, shift reports, and direct access to the care coordinator whenever they need us.",
  },
  {
    title: "Quality & Compliance",
    desc: "An internal quality team monitors care standards, manages Massachusetts licensing requirements, and ensures every caregiver meets our non-negotiable benchmarks.",
  },
];

const howWeWork = [
  {
    step: "01",
    title: "We listen first",
    desc: "Before anything else, we take the time to understand your loved one — their history, personality, preferences, and diagnosis. Care plans are built around the person, not a template.",
  },
  {
    step: "02",
    title: "We match carefully",
    desc: "Caregiver matching is deliberate. We consider experience, personality fit, and specific condition expertise. The right match makes an enormous difference in dementia care.",
  },
  {
    step: "03",
    title: "We stay in sync",
    desc: "Coordinators, caregivers, and nurses communicate constantly. Shift handoffs are documented. Changes in condition are escalated quickly. Everyone knows what is happening.",
  },
  {
    step: "04",
    title: "We adapt continuously",
    desc: "Dementia is progressive. We review every care plan regularly and adjust as needs change — so the level of support always matches where your loved one is right now.",
  },
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        label="Our Team"
        heading="One Team, Working as One"
        subtext="Clinicians, coordinators, caregivers, and nurses — all working in step to deliver seamless dementia care across Massachusetts."
        crumbs={[{ label: "Our Team" }]}
      />

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/caretaker-elderly.jpg"
                alt="Honor Home Care team providing dementia care in Massachusetts"
                fill className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-serif text-[clamp(26px,3.5vw,38px)] text-gray-900 leading-tight mb-5">
                Great care is a team effort
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                At Honor Home Care, no one person delivers care alone. Our model is built on
                close collaboration between clinical leaders, registered nurses, care coordinators,
                and our caregivers — each playing a defined role, each accountable to the others.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                That structure is not overhead — it is what makes the care consistent.
                When everyone knows their role and communicates well, families get a seamless
                experience even as needs change or circumstances shift.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                We have been doing this across Greater Boston and MetroWest Massachusetts since
                2013, and the team&apos;s coordination is what families tell us they value most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-[clamp(26px,3.5vw,38px)] text-gray-900 mb-2">
            How the team is structured
          </h2>
          <p className="text-sm text-gray-500 mb-12 max-w-xl">
            Every function exists to support the person receiving care. Here is how each part of the team contributes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((p) => (
              <div key={p.title} className="border border-gray-200 rounded-xl p-6 bg-white">
                <div className="w-6 h-px bg-purple mb-4" />
                <h3 className="font-semibold text-sm text-gray-900 mb-2">{p.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-[clamp(26px,3.5vw,38px)] text-gray-900 mb-2">
            How we work with your family
          </h2>
          <p className="text-sm text-gray-500 mb-12 max-w-xl">
            From the first conversation to ongoing care, here is what working with our team looks like.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {howWeWork.map((item) => (
              <div key={item.step} className="flex gap-5">
                <p className="font-serif text-[42px] font-medium leading-none text-gray-100 flex-shrink-0 select-none">
                  {item.step}
                </p>
                <div className="pt-1">
                  <h3 className="font-semibold text-sm text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="font-serif text-[clamp(26px,3.5vw,38px)] text-gray-900 leading-tight mb-5">
                The standards we hold ourselves to
              </h2>
              <ul className="flex flex-col gap-4">
                {[
                  { title: "80-hour certification before day one",  desc: "No caregiver is placed until they have completed our full dementia care training curriculum." },
                  { title: "Monthly RN home visits",               desc: "A registered nurse visits every active client monthly to review care quality and flag changes." },
                  { title: "Same caregiver, every visit",          desc: "Consistency is not a preference in dementia care — it is a clinical necessity. We protect it." },
                  { title: "24/7 coordinator availability",        desc: "Families can reach a care coordinator any time. Emergencies do not keep business hours." },
                  { title: "Quarterly care plan reviews",          desc: "We revisit every care plan every three months — more frequently if a client's condition changes." },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span className="text-purple font-bold text-sm flex-shrink-0 mt-0.5">✓</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{item.title}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/holding-hands.jpg"
                alt="Caregiver supporting an elderly person at home in Massachusetts"
                fill className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Join us */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <p className="font-semibold text-gray-900 text-sm mb-1">Interested in joining the team?</p>
            <p className="text-xs text-gray-500">
              We are always looking for compassionate, qualified caregivers across Greater Boston and MetroWest MA.
            </p>
          </div>
          <Link href="/contact" className="inline-block border border-gray-300 text-sm font-semibold text-gray-700 px-5 py-2.5 rounded-lg hover:border-purple hover:text-purple transition-colors flex-shrink-0">
            Get in touch →
          </Link>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
