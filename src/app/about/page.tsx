"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] as const },
  viewport: { once: true, margin: "-50px" },
});

const values = [
  {
    number: "01",
    title: "Ownership",
    desc: "We treat every client's brand as if it were our own. Their growth is our reputation. We do not deliver and disappear, we stay accountable to outcomes.",
  },
  {
    number: "02",
    title: "Global Standard",
    desc: "Every deliverable we produce is benchmarked against the best work in the world. Not the best in Lagos. The world. African brands deserve nothing less.",
  },
  {
    number: "03",
    title: "Strategy First",
    desc: "Nothing ships without a strategic foundation. No campaign. No content. No design. Every execution decision is rooted in thinking that came before it.",
  },
  {
    number: "04",
    title: "Honesty",
    desc: "We tell clients what they need to hear, not what they want to hear. The best agency relationships are built on trust, and trust requires honesty.",
  },
  {
    number: "05",
    title: "Selectivity",
    desc: "We choose our clients as carefully as they choose us. This is not arrogance, it is the only way to give every engagement the focus it deserves.",
  },
  {
    number: "06",
    title: "African Excellence",
    desc: "We are proudly African. Our roots are not a limitation, they are our sharpest competitive advantage. We understand this market at a depth no outsider can replicate.",
  },
];

const stats = [
  { value: "20+", label: "Brands worked with" },
  { value: "5+", label: "Industries served" },
  { value: "360°", label: "Full-service capability" },
  { value: "3mo", label: "Minimum engagement" },
];

const services = [
  "Brand Strategy & Positioning",
  "Brand Identity & Design",
  "Social Media Management",
  "Content Creation & Production",
  "Video Production",
  "SEO & Digital Marketing",
  "PR & Communications",
  "Performance Marketing",
  "Website Design & Development",
  "Email Marketing",
  "Influencer & Talent Management",
  "Community Building",
];

