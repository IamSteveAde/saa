"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  viewport: { once: true, margin: "-40px" },
});

interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  website: string;
  tagline: string;
  overview: string;
  services: string[];
  images: string[];
  result: string;
  featured?: boolean;
}

const cases: CaseStudy[] = [
  {
    slug: "soundhous",
    client: "Soundhous",
    industry: "Premium Audio Retail",
    website: "soundhous.com",
    tagline: "Nigeria's official Sonos retailer — taken to global standard.",
    overview:
      "Soundhous is Nigeria's authorised retailer of Sonos, Focal, and Naim — the world's most respected premium audio brands. We partnered with them to build their e-commerce platform, establish their brand identity as a destination rather than a store, and grow their digital presence across search, social, and email. Every touchpoint was refined to reflect the premium, experiential nature of what they sell.",
    services: [
      "E-commerce Website",
      "Brand Identity",
      "Social Media Management",
      "Content Creation",
      "SEO",
      "Email Marketing",
      "Billboard Campaign",
    ],
    images: [
      "/images/clients/sh1.png",
      "/images/clients/sh3.png",
      "/images/clients/sh4.jpeg",
    ],
    result:
      "Elevated from a local audio shop to Nigeria's definitive premium audio destination — with a fully operational e-commerce store, consistent brand identity across all channels, and a growing organic search presence for Sonos-related queries in Nigeria.",
    featured: true,
  },
  {
    slug: "triagehome",
    client: "TriageHome",
    industry: "Home Healthcare",
    website: "triage-home.com",
    tagline: "Launching Nigeria's most trusted home healthcare platform.",
    overview:
      "TriageHome is an on-demand home healthcare platform connecting patients across Nigeria with verified nurses and healthcare professionals. We built their website from scratch, established their social media presence, and produced the content strategy that educates and converts a first-time audience unfamiliar with professional home healthcare as a category.",
    services: [
      "Website Design & Development",
      "Social Media Management",
      "Content Creation",
      "Brand Communications",
    ],
    images: [
      "/images/clients/tri1.png",
      "/images/clients/tri2.png",
      "/images/clients/tri3.png",
    ],
    result:
      "A fully operational brand and digital presence for a healthcare startup — built to inspire trust from the first impression, with content that educates the Nigerian market on home healthcare as a serious, professional service.",
    featured: true,
  },
  {
    slug: "platform-capital",
    client: "Platform Capital",
    industry: "Investment & Financial Services",
    website: "theplatformcapital.com",
    tagline: "Brand identity for one of Africa's leading investment platforms.",
    overview:
      "Platform Capital is a Lagos-based investment platform with a portfolio spanning technology, real estate, and financial services across Africa. We delivered a complete brand refinement — updating their visual identity, brand language, and digital presence to reflect the seriousness and sophistication of the institution they have built.",
    services: ["Brand Strategy", "Brand Identity", "Visual Design"],
    images: [
      "/images/clients/pla2.png",
      "/images/clients/pla1.png",
      "/images/clients/pla3.png",
    ],
    result:
      "A refined brand identity that reflects Platform Capital's position as a serious, institutional-grade investment platform — cohesive across all applications and aligned with the level at which they operate.",
    featured: true,
  },
  {
    slug: "rensource",
    client: "Rensource Energy",
    industry: "Distributed Energy",
    website: "rensource.energy",
    tagline: "Brand and digital presence for a leading African energy company.",
    overview:
      "Rensource Energy is one of Nigeria's leading distributed energy companies, providing clean, reliable power to businesses and communities across Africa. We supported their brand strategy and digital infrastructure — ensuring their positioning as a serious, credible energy partner was communicated clearly across all digital touchpoints.",
    services: ["Brand Strategy", "Digital Presence", "Content Strategy"],
    images: [
      "/images/clients/ren1.png",
      "/images/clients/ren2.png",
      "/images/clients/ren3.png",
    ],
    result:
      "A cohesive digital presence that reflects Rensource's ambition and credibility as a category-defining energy business in Africa.",
    featured: false,
  },
  {
    slug: "ced-africa",
    client: "CED Africa",
    industry: "AV Design & Systems",
    website: "ced.africa",
    tagline: "Digital marketing for Africa's AV design authority.",
    overview:
      "CED Africa is the institutional authority for professional audiovisual system design across Africa — governing how AV is specified, designed, and delivered through a certified partner ecosystem. We manage their social media presence across LinkedIn, Instagram, and YouTube, building their digital authority through technical thought leadership, project showcases, and partner communications.",
    services: [
      "Social Media Management",
      "Content Strategy",
      "LinkedIn Management",
      "Community Building",
    ],
    images: [
      "/images/clients/ced2.png",
      "/images/clients/ced1.png",
      "/images/clients/ced3.png",
    ],
    result:
      "An active, authoritative digital presence that reflects CED Africa's position as the governing standard for professional AV in Africa — establishing credibility with architects, system integrators, and enterprise clients.",
    featured: false,
  },
  {
    slug: "spectra-avl",
    client: "Spectra AVL",
    industry: "Professional AV Integration",
    website: "savl.pro",
    tagline: "Brand and SEO for a professional AV integration leader.",
    overview:
      "Spectra AVL is a professional audiovisual integration company operating across Africa and the Middle East — delivering world-class AV systems for corporate, hospitality, and government clients. We delivered a complete brand identity and SEO programme that positions Spectra as the premium, credible partner of choice in a technically demanding industry.",
    services: ["Branding", "Brand Guidelines", "SEO", "Digital Presence"],
    images: [
      "/images/clients/sav1.png",
      "/images/clients/sav2.png",
      "/images/clients/sav4.png",
    ],
    result:
      "A premium, authoritative brand identity with a structured SEO foundation — positioning Spectra AVL to be found by the right clients at the moment they are searching for professional AV integration.",
    featured: false,
  },
  {
    slug: "radiomedtech",
    client: "Radiomedtech",
    industry: "Medical Technology",
    website: "radiomedtech.com",
    tagline: "Digital presence for a specialist medical technology firm.",
    overview:
      "Radiomedtech is a specialist medical technology company operating in Nigeria — supplying and servicing radiological and diagnostic imaging equipment for hospitals and healthcare institutions. We built their website and established their digital presence, translating highly technical expertise into a clear, credible, and professional brand communication.",
    services: [
      "Website Design & Development",
      "Brand Communications",
      "Digital Presence",
    ],
    images: [
      "/images/clients/rad1.png",
      "/images/clients/rad2.png",
      "/images/clients/rad3.png",
    ],
    result:
      "A professional digital presence that communicates Radiomedtech's technical expertise clearly — building trust with hospital procurement teams and healthcare decision-makers.",
    featured: false,
  },
  {
    slug: "digital-inclusion-initiative",
    client: "Digital Inclusion Initiative",
    industry: "NGO & Social Impact",
    website: "digitalinclusioninitiative.org",
    tagline: "Brand and digital presence for a technology access initiative.",
    overview:
      "The Digital Inclusion Initiative works to expand access to technology and digital skills across underserved communities in Africa. We established their brand identity, communications strategy, and digital presence — ensuring the mission and impact of their work was communicated with the clarity and authority the cause deserves.",
    services: [
      "Brand Identity",
      "Communications Strategy",
      "Website",
      "Digital Presence",
    ],
    images: [
      "/images/clients/dig2.png",
      "/images/clients/dig1.png",
      "/images/clients/dig3.png",
    ],
    result:
      "A cohesive brand and digital presence that communicates the scale and seriousness of the initiative — helping attract partners, funders, and communities to the mission.",
    featured: false,
  },
];

