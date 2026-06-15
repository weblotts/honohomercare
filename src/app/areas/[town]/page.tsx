import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { towns, IMAGES, getTown } from "@/lib/towns";
import CtaBanner from "@/components/CtaBanner";
import JsonLd from "@/components/JsonLd";

const BASE_URL = "https://honorhome.care";

export function generateStaticParams() {
  return towns.map((t) => ({ town: t.slug }));
}

export async function generateMetadata({ params }: { params: { town: string } }): Promise<Metadata> {
  const town = getTown(params.town);
  if (!town) return {};
  const url = `${BASE_URL}/areas/${town.slug}`;
  return {
    title: `In-Home Dementia Care in ${town.name}, MA`,
    description: `Honor Home Care provides specialist in-home dementia and Alzheimer's care in ${town.name}, ${town.county}, Massachusetts. Certified caregivers, RN supervision, MassHealth accepted — call (508) 665-3872.`,
    alternates: { canonical: url },
    openGraph: {
      title: `Dementia Home Care in ${town.name}, MA | Honor Home Care`,
      description: `Specialist in-home dementia care for families in ${town.name}, ${town.county}. Certified caregivers, RN supervision, MassHealth accepted.`,
      url,
      images: [{ url: `${BASE_URL}/images/caretaker-elderly.jpg`, width: 1200, height: 630 }],
    },
  };
}

const services = [
  { title: "Memory Care Support",          desc: "Structured routines and cognitive engagement designed for every stage of dementia." },
  { title: "Personal Care & Daily Living", desc: "Dignified help with bathing, dressing, mobility, and daily routines." },
  { title: "Medication Management",        desc: "Safe, accurate medication administration co-ordinated with your physician." },
  { title: "Overnight & 24-Hour Care",     desc: "Round-the-clock support for individuals with sundowning or complex needs." },
  { title: "Nutrition & Meal Support",     desc: "Nutritious meals tailored to dietary needs, with feeding assistance when required." },
  { title: "Family Caregiver Respite",     desc: "Reliable relief for family caregivers — so you can rest and return refreshed." },
];

export default function TownPage({ params }: { params: { town: string } }) {
  const town = getTown(params.town);
  if (!town) notFound();

  const heroImg     = IMAGES[town.imgIndex];
  const nearbyTowns = towns.filter((t) => t.slug !== town.slug).slice(0, 6);
  const pageUrl     = `${BASE_URL}/areas/${town.slug}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",         item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Service Areas", item: `${BASE_URL}/#service-areas` },
      { "@type": "ListItem", position: 3, name: town.name,       item: pageUrl },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `In-Home Dementia Care in ${town.name}, MA`,
    description: `Specialist in-home dementia and Alzheimer's care for families in ${town.name}, ${town.county}, Massachusetts.`,
    url: pageUrl,
    areaServed: { "@type": "City", name: town.name, containedInPlace: { "@type": "State", name: "Massachusetts" } },
    provider: {
      "@type": "Organization",
      name: "Honor Home Care",
      url: BASE_URL,
      telephone: "+1-508-665-3872",
    },
    serviceType: "Dementia Home Care",
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      {/* Hero */}
      <div className="pt-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <p className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-gray-600">Home</Link>
            {" / "}
            <Link href="/#service-areas" className="hover:text-gray-600">Service Areas</Link>
            {" / "}
            {town.name}
          </p>
          <p className="text-xs font-semibold uppercase tracking-widest text-purple mb-3">
            {town.county}, Massachusetts
          </p>
          <h1 className="font-serif text-[clamp(32px,5vw,52px)] text-gray-900 leading-tight mb-4">
            In-Home Dementia Care<br />in {town.name}, MA
          </h1>
          <p className="text-base text-gray-500 leading-relaxed max-w-xl mb-6">{town.desc}</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-block bg-purple text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-purple-dark transition-colors">
              Request a Free Consultation
            </Link>
            <a href="tel:+15086653872" className="inline-block border border-gray-300 text-sm font-semibold text-gray-700 px-5 py-2.5 rounded-lg hover:border-purple hover:text-purple transition-colors">
              (508) 665-3872
            </a>
          </div>
        </div>
      </div>

      {/* Photo + intro */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
              <Image
                src={heroImg}
                alt={`Compassionate dementia caregiver in ${town.name}, Massachusetts`}
                fill className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-serif text-[clamp(26px,3.5vw,38px)] text-gray-900 leading-tight mb-4">
                Specialist Care for {town.name} Families
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                {town.highlight}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Every caregiver we place in {town.name} completes our 80-hour Dementia Care
                Certification and is supervised monthly by a registered nurse. We also work
                directly with MassHealth, long-term care insurers, and Veterans' benefits programs
                so your family can focus on what matters most.
              </p>
              <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-6">
                {[
                  { n: "500+", l: "MA families served" },
                  { n: "80h",  l: "Caregiver certification" },
                  { n: "24/7", l: "Care advisor line" },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="font-serif text-2xl font-semibold text-gray-900">{s.n}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-[clamp(26px,3.5vw,38px)] text-gray-900 mb-2">
            Care Services in {town.name}
          </h2>
          <p className="text-sm text-gray-500 mb-10">
            All services are available in {town.name} and surrounding {town.county} communities.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.title} className="border border-gray-200 rounded-xl p-5 bg-white">
                <h3 className="font-semibold text-sm text-gray-900 mb-2">{s.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/services" className="text-sm font-semibold text-purple hover:underline">
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us for this town */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-[clamp(26px,3.5vw,38px)] text-gray-900 leading-tight mb-4">
                Why {town.name} Families Choose Honor Home Care
              </h2>
              <ul className="flex flex-col gap-4">
                {[
                  { title: "Local knowledge",       desc: `We understand ${town.name}'s neighborhoods, resources, and healthcare partners.` },
                  { title: "Consistent caregivers", desc: "Same trusted caregiver every visit — especially important for those with dementia." },
                  { title: "RN-supervised care",    desc: "A registered nurse reviews every care plan and conducts monthly home visits." },
                  { title: "Family kept informed",  desc: "Regular updates so you always know how your loved one is doing." },
                  { title: "MassHealth accepted",   desc: `We help ${town.name} families access every available funding source.` },
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

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
              <h3 className="font-serif text-xl text-gray-900 mb-2">
                Get Care in {town.name}
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                Speak with a care advisor — no commitment, no pressure. We typically respond the same day.
              </p>
              <div className="flex flex-col gap-3">
                <Link href="/contact"
                  className="block text-center bg-purple text-white text-sm font-semibold px-5 py-3 rounded-lg hover:bg-purple-dark transition-colors">
                  Request a Free Consultation
                </Link>
                <a href="tel:+15086653872"
                  className="block text-center border border-gray-300 text-sm font-semibold text-gray-700 px-5 py-3 rounded-lg hover:border-purple hover:text-purple transition-colors">
                  Call (508) 665-3872
                </a>
              </div>
              <p className="text-xs text-gray-400 text-center mt-4">Available 24 hours a day, 7 days a week</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby areas */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">We also serve</p>
          <div className="flex flex-wrap gap-2">
            {nearbyTowns.map((t) => (
              <Link
                key={t.slug}
                href={`/areas/${t.slug}`}
                className="text-sm text-gray-600 border border-gray-200 rounded-full px-4 py-1.5 hover:border-purple hover:text-purple transition-colors"
              >
                {t.name}, MA
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
