"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* -------------------------------------
   LOGOS (KEEP IN /public/images/logo)
------------------------------------- */
const logos = [
  "/images/logo/okeowos.svg",
  "/images/logo/chuks.png",
  "/images/logo/dlogo.svg",
  "/images/logo/ajaokuta.svg",
  "/images/logo/bronta.svg",
  "/images/logo/dmflogo.svg",
  "/images/logo/dozylog.png",
  "/images/logo/gpt.svg",
  "/images/logo/olowu.svg",
  "/images/logo/platformcapital.jpg",
  "/images/logo/savl.png",
  "/images/logo/soundhous.svg",
  "/images/logo/diatomimpact.svg",
  "/images/logo/atalantic1.png",
  "/images/logo/CED.png",
  "/images/logo/tingo.png",
  "/images/logo/equity.png",
  "/images/logo/africanholdings.png",
];

/* -------------------------------------
   SPLIT INTO ROWS (IMPORTANT)
------------------------------------- */
const row1 = logos.slice(0, 6);
const row2 = logos.slice(6, 12);
const row3 = logos.slice(12);

/* -------------------------------------
   MAIN SECTION
------------------------------------- */
export default function TrustedBy() {
  return (
    <section className="relative overflow-hidden bg-white py-28" id="partnerships">
      <div className="container mx-auto px-6 lg:max-w-screen-xl">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="uppercase tracking-[0.25em] text-xs text-black/50">
            Trusted Partnerships
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-light text-black">
            Trusted by Brands Serious About Growth
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-black/70">
            We’ve partnered with brands that trust us to design, execute, and
            scale digital systems with clarity, structure, and measurable
            outcomes.
          </p>
        </div>

        {/* Logo Rows */}
        <div className="relative mt-20 space-y-12">
          <LogoRow logos={row1} direction="left" />
          <LogoRow logos={row2} direction="right" />
          <LogoRow logos={row3} direction="left" />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------
   LOGO ROW (MARQUEE)
------------------------------------- */
function LogoRow({
  logos,
  direction,
}: {
  logos: string[];
  direction: "left" | "right";
}) {
  return (
    <div className="relative overflow-hidden">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

      <motion.div
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-[200%] gap-32"
      >
        {[...logos, ...logos].map((logo, i) => (
          <Logo key={`${logo}-${i}`} src={logo} />
        ))}
      </motion.div>
    </div>
  );
}

/* -------------------------------------
   LOGO (BIG, BLACK, VISIBLE)
------------------------------------- */
function Logo({ src }: { src: string }) {
  return (
    <div className="relative flex h-36 w-72 items-center justify-center">
      <Image
        src={src}
        alt="Client brand logo"
        fill
        className="object-contain "
      />
    </div>
  );
}