const testimonials = [
  {
    quote:
      "Spotlite Africa understood our brand at a level that surprised us from the first meeting. The strategy they built was not just impressive — it was actionable. We have seen the results.",
    author: "CEO",
    company: "Soundhous",
    industry: "Premium Audio Retail",
  },
  {
    quote:
      "They took the time to genuinely understand what CED Africa is trying to build. The content they produce carries real technical credibility — which is rare for a marketing agency.",
    author: "Managing Director",
    company: "CED Africa",
    industry: "AV Design & Systems",
  },
  {
    quote:
      "Working with Spotlite Africa felt different from the start. They pushed back when our thinking was wrong, which is exactly what a real strategic partner should do.",
    author: "Founder",
    company: "TriageHome",
    industry: "Home Healthcare",
  },
  {
    quote:
      "The quality of work is genuinely world-class. We have received more comments about our brand identity in the past three months than in the previous three years.",
    author: "Director",
    company: "Platform Capital",
    industry: "Investment & Financial Services",
  },
  {
    quote:
      "Spotlite Africa does not just execute. They think. The difference between a strategy from them and a generic agency is immediately visible in the output.",
    author: "CEO",
    company: "Spectra AVL",
    industry: "Professional AV Integration",
  },
];

// ── CASE STUDY CARD ──
function CaseCard({ c, i }: { c: CaseStudy; i: number }) {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <motion.article
      {...fadeUp(i * 0.06)}
      className="overflow-hidden rounded-2xl"
      style={{ border: "1.5px solid rgba(0,0,0,0.08)" }}
    >
      {/* IMAGE AREA — white bg */}
      <div className="relative bg-white">
        {/* main image */}
        <div
          className="relative overflow-hidden"
          style={{ aspectRatio: "16/9" }}
        >
          {/* placeholder */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, #f8f7f4 0%, #eeede9 100%)`,
            }}
          />
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
          <span
            className="absolute inset-0 flex items-center justify-center text-6xl font-light tracking-tight"
            style={{ color: "rgba(0,0,0,0.06)" }}
          >
            {c.client
              .split(" ")
              .map((w) => w[0])
              .join("")
              .slice(0, 2)}
          </span>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeImg}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <Image
                src={c.images[activeImg]}
                alt={`${c.client} — image ${activeImg + 1}`}
                fill
                className="object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </motion.div>
          </AnimatePresence>

          {/* website badge */}
          <div className="absolute top-4 left-4 z-10">
            <a
              href={`https://${c.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-medium tracking-wide transition-opacity duration-200 hover:opacity-80"
              style={{
                background: "rgba(255,255,255,0.92)",
                color: "#0A0A0A",
                backdropFilter: "blur(6px)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <span
                className="block h-1.5 w-1.5 rounded-full"
                style={{ background: "#1D9E75" }}
              />
              {c.website}
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <path
                  d="M1 7L7 1M7 1H3M7 1V5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* featured badge */}
          {c.featured && (
            <div className="absolute top-4 right-4 z-10">
              <span
                className="inline-block rounded-full px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.15em]"
                style={{ background: "#0A0A0A", color: "#F5C842" }}
              >
                Featured
              </span>
            </div>
          )}
        </div>

        {/* thumbnail strip — white bg */}
        <div
          className="flex gap-2 px-4 py-3"
          style={{ background: "#FFFFFF", borderTop: "1px solid rgba(0,0,0,0.06)" }}
        >
          {c.images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImg(idx)}
              className="relative overflow-hidden rounded-lg flex-1 transition-all duration-200"
              style={{
                aspectRatio: "16/9",
                border:
                  idx === activeImg
                    ? "2px solid #0A0A0A"
                    : "2px solid transparent",
                background: "#F8F7F4",
              }}
            >
              <div
                className="absolute inset-0 flex items-center justify-center text-xs font-light"
                style={{ color: "rgba(0,0,0,0.2)" }}
              >
                {idx + 1}
              </div>
              <Image
                src={img}
                alt={`${c.client} image ${idx + 1}`}
                fill
                className="object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col gap-5 p-7" style={{ background: "#FFFFFF" }}>
        {/* header */}
        <div>
          <div className="mb-1 flex items-start justify-between gap-3">
            <h3
              className="text-xl font-medium tracking-tight"
              style={{ color: "#0A0A0A" }}
            >
              {c.client}
            </h3>
          </div>
          <p
            className="text-[11px] font-medium uppercase tracking-[0.18em]"
            style={{ color: "#E8881A" }}
          >
            {c.industry}
          </p>
        </div>

        {/* tagline */}
        <p
          className="text-base font-medium leading-snug"
          style={{ color: "#0A0A0A" }}
        >
          {c.tagline}
        </p>

        {/* divider */}
        <div className="h-px w-full" style={{ background: "rgba(0,0,0,0.07)" }} />

        {/* overview */}
        <p
          className="text-sm font-light leading-relaxed"
          style={{ color: "rgba(0,0,0,0.55)" }}
        >
          {c.overview}
        </p>

        {/* services */}
        <div className="flex flex-wrap gap-2">
          {c.services.map((s) => (
            <span
              key={s}
              className="rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em]"
              style={{
                background: "rgba(0,0,0,0.05)",
                color: "rgba(0,0,0,0.45)",
                border: "1px solid rgba(0,0,0,0.07)",
              }}
            >
              {s}
            </span>
          ))}
        </div>

        {/* result */}
        <div
          className="rounded-xl p-5"
          style={{ background: "#0A0A0A" }}
        >
          <p
            className="mb-2 text-[10px] font-medium uppercase tracking-[0.22em]"
            style={{ color: "rgba(255,255,255,0.28)" }}
          >
            The result
          </p>
          <p
            className="text-sm font-light leading-relaxed"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            {c.result}
          </p>
        </div>

        {/* cta */}
        <a
          href={`https://${c.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 self-start text-sm font-medium tracking-wide transition-opacity duration-200 hover:opacity-60"
          style={{ color: "#0A0A0A" }}
        >
          Visit {c.client}
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </motion.article>
  );
}

