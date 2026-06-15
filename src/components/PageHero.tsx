import Link from "next/link";

interface Crumb { label: string; href?: string }

interface PageHeroProps {
  label?:   string;
  heading:  string;
  subtext?: string;
  crumbs?:  Crumb[];
  crumb?:   string;
}

export default function PageHero({ label, heading, subtext, crumbs, crumb }: PageHeroProps) {
  const breadcrumbs: Crumb[] = crumbs ?? (crumb ? [{ label: crumb }] : []);

  return (
    <div className="pt-16 bg-gray-50 border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <p className="text-sm text-gray-400 mb-4">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          {breadcrumbs.map((b) =>
            b.href
              ? <span key={b.label}>{" / "}<Link href={b.href} className="hover:text-gray-600">{b.label}</Link></span>
              : <span key={b.label}>{" / "}{b.label}</span>
          )}
        </p>
        {label && <p className="text-xs font-semibold uppercase tracking-widest text-purple mb-3">{label}</p>}
        <h1 className="font-serif text-[clamp(32px,5vw,52px)] text-gray-900 leading-tight">{heading}</h1>
        {subtext && <p className="mt-3 text-base text-gray-500 leading-relaxed max-w-xl">{subtext}</p>}
      </div>
    </div>
  );
}
