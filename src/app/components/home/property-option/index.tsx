"use client";

import { motion } from "framer-motion";
import { Building2, Rocket } from "lucide-react";
import Link from "next/link";

export default function RoutingSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-[#f5f5f5] via-white to-[#eaeaea] text-black">

      {/* SUBTLE LIGHT GLOW */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-white blur-[200px] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-xl"
        >
          <p className="text-[11px] tracking-[0.35em] uppercase text-black/40 mb-6 flex items-center gap-3">
            <span className="w-6 h-[1px] bg-[#c2410c]" />
            Direction
          </p>

          <h2 className="text-3xl md:text-5xl font-medium leading-tight tracking-tight">
            Where are you right now?
          </h2>

          <p className="mt-6 text-black/60 text-lg leading-relaxed">
            We work with a select group of companies. Choose the path that fits your stage.
          </p>
        </motion.div>

        {/* PANELS */}
        <div className="mt-20 grid md:grid-cols-2 gap-[1px] bg-black/10">

          {/* ===== LEFT PANEL ===== */}
          <Link href="/established" className="group relative bg-white p-12 md:p-16 overflow-hidden">

            {/* HOVER LIGHT */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-[#c2410c]/10 via-transparent to-transparent" />

            <div className="relative z-10">

              {/* ICON */}
              <div className="mb-10 text-black/70">
                <Building2 size={28} />
              </div>

              {/* TITLE */}
              <h3 className="text-2xl text-black/70 md:text-3xl font-medium tracking-tight">
                Established
              </h3>

              {/* DESC */}
              <p className="mt-4 text-black/60 max-w-md leading-relaxed">
                Your business is already working. It needs refinement, structure, and a presence that reflects your level.
              </p>

              {/* CTA */}
              <div className="mt-10 flex items-center gap-3 text-sm tracking-wide">
                <span>Refine My Brand</span>
                <span className="transition transform group-hover:translate-x-1">→</span>
              </div>

              {/* UNDERLINE */}
              <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-gradient-to-r from-[#c2410c] to-black group-hover:w-full transition-all duration-500" />
            </div>
          </Link>

          {/* ===== RIGHT PANEL ===== */}
          <Link href="/emerging" className="group relative bg-white p-12 md:p-16 overflow-hidden">

            {/* HOVER LIGHT */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-[#c2410c]/10 via-transparent to-transparent" />

            <div className="relative z-10">

              {/* ICON */}
              <div className="mb-10 text-black/70">
                <Rocket size={28} />
              </div>

              {/* TITLE */}
              <h3 className="text-2xl text-black/70 md:text-3xl font-medium tracking-tight">
                Emerging
              </h3>

              {/* DESC */}
              <p className="mt-4 text-black/60 max-w-md leading-relaxed">
                You’re entering the market. You need clarity, direction, and a strong foundation from the start.
              </p>

              {/* CTA */}
              <div className="mt-10 flex items-center gap-3 text-sm tracking-wide">
                <span>Guide My Launch</span>
                <span className="transition transform group-hover:translate-x-1">→</span>
              </div>

              {/* UNDERLINE */}
              <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-gradient-to-r from-[#c2410c] to-black group-hover:w-full transition-all duration-500" />
            </div>
          </Link>
        </div>
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}