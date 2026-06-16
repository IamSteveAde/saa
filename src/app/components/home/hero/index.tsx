"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ConsultationModal from "../../../components/ConsultationModal";
import Image from "next/image";

interface Slide {
  id: string;
  label: string;
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  desc: string;
  cta: string;
}

const SLIDE_DURATION = 12000;

const slides: Slide[] = [
  {
    id: "established",
    label: "Established Businesses",
    eyebrow: "Your reputation exists.",
    titleLine1: "Your digital presence",
    titleLine2: "doesn't match it.",
    desc: "We audit your brand, refine your positioning, and build a digital presence that reflects the business you have actually built.",
    cta: "Refine My Brand",
  },
  {
    id: "emerging",
    label: "Emerging Brands",
    eyebrow: "You only launch once.",
    titleLine1: "Start with the",
    titleLine2: "right foundation.",
    desc: "We define your positioning, build your brand identity, and guide how you enter the market — correctly, from day one.",
    cta: "Guide My Launch",
  },
];

const logos: string[] = [
  "/images/logo/aurora.svg",
  "/images/logo/ajaokuta.svg",
  "/images/logo/dmflogo.svg",
  "/images/logo/dozylog.png",
  "/images/logo/gpt.svg",
  "/images/logo/plat.svg",
  "/images/logo/dii.svg",
  "/images/logo/tlacc.svg",
  "/images/logo/1.png",
  "/images/logo/rensource.svg",
  "/images/logo/okeowo.svg",
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

export default function Hero() {
  const [index, setIndex] = useState<number>(0);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const tickProgress = useCallback((timestamp: number) => {
    if (startTimeRef.current === null) {
      startTimeRef.current = timestamp;
    }
    const elapsed = timestamp - startTimeRef.current;
    const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
    setProgress(pct);
    if (elapsed < SLIDE_DURATION) {
      rafRef.current = requestAnimationFrame(tickProgress);
    }
  }, []);

  const resetProgress = useCallback(() => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    startTimeRef.current = null;
    setProgress(0);
    rafRef.current = requestAnimationFrame(tickProgress);
  }, [tickProgress]);

  const goToSlide = useCallback(
    (i: number) => {
      setIndex(i);
      resetProgress();
      if (intervalRef.current !== null) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        resetProgress();
      }, SLIDE_DURATION);
    },
    [resetProgress]
  );

  const nextSlide = useCallback(
    () => goToSlide((index + 1) % slides.length),
    [index, goToSlide]
  );

  const prevSlide = useCallback(
    () => goToSlide((index - 1 + slides.length) % slides.length),
    [index, goToSlide]
  );

  useEffect(() => {
    resetProgress();
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
      resetProgress();
    }, SLIDE_DURATION);
    return () => {
      if (intervalRef.current !== null) clearInterval(intervalRef.current);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [resetProgress]);

  const slide = slides[index];

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden bg-[#0a0a0a] text-white">

        {/* ── VIDEO BACKGROUND ── */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/images/hero/lagos.mp4" type="video/mp4" />
        </video>

        {/* ── OVERLAYS ── */}
       <div className="absolute inset-0 bg-black/65" />
       <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.03,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
            backgroundSize: "200px 200px",
          }}
        />

        {/* ── POSITIONING EYEBROW — always visible ── */}
        

        {/* ── HERO CONTENT ── */}
        <div className="relative z-10 flex h-full items-center px-6 pb-36 md:px-24 md:pb-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -32 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl"
            >
              {/* AUDIENCE LABEL */}
              <p
                className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.32em]"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                <span
                  className="block h-px w-5 flex-shrink-0"
                  style={{ background: "#E8881A" }}
                />
                {slide.label}
              </p>

              {/* EYEBROW */}
              <p
                className="mb-3 text-base font-light leading-snug tracking-wide md:text-lg"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                {slide.eyebrow}
              </p>

              {/* HEADLINE */}
              <h1 className="text-[2.5rem] font-medium leading-[1.07] tracking-tight md:text-[4rem]">
                <span className="block text-white">{slide.titleLine1}</span>
                <span className="block" style={{ color: "#F5C842" }}>
                  {slide.titleLine2}
                </span>
              </h1>

              {/* DESCRIPTION */}
              <p
                className="mt-6 max-w-md text-base font-light leading-relaxed md:text-lg"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {slide.desc}
              </p>

              {/* CTA ROW */}
              <div className="mt-10 flex flex-wrap items-center gap-5">
                {/* Primary */}
                <button
                  onClick={() => setOpenModal(true)}
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-7 py-3.5 transition-all duration-300"
                  style={{ background: "#F5C842" }}
                >
                  <span
                    className="relative z-10 text-sm font-medium tracking-wide"
                    style={{ color: "#0a0a0a" }}
                  >
                    {slide.cta}
                  </span>
                  <span
                    className="relative z-10 text-sm transition-transform duration-200 group-hover:translate-x-1"
                    style={{ color: "rgba(10,10,10,0.55)" }}
                  >
                    →
                  </span>
                  <span className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
                </button>

                {/* Secondary */}
                <a
                  href="/work"
                  className="group flex items-center gap-2 text-sm tracking-wide transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.38)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.65)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.38)")
                  }
                >
                  See our work
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>

              {/* TAGLINE */}
              <p
                className="mt-10 text-[10px] font-medium uppercase tracking-[0.22em]"
                style={{ color: "rgba(255,255,255,0.18)" }}
              >
                Strategy-first.&nbsp;&nbsp;Execution-obsessed.
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── SLIDE CONTROLS — bottom right ── */}
        <div className="absolute bottom-24 right-5 z-20 flex items-center gap-3 md:bottom-32 md:right-10">
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border text-sm transition-all duration-200"
            style={{
              borderColor: "rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.45)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "rgba(255,255,255,0.4)";
              (e.currentTarget as HTMLButtonElement).style.color =
                "rgba(255,255,255,0.9)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "rgba(255,255,255,0.15)";
              (e.currentTarget as HTMLButtonElement).style.color =
                "rgba(255,255,255,0.45)";
            }}
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border text-sm transition-all duration-200"
            style={{
              borderColor: "rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.45)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "rgba(255,255,255,0.4)";
              (e.currentTarget as HTMLButtonElement).style.color =
                "rgba(255,255,255,0.9)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "rgba(255,255,255,0.15)";
              (e.currentTarget as HTMLButtonElement).style.color =
                "rgba(255,255,255,0.45)";
            }}
          >
            →
          </button>
        </div>

        {/* ── PROGRESS INDICATORS — desktop right ── */}
        <div className="absolute right-10 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-6 md:flex">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goToSlide(i)}
              aria-label={`Go to ${s.label}`}
              className="group flex flex-col items-end gap-2"
            >
              <span
                className="text-right text-[9px] font-medium uppercase tracking-[0.2em] transition-colors duration-200"
                style={{
                  color:
                    i === index
                      ? "rgba(255,255,255,0.45)"
                      : "rgba(255,255,255,0.18)",
                }}
              >
                {s.label}
              </span>
              <div
                className="relative h-px w-10"
                style={{ background: "rgba(255,255,255,0.12)" }}
              >
                {i === index && (
                  <div
                    className="absolute left-0 top-0 h-px transition-none"
                    style={{
                      width: `${progress}%`,
                      background: "#F5C842",
                    }}
                  />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* ── PROGRESS INDICATORS — mobile bottom ── */}
        <div className="absolute bottom-24 left-6 z-20 flex gap-4 md:hidden">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goToSlide(i)}
              aria-label={`Slide ${i + 1}`}
              className="relative h-px w-8"
              style={{ background: "rgba(255,255,255,0.12)" }}
            >
              {i === index && (
                <div
                  className="absolute left-0 top-0 h-px"
                  style={{
                    width: `${progress}%`,
                    background: "#F5C842",
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* ── LOGO MARQUEE ── */}
        <div
          className="absolute bottom-0 w-full overflow-hidden"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            background: "rgba(0,0,0,0.18)",
          }}
        >
          {/* fade edges */}
          <div
            className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.5), transparent)",
            }}
          />
          <div
            className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20"
            style={{
              background:
                "linear-gradient(to left, rgba(0,0,0,0.5), transparent)",
            }}
          />

          <div className="flex overflow-hidden py-5">
            <div
              className="flex shrink-0 items-center gap-16 md:gap-20"
              style={{ animation: "marquee 40s linear infinite" }}
            >
              {[...logos, ...logos].map((logo, i) => (
                <Image
                  key={`logo-${i}`}
                  src={logo}
                  alt="client logo"
                  width={100}
                  height={40}
                  priority={i < 6}
                  className="h-5 w-auto brightness-0 invert grayscale transition-opacity duration-300 md:h-6"
                  style={{ opacity: 0.38 }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLImageElement).style.opacity =
                      "0.65")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLImageElement).style.opacity =
                      "0.38")
                  }
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── KEYFRAMES ── */}
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          @media (prefers-reduced-motion: reduce) {
            .marquee-track { animation: none !important; }
          }
        `}</style>
      </section>

      <ConsultationModal open={openModal} setOpen={setOpenModal} />
    </>
  );
}