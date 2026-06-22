export interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url: string;
}

export interface ReviewsResult {
  reviews: GoogleReview[];
  overallRating?: number;
  totalRatings?: number;
}

// Real reviews from Google — the Places API only returns 5, so we hardcode
// the full set here. Update this list when new reviews come in.
const HARDCODED_REVIEWS: GoogleReview[] = [
  {
    author_name: "Steven Tomusange",
    rating: 5,
    text: "I felt very comfortable having Honor Home care staff taking care of our loved family friend. Thank you very much for the excellent care and for being very patient and kind, very compassionate and very reliable.",
    relative_time_description: "a month ago",
    profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocI3fNx9NP_K_wcXr7xyTkfKDSYMV56_Y_Q4e4wWru4ZQfNuiQ=s128-c0x00000000-cc-rp-mo",
  },
  {
    author_name: "Virgillia D'Antonio",
    rating: 5,
    text: "Miriam was my dad's personal aid for 4 years, right up until the end of his life. We could not have done it without her!!",
    relative_time_description: "a month ago",
    profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocJtsLFky8QC3jH_FCfOfMj6z7T3LYfo-Bh5Q7t5brRtnbFOkA=s128-c0x00000000-cc-rp-mo",
  },
  {
    author_name: "PJ Roth",
    rating: 5,
    text: "Marium was wonderful! She found the perfect aide who was kind, reliable, and took excellent care of my husband. Marium checked in often to make sure everything was running smoothly and offered great advice and invaluable help on how best to care for my husband. If I could give this agency 100 stars I would! They made a very difficult time much easier.",
    relative_time_description: "2 months ago",
    profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocJIe5tnw1wIGiCgAxQBIw2CGiNN-Sc2d1_2NvHWaxFXKLhYZQ=s128-c0x00000000-cc-rp-mo-ba2",
  },
  {
    author_name: "Ann Obiukwu",
    rating: 5,
    text: "Amazing services and top-notch professionalism.",
    relative_time_description: "2 months ago",
    profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocJaLmmlzxzrQ3RnHBqsEdUa06j5KHGD055mBw_Yg57ziyMtaA=s128-c0x00000000-cc-rp-mo",
  },
  {
    author_name: "Kiddugavu Maria",
    rating: 5,
    text: "Honor care looked after my loved one and I would choose them again. Thank you Honor.",
    relative_time_description: "2 months ago",
    profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocIkHd3dQklytfkFRQcdxOcutBPKpsN2DXeVuknAhf-OAKsasg=s128-c0x00000000-cc-rp-mo",
  },
  // ── Add more reviews below as they come in ──────────────────────────────
  // Copy from your Google Business profile at:
  // https://business.google.com → Reviews
  // {
  //   author_name: "Name",
  //   rating: 5,
  //   text: "Review text here.",
  //   relative_time_description: "3 months ago",
  //   profile_photo_url: "",
  // },
];

export async function getGoogleReviews(): Promise<ReviewsResult> {
  const apiKey  = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  // Always try to get the overall rating + total count from the API
  let overallRating: number | undefined;
  let totalRatings:  number | undefined;

  if (apiKey && placeId) {
    try {
      const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total&key=${apiKey}`;
      const res  = await fetch(url, { cache: "force-cache" });
      if (res.ok) {
        const data = await res.json();
        overallRating = data?.result?.rating;
        totalRatings  = data?.result?.user_ratings_total;
      }
    } catch {
      // non-fatal — we still show hardcoded reviews
    }
  }

  return {
    reviews: HARDCODED_REVIEWS,
    overallRating,
    totalRatings,
  };
}
