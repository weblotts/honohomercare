"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

const inputCls = "w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple/20 transition-colors bg-white";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form      = e.currentTarget;
    const firstName = (form.elements.namedItem("firstName") as HTMLInputElement).value.trim();
    const email     = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    if (!firstName || !email) { alert("Please fill in your name and email."); return; }
    setSent(true);
    setTimeout(() => { setSent(false); form.reset(); }, 6000);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16">

          {/* Info */}
          <div>
            <h2 className="font-serif text-3xl text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-8">
              Our care advisors are available around the clock. Whether you need immediate
              help or just want to learn more, we&apos;re here — no commitment required.
            </p>

            <div className="flex flex-col gap-5">
              {[
                { label: "Phone",   value: "+1 (508) 665-3872",         note: "Available 24/7" },
                { label: "Email",   value: "info@honorhome.care",        note: "Reply within 2 hours" },
                { label: "Address", value: "738 Main St, Waltham, MA 02451", note: "Greater Boston & MetroWest" },
              ].map((d) => (
                <div key={d.label}>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-0.5">{d.label}</p>
                  <p className="text-sm font-semibold text-gray-800">{d.value}</p>
                  <p className="text-xs text-gray-400">{d.note}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Form */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
            <h3 className="font-serif text-xl text-gray-900 mb-1">Request a Free Consultation</h3>
            <p className="text-xs text-gray-400 mb-6">A care advisor will be in touch within 2 hours.</p>

            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">First name *</label>
                  <input type="text" name="firstName" placeholder="Jane" required autoComplete="given-name" className={inputCls} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Last name</label>
                  <input type="text" name="lastName" placeholder="Smith" autoComplete="family-name" className={inputCls} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email *</label>
                  <input type="email" name="email" placeholder="jane@email.com" required autoComplete="email" className={inputCls} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Phone</label>
                  <input type="tel" name="phone" placeholder="(508) 555-0100" autoComplete="tel" className={inputCls} />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Relationship to care recipient</label>
                <select name="relationship" className={inputCls}>
                  <option value="">Select...</option>
                  {["Adult Child","Spouse / Partner","Sibling","Other Family Member","Legal Guardian","Professional Referral"].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Diagnosis (if known)</label>
                <select name="diagnosis" className={inputCls}>
                  <option value="">Select...</option>
                  {["Alzheimer's Disease","Vascular Dementia","Lewy Body Dementia","Frontotemporal Dementia","Mixed Dementia","Mild Cognitive Impairment","Parkinson's Disease Dementia","Not yet diagnosed","Other / Unsure"].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Tell us about your situation</label>
                <textarea name="careNeeds" rows={3} placeholder="Type of care needed, location, any other details..." className={inputCls + " resize-none"} />
              </div>

              <p className="text-xs text-gray-400">
                By submitting you agree to our <Link href="/privacy" className="underline hover:text-gray-600">Privacy Policy</Link>.
                Your information is strictly confidential.
              </p>

              <button type="submit" disabled={sent}
                className={`w-full text-white text-sm font-semibold py-3 rounded-lg transition-colors ${sent ? "bg-green-600" : "bg-purple hover:bg-purple-dark"}`}>
                {sent ? "✓ Received — we'll be in touch within 2 hours" : "Submit Consultation Request"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
