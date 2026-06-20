import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Private Pay Home Care in Massachusetts | Honor Home Care",
  description: "Private-pay home care for families who want premium, flexible, no-waitlist care in Massachusetts. Hourly and live-in options with no program restrictions.",
  alternates: { canonical: "https://honorhome.care/services/private-pay" },
  openGraph: {
    title: "Private Pay Home Care — Massachusetts | Honor Home Care",
    description: "Premium, flexible in-home care with no program restrictions. Hourly or live-in options across Greater Boston and MetroWest MA.",
    url: "https://honorhome.care/services/private-pay",
  },
};

const whatFamiliesPay = [
  { title: "Hourly care", desc: "Choose the hours that make sense — a few hours a day, specific shifts, or structured weekly schedules. Billed transparently per hour with no surprise fees." },
  { title: "Live-in care", desc: "A caregiver lives in the home and is available around the clock. Ideal for families who need maximum support without a facility placement." },
  { title: "Overnight care", desc: "A caregiver stays overnight to handle nighttime needs — wandering, bathroom assistance, medication — so family caregivers can sleep." },
  { title: "Companion & errand care", desc: "Non-medical support including companionship, grocery runs, appointments, light housekeeping, and social outings." },
];

const advantages = [
  { title: "No waitlists", desc: "Private-pay clients can start care in days, not months. There are no program enrollment queues or eligibility delays." },
  { title: "No program restrictions", desc: "Government programs limit what services can be provided. Private pay gives your family the freedom to build care around your loved one's actual needs." },
  { title: "Consistent caregiver", desc: "Private-pay families receive priority caregiver matching and greater continuity — the same person shows up, every shift." },
  { title: "Flexible scheduling", desc: "Start with a few hours and scale up or down as needs change. No long-term contracts required." },
  { title: "Premium caregiver selection", desc: "Private-pay clients can request caregivers with specific skills, experience, or language ability." },
  { title: "Family-directed care", desc: "You and your family lead the care plan. We follow your priorities, not program requirements." },
];

export default function PrivatePayPage() {
  return (
    <>
      <PageHero
        label="Private Pay Care"
        heading="Flexible, Premium Home Care — On Your Terms"
        subtext="Private-pay home care gives your family maximum flexibility, faster starts, and care built entirely around your loved one's needs — not program rules."
        crumbs={[{ label: "Services", href: "/services" }, { label: "Private Pay" }]}
      />

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-[11px] font-semibold tracking-[3px] uppercase text-primary mb-4">What Is Private Pay?</p>
            <h2 className="font-serif text-[clamp(28px,4vw,40px)] text-base-content leading-tight mb-5">
              Care funded directly by families, without program restrictions
            </h2>
            <p className="text-[15px] text-base-content/60 leading-relaxed mb-4">
              Private pay means your family pays for care directly — rather than through a government program or managed care organization. This gives you full control over what services are provided, who provides them, and when.
            </p>
            <p className="text-[15px] text-base-content/60 leading-relaxed mb-6">
              Many families choose private pay because they want care to start immediately, want more hours than a program allows, or simply want the freedom to design care around their loved one rather than around a funding formula.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors">
              Ask About Pricing
            </Link>
          </div>
          <div className="bg-base-200 border border-base-300 rounded-2xl p-8">
            <p className="text-[11px] font-semibold tracking-[3px] uppercase text-primary mb-5">What Families Pay For</p>
            <div className="flex flex-col gap-5">
              {whatFamiliesPay.map((item) => (
                <div key={item.title}>
                  <h3 className="font-semibold text-[14px] text-base-content mb-1">{item.title}</h3>
                  <p className="text-[13px] text-base-content/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-base-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-xl mb-12">
            <p className="text-[11px] font-semibold tracking-[3px] uppercase text-primary mb-4">Why Private Pay</p>
            <h2 className="font-serif text-[clamp(28px,4vw,40px)] text-base-content leading-tight">
              The advantages of paying privately for home care
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {advantages.map((item) => (
              <div key={item.title} className="bg-base-100 border border-base-300 rounded-xl p-6">
                <span className="text-primary font-bold text-xs block mb-3">✓</span>
                <h3 className="font-semibold text-[15px] text-base-content mb-2">{item.title}</h3>
                <p className="text-[13px] text-base-content/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other options note */}
      <section className="py-16 bg-base-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="alert bg-base-200 border border-base-300 shadow-none rounded-xl">
            <div className="flex flex-col gap-3 w-full">
              <p className="font-semibold text-base-content text-[14px]">Not sure if private pay is right for your family?</p>
              <p className="text-[13px] text-base-content/60 leading-relaxed">
                Many families use a combination of private pay and insurance benefits. We also work with families covered by long-term care insurance, the VA, and other programs. Our care advisors will help you understand every option — at no cost.
              </p>
              <div className="flex flex-wrap gap-3 mt-2">
                <Link href="/services/long-term-care-insurance" className="text-sm text-primary font-semibold hover:underline">
                  Long-Term Care Insurance →
                </Link>
                <Link href="/contact" className="text-sm text-primary font-semibold hover:underline">
                  Speak With a Care Advisor →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
