"use client";

import { motion } from "framer-motion";
import {
  Target,
  BarChart3,
  Layers,
  ShieldCheck,
} from "lucide-react";

export default function WhySpotlite() {
  return (
    <section className="relative overflow-hidden py-40" id="why">
      {/* Soft Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#ffd6b6]/40 to-white" />

      <div className="relative z-10 container mx-auto px-6 lg:max-w-screen-xl">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.3em] text-xs text-black/50">
            Why Spotlite
          </p>

          <h2 className="mt-6 text-3xl md:text-4xl font-light leading-tight text-black">
            Not Just Another Agency,
            <span className="block mt-2 font-normal text-[#461248]">
              A Strategic Growth Partner
            </span>
          </h2>

          <p className="mt-8 text-lg text-black/70 leading-relaxed">
            Most agencies focus on activity. We focus on outcomes.
            Our approach is built around structure, accountability,
            and systems that scale with your business.
          </p>
        </div>

        {/* Differentiation Cards */}
        <div className="mt-24 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <Pillar
            icon={<Target />}
            title="Strategy Before Execution"
            text="We don’t jump into tactics. Every decision is guided by a clear growth strategy aligned with business goals."
            bg="bg-[#461248]/10"
            textColor="text-[#461248]"
          />

          <Pillar
            icon={<BarChart3 />}
            title="Performance Over Vanity"
            text="We optimize for revenue, conversions, and impact, not likes, impressions, or empty engagement."
            bg="bg-[#f2a15f]/20"
            textColor="text-[#a93747]"
          />

          <Pillar
            icon={<Layers />}
            title="Systems, Not One-Off Campaigns"
            text="We build repeatable digital systems that compound results over time, not temporary spikes."
            bg="bg-[#ffd6b6]/60"
            textColor="text-black"
          />

          <Pillar
            icon={<ShieldCheck />}
            title="Clarity, Accountability & Trust"
            text="Clear processes, transparent reporting, and ownership of results, no guesswork, no excuses."
            bg="bg-[#a93747]/10"
            textColor="text-[#a93747]"
          />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------
   PILLAR CARD
------------------------------------- */
function Pillar({
  icon,
  title,
  text,
  bg,
  textColor,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  bg: string;
  textColor: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`relative rounded-3xl p-8 backdrop-blur-md border border-black/10 ${bg}`}
    >
      <div
        className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm ${textColor}`}
      >
        {icon}
      </div>

      <h3 className="text-lg font-medium text-black">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-black/65">
        {text}
      </p>
    </motion.div>
  );
}
