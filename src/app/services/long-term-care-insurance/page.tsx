import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Long-Term Care Insurance for Home Care | Honor Home Care Massachusetts",
  description: "Honor Home Care works directly with long-term care insurers to manage your claim, documentation, and billing. Learn how your policy may cover in-home care in Massachusetts.",
  alternates: { canonical: "https://honorhome.care/services/long-term-care-insurance" },
  openGraph: {
    title: "Using Long-Term Care Insurance for Home Care — Massachusetts",
    description: "We handle the paperwork with your insurer so your family can focus on care. Serving Greater Boston and MetroWest MA.",
    url: "https://honorhome.care/services/long-term-care-insurance",
    images: [{ url: "https://honorhome.care/images/caretaker-elderly.jpg", width: 1200, height: 630, alt: "Long-term care insurance for home care in Massachusetts" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Long-Term Care Insurance Support for Home Care",
  description: "Honor Home Care helps Massachusetts families use their long-term care insurance to cover in-home care. We manage claims, documentation, and billing directly with insurers.",
  url: "https://honorhome.care/services/long-term-care-insurance",
  provider: { "@type": "LocalBusiness", name: "Honor Home Care", url: "https://honorhome.care", telephone: "+1-508-665-3872" },
  areaServed: { "@type": "State", name: "Massachusetts" },
  serviceType: "In-Home Care with Long-Term Care Insurance",
};

const whatToCheck = [
  { title: "Benefit trigger", desc: "Most LTC policies pay out when the insured cannot perform 2 or more Activities of Daily Living (ADLs) — such as bathing, dressing, or eating — or when a cognitive impairment like dementia is diagnosed." },
  { title: "Elimination period", desc: "This is the waiting period before benefits start — typically 30, 60, or 90 days. You will likely pay out of pocket during this window. We can help you plan for it." },
  { title: "Daily or monthly benefit", desc: "Your policy specifies a maximum dollar amount it will pay per day or per month toward care costs. We will check whether our rates align with your benefit amount." },
  { title: "Benefit period", desc: "Policies differ on how long they pay — from 2 years to lifetime coverage. Knowing your remaining benefit helps your family plan long-term." },
  { title: "Inflation protection", desc: "Some policies include a rider that increases the benefit over time. If yours does, your effective daily benefit may be higher than the original policy amount." },
  { title: "Home care coverage", desc: "Not all LTC policies cover in-home care — some only cover facility care. We will confirm what your policy covers before you commit." },
];

const howWeHelp = [
  { title: "Policy review", desc: "We read your policy and explain exactly what is and is not covered for in-home care." },
  { title: "Claim initiation", desc: "We help you file the initial claim with your insurer and gather the required clinical documentation." },
  { title: "Direct billing", desc: "In many cases, we can bill your insurer directly so you never have to pay and wait for reimbursement." },
  { title: "Ongoing documentation", desc: "Insurers require regular care notes and assessments. We maintain these records and submit them on schedule." },
  { title: "Appeals support", desc: "If a claim is denied, we work with you and your insurer to review the decision and submit supporting evidence." },
];

export default function LongTermCareInsurancePage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <PageHero
        label="Long-Term Care Insurance"
        heading="Your Policy May Cover In-Home Care — We'll Help You Use It"
        subtext="Honor Home Care works directly with long-term care insurers to manage claims, documentation, and billing so your family can focus on what matters."
        crumbs={[{ label: "Services", href: "/services" }, { label: "Long-Term Care Insurance" }]}
      />

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-[11px] font-semibold tracking-[3px] uppercase text-primary mb-4">Does Your Policy Cover This?</p>
            <h2 className="font-serif text-[clamp(28px,4vw,40px)] text-base-content leading-tight mb-5">
              Many families have coverage they haven&apos;t used yet
            </h2>
            <p className="text-[15px] text-base-content/60 leading-relaxed mb-4">
              Long-term care (LTC) insurance is designed to pay for exactly the kind of professional in-home support Honor Home Care provides. Yet many families don&apos;t realize their policy is active, or feel overwhelmed by the claims process.
            </p>
            <p className="text-[15px] text-base-content/60 leading-relaxed mb-6">
              Our care coordinators have experience working with the major LTC insurers operating in Massachusetts. We handle the administrative complexity so your family can focus on your loved one.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors">
              Check Your Coverage With Us
            </Link>
          </div>
          <div className="bg-base-200 border border-base-300 rounded-2xl p-8">
            <p className="text-[11px] font-semibold tracking-[3px] uppercase text-primary mb-2">How to Find Your Policy</p>
            <p className="text-[13px] text-base-content/60 leading-relaxed mb-5">
              If you are not sure whether your loved one has LTC insurance, try these steps:
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Check with their insurance agent or financial advisor",
                "Search their files, email, and mail for policy documents",
                "Contact the Massachusetts Division of Insurance for guidance",
                "Review past bank or credit card statements for premium payments",
                "Ask their employer — some people have group LTC coverage through work",
              ].map((step) => (
                <li key={step} className="flex items-start gap-3 text-[13px] text-base-content/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What to check */}
      <section className="py-20 bg-base-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-xl mb-12">
            <p className="text-[11px] font-semibold tracking-[3px] uppercase text-primary mb-4">Reading Your Policy</p>
            <h2 className="font-serif text-[clamp(28px,4vw,40px)] text-base-content leading-tight">
              Six things to check in your long-term care policy
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {whatToCheck.map((item) => (
              <div key={item.title} className="bg-base-100 border border-base-300 rounded-xl p-6">
                <h3 className="font-semibold text-[15px] text-base-content mb-2">{item.title}</h3>
                <p className="text-[13px] text-base-content/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we help */}
      <section className="py-20 bg-base-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-xl mb-12">
            <p className="text-[11px] font-semibold tracking-[3px] uppercase text-primary mb-4">Our Role</p>
            <h2 className="font-serif text-[clamp(28px,4vw,40px)] text-base-content leading-tight">
              We handle the insurer — you focus on your family
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {howWeHelp.map((item) => (
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
            <p className="font-serif text-[22px] text-white">Have a policy? Let&apos;s review it together.</p>
            <p className="text-white/70 text-sm mt-1">Our care advisors will read your policy and tell you exactly what it covers — at no charge.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 bg-white text-primary font-semibold px-7 py-3 rounded-lg hover:bg-gray-50 transition-colors text-sm">
            Get a Free Policy Review
          </Link>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
