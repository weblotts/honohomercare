import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Dementia Home Care Services in Massachusetts",
  description: "Memory care, personal care, medication management, overnight care, and family respite — all delivered in the home by certified caregivers across Greater Boston and MetroWest MA.",
  alternates: { canonical: "https://honorhome.care/services" },
  openGraph: {
    title: "In-Home Dementia Care Services — Massachusetts",
    description: "Six specialist services for every stage of dementia, delivered at home across Greater Boston and MetroWest MA. MassHealth accepted.",
    url: "https://honorhome.care/services",
    images: [{ url: "https://honorhome.care/images/caretaker-elderly.jpg", width: 1200, height: 630 }],
  },
};

const services = [
  {
    id: "memory-care",
    n: "01",
    title: "Memory Care Support",
    desc: "Structured daily routines, evidence-based therapeutic activities, and consistent engagement strategies designed specifically for individuals with Alzheimer's and related dementias.",
    features: ["Reminiscence and life story therapy", "Music, art, and sensory engagement", "Orientation and reality-anchoring techniques", "Validation therapy approaches", "Sundowning management strategies"],
  },
  {
    id: "personal-care",
    n: "02",
    title: "Personal Care & Daily Living",
    desc: "Respectful, dignified assistance with all activities of daily living, carefully calibrated to support independence wherever possible and adapt as needs evolve.",
    features: ["Bathing, grooming, and dressing assistance", "Mobility support and fall prevention", "Toileting and continence care", "Oral hygiene and personal care routines", "Home safety assessments and modifications"],
  },
  {
    id: "medication",
    n: "03",
    title: "Medication Management",
    desc: "Safe, accurate medication administration and monitoring, co-ordinated closely with physicians and pharmacists to ensure consistency and prevent errors.",
    features: ["Medication reminders and administration", "Prescription pickup and organization", "Physician and pharmacist coordination", "Side-effect monitoring and reporting", "Dosage reconciliation support"],
  },
  {
    id: "nutrition",
    n: "04",
    title: "Nutrition & Meal Support",
    desc: "Nutritious, appealing meals prepared with each person's dietary needs and preferences in mind, plus specialist support for those who require feeding assistance.",
    features: ["Personalized meal planning and preparation", "Hydration monitoring and encouragement", "Adaptive feeding assistance", "Weight and nutrition tracking", "Texture-modified and therapeutic diets"],
  },
  {
    id: "overnight",
    n: "05",
    title: "Overnight & 24-Hour Care",
    desc: "Continuous supervision and support for individuals who need monitoring around the clock — including those experiencing nighttime restlessness, wandering, or sundowning.",
    features: ["Live-in and overnight caregiver options", "Nighttime and sundowning management", "Wandering prevention and safety protocols", "Emergency response readiness", "Sleep hygiene support"],
  },
  {
    id: "respite",
    n: "06",
    title: "Family Caregiver Respite",
    desc: "Planned, reliable relief for family caregivers — enabling you to rest, attend to your own needs, and return to caregiving refreshed, knowing your loved one is in expert hands.",
    features: ["Flexible hourly, daily, or weekly cover", "Detailed shift handoff reports", "Emergency and short-notice respite", "Family caregiver coaching and support", "Care continuity across scheduled and ad hoc cover"],
  },
];

const steps = [
  { n: "1", title: "Free Consultation", desc: "A care advisor listens to your situation and outlines how we can help — no commitment." },
  { n: "2", title: "In-Home Assessment", desc: "An RN visits your home to assess needs, safety, and personal history." },
  { n: "3", title: "Personalized Plan",  desc: "We create an individualized care plan with your family and medical team." },
  { n: "4", title: "Care Begins",        desc: "Your matched caregiver starts. We review and adapt the plan regularly." },
];

