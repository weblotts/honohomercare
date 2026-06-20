import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "About Us — Dementia Care Provider Founded in Waltham, MA",
  description: "Honor Home Care has provided specialist in-home dementia care across Greater Boston and MetroWest Massachusetts since 2013. Learn about our mission, values, certifications, and MA community partnerships.",
  alternates: { canonical: "https://honorhome.care/about" },
  openGraph: {
    title: "About Honor Home Care — Specialist Dementia Care, Massachusetts",
    description: "Founded in Waltham, MA in 2013. Learn how Honor Home Care delivers evidence-based, person-centered dementia care across Greater Boston and MetroWest.",
    url: "https://honorhome.care/about",
    images: [{ url: "https://honorhome.care/images/caretaker-elderly.jpg", width: 1200, height: 630 }],
  },
};

const values = [
  { title: "Person-First Philosophy", desc: "Every care plan starts with the individual — their history, personality, and preferences — not just their diagnosis." },
  { title: "Evidence-Based Practice",  desc: "All our methods are grounded in the latest dementia care research and Massachusetts clinical guidelines." },
  { title: "Family Partnership",       desc: "We treat Massachusetts families as active partners, keeping you informed and included at every stage of care." },
  { title: "Continuous Training",      desc: "Caregivers receive ongoing training and monthly RN supervision to stay at the forefront of dementia care." },
];

const certifications = [
  { name: "Massachusetts Licensed",     note: "Fully licensed, insured & bonded in MA" },
  { name: "Alzheimer's Association Partner", note: "MA Chapter certified partner since 2015" },
  { name: "CDP Certified Caregivers",   note: "Certified Dementia Practitioners on every case" },
  { name: "Flexible Payment Options",   note: "Private pay and long-term care insurance accepted" },
];

const milestones = [
  { year: "2013", event: "Honor Home Care founded in Waltham, MA by Dr. Sarah Mitchell and Marcus Johnson, RN — after seeing firsthand the gap in specialist dementia home care across MetroWest." },
  { year: "2015", event: "Became a certified partner of the Alzheimer's Association Massachusetts Chapter. Launched our proprietary 80-hour caregiver certification program." },
  { year: "2017", event: "Expanded service coverage across the Greater Boston area — including Newton, Cambridge, Lexington, Framingham, and Wellesley." },
  { year: "2019", event: "Expanded our care model to include live-in care, concierge services, and support inside assisted living communities — serving more Massachusetts families across more care settings." },
  { year: "2021", event: "Reached 300 Massachusetts families served. Introduced 24/7 RN on-call support and launched the HonorHome family app." },
  { year: "2024", event: "Named Best Dementia Care Provider in Greater Boston. Now serving 500+ families across Middlesex, Norfolk, and Worcester counties in Massachusetts." },
];

