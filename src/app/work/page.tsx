"use client";

import { motion } from "framer-motion";

// 👉 Import your existing components here
import Listing from "../components/home/property-list";
// import OtherComponent from "@/components/OtherComponent";

export default function WorkPage() {
  return (
    <main className="text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative h-[100vh] flex items-center px-6 md:px-20">

        {/* BACKGROUND GRADIENT */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(194,65,12,0.15),transparent_40%),linear-gradient(to_bottom,#0a0a0a,#000)]" />

        {/* SUBTLE TEXTURE / LIGHT */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_60%)]" />

        <div className="relative z-10 max-w-3xl">

          {/* LABEL */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[11px] tracking-[0.35em] uppercase text-white/40 mb-6 flex items-center gap-3"
          >
            <span className="w-6 h-[1px] bg-[#c2410c]" />
            Selected Work
          </motion.p>

          {/* HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-medium leading-tight bg-gradient-to-r from-[#e5e5e5] via-white to-[#c2410c] bg-clip-text text-transparent"
          >
            A closer look at how
            <br />
            we structure brands.
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-white/60 max-w-xl leading-relaxed"
          >
            A selection of work that reflects clarity, structure, and a refined digital presence.
          </motion.p>

        </div>
      </section>

      {/* ================= CONTENT ================= */}
      

        {/* You can stack multiple components here */}
        <Listing />

        {/* Example:
        <OtherComponent />
        */}

      

    </main>
  );
}