"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] as const },
  viewport: { once: true, margin: "-50px" },
});

interface Service {
  number: string;
  title: string;
  category: string;
  desc: string;
  detail: string;
  deliverables: string[];
  forWho: string;
}

const services: Service[] = [
  {
    number: "01",
    title: "Brand Strategy & Positioning",
    category: "Strategy",
    desc: "The foundation everything else is built on. We define who you are, who you serve, what you stand for, and how you are different — with precision.",
    detail:
      "Before a single logo is designed or a word of copy is written, we establish the strategic framework your brand will operate from. This is the work that makes everything downstream more effective. Without it, you are executing beautifully in the wrong direction.",
    deliverables: [
      "Brand audit and competitive analysis",
      "Positioning statement and brand architecture",
      "Messaging framework and tone of voice",
      "Target audience definition and persona profiles",
      "Brand strategy document",
    ],
    forWho: "Established businesses whose positioning has drifted. Emerging brands entering the market for the first time.",
  },
  {
    number: "02",
    title: "Brand Identity & Design",
    category: "Brand",
    desc: "Visual identity built to reflect your positioning — not just look good. Logo systems, colour, typography, and the full design language your brand lives in.",
    detail:
      "We design brand identities that are distinctive, intentional, and built to last. Every visual decision is rooted in the brand strategy. The result is a consistent identity system that works across every application — digital, print, environmental, and beyond.",
    deliverables: [
      "Logo system (primary, secondary, favicon)",
      "Colour palette with usage guidelines",
      "Typography system",
      "Brand guidelines document",
      "Asset library for digital and print",
    ],
    forWho: "Businesses launching for the first time or rebranding. Companies whose visual identity no longer reflects their level.",
  },
  {
    number: "03",
    title: "Website Design & Development",
    category: "Digital",
    desc: "Your website is your most important brand asset. We design and build websites that communicate your value clearly, convert visitors, and reflect the level you operate at.",
    detail:
      "We design websites that do commercial work — not just look impressive. Every page is built around a clear objective: make the visitor understand your value and take the next step. Performance, accessibility, and mobile experience are non-negotiable.",
    deliverables: [
      "UX strategy and sitemap",
      "UI design (desktop and mobile)",
      "Full development in Next.js or equivalent",
      "CMS setup and training",
      "Performance optimisation and SEO foundation",
    ],
    forWho: "Businesses whose current website does not reflect their quality. New businesses building their digital presence from scratch.",
  },
  {
    number: "04",
    title: "Social Media Management",
    category: "Content",
    desc: "End-to-end management of your social media presence — strategy, content planning, production briefing, scheduling, community management, and performance reporting.",
    detail:
      "We do not just post content. We manage your social media as a strategic function — building brand authority, engaging your audience, and driving measurable growth over time. Every platform is managed with a clear objective and a consistent voice.",
    deliverables: [
      "Monthly content calendar",
      "Content production briefing and coordination",
      "Scheduling and publishing",
      "Community management and engagement",
      "Monthly performance reporting",
    ],
    forWho: "Any business that wants a consistent, high-quality social media presence without managing it internally.",
  },
  {
    number: "05",
    title: "Content Creation & Production",
    category: "Content",
    desc: "Photography, videography, copywriting, and graphic design — everything your brand needs to communicate with impact across every channel.",
    detail:
      "Content is the execution layer of your brand strategy. We produce content that carries the quality and intentionality of the strategy behind it. Every asset — whether a social post, a campaign video, or a long-form article — is produced to global standard.",
    deliverables: [
      "Photography art direction and production",
      "Video production and editing",
      "Copywriting for all channels",
      "Graphic design and social templates",
      "Campaign asset production",
    ],
    forWho: "Any business that needs high-quality content produced consistently and professionally.",
  },
  {
    number: "06",
    title: "SEO & Digital Presence",
    category: "Digital",
    desc: "Organic search strategy that builds long-term visibility. Technical SEO, content SEO, keyword strategy, and on-page optimisation — built to compound over time.",
    detail:
      "SEO is the most underinvested channel for most Nigerian businesses. The opportunity is significant and the competition is lower than you think. We build SEO programmes that position your brand to own the search terms that matter most to your business.",
    deliverables: [
      "Full technical SEO audit",
      "Keyword research and strategy",
      "On-page optimisation",
      "Content SEO programme",
      "Monthly ranking and traffic reports",
    ],
    forWho: "Established businesses that want to be found by the right people. Any business investing in long-term organic growth.",
  },
  {
    number: "07",
    title: "PR & Communications",
    category: "PR",
    desc: "Structured PR that builds authority beyond owned channels — media relations, thought leadership placement, press strategy, and brand communications.",
    detail:
      "PR is how your brand builds credibility in rooms you are not in. We manage media relationships, craft stories that journalists actually want to tell, and position your leadership as the definitive voice in your industry.",
    deliverables: [
      "Press strategy and media relations",
      "Press release drafting and distribution",
      "Thought leadership placement",
      "Executive communications",
      "Awards strategy and submissions",
    ],
    forWho: "Established businesses ready to build industry authority beyond social media. Brands preparing for a significant launch or announcement.",
  },
  {
    number: "08",
    title: "Performance Marketing",
    category: "Digital",
    desc: "Paid media across Meta, Google, and relevant platforms — strategy, creative, execution, and optimisation. Every naira tracked, every result attributed.",
    detail:
      "We run paid campaigns that are held to the same strategic rigour as everything else we do. No vanity metrics. No wasted spend. Every campaign has a clear objective, a defined audience, and measurable outcomes we report on honestly.",
    deliverables: [
      "Paid media strategy",
      "Ad creative production",
      "Campaign setup and management",
      "A/B testing and optimisation",
      "Monthly performance reporting with attribution",
    ],
    forWho: "Businesses ready to invest in paid acquisition. Brands launching new products or services that need immediate reach.",
  },
  {
    number: "09",
    title: "Email Marketing",
    category: "Digital",
    desc: "Email programmes that build relationships and convert — newsletters, lead nurture sequences, campaign emails, and automated flows.",
    detail:
      "Email remains the highest-ROI channel in digital marketing. We build email programmes that are designed, written, and structured to perform — from the subject line to the call to action. Every email reflects your brand at its best.",
    deliverables: [
      "Email strategy and programme design",
      "Template design and development",
      "Copywriting for all email types",
      "List management and segmentation",
      "Performance reporting",
    ],
    forWho: "Any business with an audience to nurture. Brands that want to build a direct communication channel with their customers.",
  },
  {
    number: "10",
    title: "Influencer & Talent Management",
    category: "PR",
    desc: "Creator and influencer strategy — identifying, briefing, contracting, and managing talent for campaigns that reach the right audience authentically.",
    detail:
      "We manage influencer partnerships as a strategic function, not a transactional exercise. We identify creators whose audience matches yours, brief them with clarity, and manage the entire production and performance process.",
    deliverables: [
      "Influencer strategy and talent identification",
      "Creator briefing and contracting",
      "Campaign coordination and management",
      "Content review and approval",
      "Post-campaign performance reporting",
    ],
    forWho: "Brands wanting to reach new audiences through credible, culturally relevant voices. Consumer brands launching new products.",
  },
  {
    number: "11",
    title: "Community Building",
    category: "Strategy",
    desc: "Digital community strategy — building and managing the communities that turn your audience into advocates and your advocates into loyal customers.",
    detail:
      "The brands that win long-term are the ones that build communities around them. We design and manage the community programmes — LinkedIn groups, newsletters, digital events, partner ecosystems — that create belonging and compounding loyalty.",
    deliverables: [
      "Community strategy and platform selection",
      "Community infrastructure setup",
      "Content and engagement programming",
      "Member communications",
      "Quarterly community health reporting",
    ],
    forWho: "B2B brands with professional audiences. Consumer brands with passionate customers. Any brand with a partner or distributor ecosystem.",
  },
  {
    number: "12",
    title: "Full 360° Retainer",
    category: "Retainer",
    desc: "Everything, integrated. One partner managing your complete brand and marketing function — strategy, brand, digital, content, PR, and performance under a single retainer.",
    detail:
      "Our most comprehensive engagement. We manage the entire marketing function for your business — from brand strategy to daily social media, from SEO to PR, from performance campaigns to monthly reporting. One point of accountability. Everything aligned. Nothing falling through the gaps.",
    deliverables: [
      "All services across brand, digital, content, and PR",
      "Monthly content calendar across all channels",
      "Full production management",
      "Integrated monthly performance report",
      "Quarterly strategic review",
    ],
    forWho: "Established businesses that want a senior marketing partner managing everything. Scaling businesses that cannot yet justify an internal team.",
  },
];

