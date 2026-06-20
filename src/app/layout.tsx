import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const BASE_URL = "https://honorhome.care";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Honor Home Care | In-Home Dementia Care — Massachusetts",
    template: "%s | Honor Home Care",
  },
  description:
    "Honor Home Care provides specialist in-home dementia and Alzheimer's care across Greater Boston and MetroWest Massachusetts. Serving Waltham, Newton, Framingham, Lexington, Wellesley, Cambridge and 12+ more communities since 2013.",
  keywords: [
    "dementia home care Massachusetts",
    "Alzheimer's care MA",
    "in-home dementia caregiver Waltham",
    "memory care Newton MA",
    "home care MetroWest",
    "dementia caregiver Greater Boston",
    "Alzheimer's home care Framingham",
    "dementia care Lexington MA",
    "in-home caregiver Wellesley",
    "private pay home care Massachusetts",
    "24 hour dementia care Massachusetts",
  ],
  authors: [{ name: "Honor Home Care" }],
  creator: "Honor Home Care",
  publisher: "Honor Home Care",
  formatDetection: { telephone: true, email: true, address: true },
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: "Honor Home Care | In-Home Dementia Care — Massachusetts",
    description:
      "Person-centered, specialist in-home dementia care across Greater Boston and MetroWest MA. Certified caregivers, RN supervision, flexible private-pay options. Serving families since 2013.",
    url: BASE_URL,
    siteName: "Honor Home Care",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/caretaker-elderly.jpg`,
        width: 1200,
        height: 630,
        alt: "Honor Home Care — specialist in-home dementia care in Massachusetts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Honor Home Care | In-Home Dementia Care — Massachusetts",
    description:
      "Specialist in-home dementia care across Greater Boston and MetroWest MA. Serving families since 2013.",
    images: [`${BASE_URL}/images/caretaker-elderly.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${BASE_URL}/#organization`,
  name: "Honor Home Care",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  image: `${BASE_URL}/images/caretaker-elderly.jpg`,
  description:
    "Specialist in-home dementia and Alzheimer's care across Greater Boston and MetroWest Massachusetts. Licensed, insured, and serving families since 2013.",
  telephone: "+1-508-665-3872",
  email: "care@honorhome.care",
  foundingDate: "2013",
  address: {
    "@type": "PostalAddress",
    streetAddress: "738 Main St",
    addressLocality: "Waltham",
    addressRegion: "MA",
    postalCode: "02451",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 42.3765,
    longitude: -71.2356,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  areaServed: [
    "Waltham, MA","Newton, MA","Brookline, MA","Cambridge, MA","Lexington, MA",
    "Framingham, MA","Natick, MA","Wellesley, MA","Needham, MA","Dedham, MA",
    "Watertown, MA","Concord, MA","Wayland, MA","Sudbury, MA","Weston, MA",
    "Dover, MA","Sherborn, MA","Holliston, MA",
  ],
  sameAs: [],
  priceRange: "$$",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Dementia Home Care Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Memory Care Support" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Personal Care & Daily Living" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Medication Management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Overnight & 24-Hour Care" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Nutrition & Meal Support" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Family Caregiver Respite" } },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="honorhome" className={`${cormorant.variable} ${jakarta.variable}`}>
      <head>
        <JsonLd data={localBusinessSchema} />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
