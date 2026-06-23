import Image from "next/image";

const team = [
  { photo: "https://i.pravatar.cc/400?img=12", name: "Marcus Johnson, RN",  role: "Director of Care Operations",  bio: "Registered nurse who designs individualized care plans and supervises our caregiver teams across Massachusetts.", creds: ["RN, BSN", "CDP Certified"] },
  { photo: "https://i.pravatar.cc/400?img=48", name: "Elena Vasquez, MSW",  role: "Family Support Coordinator",   bio: "Licensed social worker guiding families through the practical and emotional challenges of caring for someone with dementia.", creds: ["LCSW", "Dementia Coach"] },
  { photo: "https://i.pravatar.cc/400?img=33", name: "Dr. James Okafor",   role: "Head of Training & Education", bio: "Neuropsychologist who developed our 80-hour caregiver certification curriculum.", creds: ["PhD, Neuropsychology", "ABPP"] },
];

export default function Team() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m) => (
            <div key={m.name} className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="relative h-48">
                <Image src={m.photo} alt={m.name} fill className="object-cover object-top" sizes="(max-width: 640px) 100vw, 25vw" />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-purple mb-1">{m.role}</p>
                <h3 className="font-semibold text-sm text-gray-900 mb-2 leading-tight">{m.name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-3">{m.bio}</p>
                <div className="flex flex-wrap gap-1.5">
                  {m.creds.map((c) => (
                    <span key={c} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
