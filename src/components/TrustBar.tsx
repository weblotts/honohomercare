const items = [
  "Licensed in Massachusetts",
  "Dementia-Certified Caregivers",
  "RN-Supervised Care Plans",
  "Alzheimer's Association Partner",
  "MassHealth Approved Provider",
];

export default function TrustBar() {
  return (
    <div className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6 py-3">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-1.5">
          {items.map((item) => (
            <span key={item} className="text-xs text-gray-500 flex items-center gap-1.5">
              <span className="text-purple-DEFAULT font-bold">✓</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
