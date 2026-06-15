import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-16 bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="font-serif text-[clamp(36px,5vw,56px)] text-gray-900 leading-tight mb-5">
              In-Home Dementia Care Across Massachusetts
            </h1>
            <p className="text-base text-gray-500 leading-relaxed mb-8 max-w-md">
              Compassionate, specialist care for individuals living with Alzheimer&apos;s
              and dementia — in the comfort of their own home. Serving Greater Boston
              and MetroWest, MA since 2013.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <Link href="/contact" className="bg-purple text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-purple-dark transition-colors">
                Request Free Consultation
              </Link>
              <Link href="/services" className="border border-gray-300 text-gray-700 text-sm font-medium px-6 py-3 rounded-lg hover:border-gray-400 transition-colors">
                Our Services
              </Link>
            </div>

            <div className="flex gap-8 pt-8 border-t border-gray-100">
              {[
                { value: "12+",  label: "Years in MA" },
                { value: "500+", label: "Families served" },
                { value: "98%",  label: "Satisfaction" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-serif text-3xl text-gray-900 leading-none mb-1">{s.value}</p>
                  <p className="text-xs text-gray-400 font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/caretaker-elderly.jpg"
                alt="Caregiver providing in-home dementia care in Massachusetts"
                fill priority className="object-cover" sizes="450px"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm">
              <p className="text-xs text-gray-400 mb-0.5">Based in</p>
              <p className="text-sm font-semibold text-gray-800">Waltham, MA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
