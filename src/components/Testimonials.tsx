import Image from "next/image";

const testimonials = [
  {
    quote: "HonorHome Care has been an absolute lifeline. My mother's caregiver has become like family — the consistency and patience shown every day is remarkable. I finally sleep at night knowing she's safe.",
    name: "Patricia Hargreaves",
    location: "Newton, MA",
    photo: "https://i.pravatar.cc/80?img=47",
  },
  {
    quote: "After Dad's diagnosis we felt completely lost. HonorHome walked us through everything. The family app keeps me updated all day. Dad is more engaged and calm than he's been in years.",
    name: "Robert Chen",
    location: "Waltham, MA",
    photo: "https://i.pravatar.cc/80?img=15",
  },
  {
    quote: "As the primary caregiver for my husband, I was burning out. HonorHome's respite service gave me my life back. The same caregiver comes every time — that consistency means everything in dementia care.",
    name: "Dorothy Williams",
    location: "Framingham, MA",
    photo: "https://i.pravatar.cc/80?img=44",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-serif text-3xl text-gray-900 mb-10">What Families Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-4">
              <p className="text-amber-400 text-sm tracking-wide">★★★★★</p>
              <p className="text-sm text-gray-600 leading-relaxed italic flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
                  <Image src={t.photo} alt={t.name} fill className="object-cover" sizes="36px" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