const conditions = [
  "Alzheimer's Disease (all stages)","Vascular Dementia","Lewy Body Dementia",
  "Frontotemporal Dementia (FTD)","Mixed Dementia","Mild Cognitive Impairment (MCI)",
  "Parkinson's Disease Dementia","Huntington's Disease",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Our Services"
        heading="Specialist Care at Every Stage of Dementia"
        subtext="Serving families across Greater Boston and MetroWest MA — from early-stage memory support to comprehensive 24-hour care."
        crumbs={[{ label: "Services" }]}
      />

      {/* Services grid */}
      <section className="py-24 bg-base-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map((s) => (
              <div key={s.id} id={s.id} className="card bg-base-100 border border-base-300 shadow-none scroll-mt-24">
                <div className="card-body p-8 gap-4">
                  <div className="flex items-start justify-between">
                    <p className="font-serif text-[44px] font-medium leading-none text-base-300">{s.n}</p>
                    <div className="badge badge-outline text-primary border-primary/30 bg-primary/5 text-[10px] tracking-widest uppercase font-semibold">
                      In-Home
                    </div>
                  </div>
                  <h2 className="font-serif text-[22px] text-base-content leading-tight">{s.title}</h2>
                  <p className="text-[14px] text-base-content/60 leading-relaxed">{s.desc}</p>
                  <ul className="flex flex-col gap-2 pt-2 border-t border-base-300">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[13px] text-base-content/70">
                        <span className="text-primary font-bold flex-shrink-0 text-xs mt-0.5">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-base-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-14">
            <p className="text-[11px] font-semibold tracking-[3px] uppercase text-primary mb-4">Getting Started</p>
            <h2 className="font-serif text-[clamp(30px,4vw,46px)] text-base-content leading-[1.1]">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
            {steps.map((s, i) => (
              <div key={s.n} className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 ${
                    i === 0 ? "bg-primary text-white" : "bg-gray-100 text-gray-700"
                  }`}>
                    {s.n}
                  </div>
                  {i < steps.length - 1 && <div className="hidden lg:block flex-1 h-px bg-base-300" />}
                </div>
                <div>
                  <h3 className="font-semibold text-[14px] text-base-content mb-1.5">{s.title}</h3>
                  <p className="text-[13px] text-base-content/60 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="alert bg-base-200 border border-base-300 shadow-none rounded-xl">
            <div className="flex flex-col sm:flex-row w-full items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-base-content text-[14px]">Ready to get started?</p>
                <p className="text-[12px] text-base-content/50 mt-0.5">No commitment. Care advisors available 24/7.</p>
              </div>
              <Link href="/contact" className="btn btn-primary btn-sm rounded-md text-white flex-shrink-0">
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-24 bg-base-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-[11px] font-semibold tracking-[3px] uppercase text-primary mb-4">Conditions We Support</p>
              <h2 className="font-serif text-[clamp(30px,4vw,46px)] text-base-content leading-[1.1] mb-5">
                Across the Dementia Spectrum
              </h2>
              <p className="text-[15px] text-base-content/60 leading-relaxed">
                Our caregivers are trained to adapt their approach to each person&apos;s specific
                diagnosis and stage — never a one-size-fits-all model.
              </p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {conditions.map((c) => (
                <li key={c} className="flex items-center gap-3 py-3 px-4 bg-base-100 border border-base-300 rounded-lg text-[13px] text-base-content/80">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-primary" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* MA Funding & Coverage */}
      <section className="py-24 bg-base-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-14">
            <p className="text-[11px] font-semibold tracking-[3px] uppercase text-primary mb-4">Paying for Care</p>
            <h2 className="font-serif text-[clamp(30px,4vw,46px)] text-base-content leading-[1.1]">
              Massachusetts Funding Options
            </h2>
            <p className="text-[15px] text-base-content/60 leading-relaxed mt-4">
              Our care coordinators help every Massachusetts family understand and
              access every available funding source — at no charge.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                title: "MassHealth / Medicaid",
                desc: "Many of our services are covered under MassHealth waiver programs including the Adult Foster Care (AFC) and Group Adult Foster Care (GAFC) programs. We are an approved MassHealth provider.",
              },
              {
                title: "Long-Term Care Insurance",
                desc: "We work directly with Massachusetts long-term care insurers to manage claims, documentation, and billing — reducing the administrative burden on your family.",
              },
              {
                title: "Veterans' Benefits (VA)",
                desc: "Massachusetts veterans living with dementia may qualify for in-home care support through VA programs. Our team assists with eligibility checks and applications.",
              },
            ].map((item) => (
              <div key={item.title} className="card bg-base-200 border border-base-300 shadow-none">
                <div className="card-body p-6 gap-3">
                  <span className="text-primary font-bold text-xs">✓</span>
                  <h3 className="font-semibold text-[15px] text-base-content">{item.title}</h3>
                  <p className="text-[13px] text-base-content/60 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