const categories = ["All", "Strategy", "Brand", "Digital", "Content", "PR", "Retainer"];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered =
    activeCategory === "All"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <main className="bg-white">

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden px-6 pb-0 pt-36 md:px-24 md:pt-44"
        style={{ background: "#0A0A0A" }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              className="mb-6 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.32em]"
              style={{ color: "rgba(255,255,255,0.28)" }}
            >
              <span
                className="block h-px w-5 flex-shrink-0"
                style={{ background: "#F5C842" }}
              />
              What we do
            </p>

            <h1
              className="max-w-3xl text-[2.8rem] font-medium leading-[1.07] tracking-tight text-white md:text-[5rem]"
            >
              Full 360°.{" "}
              <span style={{ color: "#F5C842" }}>One partner.</span>
            </h1>

            <p
              className="mt-8 max-w-xl text-lg font-light leading-relaxed"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              We manage every aspect of your brand and marketing from a single
              point of accountability. No briefing multiple agencies. No gaps
              between strategy and execution.
            </p>
          </motion.div>

          {/* stat strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-20 grid grid-cols-2 gap-px md:grid-cols-4"
            style={{ background: "rgba(255,255,255,0.07)" }}
          >
            {[
              { value: "12", label: "Service areas" },
              { value: "360°", label: "Full capability" },
              { value: "1", label: "Point of accountability" },
              { value: "3mo", label: "Minimum engagement" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-2 px-8 py-8"
                style={{ background: "#0A0A0A" }}
              >
                <span
                  className="text-3xl font-medium tracking-tight"
                  style={{ color: "#F5C842" }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-xs font-light"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FILTER + SERVICE LIST ── */}
      <section className="relative overflow-hidden bg-white px-6 py-24 md:px-24">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            opacity: 0.45,
          }}
        />

        <div className="relative z-10 mx-auto max-w-6xl">

          {/* filter tabs */}
          <motion.div
            {...fadeUp(0)}
            className="mb-14 flex flex-wrap gap-2"
          >
            {categories.map((cat) => {
              const active = cat === activeCategory;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setExpanded(null);
                  }}
                  className="rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200"
                  style={{
                    background: active ? "#0A0A0A" : "transparent",
                    color: active ? "#FFFFFF" : "rgba(0,0,0,0.45)",
                    border: active
                      ? "1.5px solid #0A0A0A"
                      : "1.5px solid rgba(0,0,0,0.12)",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </motion.div>

          {/* service rows */}
          <div
            className="flex flex-col divide-y"
            style={{ borderColor: "rgba(0,0,0,0.07)" }}
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((service, i) => {
                const isOpen = expanded === service.number;
                return (
                  <motion.div
                    key={service.number}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* ROW HEADER */}
                    <button
                      onClick={() =>
                        setExpanded(isOpen ? null : service.number)
                      }
                      className="group w-full py-8 text-left"
                    >
                      <div className="flex items-start gap-6 md:items-center">

                        {/* number */}
                        <span
                          className="w-10 flex-shrink-0 text-[11px] font-medium pt-0.5 md:pt-0"
                          style={{ color: "rgba(0,0,0,0.22)" }}
                        >
                          {service.number}
                        </span>

                        {/* title + category */}
                        <div className="flex flex-1 flex-col gap-1 md:flex-row md:items-center md:gap-5">
                          <h3
                            className="text-lg font-medium tracking-tight transition-colors duration-200 group-hover:opacity-70 md:text-xl"
                            style={{ color: "#0A0A0A" }}
                          >
                            {service.title}
                          </h3>
                          <span
                            className="inline-flex w-fit rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em]"
                            style={{
                              background: "rgba(0,0,0,0.05)",
                              color: "rgba(0,0,0,0.38)",
                            }}
                          >
                            {service.category}
                          </span>
                        </div>

                        {/* desc — hidden on mobile when collapsed */}
                        <p
                          className="hidden flex-1 text-sm font-light leading-relaxed md:block"
                          style={{ color: "rgba(0,0,0,0.42)" }}
                        >
                          {service.desc}
                        </p>

                        {/* toggle */}
                        <div
                          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300"
                          style={{
                            background: isOpen ? "#0A0A0A" : "rgba(0,0,0,0.06)",
                            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                          }}
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                          >
                            <path
                              d="M6 2v8M2 6h8"
                              stroke={isOpen ? "#F5C842" : "rgba(0,0,0,0.5)"}
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* desc mobile */}
                      <p
                        className="mt-3 pl-16 text-sm font-light leading-relaxed md:hidden"
                        style={{ color: "rgba(0,0,0,0.42)" }}
                      >
                        {service.desc}
                      </p>
                    </button>

                    {/* EXPANDED CONTENT */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pb-10 pl-16">
                            <div className="grid gap-10 md:grid-cols-3">

                              {/* detail */}
                              <div className="md:col-span-1">
                                <p
                                  className="mb-3 text-[10px] font-medium uppercase tracking-[0.25em]"
                                  style={{ color: "rgba(0,0,0,0.3)" }}
                                >
                                  What this involves
                                </p>
                                <p
                                  className="text-sm font-light leading-relaxed"
                                  style={{ color: "rgba(0,0,0,0.55)" }}
                                >
                                  {service.detail}
                                </p>
                              </div>

                              {/* deliverables */}
                              <div className="md:col-span-1">
                                <p
                                  className="mb-4 text-[10px] font-medium uppercase tracking-[0.25em]"
                                  style={{ color: "rgba(0,0,0,0.3)" }}
                                >
                                  Deliverables
                                </p>
                                <ul className="flex flex-col gap-3">
                                  {service.deliverables.map((d) => (
                                    <li
                                      key={d}
                                      className="flex items-start gap-3 text-sm font-light"
                                      style={{ color: "rgba(0,0,0,0.55)" }}
                                    >
                                      <span
                                        className="mt-[7px] block h-px w-3 flex-shrink-0"
                                        style={{ background: "#E8881A" }}
                                      />
                                      {d}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* for who + cta */}
                              <div className="md:col-span-1">
                                <p
                                  className="mb-3 text-[10px] font-medium uppercase tracking-[0.25em]"
                                  style={{ color: "rgba(0,0,0,0.3)" }}
                                >
                                  Best for
                                </p>
                                <p
                                  className="mb-8 text-sm font-light leading-relaxed"
                                  style={{ color: "rgba(0,0,0,0.55)" }}
                                >
                                  {service.forWho}
                                </p>

                                <Link
                                  href="/contact"
                                  className="group inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-200 hover:opacity-80"
                                  style={{ background: "#0A0A0A", color: "#FFFFFF" }}
                                >
                                  Enquire about this
                                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                                    →
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── HOW WE PRICE ── */}
      <section
        className="relative overflow-hidden py-28 px-6 md:px-24"
        style={{ background: "#0A0A0A" }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-6xl">
          <motion.div
            {...fadeUp(0)}
            className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          >
            <div className="max-w-xl">
              <p
                className="mb-6 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.32em]"
                style={{ color: "rgba(255,255,255,0.28)" }}
              >
                <span
                  className="block h-px w-5 flex-shrink-0"
                  style={{ background: "#F5C842" }}
                />
                How we charge
              </p>
              <h2
                className="text-3xl font-medium leading-[1.1] tracking-tight text-white md:text-4xl"
              >
                Transparent structure.{" "}
                <span style={{ color: "#F5C842" }}>No surprises.</span>
              </h2>
            </div>
            <p
              className="max-w-xs text-sm font-light leading-relaxed self-start md:self-auto"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              All engagements are monthly retainers with a 3-month
              minimum. Production work is billed separately at a 15%
              management fee.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* retainer card */}
            <motion.div
              {...fadeUp(0.05)}
              className="flex flex-col gap-6 rounded-2xl p-8"
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <div>
                <div className="mb-4 h-px w-8" style={{ background: "#F5C842" }} />
                <h3 className="text-lg font-medium text-white">
                  Monthly retainer
                </h3>
                <p
                  className="mt-2 text-sm font-light leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  A fixed monthly fee covering all agreed services. Strategy,
                  execution, and reporting — all included. No per-deliverable
                  billing, no hidden costs.
                </p>
              </div>
              <div
                className="h-px w-full"
                style={{ background: "rgba(255,255,255,0.07)" }}
              />
              <div className="flex flex-col gap-3">
                {[
                  "3-month minimum engagement",
                  "Monthly invoicing — 50% upfront, 50% end of month",
                  "All agreed services included",
                  "Monthly performance report",
                  "Quarterly strategic review",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-sm font-light"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    <span
                      className="mt-[7px] block h-px w-3 flex-shrink-0"
                      style={{ background: "#F5C842" }}
                    />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* production card */}
            <motion.div
              {...fadeUp(0.1)}
              className="flex flex-col gap-6 rounded-2xl p-8"
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <div>
                <div className="mb-4 h-px w-8" style={{ background: "#E8881A" }} />
                <h3 className="text-lg font-medium text-white">
                  Production management
                </h3>
                <p
                  className="mt-2 text-sm font-light leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  Any work requiring an external production budget — video
                  shoots, photography crews, event production, influencer
                  campaigns — is managed under a 15% production management fee.
                </p>
              </div>
              <div
                className="h-px w-full"
                style={{ background: "rgba(255,255,255,0.07)" }}
              />
              <div className="flex flex-col gap-3">
                {[
                  "15% of total approved production budget",
                  "Budget approved by client before any spend",
                  "Full vendor and crew management included",
                  "All assets delivered to client on completion",
                  "Production fee invoiced separately from retainer",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-sm font-light"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    <span
                      className="mt-[7px] block h-px w-3 flex-shrink-0"
                      style={{ background: "#E8881A" }}
                    />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-white py-28 px-6 md:px-24">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div {...fadeUp(0)} className="flex flex-col items-center gap-8">
            <p
              className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.32em]"
              style={{ color: "rgba(0,0,0,0.3)" }}
            >
              <span className="block h-px w-5 flex-shrink-0" style={{ background: "#E8881A" }} />
              Ready to begin
              <span className="block h-px w-5 flex-shrink-0" style={{ background: "#E8881A" }} />
            </p>

            <h2
              className="text-3xl font-medium leading-[1.1] tracking-tight md:text-5xl"
              style={{ color: "#0A0A0A" }}
            >
              Not sure which services{" "}
              <span style={{ color: "#E8881A" }}>you need?</span>
            </h2>

            <p
              className="max-w-lg text-base font-light leading-relaxed"
              style={{ color: "rgba(0,0,0,0.45)" }}
            >
              Start with a consultation. We will audit your current position,
              identify what you actually need, and propose a scope that makes
              strategic sense — not just a full list of everything we offer.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-medium tracking-wide transition-opacity duration-200 hover:opacity-80"
                style={{ background: "#0A0A0A", color: "#FFFFFF" }}
              >
                Request a consultation
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/work"
                className="group inline-flex items-center gap-3 rounded-full border px-8 py-4 text-sm font-medium tracking-wide transition-all duration-200 hover:opacity-60"
                style={{ borderColor: "rgba(0,0,0,0.15)", color: "#0A0A0A" }}
              >
                See our work
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </div>

            <p
              className="text-[10px] font-medium uppercase tracking-[0.28em]"
              style={{ color: "rgba(0,0,0,0.2)" }}
            >
              We don&apos;t take on every project. We take on the right ones.
            </p>
          </motion.div>
        </div>
      </section>

    </main>
  );
}