import Image from "next/image";
import Link from "next/link";

const values = [
  { title: "Person-First",       desc: "Care plans center the individual — their history, personality, and preferences, not just their diagnosis." },
  { title: "Evidence-Based",     desc: "All our methods follow the latest dementia care research and Massachusetts clinical guidelines." },
  { title: "Family Partnership", desc: "We treat families as partners, keeping you informed and involved at every stage." },
  { title: "Consistent Care",    desc: "Same caregiver, every visit. Familiarity and trust are essential in dementia care." },
];

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-16">
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/holding-hands.jpg"
                alt="Caregiver with an elderly person at home in Massachusetts"
                fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-4 -right-3 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm">
              <p className="text-xs text-gray-400">Founded</p>
              <p className="text-sm font-semibold text-gray-800">Waltham, MA · 2013</p>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-[clamp(28px,4vw,42px)] text-gray-900 leading-tight mb-5">
              Built on Dignity, Driven by Compassion
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Honor Home Care was founded in Waltham, MA by gerontologists and nurses who saw
              firsthand the gap in specialist dementia care across the Greater Boston area.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed mb-8">
              We serve hundreds of Massachusetts families with a care model endorsed by the
              Alzheimer&apos;s Association, built around the person — not a generic schedule.
            </p>
            <Link href="/about" className="text-sm font-semibold text-purple hover:underline">
              Our story →
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title}>
                <div className="w-6 h-px bg-purple mb-4" />
                <h3 className="font-semibold text-sm text-gray-800 mb-2">{v.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
