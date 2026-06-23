import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Accessibility Statement — Honor Home Care",
  description: "Honor Home Care, LLC is committed to making its website accessible to all visitors, including people with disabilities.",
  alternates: { canonical: "https://honorhome.care/accessibility" },
  openGraph: {
    title: "Accessibility Statement — Honor Home Care",
    description: "Honor Home Care is committed to making its website accessible to all visitors, including people with disabilities.",
    url: "https://honorhome.care/accessibility",
  },
  robots: { index: false },
};

const sections = [
  {
    h: "Our Commitment",
    p: "Honor Home Care, LLC is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.",
  },
  {
    h: "Conformance Standards",
    p: "We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. These guidelines explain how to make web content more accessible to people with a wide range of disabilities, including visual, auditory, physical, speech, cognitive, and neurological disabilities.",
  },
  {
    h: "Measures We Take",
    p: "Our website is designed with semantic structure, sufficient color contrast, keyboard navigability, descriptive text for images, and responsive layouts that adapt to assistive technologies and a range of devices.",
  },
  {
    h: "Ongoing Effort",
    p: "Accessibility is an ongoing effort. We regularly review our website and content to identify and resolve any potential barriers, and we consider accessibility as part of new features and updates.",
  },
  {
    h: "Feedback & Assistance",
    p: "If you encounter any accessibility barriers on our website, or need information in an alternative format, please contact us. We welcome your feedback and will make reasonable efforts to provide the information or service you need.",
  },
];

export default function AccessibilityPage() {
  return (
    <>
      <PageHero
        label="Legal"
        heading="Accessibility Statement"
        subtext="Our commitment to an accessible experience for everyone."
        crumbs={[{ label: "Accessibility" }]}
      />
      <section className="py-24 bg-base-100">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[13px] text-base-content/50 mb-12">Last updated: June 15, 2026</p>
          <div className="flex flex-col gap-10">
            {sections.map((s) => (
              <div key={s.h}>
                <h2 className="font-serif text-2xl text-base-content mb-3">{s.h}</h2>
                <p className="text-[15px] text-base-content/65 leading-relaxed">{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
