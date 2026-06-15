const services = [
  { id: "memory-care",  title: "Memory Care Support",          desc: "Structured routines, cognitive stimulation, and therapeutic engagement designed for individuals with Alzheimer's and related dementias.",       features: ["Reminiscence therapy", "Music and art engagement", "Validation therapy", "Orientation techniques"] },
  { id: "personal-care",title: "Personal Care & Daily Living", desc: "Respectful, dignified help with bathing, dressing, mobility, and daily routines — supporting independence wherever possible.",                  features: ["Bathing and grooming", "Mobility and fall prevention", "Continence care", "Oral hygiene"] },
  { id: "medication",   title: "Medication Management",        desc: "Safe, accurate medication administration coordinated with physicians and pharmacists to prevent errors and monitor side effects.",                features: ["Medication reminders", "Prescription coordination", "Side-effect monitoring", "Physician liaison"] },
  { id: "nutrition",    title: "Nutrition & Meal Support",     desc: "Nutritious meals prepared with each person's dietary needs in mind, plus feeding support for those who require it.",                             features: ["Meal planning", "Hydration monitoring", "Adaptive feeding", "Nutrition tracking"] },
  { id: "overnight",    title: "Overnight & 24-Hour Care",     desc: "Continuous support for individuals who need monitoring around the clock — including those with sundowning or nighttime restlessness.",          features: ["Live-in and overnight options", "Sundowning management", "Wandering prevention", "Emergency readiness"] },
  { id: "respite",      title: "Family Caregiver Respite",     desc: "Planned, reliable relief for family caregivers — so you can rest and return refreshed, knowing your loved one is in expert hands.",             features: ["Flexible hourly or daily cover", "Handoff reports", "Emergency respite", "Caregiver coaching"] },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div key={s.id} id={s.id} className="border border-gray-200 rounded-xl p-6 scroll-mt-20">
              <h3 className="font-semibold text-base text-gray-900 mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{s.desc}</p>
              <ul className="flex flex-col gap-1.5">
                {s.features.map((f) => (
                  <li key={f} className="text-xs text-gray-500 flex items-start gap-2">
                    <span className="text-purple font-bold mt-0.5 flex-shrink-0">–</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
