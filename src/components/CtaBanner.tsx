import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="py-16 bg-white border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl text-gray-900 mb-3">
          Ready to get started?
        </h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Speak with a care advisor today — no commitment, no pressure.
          Available 24/7 across Massachusetts.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="bg-purple text-white text-sm font-semibold px-7 py-3 rounded-lg hover:bg-purple-dark transition-colors">
            Request Free Consultation
          </Link>
          <a href="tel:+15086653872" className="border border-gray-300 text-gray-700 text-sm font-medium px-7 py-3 rounded-lg hover:border-gray-400 transition-colors">
            +1 (508) 665-3872
          </a>
        </div>
      </div>
    </section>
  );
}
