import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Extra Care Inside Assisted Living Communities | Honor Home Care Massachusetts",
  description: "Honor Home Care provides additional one-on-one support for residents inside assisted living communities across Massachusetts — dementia support, personal care, companionship, and more.",
  alternates: { canonical: "https://honorhome.care/services/assisted-living" },
  openGraph: {
    title: "Extra One-on-One Care in Assisted Living — Massachusetts | Honor Home Care",
    description: "Supplemental in-room care for assisted living residents who need more personal attention. Serving Greater Boston and MetroWest MA.",
    url: "https://honorhome.care/services/assisted-living",
  },
};

const services = [
  { title: "Dementia & memory support", desc: "Specialized one-on-one attention for residents with Alzheimer's or dementia — structured routines, engagement, redirection, and safety monitoring beyond what community staff can provide." },
  { title: "Morning & evening routines", desc: "Personalized help with bathing, dressing, grooming, and getting settled for bed — at the pace and approach your loved one is comfortable with." },
  { title: "Companionship & engagement", desc: "Dedicated time for conversation, hobbies, walks around the community, reading, music, and meaningful activities that reduce isolation." },
  { title: "Meal support", desc: "Assistance and encouragement during meals — adaptive feeding support, monitoring intake, and ensuring your loved one is eating and drinking enough." },
  { title: "Appointment accompaniment", desc: "Escorting residents to on-site medical appointments, off-site specialist visits, and family outings — with full caregiver support throughout." },
  { title: "Safety monitoring", desc: "Attentive oversight during high-risk times — nighttime, transitions, and periods when behavioral symptoms are most likely to emerge." },
  { title: "Family communication", desc: "Regular written updates so family members who may not visit daily always have a clear picture of how their loved one is doing." },
  { title: "Respite for community staff", desc: "Our caregiver works alongside community staff — not in place of them — providing the extra attention that makes a real difference in quality of life." },
];

const whyFamiliesChooseThis = [
  { title: "The community can't provide one-on-one care", desc: "Even the best assisted living communities operate on staffing ratios that don't allow for truly individual attention. Our caregiver is there exclusively for your loved one." },
  { title: "Dementia needs exceed what the community offers", desc: "Memory care units vary widely in what they provide. Our dementia-trained caregivers add a consistent, specialized layer of support that makes a measurable difference." },
  { title: "You want family-level attention", desc: "Families who want to know their loved one is being watched over, engaged, and cared for with the same attention a family member would give." },
  { title: "Your loved one is struggling with the transition", desc: "Moving to assisted living is hard. Extra one-on-one support during the adjustment period can make the transition much smoother." },
];

export default function AssistedLivingPage() {
  return (
    <>
      <PageHero
        label="Care in Assisted Living"
        heading="Extra One-on-One Care Inside Assisted Living Communities"
        subtext="We provide additional personal support for residents who need more attention than the community provides — in Massachusetts assisted living and memory care communities."
        crumbs={[{ label: "Services", href: "/services" }, { label: "Care in Assisted Living" }]}
      />

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-[11px] font-semibold tracking-[3px] uppercase text-primary mb-4">What This Looks Like</p>
            <h2 className="font-serif text-[clamp(28px,4vw,40px)] text-base-content leading-tight mb-5">
              A dedicated caregiver, inside the community, just for your loved one
            </h2>
            <p className="text-[15px] text-base-content/60 leading-relaxed mb-4">
              Moving into an assisted living community doesn&apos;t always mean getting enough individual attention. Staffing ratios, shift changes, and the needs of many residents mean that your loved one may not receive the focused, personal support they truly need.
            </p>
            <p className="text-[15px] text-base-content/60 leading-relaxed mb-6">
              Honor Home Care places a dedicated caregiver inside the community — in your loved one&apos;s room, at mealtimes, during outings, or overnight — to provide the level of personal attention that families expect but community staffing can&apos;t always deliver.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors">
              Arrange Additional Support
            </Link>
          </div>
          <div className="bg-base-200 border border-base-300 rounded-2xl p-8">
            <p className="text-[11px] font-semibold tracking-[3px] uppercase text-primary mb-4">Why Families Choose This</p>
            <div className="flex flex-col gap-5">
              {whyFamiliesChooseThis.map((item) => (
                <div key={item.title} className="border-b border-base-300 pb-5 last:border-0 last:pb-0">
                  <p className="font-semibold text-[13px] text-base-content mb-1">{item.title}</p>
                  <p className="text-[12px] text-base-content/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-base-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-xl mb-12">
            <p className="text-[11px] font-semibold tracking-[3px] uppercase text-primary mb-4">What We Provide</p>
            <h2 className="font-serif text-[clamp(28px,4vw,40px)] text-base-content leading-tight">
              Support services inside assisted living
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

      {/* How it works */}
      <section className="py-20 bg-base-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-xl mb-12">
            <p className="text-[11px] font-semibold tracking-[3px] uppercase text-primary mb-4">How It Works</p>
            <h2 className="font-serif text-[clamp(28px,4vw,40px)] text-base-content leading-tight">
              We work alongside the community, not around it
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { n: "01", title: "We coordinate with the community", desc: "We introduce our caregiver to community staff, share the care plan, and make sure everyone is aligned on how we support your loved one." },
              { n: "02", title: "Your caregiver is there when you need them", desc: "Choose the hours, shifts, and days that make the most sense — mornings, evenings, overnight, weekdays, or weekends." },
              { n: "03", title: "You stay informed", desc: "Regular updates from your caregiver mean you always know what&apos;s happening, even when you can&apos;t visit in person." },
            ].map((item) => (
              <div key={item.n} className="bg-base-200 border border-base-300 rounded-xl p-6">
                <p className="font-serif text-[36px] font-medium text-base-300 leading-none mb-3">{item.n}</p>
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
            <p className="font-serif text-[22px] text-white">Want to arrange additional support for your loved one?</p>
            <p className="text-white/70 text-sm mt-1">Call us to discuss care needs and what extra support would look like at your loved one&apos;s community.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a href="tel:+15086653872" className="bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors text-sm text-center">
              Call (508) 665-3872
            </a>
            <Link href="/contact" className="border border-white/40 text-white font-semibold px-6 py-3 rounded-lg hover:border-white transition-colors text-sm text-center">
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
