const steps = [
  { n: "1", title: "Free Consultation",      desc: "Speak with a care advisor at no charge. We listen, answer your questions, and outline how we can help — no pressure." },
  { n: "2", title: "In-Home Assessment",     desc: "A registered nurse visits your home to assess needs, safety, health, and personal history — forming the foundation of a tailored plan." },
  { n: "3", title: "Personalized Care Plan", desc: "We build an individualized plan with your family and the medical team. You review and approve everything before care starts." },
  { n: "4", title: "Care Begins & Adapts",   desc: "Your matched, certified caregiver begins. We provide regular updates and adjust the approach as your loved one's needs evolve." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-base-100" aria-labelledby="how-h">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-14">
          <div className="badge badge-outline text-primary border-primary/30 bg-primary/5 mb-4 tracking-widest text-[10px] uppercase font-semibold">
            Getting Started
          </div>
          <h2 id="how-h" className="font-serif text-[clamp(32px,4vw,48px)] text-base-content leading-[1.15]">
            How It Works
          </h2>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((s, i) => (
            <div key={s.n} className="flex flex-col gap-4">
              {/* Number with connecting rule on desktop */}
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0"
                  style={{
                    background: i === 0 ? "var(--purple)" : "var(--ink-100)",
                    color:      i === 0 ? "white"         : "var(--ink-700)",
                  }}
                >
                  {s.n}
                </div>
                {/* connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block flex-1 h-px bg-base-300" />
                )}
              </div>
              <div>
                <h3 className="font-semibold text-[14px] text-base-content mb-1.5">{s.title}</h3>
                <p className="text-[13px] text-base-content/60 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip — DaisyUI alert */}
        <div className="alert bg-base-200 border border-base-300 shadow-none rounded-xl">
          <div className="flex flex-col sm:flex-row w-full items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-base-content text-[14px]">Ready to get started?</p>
              <p className="text-[12px] text-base-content/50 mt-0.5">Care advisors are available 24/7. No obligation required.</p>
            </div>
            <a href="#contact" className="btn btn-primary btn-sm rounded-md text-white flex-shrink-0">
              Book a Free Consultation
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
