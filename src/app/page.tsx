import { Metadata } from "next";

// Home sections
import Hero from "./components/home/hero";
import About from "./components/home/about";
import Process from "./components/home/process";
import Client from "./components/home/clients";
import Team from "./components/home/team";
import DiscoverProperties from "./components/home/property-option"; // mentor / platform section
import Listing from "./components/home/property-list";
import Testimonials from "./components/home/testimonial";
import History from "./components/home/history";


// Global components


/* -------------------------------------
   METADATA, SPOTLITE AFRICA AGENCY
------------------------------------- */
export const metadata: Metadata = {
  metadataBase: new URL("https://spotliteafrica.com"),

  title: {
    default:
      "Brand Strategy, Website Design & Digital Growth Agency in Nigeria | Spotlite Africa",
    template: "%s | Spotlite Africa",
  },

  description:
    "Spotlite Africa helps ambitious businesses build stronger brands, redesign websites, improve digital presence, and create growth systems that attract customers, increase credibility, and drive revenue. Based in Lagos, serving businesses across Africa.",

  keywords: [
    "brand strategy agency Nigeria",
    "website design agency Lagos",
    "website development company Nigeria",
    "digital marketing agency Lagos",
    "brand development agency Africa",
    "corporate branding agency Nigeria",
    "business growth agency",
    "digital transformation agency",
    "brand consulting Nigeria",
    "website redesign services",
    "business positioning agency",
    "digital presence agency",
    "marketing agency for businesses",
    "growth marketing Nigeria",
    "SEO agency Nigeria",
    "social media marketing agency Nigeria",
    "Spotlite Africa",
    "brand identity design",
    "corporate website design",
    "marketing strategy Nigeria",
  ],

  openGraph: {
    title:
      "Spotlite Africa | Brand Strategy, Website Design & Digital Growth",

    description:
      "We help businesses refine their brand, redesign their websites, improve digital presence, and create structured growth systems that generate measurable business results.",

    url: "https://spotliteafrica.com",

    siteName: "Spotlite Africa",

    type: "website",

    images: [
      {
        url: "https://spotliteafrica.com/og/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Spotlite Africa",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Spotlite Africa | Brand Strategy & Digital Growth Agency",

    description:
      "Helping businesses build stronger brands, better websites, and scalable digital growth systems.",

    images: [
      "https://spotliteafrica.com/og/og-cover.jpg",
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
      {/* Audio welcome, brief, professional, plays once per visit */}
     

      {/* Core hero & positioning */}
      <Hero />
      <About />
         <Client />
         <Process />
         <Team />

      {/* Platform / WhatsApp / AI section */}
      <DiscoverProperties />

      {/* Workforce scope / industries / roles */}
   

      {/* Trust & social proof */}
     

      {/* Company journey, capability & infrastructure */}
      <History />
      
    </main>
  );
}