const partners = [
  "Alzheimer's Association — MA Chapter",
  "MA Executive Office of Elder Affairs (EOEA)",
  "Home Care Alliance of Massachusetts",
  "Massachusetts General Hospital Memory Clinic",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="Our Story"
        heading="Built on Dignity, Driven by Compassion"
        subtext="Founded in Waltham, MA in 2013 — by caregivers who knew firsthand what Massachusetts families needed."
        crumbs={[{ label: "About" }]}
      />

      {/* ── Mission ── */}
      <section className="py-24 bg-base-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/images/dementia-care.jpg"
                  alt="Caregiver with an elderly person in a Massachusetts home"
                  fill className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-5 -right-4 bg-base-100 rounded-xl shadow-md border border-base-300 px-5 py-4 text-center">
                <p className="font-serif text-3xl text-base-content font-semibold">2013</p>
                <p className="text-[11px] text-base-content/50 mt-1">Founded, Waltham MA</p>
              </div>
            </div>

            <div>
              <p className="text-[11px] font-semibold tracking-[3px] uppercase text-primary mb-4">Our Mission</p>
              <h2 className="font-serif text-[clamp(30px,4vw,46px)] text-base-content leading-[1.1] mb-5">
                Every Massachusetts Family Deserves Expert Dementia Care at Home
              </h2>
              <p className="text-[15px] text-base-content/60 leading-relaxed mb-4">
                We believe that familiar surroundings, consistent caregivers, and
                individualized attention make a profound difference in the quality of
                life for someone living with dementia — and that this level of care
                should be accessible to every family in Massachusetts.
              </p>
              <p className="text-[15px] text-base-content/60 leading-relaxed mb-8">
                Honor Home Care was built to close the gap between what Greater Boston
                and MetroWest families needed and what the homecare industry was offering:
                deep specialist training, genuine caregiver consistency, and a care model
                centered around the person — not the provider&apos;s convenience.
              </p>
              <div className="stats stats-horizontal border border-base-300 bg-base-100 shadow-none w-full">
                {[
                  { n: "500+", l: "MA families served" },
                  { n: "98%",  l: "Satisfaction rate" },
                  { n: "12+",  l: "Years in MA" },
                ].map((s) => (
                  <div key={s.l} className="stat place-items-center py-5">
                    <div className="stat-value font-serif text-[28px] text-base-content">{s.n}</div>
                    <div className="stat-desc text-[11px]">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-24 bg-base-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-[11px] font-semibold tracking-[3px] uppercase text-primary mb-4">Our Journey</p>
            <h2 className="font-serif text-[clamp(30px,4vw,46px)] text-base-content leading-[1.1]">
              A Decade of Care Across Massachusetts
            </h2>
          </div>

          <div className="flex flex-col gap-0 border-l-2 border-base-300 ml-4 pl-8">
            {milestones.map((m) => (
              <div key={m.year} className="relative pb-10 last:pb-0">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-2 border-primary bg-base-100 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <p className="font-serif text-[13px] font-semibold text-primary mb-1">{m.year}</p>
                <p className="text-[14px] text-base-content/70 leading-relaxed">{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-24 bg-base-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-14">
            <p className="text-[11px] font-semibold tracking-[3px] uppercase text-primary mb-4">What We Stand For</p>
            <h2 className="font-serif text-[clamp(30px,4vw,46px)] text-base-content leading-[1.1]">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.title} className="card bg-base-100 border border-base-300 shadow-none">
                <div className="card-body p-6 gap-3">
                  <div className="w-8 h-px bg-primary" />
                  <h3 className="font-semibold text-[14px] text-base-content leading-snug">{v.title}</h3>
                  <p className="text-[13px] text-base-content/60 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications & MA Partners ── */}
      <section className="py-24 bg-base-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[11px] font-semibold tracking-[3px] uppercase text-primary mb-4">Credentials</p>
              <h2 className="font-serif text-[clamp(30px,4vw,46px)] text-base-content leading-[1.1] mb-5">
                Trusted, Accredited<br />&amp; Massachusetts Compliant
              </h2>
              <p className="text-[15px] text-base-content/60 leading-relaxed mb-10">
                Our certifications and partnerships reflect the standards we hold every
                caregiver and care plan to — and our deep commitment to the Massachusetts
                families we serve.
              </p>

              <p className="text-[11px] font-semibold tracking-[3px] uppercase text-base-content/40 mb-4">
                MA Community Partners
              </p>
              <ul className="flex flex-col gap-2">
                {partners.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-[13px] text-base-content/70">
                    <span className="text-primary font-bold text-xs">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((c) => (
                <div key={c.name} className="card bg-base-200 border border-base-300 shadow-none">
                  <div className="card-body p-5 gap-1.5">
                    <span className="text-primary font-bold text-xs">✓</span>
                    <h3 className="font-semibold text-[14px] text-base-content">{c.name}</h3>
                    <p className="text-[12px] text-base-content/55">{c.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team teaser */}
      <section className="py-16 bg-base-200 border-y border-base-300">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <p className="font-semibold text-base-content text-[15px] mb-1">Meet the people behind the care</p>
            <p className="text-[13px] text-base-content/55">
              Massachusetts-based clinical leadership, care coordinators, and certified caregivers.
            </p>
          </div>
          <Link href="/team" className="btn btn-primary btn-sm rounded-md text-white font-semibold flex-shrink-0">
            Our Team →
          </Link>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
