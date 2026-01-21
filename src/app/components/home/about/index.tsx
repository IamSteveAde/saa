"use client";

import { motion } from "framer-motion";
import {
  Globe,
  ShoppingCart,
  TrendingUp,
  Users,
  Megaphone,
  BarChart3,
} from "lucide-react";

export default function WhatWeDo() {
  return (
    <section className="relative overflow-hidden bg-white py-40" id="services">
      {/* Orbit Background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute h-[900px] w-[900px] rounded-full border border-black/5"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="absolute h-[650px] w-[650px] rounded-full border border-black/10"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute h-[420px] w-[420px] rounded-full border border-black/15"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute h-[420px] w-[420px]"
        >
          <div className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-[#f2a15f] blur-md" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:max-w-screen-xl">
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-xs text-black/50">
            What We Do
          </p>

          <h2 className="mt-6 text-4xl md:text-5xl font-light leading-tight text-black">
            A Connected Growth System
            <span className="block mt-2 font-normal text-[#461248]">
              Built to Attract, Convert & Scale
            </span>
          </h2>

          <p className="mt-8 text-lg text-black/70 leading-relaxed">
            Our services work together as a single ecosystem — each one
            reinforcing the other to create clarity, momentum, and measurable
            growth.
          </p>
        </div>

        {/* Services */}
        <div className="mt-24 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <Service
            icon={<Globe />}
            title="Brand, Websites & E-commerce"
            text="Brand positioning, high-converting websites, and e-commerce experiences engineered for trust and sales."
          />

          <Service
            icon={<TrendingUp />}
            title="Performance & Paid Advertising"
            text="ROI-focused advertising across search, social, and display — optimized for scalable growth."
          />

          <Service
            icon={<Users />}
            title="Social Media & Content Systems"
            text="Strategic content frameworks that grow relevance, consistency, and audience loyalty."
          />

          <Service
            icon={<Megaphone />}
            title="Influencer & Creator Management"
            text="Carefully curated partnerships that amplify reach without diluting brand credibility."
          />

          <Service
            icon={<ShoppingCart />}
            title="Campaign Strategy & Launches"
            text="End-to-end digital campaigns designed to generate demand and accelerate conversions."
          />

          <Service
            icon={<BarChart3 />}
            title="Analytics, CRO & Growth Consulting"
            text="Deep insights, conversion optimization, and strategic guidance to maximize performance."
          />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------
   SERVICE CARD
------------------------------------- */
function Service({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl border border-black/10 bg-white/80 p-8 backdrop-blur-sm transition hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)]"
    >
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#461248]/10 text-[#461248] transition group-hover:bg-[#461248] group-hover:text-white">
        {icon}
      </div>

      <h3 className="text-lg font-medium text-black">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-black/65">{text}</p>
    </motion.div>
  );
}
