import Image from "next/image";

const pillars = [
  { title: "Dementia-Certified Caregivers", desc: "Every caregiver completes an 80-hour Dementia Care Certification before their first placement, plus annual continuing education." },
  { title: "RN-Supervised Care Plans",      desc: "A registered nurse oversees every care plan and conducts monthly home visits to monitor health and coordinate with medical providers." },
  { title: "Consistent Caregiver Matching", desc: "We carefully match caregivers to each client and maintain that relationship. Familiar faces reduce anxiety and build essential trust." },
  { title: "Family App & Updates",          desc: "Our family portal provides real-time visibility into activities, medication logs, mood notes, and shift reports — from anywhere." },
];

const metrics = [
  { value: "98%",  label: "Family satisfaction",  desc: "Based on annual surveys" },
  { value: "80h",  label: "Caregiver training",   desc: "Before first placement" },
  { value: "24/7", label: "Nurse on-call",         desc: "Around the clock" },
  { value: "12+",  label: "Years experience",      desc: "Since 2013" },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-base-200" aria-labelledby="why-h">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: photo + stats */}
          <div className="flex flex-col gap-6">
            {/* Photo */}
            <div className="relative rounded-2xl overflow-hidden aspect-[3/2]">
              <Image
                src="/images/caretaker-elderly.jpg"
                alt="Caregiver helping an elderly person at home"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay pill */}
              <div className="absolute bottom-4 left-4 bg-base-100/95 backdrop-blur-sm rounded-xl px-4 py-2.5 flex items-center gap-2.5 border border-base-300">
                <span className="text-success text-sm">●</span>
                <p className="text-[12px] font-semibold text-base-content">Alzheimer&apos;s Association Partner</p>
              </div>
            </div>

            {/* Stats */}
            <div className="stats stats-vertical w-full border border-base-300 bg-base-100 shadow-none">
              {metrics.map((m) => (
                <div key={m.label} className="stat py-4 px-6 flex-row items-center gap-6">
                  <div className="stat-value font-serif text-[32px] text-base-content w-24 flex-shrink-0">{m.value}</div>
                  <div>
                    <div className="stat-title text-[13px] font-semibold text-base-content">{m.label}</div>
                    <div className="stat-desc text-[11px]">{m.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: pillars */}
          <div>
            <div className="badge badge-outline text-primary border-primary/30 bg-primary/5 mb-4 tracking-widest text-[10px] uppercase font-semibold">
              Why Honor Home Care
            </div>
            <h2 id="why-h" className="font-serif text-[clamp(32px,4vw,48px)] text-base-content leading-[1.15] mb-5">
              We Go Further<br />Than Standard Care
            </h2>
            <p className="text-[15px] text-base-content/60 leading-relaxed mb-10">
              Dementia care demands specialist training, extraordinary patience,
              and genuine human connection. These are the standards we hold
              ourselves to every day.
            </p>

            <div className="flex flex-col gap-0">
              {pillars.map((p, i) => (
                <div
                  key={p.title}
                  className="py-5 flex gap-4 items-start border-b border-base-300"
                  style={{ borderTop: i === 0 ? "1px solid var(--border)" : undefined }}
                >
                  <div className="badge badge-primary text-white font-semibold text-[11px] w-6 h-6 flex-shrink-0 mt-0.5 rounded-full p-0 flex items-center justify-center">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[14px] text-base-content mb-1">{p.title}</h3>
                    <p className="text-[13px] text-base-content/60 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
