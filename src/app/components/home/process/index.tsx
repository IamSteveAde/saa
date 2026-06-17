"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Step {
  number: string;
  title: string;
  desc: string;
  detail: string[];
}

const steps: Step[] = [
  {
    number: "01",
    title: "Audit",
    desc: "We assess everything before we touch anything.",
    detail: [
      "Brand and visual identity review",
      "Digital presence and platform analysis",
      "Audience and market positioning",
      "Competitive landscape",
      "Gap and opportunity mapping",
    ],
  },
  {
    number: "02",
    title: "Strategy",
    desc: "Every decision is built on a clear strategic foundation.",
    detail: [
      "Positioning and messaging framework",
      "Channel and content strategy",
      "Brand voice and visual direction",
      "90-day activation plan",
      "KPIs and success metrics",
    ],
  },
  {
    number: "03",
    title: "Execution",
    desc: "We build, produce, and deploy, at global standard.",
    detail: [
      "Brand identity and design systems",
      "Website and digital platforms",
      "Social media and content production",
      "PR, SEO, and performance marketing",
      "Campaign management and reporting",
    ],
  },
  {
    number: "04",
    title: "Continuity",
    desc: "We maintain everything as your business grows.",
    detail: [
      "Monthly content and campaign management",
      "Performance reporting and optimisation",
      "Brand alignment reviews",
      "Quarterly strategic reviews",
      "Ongoing refinement and evolution",
    ],
  },
];

const fadeUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  viewport: { once: true, margin: "-60px" },
});

function StepCard({ step, index }: { step: Step; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.72,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex flex-col"
    >
      {/* top accent line, grows on hover */}
      <div
        className="mb-8 h-px w-full"
        style={{ background: "rgba(0,0,0,0.08)" }}
      >
        <div
          className="h-px transition-all duration-700 ease-out"
          style={{
            background: "#E8881A",
            width: "32px",
          }}
        />
      </div>

      {/* number */}
      <span
        className="mb-5 block text-[2.6rem] font-light leading-none tracking-tight"
        style={{ color: "rgba(0,0,0,0.1)" }}
      >
        {step.number}
      </span>

      {/* title */}
      <h3
        className="mb-3 text-xl font-medium tracking-tight"
        style={{ color: "#0A0A0A" }}
      >
        {step.title}
      </h3>

      {/* short desc */}
      <p
        className="mb-8 text-sm font-light leading-relaxed"
        style={{ color: "rgba(0,0,0,0.45)" }}
      >
        {step.desc}
      </p>

      {/* detail list */}
      <ul className="flex flex-col gap-3 mt-auto">
        {step.detail.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-3 text-sm font-light leading-snug"
            style={{ color: "rgba(0,0,0,0.5)" }}
          >
            <span
              className="mt-[6px] block h-px w-3 flex-shrink-0"
              style={{ background: "#E8881A" }}
            />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Process() {
  return (
    <section
      className="relative overflow-hidden py-32 px-6 md:px-20"
      style={{ background: "#F8F7F4" }}
    >
      {/* top rule */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: "rgba(0,0,0,0.06)" }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ── HEADER ── */}
        <motion.div
          {...fadeUp(0)}
          className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-xl">
            <p
              className="mb-6 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.32em]"
              style={{ color: "rgba(0,0,0,0.3)" }}
            >
              <span
                className="block h-px w-5 flex-shrink-0"
                style={{ background: "#E8881A" }}
              />
              How we work
            </p>

            <h2
              className="text-3xl font-medium leading-[1.1] tracking-tight md:text-5xl"
              style={{ color: "#0A0A0A" }}
            >
              A structured approach to{" "}
              <span style={{ color: "#E8881A" }}>
                every engagement.
              </span>
            </h2>
          </div>

          <p
            className="max-w-sm text-base font-light leading-relaxed self-start md:self-auto"
            style={{ color: "rgba(0,0,0,0.45)" }}
          >
            We do not start executing on day one. Every Spotlite Africa
            engagement begins with deep thinking, because strategy is what
            makes execution compound over time.
          </p>
        </motion.div>

        {/* ── STEPS GRID ── */}
        <div className="mt-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>

        {/* ── CONNECTOR LINE, desktop only ── */}
        <motion.div
          {...fadeUp(0.4)}
          className="mt-16 hidden items-center gap-0 md:flex"
        >
          {steps.map((step, i) => (
            <div key={step.number} className="flex flex-1 items-center">
              {/* dot */}
              <div
                className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-[10px] font-medium"
                style={{
                  background: "#0A0A0A",
                  color: "#F5C842",
                }}
              >
                {step.number}
              </div>
              {/* line, not after last */}
              {i < steps.length - 1 && (
                <div
                  className="h-px flex-1"
                  style={{ background: "rgba(0,0,0,0.12)" }}
                />
              )}
            </div>
          ))}
        </motion.div>

        {/* ── BOTTOM STATEMENT ── */}
        <motion.div
          {...fadeUp(0.2)}
          className="mt-20 flex flex-col gap-6 border-t pt-12 md:flex-row md:items-center md:justify-between"
          style={{ borderColor: "rgba(0,0,0,0.08)" }}
        >
          <div className="max-w-lg">
            <p
              className="text-xl font-light leading-relaxed md:text-2xl"
              style={{ color: "rgba(0,0,0,0.55)" }}
            >
              No campaign ships without a strategy.{" "}
              <span
                className="font-medium"
                style={{ color: "#0A0A0A" }}
              >
                No strategy ships without an audit.
              </span>
            </p>
          </div>

          <div
            className="flex flex-col gap-1 flex-shrink-0 self-start md:self-auto text-right"
          >
            <span
              className="text-[10px] font-medium uppercase tracking-[0.25em]"
              style={{ color: "rgba(0,0,0,0.28)" }}
            >
              Minimum engagement
            </span>
            <span
              className="text-2xl font-medium tracking-tight"
              style={{ color: "#0A0A0A" }}
            >
              3 months
            </span>
            <span
              className="text-xs font-light"
              style={{ color: "rgba(0,0,0,0.38)" }}
            >
              Strategy compounds over time
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}