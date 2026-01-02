"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Wifi,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import { getImgPath } from "@/utils/pathUtils";

/* -------------------------------------
   BRAND COLORS
------------------------------------- */
const BRAND = {
  teal: "#61abbb",
  purple: "#5f3b86",
  mist: "#bcc8d7",
};

/* -------------------------------------
   EASING (STRICTLY TYPED — FIXES TS ERROR)
------------------------------------- */
const easeEditorial: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* -------------------------------------
   SLIDES
------------------------------------- */
const slides = [
  {
    title: "Digital Access",
    headline: "Technology for everyone.",
    description:
      "We work to ensure communities are not excluded from the digital world because of location, income, or circumstance.",
    image: "/images/hero/every.png",
    icon: Wifi,
    accent: BRAND.teal,
  },
  {
    title: "Digital Skills",
    headline: "Skills that unlock futures.",
    description:
      "Through mentorship, training, and education, we empower people with skills needed to thrive in a digital economy.",
    image: "/images/hero/tutor.png",
    icon: GraduationCap,
    accent: BRAND.purple,
  },
  {
    title: "Digital Opportunity",
    headline: "Inclusion creates opportunity.",
    description:
      "Access and skills lead to jobs, innovation, and economic participation across Africa.",
    image: "/images/hero/access.png",
    icon: Briefcase,
    accent: BRAND.teal,
  },
];

/* -------------------------------------
   VARIANTS (TYPE-SAFE)
------------------------------------- */
const fade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const content: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: easeEditorial,
    },
  },
};

export default function Hero() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () =>
    setIndex((i) => (i - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[index];
  const Icon = slide.icon;

  return (
    <section className="relative h-screen w-full overflow-hidden group">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          variants={fade}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <Image
            src={getImgPath(slide.image)}
            alt={slide.title}
            fill
            priority
            className="object-cover"
          />

          {/* Brand Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(
                120deg,
                rgba(0,0,0,0.78),
                ${slide.accent}55
              )`,
            }}
          />

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-6 lg:max-w-screen-xl">
              <motion.div
                variants={content}
                initial="hidden"
                animate="visible"
                className="max-w-2xl space-y-6"
              >
                {/* Eyebrow */}
                <div className="flex items-center gap-3 text-white/80">
                  <Icon size={20} />
                  <span className="text-[11px] tracking-[0.4em] uppercase">
                    {slide.title}
                  </span>
                </div>

                {/* H1 — WHITE + PURPLE */}
                <h1 className="text-4xl md:text-6xl font-light leading-tight">
                  <span className="text-white"> {slide.headline.split(" ")[0]} </span>
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(90deg, #ffffff, ${BRAND.purple})`,
                    }}
                  >
                    {" " + slide.headline.split(" ").slice(1).join(" ")}
                  </span>
                </h1>

                <p className="text-white/80 max-w-lg leading-relaxed">
                  {slide.description}
                </p>

                <div className="pt-6">
                  <a
                    href="/about"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-xs tracking-[0.25em] uppercase transition-all hover:opacity-90"
                    style={{
                      backgroundColor: BRAND.purple,
                      color: "#fff",
                    }}
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 w-full flex items-center justify-between px-6 z-20">
        <button
          onClick={prev}
          className="h-12 w-12 rounded-full bg-white/10 backdrop-blur text-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
        >
          <ArrowLeft size={20} />
        </button>

        <button
          onClick={next}
          className="h-12 w-12 rounded-full bg-white/10 backdrop-blur text-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
        >
          <ArrowRight size={20} />
        </button>
      </div>

      {/* Progress Bars */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-[3px] w-10 transition-all ${
              i === index ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
