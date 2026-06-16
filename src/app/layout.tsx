import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";

import { AppContextProvider } from "../context-api/PropertyContext";

import Header from "./components/layout/header";
import Footer from "./components/layout/footer";


import Aoscompo from "@/utils/aos";

/* -------------------------------------
   FONT
------------------------------------- */
const dmsans = DM_Sans({ subsets: ["latin"] });

/* -------------------------------------
   METADATA — SPOTLITE AFRICA AGENCY
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
   ROOT LAYOUT
------------------------------------- */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={dmsans.className}>
        <AppContextProvider>
          <ThemeProvider
            attribute="class"
            enableSystem={false}
            defaultTheme="light"
          >
            <Aoscompo>
              <Header />
              <NextTopLoader />
              {children}
              <Footer />
            </Aoscompo>

            {/* Global Floating WhatsApp Button */}
            

            {/* Optional: Scroll to top */}
           
          </ThemeProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
