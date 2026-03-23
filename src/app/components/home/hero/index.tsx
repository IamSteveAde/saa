"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ConsultationModal from "../../../components/ConsultationModal";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const slides = [
    {
      id: "established",
      label: "Established Companies",
      title: "Your business works.",
      desc: "We refine your brand, redesign your website, and structure your digital presence to match your level.",
      cta: "Refine My Brand",
    },
    {
      id: "emerging",
      label: "Emerging Brands",
      title: "Start with clarity.",
      desc: "We define your brand, build your foundation, and guide how you enter the market properly.",
      cta: "Guide My Launch",
    },
  ];

  const logos = [
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

  const nextSlide = () =>
    setIndex((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden bg-[#0a0a0a] text-white">

        {/* VIDEO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover animate-zoom"
        >
          <source src="/images/hero/lagos.mp4" type="video/mp4" />
        </video>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/75" />

        {/* CONTENT */}
        <div className="relative z-10 h-full flex items-center px-6 md:px-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[index].id}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -60 }}
              transition={{ duration: 0.9 }}
              className="max-w-2xl"
            >
              {/* LABEL */}
              <p className="text-[11px] tracking-[0.35em] uppercase text-white/40 mb-6 flex items-center gap-3">
                <span className="w-6 h-[1px] bg-[#c2410c]" />
                {slides[index].label}
              </p>

              {/* TITLE */}
              <h1 className="text-4xl md:text-6xl font-medium leading-[1.1] tracking-tight bg-gradient-to-r from-[#e5e5e5] via-[#cfcfcf] to-[#c2410c] bg-clip-text text-transparent">
                {slides[index].title}
              </h1>

              {/* DESC */}
              <p className="mt-6 text-base md:text-lg text-white/70 leading-relaxed max-w-lg">
                {slides[index].desc}
              </p>

              {/* BUTTON */}
              <div className="mt-10">
                <button
                  onClick={() => setOpenModal(true)}
                  className="group relative inline-flex items-center gap-4 px-8 py-4 rounded-full border border-white/20 backdrop-blur-xl overflow-hidden transition"
                >
                  <span className="relative z-10 text-sm tracking-wide">
                    {slides[index].cta}
                  </span>

                  <span className="relative z-10 text-white/60 group-hover:text-white transition transform group-hover:translate-x-1">
                    →
                  </span>

                  <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#c2410c] group-hover:w-full transition-all duration-500" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ARROWS */}
        <div className="absolute bottom-24 right-10 flex gap-4 z-20">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md hover:border-[#c2410c] transition"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md hover:border-[#c2410c] transition"
          >
            →
          </button>
        </div>

        {/* INDICATOR */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20">
          {slides.map((_, i) => (
            <div key={i} className="relative">
              <div className="w-10 h-[1px] bg-white/20" />
              {i === index && (
                <motion.div
                  layoutId="activeLine"
                  className="absolute top-0 left-0 h-[1px] bg-[#c2410c]"
                  initial={{ width: 0 }}
                  animate={{ width: 40 }}
                  transition={{ duration: 0.6 }}
                />
              )}
            </div>
          ))}
        </div>

        {/* LOGOS */}
        <div className="absolute bottom-0 w-full border-t border-white/10 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee gap-20 py-6 items-center">
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="client"
                className="h-6 md:h-8 opacity-50 hover:opacity-90 transition grayscale brightness-0 invert"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ✅ MODAL */}
      <ConsultationModal open={openModal} setOpen={setOpenModal} />
    </>
  );
}