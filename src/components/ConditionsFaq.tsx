"use client";

import { useState } from "react";

const faqs = [
  { q: "How quickly can care begin?", a: "In most cases within 24–48 hours of completing an assessment. For urgent situations we can sometimes arrange care the same day." },
  { q: "What if we're not satisfied with our caregiver?", a: "We'll find a replacement promptly — typically within 48 hours. We guarantee a good fit." },
  { q: "Does MassHealth or insurance cover your services?", a: "Many services are covered under MassHealth waiver programs, long-term care insurance, and VA benefits. Our team will review your eligibility at no charge." },
  { q: "How do you handle behavioral symptoms like wandering?", a: "Our caregivers are trained in non-pharmacological approaches — de-escalation, redirection, structured routines, and environmental modifications." },
  { q: "Can you provide care in an assisted living facility?", a: "Yes — we offer supplemental one-on-one care in assisted living and memory care facilities across Massachusetts." },
];

const conditions = [
  "Alzheimer's Disease (all stages)", "Vascular Dementia",
  "Lewy Body Dementia", "Frontotemporal Dementia",
  "Mixed Dementia", "Mild Cognitive Impairment",
  "Parkinson's Disease Dementia", "Huntington's Disease",
];

export default function ConditionsFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          <div>
            <h2 className="font-serif text-3xl text-gray-900 mb-6">Conditions We Support</h2>
            <ul className="divide-y divide-gray-200">
              {conditions.map((c) => (
                <li key={c} className="py-3 flex items-center gap-3 text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple flex-shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-3xl text-gray-900 mb-6">Common Questions</h2>
            <div className="divide-y divide-gray-200">
              {faqs.map((f, i) => (
                <div key={f.q}>
                  <button
                    className="w-full flex justify-between items-center py-4 text-left text-sm font-medium text-gray-800 hover:text-purple transition-colors gap-4"
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                  >
                    {f.q}
                    <span className="text-gray-400 flex-shrink-0 text-lg leading-none">{open === i ? "−" : "+"}</span>
                  </button>
                  {open === i && (
                    <p className="pb-4 text-sm text-gray-500 leading-relaxed">{f.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
