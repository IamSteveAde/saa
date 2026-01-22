"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* -------------------------------------
   LOGOS
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
  "/images/logo/ehglogo.svg",
  "/images/logo/edc.svg",
];

/* -------------------------------------
   MAIN SECTION
------------------------------------- */
export default function TrustedBy() {
  return (
    <section
      className="relative overflow-hidden bg-white py-24 md:py-32"
      id="partnerships"
    >
      <div className="container mx-auto px-6 lg:max-w-screen-xl">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="uppercase tracking-[0.25em] text-xs text-black/50">
            Trusted Partnerships
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-light text-black">
            Trusted by Brands Serious About Growth
          </h2>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-black/70">
            We work with organisations that trust us to build, scale, and
            optimise digital systems with clarity and measurable outcomes.
          </p>
        </div>
      </div>

      {/* ================= MARQUEE ================= */}
      <div className="relative mt-20">
        {/* Edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent" />

        <motion.div
          className="flex w-max items-center gap-16 px-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 80,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <Logo key={`${logo}-${index}`} src={logo} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------
   LOGO (STANDARD SIZE, RESPONSIVE)
------------------------------------- */
function Logo({ src }: { src: string }) {
  return (
    <div
      className="
        relative
        flex
        items-center
        justify-center
        shrink-0
        h-16 w-[110px]
        sm:h-20 sm:w-[120px]
        md:h-24 md:w-[170px]
        lg:h-28 lg:w-[200px]
      "
    >
      <Image
        src={src}
        alt="Client brand logo"
        fill
        className="object-contain"
        sizes="
          (max-width: 40px) 140px,
          (max-width: 68px) 160px,
          (max-width: 024px) 200px,
          240px
        "
      />
    </div>
  );
}
