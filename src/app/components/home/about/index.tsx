"use client";

import { motion } from "framer-motion";

interface Pillar {
  number: string;
  title: string;
  desc: string;
}

const pillars: Pillar[] = [
  {
    number: "01",
    title: "Brand Strategy & Identity",
    desc: "We define where your brand sits in the market, how it speaks, and how it is instantly recognised, before a single asset is designed. Strategy first. Always.",
  },
  {
    number: "02",
    title: "Digital Presence & Web",
    desc: "We build websites and digital platforms engineered to convert, communicating your value clearly to the clients and investors you are actually going after.",
  },
  {
    number: "03",
    title: "Growth & Marketing Execution",
    desc: "Social media, content, SEO, PR, campaigns, and performance marketing, all connected to the strategy, all tracked against measurable business outcomes.",
  },
  {
    number: "04",
    title: "Brand Infrastructure & Continuity",
    desc: "We build systems that compound. As your business scales, your brand and marketing infrastructure scales with it, stronger every quarter.",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 0.72,
    delay,
    ease: [0.22, 1, 0.36, 1] as const,
  },
  viewport: { once: true, margin: "-60px" },
});

export default function WhatWeDo() {
  return (
    <section className="relative overflow-hidden bg-white py-32 px-6 md:px-20">

      {/* subtle top rule */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: "rgba(0,0,0,0.06)" }}
      />

      {/* very faint dot grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.055) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.6,
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ── HEADER ── */}
        <motion.div {...fadeUp(0)} className="max-w-2xl">

          <p
            className="mb-6 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.32em]"
            style={{ color: "rgba(0,0,0,0.32)" }}
          >
            <span
              className="block h-px w-5 flex-shrink-0"
              style={{ background: "#E8881A" }}
            />
            What we handle
          </p>

          <h2
            className="text-3xl font-medium leading-[1.1] tracking-tight md:text-5xl"
            style={{ color: "#0A0A0A" }}
          >
            We build the infrastructure{" "}
            <span style={{ color: "#E8881A" }}>your brand grows on.</span>
          </h2>

          <p
            className="mt-6 max-w-xl text-lg font-light leading-relaxed"
            style={{ color: "rgba(0,0,0,0.48)" }}
          >
            Most agencies execute. We start earlier, with a deep audit, a
            rigorous strategy, and a plan tied to real business outcomes. Then
            we execute. And we measure everything.
          </p>
        </motion.div>

        {/* ── DIVIDER ── */}
        <div
          className="mt-16 h-px w-full"
          style={{ background: "rgba(0,0,0,0.07)" }}
        />

        {/* ── PILLARS ── */}
        <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              {...fadeUp(i * 0.1)}
              className="group relative flex flex-col"
            >
              {/* number */}
              <span
                className="mb-6 block text-[2.8rem] font-light leading-none tracking-tight"
                style={{ color: "rgba(0,0,0,0.1)" }}
              >
                {pillar.number}
              </span>

              {/* accent line */}
              <span
                className="mb-5 block h-px w-8 transition-all duration-500 group-hover:w-14"
                style={{ background: "#E8881A" }}
              />

              {/* title */}
              <h3
                className="text-[1.05rem] font-medium leading-snug tracking-tight"
                style={{ color: "#0A0A0A" }}
              >
                {pillar.title}
              </h3>

              {/* desc */}
              <p
                className="mt-3 text-sm font-light leading-relaxed"
                style={{ color: "rgba(0,0,0,0.5)" }}
              >
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── BOTTOM STATEMENT ── */}
        <motion.div
          {...fadeUp(0.2)}
          className="mt-24 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <p
            className="max-w-lg text-xl font-light leading-relaxed md:text-2xl"
            style={{ color: "rgba(0,0,0,0.55)" }}
          >
            Every engagement begins with a deep audit.{" "}
            <em
              className="not-italic font-medium"
              style={{ color: "#0A0A0A" }}
            >
              Nothing ships without a strategic reason behind it.
            </em>
          </p>

          <a
            href="/services"
            className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide transition-opacity duration-200 hover:opacity-60 flex-shrink-0"
            style={{ color: "#0A0A0A" }}
          >
            See how we work
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}