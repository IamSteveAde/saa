"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "Brand",
    desc: "We define and standardize how your brand looks, speaks, and presents itself across every touchpoint.",
  },
  {
    title: "Digital",
    desc: "We design and build your website and digital platforms to reflect a clear, structured, premium experience.",
  },
  {
    title: "Continuity",
    desc: "We maintain and refine your presence over time, ensuring everything remains aligned as your business evolves.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="relative bg-[#0a0a0a] text-white py-32 px-6 md:px-20 overflow-hidden">

      {/* 🌫 BACKGROUND GLOW */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#c2410c]/10 blur-[180px] pointer-events-none" />

      {/* 🌫 SUBTLE GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <p className="text-[11px] tracking-[0.35em] uppercase text-white/40 mb-6 flex items-center gap-3">
            <span className="w-6 h-[1px] bg-[#c2410c]" />
            What We Handle
          </p>

          <h2 className="text-3xl md:text-5xl font-medium leading-tight tracking-tight bg-gradient-to-r from-[#e5e5e5] via-white to-[#c2410c] bg-clip-text text-transparent">
            We structure how your brand appears.
          </h2>

          <p className="mt-6 text-lg text-white/60 leading-relaxed">
            Everything your business puts out digitally should feel intentional, consistent, and aligned with your level.
          </p>
        </motion.div>

        {/* PILLARS */}
        <div className="mt-20 grid md:grid-cols-3 gap-12">

          {pillars.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* NUMBER */}
              <div className="text-white/20 text-5xl font-light mb-6">
                0{i + 1}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-medium tracking-wide">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="mt-4 text-white/60 leading-relaxed max-w-sm">
                {item.desc}
              </p>

              {/* HOVER LINE */}
              <span className="absolute left-0 bottom-[-10px] h-[1px] w-0 bg-gradient-to-r from-[#c2410c] to-white group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🌫 BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
    </section>
  );
}