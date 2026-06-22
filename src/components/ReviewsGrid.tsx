"use client";

import type { GoogleReview } from "@/lib/reviews";

const GOOGLE_ICON = (
  <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

function Stars({ rating, size = "md" }: { rating: number; size?: "sm" | "md" | "lg" }) {
  const sz = size === "lg" ? "w-6 h-6" : size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4";
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`${sz} ${i < rating ? "text-amber-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ name, photo }: { name: string; photo: string }) {
  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
  if (photo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={photo} alt={name} width={48} height={48}
        className="w-12 h-12 rounded-full object-cover flex-shrink-0 ring-2 ring-white shadow"
        referrerPolicy="no-referrer" />
    );
  }
  return (
    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 ring-2 ring-white shadow">
      <span className="text-primary font-semibold text-sm">{initials}</span>
    </div>
  );
}

export default function ReviewsGrid({ reviews, overallRating, totalRatings, placeId }: {
  reviews: GoogleReview[];
  overallRating?: number;
  totalRatings?: number;
  placeId?: string;
}) {
  const googleUrl = placeId ? `https://www.google.com/maps/place/?q=place_id:${placeId}` : "#";

  return (
    <div>
      {/* ── Score banner ── */}
      <div className="rounded-2xl bg-gray-900 text-white mb-10 overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-[auto_1px_1fr] gap-0">

          {/* Left: score */}
          <div className="flex flex-col items-center justify-center px-10 py-8 gap-2">
            <span className="font-serif text-[72px] leading-none font-semibold text-white">
              {overallRating?.toFixed(1) ?? "5.0"}
            </span>
            <Stars rating={Math.round(overallRating ?? 5)} size="lg" />
            <p className="text-gray-400 text-xs mt-1 tracking-wide">out of 5</p>
          </div>

          {/* Divider */}
          <div className="hidden sm:block bg-white/10" />

          {/* Right: context */}
          <div className="flex flex-col justify-center px-8 py-8 gap-4">
            <div className="flex items-center gap-2">
              {GOOGLE_ICON}
              <span className="text-sm font-semibold text-white">Google Reviews</span>
            </div>
            <p className="text-2xl font-serif text-white leading-snug">
              Trusted by families across Massachusetts
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Based on <span className="text-white font-semibold">{totalRatings ?? "23"} verified reviews</span> from families who have trusted us with the care of their loved ones.
            </p>
            {placeId && (
              <a href={googleUrl} target="_blank" rel="noopener noreferrer"
                className="self-start inline-flex items-center gap-2 text-sm font-semibold text-white border border-white/30 rounded-full px-5 py-2 hover:bg-white/10 transition-colors">
                {GOOGLE_ICON}
                See all {totalRatings} reviews
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ── Review cards ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((r, i) => (
          <div key={i}
            className="group relative bg-white border border-gray-200 rounded-2xl p-7 flex flex-col gap-5 hover:shadow-lg hover:border-primary/20 transition-all duration-300">

            {/* Top row: avatar + name + stars */}
            <div className="flex items-center gap-3">
              <Avatar name={r.author_name} photo={r.profile_photo_url} />
              <div className="min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">{r.author_name}</p>
                <p className="text-xs text-gray-400">{r.relative_time_description}</p>
              </div>
              <div className="ml-auto flex-shrink-0">
                {GOOGLE_ICON}
              </div>
            </div>

            {/* Stars */}
            <Stars rating={r.rating} />

            {/* Review text */}
            <p className="text-[14px] text-gray-600 leading-relaxed flex-1">
              {r.text}
            </p>

            {/* Bottom accent line on hover */}
            <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </div>
        ))}
      </div>

      {/* ── CTA ── */}
      {placeId && (
        <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="font-semibold text-gray-900 text-[15px]">Read more on Google</p>
            <p className="text-sm text-gray-500 mt-0.5">
              We have <span className="font-semibold text-gray-800">{totalRatings} reviews</span> — the API shows our 5 most recent.
            </p>
          </div>
          <a href={googleUrl} target="_blank" rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2.5 bg-white border border-gray-300 text-gray-800 text-sm font-semibold px-6 py-3 rounded-full hover:border-gray-400 hover:shadow-sm transition-all duration-200">
            {GOOGLE_ICON}
            See all {totalRatings} reviews on Google
          </a>
        </div>
      )}
    </div>
  );
}
