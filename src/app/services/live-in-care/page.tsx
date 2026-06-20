import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Live-In Home Care in Massachusetts | Honor Home Care",
  description: "24-hour live-in care for seniors in Massachusetts. A dedicated caregiver stays in your home providing overnight supervision, daily support, and peace of mind for your family.",
  alternates: { canonical: "https://honorhome.care/services/live-in-care" },
  openGraph: {
    title: "Live-In Home Care — Massachusetts | Honor Home Care",
    description: "Around-the-clock in-home support with a live-in caregiver. Serving Greater Boston and MetroWest MA.",
    url: "https://honorhome.care/services/live-in-care",
  },
};

const included = [
  { title: "Overnight supervision", desc: "A caregiver is present throughout the night to respond to wandering, restlessness, or any emergency." },
  { title: "Morning & bedtime routines", desc: "Consistent support with bathing, dressing, grooming, and getting settled for bed." },
  { title: "Meal preparation", desc: "Three nutritious meals a day prepared in your loved one's own kitchen, to their tastes and dietary needs." },
  { title: "Medication management", desc: "Reminders and assistance to ensure medications are taken correctly and on schedule." },
  { title: "Companionship & engagement", desc: "Meaningful conversation, hobbies, walks, and activities that keep your loved one connected and stimulated." },
  { title: "Light housekeeping", desc: "Tidying, laundry, errands, and grocery runs so the home stays safe and comfortable." },
  { title: "Transportation & appointments", desc: "Accompaniment to medical appointments, therapy, and community outings." },
  { title: "Family communication", desc: "Regular updates so your family always knows how your loved one is doing." },
];

const whoItHelps = [
  "Seniors recovering from surgery or a hospital stay",
  "Individuals with Alzheimer's or dementia who need constant supervision",
  "Those at high risk of falls or nighttime wandering",
  "Older adults who live alone and need round-the-clock reassurance",
  "Families who cannot provide overnight care themselves",
];

export default function LiveInCarePage() {
  return (
    <>
      <PageHero
        label="Live-In Care"
        heading="Around-the-Clock Support in the Comfort of Home"
        subtext="A dedicated caregiver lives in your home, providing continuous supervision, daily assistance, and genuine companionship — day and night."
        crumbs={[{ label: "Services", href: "/services" }, { label: "Live-In Care" }]}
      />

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-[11px] font-semibold tracking-[3px] uppercase text-primary mb-4">What Is Live-In Care?</p>
            <h2 className="font-serif text-[clamp(28px,4vw,40px)] text-base-content leading-tight mb-5">
              Extended daily support and overnight safety, without leaving home
            </h2>
            <p className="text-[15px] text-base-content/60 leading-relaxed mb-4">
              Live-in care means a professional caregiver stays in your loved one&apos;s home — sleeping there overnight — and is available to help at any hour. It is the closest alternative to a nursing facility, but without uprooting the person from the place they know and love.
            </p>
            <p className="text-[15px] text-base-content/60 leading-relaxed">
              Honor Home Care carefully matches each client with a caregiver whose personality, skills, and experience align with their specific needs. Families receive regular updates, and our care coordinator remains your single point of contact throughout.
            </p>
          </div>
          <div className="bg-base-200 border border-base-300 rounded-2xl p-8">
            <p className="text-[11px] font-semibold tracking-[3px] uppercase text-primary mb-4">Who Benefits Most</p>
            <ul className="flex flex-col gap-3">
              {whoItHelps.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] text-base-content/70">
                  <span className="text-primary font-bold flex-shrink-0 text-xs mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 bg-base-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-xl mb-12">
            <p className="text-[11px] font-semibold tracking-[3px] uppercase text-primary mb-4">What&apos;s Included</p>
            <h2 className="font-serif text-[clamp(28px,4vw,40px)] text-base-content leading-tight">
              Everything your loved one needs, under one roof
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {included.map((item) => (
              <div key={item.title} className="bg-base-100 border border-base-300 rounded-xl p-6">
                <h3 className="font-semibold text-[15px] text-base-content mb-2">{item.title}</h3>
                <p className="text-[13px] text-base-content/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vs nursing home */}
      <section className="py-20 bg-base-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-xl mb-12">
            <p className="text-[11px] font-semibold tracking-[3px] uppercase text-primary mb-4">Live-In Care vs. A Facility</p>
            <h2 className="font-serif text-[clamp(28px,4vw,40px)] text-base-content leading-tight">
              The same level of care, in a familiar environment
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { title: "Familiar surroundings", desc: "Staying home reduces anxiety and confusion — especially important for those with dementia." },
              { title: "One-to-one attention", desc: "Your loved one has a dedicated caregiver, not staff split across many residents." },
              { title: "Family always welcome", desc: "Visits happen on your schedule, not during posted visiting hours." },
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

      {/* CTA mid-page */}
      <section className="py-14 bg-primary">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-[22px] text-white">Ready to discuss live-in care?</p>
            <p className="text-white/70 text-sm mt-1">A care advisor can walk you through options and pricing — at no cost.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 bg-white text-primary font-semibold px-7 py-3 rounded-lg hover:bg-gray-50 transition-colors text-sm">
            Request a Free Consultation
          </Link>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
