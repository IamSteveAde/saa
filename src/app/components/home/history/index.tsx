"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Briefcase, Scale, ArrowRight } from "lucide-react";

export default function Partnerships() {
  return (
    <section className="relative overflow-hidden py-40 bg-white" id="partnerwithspotlite">
      {/* Soft background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#ffd6b6]/30 to-white" />

      <div className="relative z-10 container mx-auto px-6 lg:max-w-screen-xl">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.3em] text-xs text-black/50">
            Partnerships
          </p>

          <h2 className="mt-6 text-4xl md:text-5xl font-light leading-tight text-black">
            Partner With Us to Create
            <span className="block mt-2 font-normal text-[#461248]">
              Additional Revenue for Your Practice
            </span>
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-black/70">
            We work closely with professional service firms whose clients
            require brand development, digital presence, and growth support
            when registering or scaling their businesses.
          </p>
        </div>

        {/* Partner Types */}
        <div className="mt-20 grid gap-10 md:grid-cols-3">
          <PartnerType
            icon={<Users />}
            title="HR & People Advisory Firms"
            text="Support clients building teams and internal structures, while we help them build visibility, credibility, and demand."
          />

          <PartnerType
            icon={<Briefcase />}
            title="Accounting & Financial Advisory Firms"
            text="For businesses registering with CAC, setting up structures, and preparing for growth through proper financial systems."
          />

          <PartnerType
            icon={<Scale />}
            title="Legal & Corporate Advisory Firms"
            text="Ideal for law firms assisting with company registration, compliance, and corporate structuring."
          />
        </div>

        {/* How it Works */}
        <div className="mt-24 max-w-4xl">
          <h3 className="text-2xl font-light text-black">
            How the Partnership Works
          </h3>

          <div className="mt-8 space-y-6 text-black/70">
            <p>
              • You refer clients who are registering with CAC or actively
              building their businesses and require branding, websites,
              digital systems, or marketing support.
            </p>
            <p>
              • We engage the client professionally, deliver value, and manage
              all digital execution end-to-end.
            </p>
            <p>
              • You earn a referral commission for every successful engagement,
             creating a new income stream without additional workload.
            </p>
          </div>

          <p className="mt-8 text-sm text-black/60">
            This partnership is designed strictly for registered businesses
            and professional firms working with serious founders and companies.
          </p>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16"
        >
          <Link
            href="https://wa.me/2347048048164?text=Hello%20I’m%20interested%20in%20partnering%20with%20SAA"
            target="_blank"
            className="inline-flex items-center gap-4 rounded-full bg-[#461248] px-10 py-5 text-sm uppercase tracking-wide text-white transition hover:opacity-90"
          >
            Contact Us on WhatsApp
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------
   PARTNER TYPE CARD
------------------------------------- */
function PartnerType({
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
      className="rounded-3xl border border-black/10 bg-white/80 p-8 backdrop-blur-sm"
    >
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#461248]/10 text-[#461248]">
        {icon}
      </div>

      <h3 className="text-lg font-medium text-black">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-black/65">
        {text}
      </p>
    </motion.div>
  );
}