// ── TESTIMONIAL SLIDER ──
function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (next: number) => {
    setDir(next > idx ? 1 : -1);
    setIdx((next + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d * 40 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d * -40 }),
  };

  useEffect(() => {
    const t = setInterval(() => go(idx + 1), 6000);
    return () => clearInterval(t);
  }, [idx]);

  const t = testimonials[idx];

  return (
    <section
      className="relative overflow-hidden py-28 px-6 md:px-24"
      style={{ background: "#0A0A0A" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.div
          {...fadeUp(0)}
          className="mb-14 flex flex-col gap-4 items-center text-center"
        >
          <p
            className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.32em]"
            style={{ color: "rgba(255,255,255,0.28)" }}
          >
            <span className="block h-px w-5" style={{ background: "#F5C842" }} />
            What our clients say
            <span className="block h-px w-5" style={{ background: "#F5C842" }} />
          </p>
          <h2
            className="text-2xl font-medium leading-snug tracking-tight text-white md:text-3xl"
          >
            The work speaks.{" "}
            <span style={{ color: "#F5C842" }}>So do our clients.</span>
          </h2>
        </motion.div>

        {/* quote */}
        <div className="relative min-h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={idx}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-8 text-center"
            >
              {/* quote mark */}
              <span
                className="text-7xl font-light leading-none"
                style={{ color: "rgba(245,200,66,0.2)", fontFamily: "Georgia, serif" }}
              >
                &ldquo;
              </span>

              <blockquote
                className="max-w-2xl text-xl font-light leading-relaxed text-white md:text-2xl"
                style={{ marginTop: "-2.5rem" }}
              >
                {t.quote}
              </blockquote>

              {/* attribution */}
              <div className="flex flex-col items-center gap-1">
                <div
                  className="mb-3 h-px w-8"
                  style={{ background: "#F5C842" }}
                />
                <p
                  className="text-sm font-medium text-white"
                >
                  {t.author}
                </p>
                <p
                  className="text-[11px] font-light"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  {t.company} &nbsp;·&nbsp; {t.industry}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* controls */}
        <div className="mt-12 flex items-center justify-center gap-8">
          {/* prev */}
          <button
            onClick={() => go(idx - 1)}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200"
            style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.4)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.4)";
              (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.9)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.15)";
              (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.4)";
            }}
          >
            ←
          </button>

          {/* dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Testimonial ${i + 1}`}
                className="transition-all duration-300"
                style={{
                  width: i === idx ? "24px" : "6px",
                  height: "6px",
                  borderRadius: "100px",
                  background:
                    i === idx ? "#F5C842" : "rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </div>

          {/* next */}
          <button
            onClick={() => go(idx + 1)}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200"
            style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.4)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.4)";
              (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.9)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.15)";
              (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.4)";
            }}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

