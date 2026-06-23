import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms of Service — Honor Home Care",
  description: "The terms governing your use of the Honor Home Care, LLC website and the information presented on it.",
  alternates: { canonical: "https://honorhome.care/terms" },
  openGraph: {
    title: "Terms of Service — Honor Home Care",
    description: "The terms governing your use of the Honor Home Care website.",
    url: "https://honorhome.care/terms",
  },
  robots: { index: false },
};

const sections = [
  {
    h: "Acceptance of Terms",
    p: "By accessing or using the Honor Home Care, LLC website, you agree to be bound by these Terms of Service. If you do not agree, please do not use this website.",
  },
  {
    h: "Use of the Website",
    p: "This website is provided for general informational purposes about our home care services in Massachusetts. You agree to use it only for lawful purposes and not to interfere with its operation or security.",
  },
  {
    h: "No Medical Advice",
    p: "Content on this website is for informational purposes only and does not constitute medical, legal, or professional advice. It is not a substitute for consultation with a qualified healthcare provider. Always seek the advice of a physician regarding any medical condition.",
  },
  {
    h: "Service Engagement",
    p: "Submitting a form or contacting us does not create a care service agreement. Care services are governed by a separate written agreement entered into between you and Honor Home Care, LLC.",
  },
  {
    h: "Intellectual Property",
    p: "All content on this website — including text, graphics, logos, and images — is the property of Honor Home Care, LLC or its licensors and is protected by applicable intellectual property laws. You may not reproduce or distribute it without permission.",
  },
  {
    h: "Limitation of Liability",
    p: "To the fullest extent permitted by law, Honor Home Care, LLC is not liable for any damages arising from your use of, or inability to use, this website or its content.",
  },
  {
    h: "Changes to These Terms",
    p: "We may update these Terms of Service from time to time. Continued use of the website after changes are posted constitutes acceptance of the revised terms.",
  },
  {
    h: "Governing Law",
    p: "These Terms are governed by the laws of the Commonwealth of Massachusetts, without regard to its conflict of law principles.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        label="Legal"
        heading="Terms of Service"
        subtext="The terms governing your use of this website."
        crumbs={[{ label: "Terms of Service" }]}
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
