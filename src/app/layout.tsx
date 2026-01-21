import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";

import { AppContextProvider } from "../context-api/PropertyContext";

import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

import WhatsAppFloat from "./components/WhatsAppFloat";
import Aoscompo from "@/utils/aos";

/* -------------------------------------
   FONT
------------------------------------- */
const dmsans = DM_Sans({ subsets: ["latin"] });

/* -------------------------------------
   METADATA — SPOTLITE AFRICA AGENCY
------------------------------------- */
export const metadata: Metadata = {
  title: {
    default: "Spotlite Africa Agency | Digital Marketing & Brand Growth",
    template: "%s | Spotlite Africa Agency",
  },
  description:
    "Spotlite Africa Agency is a results-driven digital marketing and brand growth agency helping registered businesses build strong brands, drive visibility, and convert attention into measurable growth.",
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
            <WhatsAppFloat />

            {/* Optional: Scroll to top */}
           
          </ThemeProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
