import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import ConditionsFaq from "@/components/ConditionsFaq";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact Us — Free Dementia Care Consultation",
  description: "Contact Honor Home Care for a free, no-obligation consultation. Specialist in-home dementia care serving Waltham, Newton, Framingham, Lexington, Wellesley, Cambridge, and communities across Greater Boston and MetroWest, MA.",
  alternates: { canonical: "https://honorhome.care/contact" },
  openGraph: {
    title: "Contact Honor Home Care — Free Dementia Care Consultation",
    description: "Speak with a Massachusetts dementia care specialist today. No commitment, no pressure. Available 24/7.",
    url: "https://honorhome.care/contact",
    images: [{ url: "https://honorhome.care/images/caretaker-elderly.jpg", width: 1200, height: 630 }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How quickly can dementia home care begin?",
      acceptedAnswer: { "@type": "Answer", text: "In most cases within 24–48 hours of completing an assessment. For urgent situations we can sometimes arrange care the same day." },
    },
    {
      "@type": "Question",
      name: "What if we are not satisfied with our caregiver?",
      acceptedAnswer: { "@type": "Answer", text: "We will find a replacement promptly — typically within 48 hours. We guarantee a good fit." },
    },
    {
      "@type": "Question",
      name: "Does insurance cover your services?",
      acceptedAnswer: { "@type": "Answer", text: "Some families use long-term care insurance to help cover home care costs. We encourage families to review their policy and speak with their insurer. Our team can discuss care needs and help you understand what information your insurer may request." },
    },
    {
      "@type": "Question",
      name: "How do you handle behavioral symptoms like wandering?",
      acceptedAnswer: { "@type": "Answer", text: "Our caregivers are trained in non-pharmacological approaches — de-escalation, redirection, structured routines, and environmental modifications." },
    },
    {
      "@type": "Question",
      name: "Can you provide dementia care in an assisted living facility?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — we offer supplemental one-on-one care in assisted living and memory care facilities across Massachusetts." },
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <PageHero
        label="Get In Touch"
        heading="We're Here to Help Your Family"
        subtext="Speak with a Massachusetts dementia care specialist today — no commitment, no pressure. Available 24 hours a day, 7 days a week."
        crumbs={[{ label: "Contact" }]}
      />
      <Contact />
      <ConditionsFaq />
    </>
  );
}
