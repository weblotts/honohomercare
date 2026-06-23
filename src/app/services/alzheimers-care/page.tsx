import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Alzheimer's & Dementia Home Care in Massachusetts | Honor Home Care",
  description: "Specialist in-home Alzheimer's and dementia care across Greater Boston and MetroWest MA. Certified caregivers trained in memory care, behavioral support, and family communication.",
  alternates: { canonical: "https://honorhome.care/services/alzheimers-care" },
  openGraph: {
    title: "Alzheimer's & Dementia Home Care — Massachusetts | Honor Home Care",
    description: "Trusted dementia care at home. Certified caregivers, structured routines, family support — serving MA families at every stage.",
    url: "https://honorhome.care/services/alzheimers-care",
    images: [{ url: "https://honorhome.care/images/caretaker-elderly.jpg", width: 1200, height: 630, alt: "Alzheimer's and dementia home care in Massachusetts" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Alzheimer's & Dementia Home Care",
  description: "Specialist in-home Alzheimer's and dementia care across Greater Boston and MetroWest Massachusetts. Trained caregivers, structured routines, and family communication.",
  url: "https://honorhome.care/services/alzheimers-care",
  provider: { "@type": "LocalBusiness", name: "Honor Home Care", url: "https://honorhome.care", telephone: "+1-508-665-3872" },
  areaServed: { "@type": "State", name: "Massachusetts" },
  serviceType: "Dementia Home Care",
};

const warningSignsList = [
  "Memory loss that disrupts daily life",
  "Difficulty completing familiar tasks",
  "Confusion with time or place",
  "Trouble understanding visual images or spatial relationships",
  "New problems with words in speaking or writing",
  "Misplacing things and being unable to retrace steps",
  "Decreased or poor judgment",
  "Withdrawal from work or social activities",
  "Changes in mood and personality",
];

const safetyConcerns = [
  { title: "Wandering & elopement", desc: "We implement safe-return protocols and consistent supervision to prevent wandering and keep your loved one safe at home." },
  { title: "Medication errors", desc: "Our caregivers manage medication schedules, track dosages, and coordinate with physicians to prevent dangerous mistakes." },
  { title: "Falls & home hazards", desc: "We conduct in-home safety assessments and make recommendations to reduce fall risk and other environmental dangers." },
  { title: "Caregiver burnout", desc: "Family caregivers under chronic stress make more errors. Our respite and live-in options give families the relief they need." },
];

const careApproach = [
  { n: "01", title: "Structured daily routines", desc: "Predictable schedules reduce anxiety and behavioral symptoms in people with dementia." },
  { n: "02", title: "Validation therapy", desc: "Meeting your loved one in their reality — not correcting or arguing — reduces distress and preserves dignity." },
  { n: "03", title: "Reminiscence & life story work", desc: "Using memories, music, and personal history to connect and engage meaningfully." },
  { n: "04", title: "Sundowning management", desc: "Targeted strategies for the late-afternoon confusion and agitation common with Alzheimer's." },
  { n: "05", title: "Family coaching", desc: "We train families in dementia communication so every interaction is calmer and more effective." },
  { n: "06", title: "Stage-adaptive care", desc: "Our approach evolves with the disease — early, middle, and late-stage care look different, and we adapt." },
];

export default function AlzheimersCarePage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <PageHero
        label="Alzheimer's & Dementia Care"
        heading="Expert Memory Care, Delivered at Home"
        subtext="Honor Home Care specializes in Alzheimer's and dementia care — providing structured, compassionate support at every stage of the disease across Greater Boston and MetroWest MA."
        crumbs={[{ label: "Services", href: "/services" }, { label: "Alzheimer's Care" }]}
      />

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-[11px] font-semibold tracking-[3px] uppercase text-primary mb-4">Our Approach</p>
            <h2 className="font-serif text-[clamp(28px,4vw,40px)] text-base-content leading-tight mb-5">
              Care that adapts as Alzheimer&apos;s progresses
            </h2>
            <p className="text-[15px] text-base-content/60 leading-relaxed mb-4">
              Alzheimer&apos;s is not one experience — it changes over time, and care must change with it. Our caregivers receive specialized dementia training and are supervised by registered nurses who understand each stage of the disease.
            </p>
            <p className="text-[15px] text-base-content/60 leading-relaxed mb-6">
              We work alongside your family and your loved one&apos;s medical team to build a care plan that reduces behavioral symptoms, maximizes quality of life, and gives families confidence that their loved one is safe.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors">
              Speak With a Care Advisor
            </Link>
          </div>
          <div className="bg-base-200 border border-base-300 rounded-2xl p-8">
            <p className="text-[11px] font-semibold tracking-[3px] uppercase text-primary mb-4">10 Warning Signs of Alzheimer&apos;s</p>
            <ul className="flex flex-col gap-3">
              {warningSignsList.map((sign) => (
                <li key={sign} className="flex items-start gap-3 text-[13px] text-base-content/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                  {sign}
                </li>
              ))}
            </ul>
            <p className="text-[12px] text-base-content/40 mt-4">Source: Alzheimer&apos;s Association</p>
          </div>
        </div>
      </section>

      {/* Care approach */}
      <section className="py-20 bg-base-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-xl mb-12">
            <p className="text-[11px] font-semibold tracking-[3px] uppercase text-primary mb-4">How We Care</p>
            <h2 className="font-serif text-[clamp(28px,4vw,40px)] text-base-content leading-tight">
              Evidence-based dementia care practices
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {careApproach.map((item) => (
              <div key={item.n} className="bg-base-100 border border-base-300 rounded-xl p-6">
                <p className="font-serif text-[36px] font-medium text-base-300 leading-none mb-3">{item.n}</p>
                <h3 className="font-semibold text-[15px] text-base-content mb-2">{item.title}</h3>
                <p className="text-[13px] text-base-content/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety concerns */}
      <section className="py-20 bg-base-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-xl mb-12">
            <p className="text-[11px] font-semibold tracking-[3px] uppercase text-primary mb-4">Safety First</p>
            <h2 className="font-serif text-[clamp(28px,4vw,40px)] text-base-content leading-tight">
              Addressing the safety concerns families worry about most
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {safetyConcerns.map((item) => (
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

      {/* CTA mid-page */}
      <section className="py-14 bg-primary">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-[22px] text-white">Not sure what stage your loved one is in?</p>
            <p className="text-white/70 text-sm mt-1">Our care advisors can help you understand what care looks like right now — and as things change.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 bg-white text-primary font-semibold px-7 py-3 rounded-lg hover:bg-gray-50 transition-colors text-sm">
            Get a Free Assessment
          </Link>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
