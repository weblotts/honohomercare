import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import jobs from "@/lib/jobs.json";

export const metadata: Metadata = {
  title: "Careers — Join the Honor Home Care Team",
  description: "Explore open positions at Honor Home Care. We are hiring CNAs and Home Health Aides passionate about caring for seniors across Greater Boston and MetroWest, MA.",
  alternates: { canonical: "https://honorhome.care/careers" },
  openGraph: {
    title: "Careers at Honor Home Care",
    description: "Make a difference every day. Join our compassionate team of CNAs and Home Health Aides serving Greater Boston.",
    url: "https://honorhome.care/careers",
  },
};

const COMPANY_EMAIL = "info@honorhome.care";

export default function CareersPage() {
  return (
    <>
      <PageHero
        label="Join Our Team"
        heading="Careers at Honor Home Care"
        subtext="We believe great care starts with great caregivers. If you are passionate about making a real difference in the lives of seniors and their families, we would love to hear from you."
        crumb="Careers"
      />

      <section className="max-w-5xl mx-auto px-6 py-16">
        {/* Intro */}
        <div className="mb-14 max-w-2xl">
          <h2 className="font-serif text-2xl text-gray-900 mb-4">Why Work With Us?</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            At Honor Home Care, our caregivers are the heart of everything we do. We foster a supportive, family-oriented culture where your work is valued, your growth is encouraged, and every shift matters.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We serve seniors across Greater Boston and MetroWest, MA — offering flexible schedules, competitive pay, and the tools you need to deliver outstanding care.
          </p>
        </div>

        {/* Job listings */}
        <div className="space-y-12">
          {jobs.map((job) => (
            <div
              key={job.id}
              id={job.id}
              className="border border-gray-200 rounded-2xl p-8 shadow-sm scroll-mt-24"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-serif text-2xl text-gray-900 mb-1">{job.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {job.type}
                    </span>
                    <span className="inline-block bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full">
                      📍 {job.location}
                    </span>
                  </div>
                </div>
                <a
                  href={`mailto:${COMPANY_EMAIL}?subject=Application for ${job.title}`}
                  className="shrink-0 inline-block bg-accent hover:bg-accent-hover text-white font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 text-center"
                >
                  Apply Now
                </a>
              </div>

              <p className="text-gray-600 leading-relaxed mb-8">{job.summary}</p>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Responsibilities */}
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-3">Responsibilities</h4>
                  <ul className="space-y-2">
                    {job.responsibilities.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-gray-600">
                        <span className="mt-1 shrink-0 w-4 h-4 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-[10px]">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Requirements */}
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-3">Requirements</h4>
                  <ul className="space-y-2">
                    {job.requirements.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-gray-600">
                        <span className="mt-1 shrink-0 w-4 h-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-[10px]">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Benefits */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-3">What We Offer</h4>
                <div className="flex flex-wrap gap-2">
                  {job.benefits.map((b) => (
                    <span key={b} className="bg-green-50 text-green-700 text-xs font-medium px-3 py-1.5 rounded-full">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How to apply */}
        <div className="mt-16 bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center">
          <h2 className="font-serif text-2xl text-gray-900 mb-3">Ready to Apply?</h2>
          <p className="text-gray-600 leading-relaxed max-w-xl mx-auto mb-6">
            Send your resume and a brief cover letter to our hiring team. Please include the position you are applying for in the subject line. We review all applications and aim to respond within 2–3 business days.
          </p>
          <a
            href={`mailto:${COMPANY_EMAIL}?subject=Job Application — Honor Home Care`}
            className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5"
          >
            Email Your Resume →
          </a>
          <p className="mt-4 text-sm text-gray-400">{COMPANY_EMAIL}</p>
        </div>
      </section>
    </>
  );
}