const team = [
  {
    name: "Stephen Adediran",
    title: "Founder & Creative Director",
    role: "Vision · Strategy · Creative",
    bio: "Stephen founded Spotlite Africa with one conviction, that African businesses deserve world-class brand and marketing, built by people who understand the continent. He leads strategy, creative direction, and client relationships across every engagement, setting the standard the agency holds itself to.",
    image: "/images/hero/steve.png",
  },
   {
    name: "Tijesu Tolulope",
    title: "Head of Social & Content",
    role: "Social · Content · Community",
    bio: "Tijesu leads social media and content across all client accounts, building brand presence and community that converts. She manages content strategy, production coordination, and platform performance with an eye for what resonates.",
    image: "/images/hero/tolu2.png",
  },
  {
    name: "Iyanu Odebode",
    title: "Digital Growth Strategist",
    role: "Performance · SEO · Analytics",
    bio: "Iyanu owns Spotlite Africa's digital growth function, from search strategy and performance marketing to analytics and campaign optimisation. He translates data into direction, ensuring every digital move compounds over time.",
    image: "/images/hero/iyanu.png",
  },
 
];

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <main className="bg-white">

      {/* ════════════════════════════════════════
          HERO, full bleed, parallax
      ════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative h-screen w-full overflow-hidden"
        style={{ background: "#0A0A0A" }}
      >
        {/* parallax bg layer */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0"
        >
          {/* placeholder gradient, swap with a real brand photo */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #0A0A0A 0%, #1a0f00 50%, #0A0A0A 100%)",
            }}
          />
          {/* grid overlay */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </motion.div>

        {/* dark vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />

        {/* content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 flex h-full flex-col justify-end px-6 pb-20 md:px-24 md:pb-28"
        >
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              className="mb-6 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.32em]"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              <span
                className="block h-px w-5 flex-shrink-0"
                style={{ background: "#F5C842" }}
              />
              About Spotlite Africa
            </p>

            <h1
              className="max-w-3xl text-[2.8rem] font-medium leading-[1.07] tracking-tight text-white md:text-[5rem]"
            >
              Built for Africa.
              <br />
              <span style={{ color: "#F5C842" }}>Built for the world.</span>
            </h1>

            <p
              className="mt-8 max-w-xl text-lg font-light leading-relaxed"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              We are the agency that takes African brands from where they are —
              to where they deserve to be.
            </p>
          </motion.div>

          {/* scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-10 right-10 hidden md:flex flex-col items-center gap-3"
          >
            <div
              className="h-12 w-px"
              style={{ background: "rgba(255,255,255,0.15)" }}
            >
              <motion.div
                className="h-4 w-px"
                style={{ background: "#F5C842" }}
                animate={{ y: [0, 32, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <span
              className="text-[9px] font-medium uppercase tracking-[0.3em]"
              style={{ color: "rgba(255,255,255,0.2)", writingMode: "vertical-rl" }}
            >
              Scroll
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════
          MISSION STATEMENT
      ════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-28 px-6 md:px-24" style={{ background: "#F8F7F4" }}>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            opacity: 0.5,
          }}
        />
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">

            {/* left */}
            <motion.div {...fadeUp(0)}>
              <p
                className="mb-6 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.32em]"
                style={{ color: "rgba(0,0,0,0.3)" }}
              >
                <span className="block h-px w-5 flex-shrink-0" style={{ background: "#E8881A" }} />
                Our mission
              </p>
              <h2
                className="text-3xl font-medium leading-[1.1] tracking-tight md:text-4xl"
                style={{ color: "#0A0A0A" }}
              >
                We take African brands to{" "}
                <span style={{ color: "#E8881A" }}>global standard.</span>
              </h2>
              <div className="mt-8 flex flex-col gap-5">
                {[
                  "Most African businesses are underleveraged. Not because they lack quality, but because they lack positioning, brand infrastructure, and digital presence that matches the level they actually operate at.",
                  "Spotlite Africa exists to close that gap. We bring strategy, craft, and execution to businesses that deserve better than what the average Lagos agency offers.",
                  "We are not a marketing agency in the conventional sense. We are a brand and marketing infrastructure partner, one that builds systems that compound over time, not campaigns that spike and disappear.",
                ].map((text, i) => (
                  <p
                    key={i}
                    className="text-base font-light leading-relaxed"
                    style={{ color: "rgba(0,0,0,0.55)" }}
                  >
                    {text}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* right, stats */}
            <motion.div {...fadeUp(0.1)} className="flex flex-col justify-center gap-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    {...fadeUp(0.1 + i * 0.07)}
                    className="flex flex-col gap-2 rounded-2xl p-6"
                    style={{
                      border: "1.5px solid rgba(0,0,0,0.08)",
                      background: "#FFFFFF",
                    }}
                  >
                    <span
                      className="text-4xl font-medium tracking-tight"
                      style={{ color: "#0A0A0A" }}
                    >
                      {stat.value}
                    </span>
                    <span
                      className="text-xs font-light leading-snug"
                      style={{ color: "rgba(0,0,0,0.4)" }}
                    >
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* vision */}
              <div
                className="rounded-2xl p-6"
                style={{ background: "#0A0A0A" }}
              >
                <p
                  className="mb-3 text-[10px] font-medium uppercase tracking-[0.25em]"
                  style={{ color: "rgba(255,255,255,0.28)" }}
                >
                  Our vision
                </p>
                <p
                  className="text-base font-medium leading-snug text-white"
                >
                  To become Africa&apos;s most respected brand and marketing agency.
                </p>
                <div className="mt-4 h-px w-full" style={{ background: "rgba(255,255,255,0.07)" }} />
                <p
                  className="mt-4 text-[10px] font-medium uppercase tracking-[0.25em]"
                  style={{ color: "rgba(255,255,255,0.28)" }}
                >
                  Our tagline
                </p>
                <p style={{ color: "#F5C842" }} className="mt-1 text-sm font-medium tracking-wide">
                  Strategy-first. Execution-obsessed.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          THE STORY
      ════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-white py-28 px-6 md:px-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            {...fadeUp(0)}
            className="mb-16 flex items-center gap-4"
          >
            <span className="block h-px w-5 flex-shrink-0" style={{ background: "#E8881A" }} />
            <p
              className="text-[10px] font-medium uppercase tracking-[0.32em]"
              style={{ color: "rgba(0,0,0,0.3)" }}
            >
              Our story
            </p>
          </motion.div>

          <div className="grid gap-16 md:grid-cols-12">
            {/* big pull quote */}
            <motion.div {...fadeUp(0)} className="md:col-span-7">
              <blockquote
                className="text-2xl font-medium leading-[1.3] tracking-tight md:text-3xl"
                style={{ color: "#0A0A0A" }}
              >
                &ldquo;African businesses are not behind. They are underleveraged.
                The gap is not quality, it is presentation, positioning,
                and digital presence. We fix that.&rdquo;
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <div
                  className="relative h-12 w-12 overflow-hidden rounded-full flex-shrink-0"
                  style={{ background: "#1a1a1a" }}
                >
                  <Image
                    src="/images/hero/steve.png"
                    alt="Stephen Adediran"
                    fill
                    className="object-cover object-top"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-light" style={{ color: "rgba(255,255,255,0.3)" }}>SA</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: "#0A0A0A" }}>
                    Stephen Adediran
                  </p>
                  <p className="text-xs font-light" style={{ color: "rgba(0,0,0,0.4)" }}>
                    Founder & Creative Director, Spotlite Africa
                  </p>
                </div>
              </div>
            </motion.div>

            {/* story text */}
            <motion.div
              {...fadeUp(0.1)}
              className="flex flex-col gap-5 md:col-span-5"
            >
              {[
                "Spotlite Africa was founded with a simple but powerful belief: African businesses deserve world-class marketing. Not second-tier service adapted from a Western template. Real strategy, real craft, real results.",
                "We started by working with businesses across Lagos, energy companies, financial institutions, technology startups, premium consumer brands, and in every engagement we saw the same pattern: the business was excellent, but the brand did not show it.",
                "From that insight, we built Spotlite Africa into a full-service 360° agency. One that begins every engagement with strategy, executes with the precision of the world's best agencies, and stays in the relationship long enough to see the results compound.",
              ].map((text, i) => (
                <p
                  key={i}
                  className="text-sm font-light leading-relaxed"
                  style={{ color: "rgba(0,0,0,0.55)" }}
                >
                  {text}
                </p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          VALUES
      ════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden py-28 px-6 md:px-24"
        style={{ background: "#0A0A0A" }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            opacity: 0.025,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
            backgroundSize: "200px 200px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-6xl">
          <motion.div {...fadeUp(0)} className="mb-16 max-w-xl">
            <p
              className="mb-6 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.32em]"
              style={{ color: "rgba(255,255,255,0.28)" }}
            >
              <span className="block h-px w-5 flex-shrink-0" style={{ background: "#F5C842" }} />
              What we stand for
            </p>
            <h2
              className="text-3xl font-medium leading-[1.1] tracking-tight text-white md:text-4xl"
            >
              The principles that govern{" "}
              <span style={{ color: "#F5C842" }}>every engagement.</span>
            </h2>
          </motion.div>

          <div className="grid gap-px md:grid-cols-2 lg:grid-cols-3"
            style={{ background: "rgba(255,255,255,0.07)" }}
          >
            {values.map((value, i) => (
              <motion.div
                key={value.number}
                {...fadeUp(i * 0.07)}
                className="group flex flex-col gap-5 p-8 transition-colors duration-300"
                style={{ background: "#0A0A0A" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "#111111";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "#0A0A0A";
                }}
              >
                <div className="flex items-start justify-between">
                  <span
                    className="text-[11px] font-medium"
                    style={{ color: "rgba(255,255,255,0.2)" }}
                  >
                    {value.number}
                  </span>
                  <span
                    className="block h-px w-6 transition-all duration-500 group-hover:w-12 mt-2"
                    style={{ background: "#F5C842" }}
                  />
                </div>
                <h3
                  className="text-lg font-medium text-white"
                >
                  {value.title}
                </h3>
                <p
                  className="text-sm font-light leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SERVICES, full list
      ════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-white py-28 px-6 md:px-24">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            opacity: 0.45,
          }}
        />
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid gap-16 md:grid-cols-2">

            {/* left */}
            <motion.div {...fadeUp(0)}>
              <p
                className="mb-6 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.32em]"
                style={{ color: "rgba(0,0,0,0.3)" }}
              >
                <span className="block h-px w-5 flex-shrink-0" style={{ background: "#E8881A" }} />
                What we do
              </p>
              <h2
                className="text-3xl font-medium leading-[1.1] tracking-tight md:text-4xl"
                style={{ color: "#0A0A0A" }}
              >
                Full 360° capability.{" "}
                <span style={{ color: "#E8881A" }}>One partner.</span>
              </h2>
              <p
                className="mt-6 text-base font-light leading-relaxed"
                style={{ color: "rgba(0,0,0,0.5)" }}
              >
                We manage every aspect of your brand and marketing from a
                single point of accountability. No briefing multiple agencies.
                No gaps between strategy and execution. Everything under one
                roof, led by one senior team.
              </p>

              <div className="mt-10">
                <Link
                  href="/established"
                  className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide transition-opacity duration-200 hover:opacity-60"
                  style={{ color: "#0A0A0A" }}
                >
                  Start an engagement
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </motion.div>

            {/* right, service list */}
            <motion.div {...fadeUp(0.1)}>
              <div className="flex flex-col divide-y" style={{ borderColor: "rgba(0,0,0,0.07)" }}>
                {services.map((service, i) => (
                  <div
                    key={service}
                    className="flex items-center justify-between py-4 group"
                  >
                    <span
                      className="text-sm font-light"
                      style={{ color: "rgba(0,0,0,0.65)" }}
                    >
                      {service}
                    </span>
                    <span
                      className="text-[10px] font-medium"
                      style={{ color: "rgba(0,0,0,0.2)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          TEAM
      ════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden py-28 px-6 md:px-24"
        style={{ background: "#F8F7F4" }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            opacity: 0.5,
          }}
        />
        <div className="relative z-10 mx-auto max-w-6xl">
          <motion.div {...fadeUp(0)} className="mb-16">
            <p
              className="mb-6 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.32em]"
              style={{ color: "rgba(0,0,0,0.3)" }}
            >
              <span className="block h-px w-5 flex-shrink-0" style={{ background: "#E8881A" }} />
              The team
            </p>
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <h2
                className="text-3xl font-medium leading-[1.1] tracking-tight md:text-4xl max-w-xl"
                style={{ color: "#0A0A0A" }}
              >
                The people behind{" "}
                <span style={{ color: "#E8881A" }}>the standard.</span>
              </h2>
              <p
                className="max-w-xs text-sm font-light leading-relaxed self-start md:self-auto"
                style={{ color: "rgba(0,0,0,0.4)" }}
              >
                A lean, senior team involved in every engagement.
                Our clients never deal with juniors.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                {...fadeUp(i * 0.1)}
                className="group overflow-hidden rounded-2xl bg-white"
                style={{ border: "1.5px solid rgba(0,0,0,0.08)" }}
              >
                {/* image */}
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: "4/5" }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        i === 0
                          ? "linear-gradient(135deg, #1a1a1a 0%, #2a2008 100%)"
                          : i === 1
                          ? "linear-gradient(135deg, #1a1a1a 0%, #0a1020 100%)"
                          : "linear-gradient(135deg, #1a1a1a 0%, #1a0a10 100%)",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="text-5xl font-light tracking-tight"
                      style={{ color: "rgba(255,255,255,0.07)" }}
                    >
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    style={{ opacity: 0 }}
                    onLoad={(e) => {
                      (e.currentTarget as HTMLImageElement).style.opacity = "1";
                    }}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <div
                    className="absolute bottom-0 left-0 w-full h-24 pointer-events-none"
                    style={{
                      background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                    }}
                  />
                  <div className="absolute bottom-4 left-5">
                    <span
                      className="inline-block rounded-full px-3 py-1 text-[10px] font-medium tracking-wide"
                      style={{
                        background: "rgba(0,0,0,0.45)",
                        color: "rgba(255,255,255,0.5)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        backdropFilter: "blur(6px)",
                      }}
                    >
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* content */}
                <div className="flex flex-col gap-3 p-6">
                  <div>
                    <p className="text-base font-medium" style={{ color: "#0A0A0A" }}>
                      {member.name}
                    </p>
                    <p
                      className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em]"
                      style={{ color: "#E8881A" }}
                    >
                      {member.title}
                    </p>
                  </div>
                  <div className="h-px w-full" style={{ background: "rgba(0,0,0,0.07)" }} />
                  <p className="text-sm font-light leading-relaxed" style={{ color: "rgba(0,0,0,0.5)" }}>
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          WHY SPOTLITE AFRICA
      ════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden py-28 px-6 md:px-24"
        style={{ background: "#0A0A0A" }}
      >
        <div className="relative z-10 mx-auto max-w-6xl">
          <motion.div {...fadeUp(0)} className="mb-16 max-w-xl">
            <p
              className="mb-6 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.32em]"
              style={{ color: "rgba(255,255,255,0.28)" }}
            >
              <span className="block h-px w-5 flex-shrink-0" style={{ background: "#F5C842" }} />
              Why Spotlite Africa
            </p>
            <h2
              className="text-3xl font-medium leading-[1.1] tracking-tight text-white md:text-4xl"
            >
              What makes us{" "}
              <span style={{ color: "#F5C842" }}>different.</span>
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "We start with strategy",
                desc: "Most agencies start with execution. We start with an audit and a strategic framework. The difference is compounding, every decision we make builds on the one before it.",
              },
              {
                title: "We know Africa",
                desc: "We understand this market at a depth that no international agency can replicate. Cultural fluency is not something you can learn from a brief. We have it natively.",
              },
              {
                title: "Senior team, every engagement",
                desc: "You are never handed to juniors after the pitch. The senior team that presents the strategy is the same team that executes it, reviews it, and reports on it.",
              },
              {
                title: "We are accountable to outcomes",
                desc: "We measure everything. Every engagement has clear KPIs. We report honestly, including when something is not working. We come with solutions, not excuses.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp(i * 0.08)}
                className="rounded-2xl p-8"
                style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}
              >
                <div
                  className="mb-5 h-px w-8"
                  style={{ background: "#F5C842" }}
                />
                <h3 className="mb-3 text-base font-medium text-white">
                  {item.title}
                </h3>
                <p
                  className="text-sm font-light leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.42)" }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CLOSING CTA
      ════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-white py-28 px-6 md:px-24">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div {...fadeUp(0)} className="flex flex-col items-center gap-8">
            <p
              className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.32em]"
              style={{ color: "rgba(0,0,0,0.3)" }}
            >
              <span className="block h-px w-5 flex-shrink-0" style={{ background: "#E8881A" }} />
              Start the conversation
              <span className="block h-px w-5 flex-shrink-0" style={{ background: "#E8881A" }} />
            </p>

            <h2
              className="text-3xl font-medium leading-[1.1] tracking-tight md:text-5xl"
              style={{ color: "#0A0A0A" }}
            >
              If this is the agency you have{" "}
              <span style={{ color: "#E8881A" }}>been looking for</span>
              {" "}— let&apos;s talk.
            </h2>

            <p
              className="max-w-lg text-base font-light leading-relaxed"
              style={{ color: "rgba(0,0,0,0.45)" }}
            >
              We review every enquiry personally. If there is a fit, we will
              reach out within 24 hours to schedule a private consultation.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <Link
                href="/#contact"
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