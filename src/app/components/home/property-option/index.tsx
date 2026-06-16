"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface Panel {
  id: string;
  eyebrow: string;
  headline: string;
  sub: string;
  desc: string;
  cta: string;
  href: string;
  img: string;
  notFor: string[];
  isFor: string[];
}

const panels: Panel[] = [
  {
    id: "established",
    eyebrow: "Established Businesses",
    headline: "Your reputation\nexists.",
    sub: "Your digital presence doesn't match it.",
    desc: "We work with businesses that are already operating at a high level but whose digital presence, brand, and marketing do not reflect that. We close that gap.",
    cta: "Refine My Brand",
    href: "/established",
    img: "/images/established.png",
    isFor: [
      "Already generating serious revenue",
      "Operating at a high level offline",
      "Want premium clients to match",
      "Ready to invest in the right partner",
    ],
    notFor: [
      "Early-stage exploration",
      "Quick fixes",
      "Short-term thinking",
    ],
  },
  {
    id: "emerging",
    eyebrow: "Emerging Brands",
    headline: "You only\nlaunch once.",
    sub: "Make it count from day one.",
    desc: "We work with founders and startups entering the market with serious intent. We give them the positioning, identity, and digital infrastructure to launch correctly.",
    cta: "Guide My Launch",
    href: "/emerging",
    img: "/images/emerging.png",
    isFor: [
      "Building something serious",
      "Want to enter the market correctly",
      "Think long-term about brand",
      "Quality-conscious from day one",
    ],
    notFor: [
      "Side projects",
      "Guesswork",
      "Quick wins",
    ],
  },
];

export default function Direction() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="relative w-full overflow-hidden bg-[#0A0A0A]">

      {/* ── HEADER — above the panels ── */}
      <div className="relative z-10 px-6 pb-0 pt-24 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p
              className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.32em]"
              style={{ color: "rgba(255,255,255,0.28)" }}
            >
              <span
                className="block h-px w-5 flex-shrink-0"
                style={{ background: "#F5C842" }}
              />
              Where are you right now
            </p>
            <h2
              className="text-3xl font-medium leading-[1.1] tracking-tight text-white md:text-5xl"
            >
              Choose your path.{" "}
              <span style={{ color: "#F5C842" }}>We will build it.</span>
            </h2>
          </div>

          <p
            className="max-w-xs text-sm font-light leading-relaxed self-start md:self-auto"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            We work with a select group of companies. Every engagement is
            tailored to exactly where your business is right now.
          </p>
        </motion.div>
      </div>

      {/* ── PANELS ── */}
      <div className="mt-16 flex h-[85vh] min-h-[560px] flex-col md:flex-row">
        {panels.map((panel) => {
          const isActive = hovered === panel.id;
          const isInactive = hovered !== null && hovered !== panel.id;

          return (
            <motion.div
              key={panel.id}
              onMouseEnter={() => setHovered(panel.id)}
              onMouseLeave={() => setHovered(null)}
              animate={{
                flexGrow: isActive ? 1.35 : isInactive ? 0.65 : 1,
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex-1 overflow-hidden"
            >
              {/* BACKGROUND IMAGE */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
                style={{
                  backgroundImage: `url('${panel.img}')`,
                  transform: isActive ? "scale(1.04)" : "scale(1)",
                  filter: "brightness(0.45)",
                }}
              />

              {/* COLOUR OVERLAY */}
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background:
                    panel.id === "established"
                      ? "linear-gradient(135deg, rgba(10,10,10,0.7) 0%, rgba(20,12,4,0.5) 100%)"
                      : "linear-gradient(135deg, rgba(10,10,10,0.7) 0%, rgba(4,14,24,0.5) 100%)",
                  opacity: isActive ? 0.5 : 0.75,
                }}
              />

              {/* VERTICAL DIVIDER — between panels, desktop only */}
              {panel.id === "established" && (
                <div
                  className="absolute right-0 top-0 z-20 hidden h-full w-px md:block"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                />
              )}

              {/* CONTENT */}
              <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-12">

                {/* eyebrow */}
                <p
                  className="mb-4 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.3em]"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  <span
                    className="block h-px w-4 flex-shrink-0"
                    style={{ background: "#F5C842" }}
                  />
                  {panel.eyebrow}
                </p>

                {/* headline */}
                <h3
                  className="text-[2.2rem] font-medium leading-[1.07] tracking-tight text-white md:text-[3rem]"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {panel.headline}
                </h3>

                {/* sub */}
                <p
                  className="mt-3 text-base font-light"
                  style={{ color: "#F5C842" }}
                >
                  {panel.sub}
                </p>

                {/* desc — fades in on hover */}
                <motion.p
                  animate={{
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : 8,
                    height: isActive ? "auto" : 0,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="mt-5 max-w-sm overflow-hidden text-sm font-light leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  {panel.desc}
                </motion.p>

                {/* IS FOR list — fades in on hover */}
                <motion.div
                  animate={{
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : 8,
                    height: isActive ? "auto" : 0,
                  }}
                  transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
                  className="mt-6 overflow-hidden"
                >
                  <p
                    className="mb-3 text-[10px] font-medium uppercase tracking-[0.25em]"
                    style={{ color: "rgba(255,255,255,0.28)" }}
                  >
                    This is for you if
                  </p>
                  <ul className="flex flex-col gap-2">
                    {panel.isFor.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-sm font-light"
                        style={{ color: "rgba(255,255,255,0.6)" }}
                      >
                        <span
                          className="block h-px w-3 flex-shrink-0"
                          style={{ background: "#F5C842" }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* CTA */}
                <motion.div
                  animate={{
                    opacity: isActive ? 1 : 0.55,
                    y: isActive ? 0 : 4,
                  }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="mt-8"
                >
                  <Link
                    href={panel.href}
                    className="group inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-200"
                    style={{
                      background: isActive
                        ? "#F5C842"
                        : "rgba(255,255,255,0.1)",
                      color: isActive ? "#0A0A0A" : "rgba(255,255,255,0.7)",
                      border: isActive
                        ? "1px solid #F5C842"
                        : "1px solid rgba(255,255,255,0.15)",
                    }}
                  >
                    {panel.cta}
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </motion.div>

              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ── BOTTOM NOTE ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex items-center justify-center py-8"
      >
        <p
          className="text-[11px] font-medium uppercase tracking-[0.28em]"
          style={{ color: "rgba(255,255,255,0.18)" }}
        >
          We don&apos;t take on every project. We take on the right ones.
        </p>
      </motion.div>

    </section>
  );
}