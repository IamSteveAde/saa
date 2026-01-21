"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Search,
  Layers,
  PenTool,
  Rocket,
  BarChart3,
  Plus,
  Minus,
} from "lucide-react";

const phases = [
  {
    id: 1,
    icon: <Search />,
    title: "Discovery & Market Clarity",
    description:
      "We deep-dive into your business, audience, competitors, and market dynamics. This phase defines positioning, opportunity gaps, and the exact levers that will drive growth.",
  },
  {
    id: 2,
    icon: <Layers />,
    title: "Strategy & System Design",
    description:
      "We architect a clear growth strategy — channels, messaging, funnels, and KPIs — ensuring every action aligns with measurable business outcomes.",
  },
  {
    id: 3,
    icon: <PenTool />,
    title: "Brand, Content & Asset Development",
    description:
      "We design and build high-performing digital assets: websites, e-commerce flows, content systems, creatives, and brand touchpoints optimized for conversion.",
  },
  {
    id: 4,
    icon: <Rocket />,
    title: "Execution, Campaigns & Launch",
    description:
      "We deploy campaigns, activate channels, manage influencers, and execute with precision — continuously optimizing for performance, speed, and scale.",
  },
  {
    id: 5,
    icon: <BarChart3 />,
    title: "Optimization, Reporting & Growth",
    description:
      "We analyze performance, refine systems, improve conversion rates, and scale what works — with transparent reporting and strategic insights.",
  },
];

export default function HowWeWork() {
  const [openPhase, setOpenPhase] = useState<number | null>(1);

  return (
    <section className="relative overflow-hidden py-40" id="process">
      {/* Deep Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#461248] via-[#a93747] to-[#f2a15f]" />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 container mx-auto px-6 lg:max-w-screen-xl text-white">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.3em] text-xs text-white/70">
            How We Work
          </p>

          <h2 className="mt-6 text-4xl md:text-5xl font-light text-white leading-tight">
            A Structured Process
            <span className="block mt-2 font-normal text-[#ffd6b6]">
              Designed for Consistent Growth
            </span>
          </h2>

          <p className="mt-8 text-lg text-white/80 leading-relaxed">
            Our methodology follows a clear, phased approach — eliminating
            guesswork, reducing risk, and ensuring every action contributes to
            measurable business results.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-24 max-w-4xl">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 h-full w-px bg-white/20" />

          <div className="space-y-10">
            {phases.map((phase) => (
              <div key={phase.id} className="relative pl-20">
                {/* Icon */}
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#461248] shadow-lg">
                  {phase.icon}
                </div>

                {/* Card */}
                <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                  <button
                    onClick={() =>
                      setOpenPhase(
                        openPhase === phase.id ? null : phase.id
                      )
                    }
                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                  >
                    <h3 className="text-lg font-medium">
                      Phase {phase.id}: {phase.title}
                    </h3>
                    <span className="ml-4">
                      {openPhase === phase.id ? (
                        <Minus size={18} />
                      ) : (
                        <Plus size={18} />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {openPhase === phase.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="overflow-hidden px-6 pb-6"
                      >
                        <p className="text-sm leading-relaxed text-white/80">
                          {phase.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
