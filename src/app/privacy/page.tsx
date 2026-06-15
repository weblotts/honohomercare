import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy — Honor Home Care",
  description: "How Honor Home Care, LLC collects, uses, and protects the personal and health information of the Massachusetts families we serve.",
  alternates: { canonical: "https://honorhome.care/privacy" },
};

const sections = [
  {
    h: "Information We Collect",
    p: "We collect information you provide directly — such as your name, contact details, and any care-related information you share when requesting a consultation, completing a form, or communicating with our team. We also collect limited technical data (such as IP address and browser type) automatically when you visit our website.",
  },
  {
    h: "How We Use Your Information",
    p: "We use your information to respond to inquiries, coordinate and deliver care services, schedule consultations, comply with legal and regulatory obligations, and improve our services. We do not sell your personal information to third parties.",
  },
  {
    h: "Protected Health Information",
    p: "As a Massachusetts home care provider, any health information you share with us is handled in accordance with applicable state and federal privacy laws, including HIPAA where it applies. Access is limited to staff involved in coordinating and delivering your care.",
  },
  {
    h: "Sharing of Information",
    p: "We may share information with caregivers and care coordinators assigned to your case, with service providers who support our operations under confidentiality obligations, and where required by law. We do not share your information for advertising purposes.",
  },
  {
    h: "Cookies & Analytics",
    p: "Our website may use cookies and similar technologies to understand how visitors use our site and to improve the experience. You can control cookies through your browser settings.",
  },
  {
    h: "Your Rights",
    p: "You may request access to, correction of, or deletion of your personal information by contacting us. We will respond to all requests as required by applicable Massachusetts and federal law.",
  },
  {
    h: "Contact Us",
    p: "If you have questions about this Privacy Policy or how your information is handled, please contact Honor Home Care, LLC at the details provided on our Contact page.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        label="Legal"
        heading="Privacy Policy"
        subtext="How we collect, use, and protect your information."
        crumbs={[{ label: "Privacy Policy" }]}
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
