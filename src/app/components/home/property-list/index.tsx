"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const cases = [
  {
    name: "Soundhous",
    logo: "/images/logo/soundhous.svg",
    link: "https://soundhous.com",
    challenge:
      "A premium AV retail brand with strong physical presence, but a digital experience that lacked structure and clarity.",
    resolution:
      "We restructured the entire digital layer, refining presentation, simplifying ecommerce flow, and aligning it with the brand’s level.",
  },
  {
    name: "CED Africa",
    logo: "/images/logo/CED.png",
    link: "https://ced.africa",
    challenge:
      "An AV consulting firm operating at a high level, yet without a digital presence that communicated its authority.",
    resolution:
      "We introduced a minimal, structured digital system, positioning the firm as a premium advisory brand.",
  },
  {
    name: "Platform Capital",
    logo: "/images/logo/plat.svg",
    link: "https://theplatformcapital.com",
    challenge:
      "A glo-cal investment advisory firm required a complete reset across brand, structure, and multiple business arms.",
    resolution:
      "We executed a full 360° development, brand system, company profile, and digital platforms aligned with its global positioning.",
  },
  {
    name: "Digital Inclusion Initiative",
    logo: "/images/logo/dii.svg",
    link: "https://digitalinclusioninitiative.org",
    challenge:
      "A mission-driven organisation working to bridge the digital divide needed clarity and structured communication.",
    resolution:
      "We refined its digital presence, simplifying how its work is communicated across access, skills, and inclusion initiatives.",
  },
  {
    name: "Spectra AVL",
    logo: "/images/logo/savl.png",
    link: "https://savl.pro",
    challenge:
      "A fast-moving AV solutions company required immediate execution without compromising quality.",
    resolution:
      "Within a week, we delivered a complete brand and digital system, ensuring speed with structure and clarity.",
  },
  {
    name: "Rensource Energy",
    logo: "/images/logo/rensource.svg",
    link: "https://rensource.africa",
    challenge:
      "Following acquisition, the company needed a digital presence that reflected its new scale and credibility.",
    resolution:
      "We developed a refined, structured website aligned with global standards and brand positioning.",
  },
  {
    name: "Sir Olu Okeowo",
    logo: "/images/logo/okeowo.svg",
    link: "#",
    challenge:
      "A high-level New Year thanksgiving required a controlled digital approach aligned with the stature of its host.",
    resolution:
      "We created the full digital plan, premium invitations, and a refined personal profile, ensuring precision across all touchpoints.",
  },
];

export default function CaseStudies() {
  const [active, setActive] = useState<any>(null);

  return (
    <section className="relative bg-[#0a0a0a] text-white py-32 px-6 md:px-20 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[#c2410c]/10 blur-[200px]" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="max-w-xl">
          <p className="text-[11px] tracking-[0.35em] uppercase text-white/40 mb-6 flex items-center gap-3">
            <span className="w-6 h-[1px] bg-[#c2410c]" />
            Selected Work
          </p>

          <h2 className="text-3xl md:text-5xl font-medium bg-gradient-to-r from-[#e5e5e5] to-[#c2410c] bg-clip-text text-transparent">
            A selection of how we refine presence.
          </h2>
        </div>

        {/* GRID */}
        <div className="mt-20 grid md:grid-cols-2 gap-12">

          {cases.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="group cursor-pointer"
              onClick={() => setActive(item)}
            >
              <div className="relative border-b border-white/10 pb-6 flex items-center gap-4">

                {/* LOGO */}
                <div className="w-10 h-10 flex items-center justify-center">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="object-contain opacity-60 group-hover:opacity-100 transition grayscale brightness-0 invert"
                  />
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="text-lg tracking-wide">{item.name}</h3>
                  <p className="text-sm text-white/40">View details →</p>
                </div>

                {/* UNDERLINE */}
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-gradient-to-r from-[#c2410c] to-white group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 bg-black/85 backdrop-blur-xl z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="bg-[#111] max-w-2xl w-full p-10 border border-white/10"
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.96 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* LOGO */}
              <div className="mb-6">
                <Image
                  src={active.logo}
                  alt={active.name}
                  width={80}
                  height={40}
                  className="object-contain grayscale brightness-0 invert opacity-80"
                />
              </div>

              <h3 className="text-2xl mb-8">{active.name}</h3>

              <div className="space-y-8 text-white/70 leading-relaxed">

                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-3">
                    Challenge
                  </p>
                  <p>{active.challenge}</p>
                </div>

                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-3">
                    Resolution
                  </p>
                  <p>{active.resolution}</p>
                </div>

                {active.link !== "#" && (
                  <a
                    href={active.link}
                    target="_blank"
                    className="inline-block text-sm border-b border-white/30 hover:border-[#c2410c] transition"
                  >
                    Visit Website →
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}