import { Metadata } from "next";

// Home sections
import Hero from "./components/home/hero";
import About from "./components/home/about";
import DiscoverProperties from "./components/home/property-option"; // mentor / platform section
import Listing from "./components/home/property-list";
import Testimonials from "./components/home/testimonial";
import History from "./components/home/history";
import Calculator from "./components/home/calculator";
import Info from "./components/home/info";

// Global components
import AudioWelcome from "./components/AudioWelcome";

/* -------------------------------------
   METADATA — SPOTLITE AFRICA AGENCY
------------------------------------- */
export const metadata: Metadata = {
  metadataBase: new URL("https://spotliteafrica.com"),

  title: {
    default: "Spotlite Africa Agency | Digital Marketing & Brand Growth Agency",
    template: "%s | Spotlite Africa Agency",
  },

  description:
    "Spotlite Africa Agency is a results-driven digital marketing and brand growth agency helping registered businesses build strong brands, deploy high-converting websites, run performance marketing campaigns, and scale revenue across Africa.",

  keywords: [
    // Core brand
    "Spotlite Africa Agency",
    "Spotlite Africa",

    // High-intent agency keywords
    "digital marketing agency Africa",
    "digital marketing agency Nigeria",
    "brand development agency Africa",
    "performance marketing agency",
    "social media marketing agency",
    "digital advertising agency",

    // Services
    "website design agency Africa",
    "ecommerce marketing agency",
    "influencer marketing agency",
    "campaign strategy agency",
    "growth marketing agency",

    // Business-focused intent
    "marketing for registered businesses",
    "CAC business branding",
    "marketing agency for startups Africa",
    "business growth agency Africa",
  ],

  openGraph: {
    title: "Spotlite Africa Agency — Digital Marketing & Brand Growth",
    description:
      "We help registered businesses build powerful brands, attract the right audience, and convert visibility into measurable revenue through strategy-led digital marketing.",
    url: "https://spotliteafrica.com",
    siteName: "Spotlite Africa Agency",
    type: "website",
    images: [
      {
        url: "https://spotliteafrica.com/og/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Spotlite Africa Agency — Digital Marketing & Brand Growth Agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Spotlite Africa Agency | Digital Marketing & Growth",
    description:
      "A digital marketing and brand growth agency helping African businesses scale visibility, conversions, and revenue.",
    images: ["https://spotliteafrica.com/og/og-cover.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://spotliteafrica.com",
  },
};

/* -------------------------------------
   HOME PAGE
------------------------------------- */
export default function Home() {
  return (
    <main>
      {/* Audio welcome — brief, professional, plays once per visit */}
      <AudioWelcome />

      {/* Core hero & positioning */}
      <Hero />
      <About />

      {/* Platform / WhatsApp / AI section */}
      <DiscoverProperties />

      {/* Workforce scope / industries / roles */}
      <Listing />

      {/* Trust & social proof */}
      <Testimonials />

      {/* Company journey, capability & infrastructure */}
      <History />
      <Calculator />
      <Info />
    </main>
  );
}