// ── PAGE ──
export default function WorkPage() {
  const [filter, setFilter] = useState("All");
  const industries = [
    "All",
    ...Array.from(new Set(cases.map((c) => c.industry))),
  ];
  const filtered =
    filter === "All" ? cases : cases.filter((c) => c.industry === filter);

  return (
    <main className="bg-white">

      {/* HERO */}
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
            className="max-w-3xl pb-24"
          >
            <p
              className="mb-6 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.32em]"
              style={{ color: "rgba(255,255,255,0.28)" }}
            >
              <span className="block h-px w-5 flex-shrink-0" style={{ background: "#F5C842" }} />
              Selected work
            </p>
            <h1
              className="text-[2.8rem] font-medium leading-[1.07] tracking-tight text-white md:text-[5rem]"
            >
              African brands,{" "}
              <span style={{ color: "#F5C842" }}>built to global standard.</span>
            </h1>
            <p
              className="mt-8 max-w-xl text-lg font-light leading-relaxed"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              A selection of the brands we have partnered with — across
              technology, healthcare, energy, financial services, audio, and
              more. Every engagement started with strategy. Every result is
              measurable.
            </p>
          </motion.div>

          {/* stat strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-px md:grid-cols-4"
            style={{ background: "rgba(255,255,255,0.07)" }}
          >
            {[
              { value: "8+", label: "Clients featured" },
              { value: "6", label: "Industries" },
              { value: "360°", label: "Service capability" },
              { value: "100%", label: "Strategy-led" },
            ].map((s) => (
              <div key={s.label} className="px-8 py-8" style={{ background: "#0A0A0A" }}>
                <p className="text-3xl font-medium" style={{ color: "#F5C842" }}>
                  {s.value}
                </p>
                <p className="mt-1 text-xs font-light" style={{ color: "rgba(255,255,255,0.3)" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section className="relative bg-white px-6 py-20 md:px-24">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            opacity: 0.4,
          }}
        />
        <div className="relative z-10 mx-auto max-w-6xl">

          {/* filter */}
          <motion.div {...fadeUp(0)} className="mb-12 flex flex-wrap gap-2">
            {industries.map((ind) => {
              const active = ind === filter;
              return (
                <button
                  key={ind}
                  onClick={() => setFilter(ind)}
                  className="rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200"
                  style={{
                    background: active ? "#0A0A0A" : "transparent",
                    color: active ? "#FFFFFF" : "rgba(0,0,0,0.45)",
                    border: active ? "1.5px solid #0A0A0A" : "1.5px solid rgba(0,0,0,0.12)",
                  }}
                >
                  {ind}
                </button>
              );
            })}
          </motion.div>

          {/* grid */}
          <AnimatePresence mode="popLayout">
            <div className="grid gap-8 md:grid-cols-2">
              {filtered.map((c, i) => (
                <CaseCard key={c.slug} c={c} i={i} />
              ))}
            </div>
          </AnimatePresence>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* CTA */}
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
              Your brand should be{" "}
              <span style={{ color: "#E8881A" }}>next.</span>
            </h2>
            <p
              className="max-w-lg text-base font-light leading-relaxed"
              style={{ color: "rgba(0,0,0,0.45)" }}
            >
              Every brand in this portfolio started with a conversation. If you
              are ready to close the gap between where your business is and
              where it should be — let&apos;s start.
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
                href="/services"
                className="group inline-flex items-center gap-3 rounded-full border px-8 py-4 text-sm font-medium tracking-wide transition-all duration-200 hover:opacity-60"
                style={{ borderColor: "rgba(0,0,0,0.15)", color: "#0A0A0A" }}
              >
                See our services
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