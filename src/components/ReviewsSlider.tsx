"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import type { GoogleReview } from "@/lib/reviews";

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-[14px] h-[14px] ${i < rating ? "text-amber-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
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
      <img src={photo} alt={name} width={44} height={44}
        className="w-11 h-11 rounded-full object-cover flex-shrink-0"
        referrerPolicy="no-referrer" />
    );
  }
  return (
    <div className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
      <span className="text-gray-600 font-semibold text-sm">{initials}</span>
    </div>
  );
}

function usePerPage() {
  const [per, setPer] = useState(3);
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) setPer(1);
      else if (window.innerWidth < 1024) setPer(2);
      else setPer(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return per;
}

export default function ReviewsSlider({ reviews, overallRating, totalRatings, placeId }: {
  reviews: GoogleReview[];
  overallRating?: number;
  totalRatings?: number;
  placeId?: string;
}) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused]   = useState(false);
  const timerRef              = useRef<ReturnType<typeof setTimeout> | null>(null);
  const perPage               = usePerPage();
  const total                 = reviews.length;
  const maxIndex              = Math.max(0, total - perPage);
  const googleUrl             = placeId ? `https://www.google.com/maps/place/?q=place_id:${placeId}` : "#";
  const rating                = overallRating ?? 5;

  const go = useCallback((dir: 1 | -1) => {
    setCurrent((c) => Math.max(0, Math.min(c + dir, maxIndex)));
  }, [maxIndex]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(() => {
      setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
    }, 5500);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, paused, maxIndex]);

  useEffect(() => {
    setCurrent((c) => Math.min(c, Math.max(0, total - perPage)));
  }, [perPage, total]);

  const cardW = 100 / perPage;

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Header row ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">

        {/* Left: score + label */}
        <div className="flex items-center gap-5">
          <div className="flex flex-col items-center justify-center w-20 h-20 rounded-2xl bg-gray-900 text-white flex-shrink-0">
            <span className="font-serif text-[28px] leading-none font-semibold">{rating.toFixed(1)}</span>
            <div className="flex gap-0.5 mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-2.5 h-2.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold text-gray-900 text-[15px]">Exceptional</p>
            <p className="text-sm text-gray-500 mt-0.5">
              {totalRatings ?? reviews.length} reviews on
            </p>
            <div className="flex items-center gap-1.5 mt-1">
              <GoogleIcon />
              <span className="text-sm font-semibold text-gray-700">Google</span>
            </div>
          </div>
        </div>

        {/* Right: nav controls */}
        <div className="flex items-center gap-3">
          {/* Progress dots */}
          <div className="flex gap-1.5">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to review ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? "w-5 h-2 bg-gray-900" : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
          {/* Arrow buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => go(-1)}
              disabled={current === 0}
              aria-label="Previous review"
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-gray-900 hover:text-gray-900 transition-all disabled:opacity-25 disabled:cursor-not-allowed"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => go(1)}
              disabled={current >= maxIndex}
              aria-label="Next review"
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-gray-900 hover:text-gray-900 transition-all disabled:opacity-25 disabled:cursor-not-allowed"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          {/* Google link */}
          {placeId && (
            <a href={googleUrl} target="_blank" rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-gray-900 border border-gray-200 rounded-full px-4 py-2 hover:border-gray-400 transition-all">
              <GoogleIcon />
              All reviews
            </a>
          )}
        </div>
      </div>

      {/* ── Slider ── */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * cardW}%)` }}
        >
          {reviews.map((r, i) => (
            <div
              key={i}
              className="flex-shrink-0 pr-5"
              style={{ width: `${cardW}%` }}
            >
              <div className="flex flex-col gap-5 h-full bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">

                {/* Stars + Google icon */}
                <div className="flex items-center justify-between">
                  <StarRow rating={r.rating} />
                  <GoogleIcon />
                </div>

                {/* Review text */}
                <p className="text-[14px] text-gray-700 leading-[1.75] flex-1">
                  &ldquo;{r.text}&rdquo;
                </p>

                {/* Reviewer */}
                <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                  <Avatar name={r.author_name} photo={r.profile_photo_url} />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{r.author_name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{r.relative_time_description} · Google Review</p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Mobile CTA ── */}
      {placeId && (
        <div className="mt-8 sm:hidden text-center">
          <a href={googleUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 border border-gray-200 rounded-full px-5 py-2.5 hover:border-gray-400 transition-all">
            <GoogleIcon />
            See all {totalRatings} reviews on Google
          </a>
        </div>
      )}
    </div>
  );
}
