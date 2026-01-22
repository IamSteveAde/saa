"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-black py-24 md:py-32 overflow-hidden">
      {/* Top Hairline Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-[70%] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 container mx-auto px-6 lg:max-w-screen-xl">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* ================= BRAND ================= */}
          <div className="lg:col-span-4 space-y-6">
            <span
              className="block text-sm tracking-[0.35em] uppercase text-white font-light"
              style={{ textShadow: "0 4px 20px rgba(0,0,0,0.35)" }}
            >
              Spotlite Africa Agency
            </span>

            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Spotlite Africa is a digital marketing and growth agency helping
              businesses build strong brands, deploy effective digital systems,
              and scale with clarity, structure, and measurable results.
            </p>
          </div>

          {/* ================= AGENCY ================= */}
          <div className="lg:col-span-4 space-y-6">
            <span className="block text-[11px] tracking-[0.3em] uppercase text-white/40">
              Agency
            </span>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#services"
                  className="text-white/70 hover:text-white transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#process"
                  className="text-white/70 hover:text-white transition"
                >
                  How We Work
                </Link>
              </li>
              <li>
                <Link
                  href="#why"
                  className="text-white/70 hover:text-white transition"
                >
                  Why Spotlite
                </Link>
              </li>
              <li>
                <Link
                  href="#partnerships"
                  className="text-white/70 hover:text-white transition"
                >
                  Partnerships
                </Link>
              </li>
            </ul>
          </div>

          {/* ================= CONTACT & TRUST ================= */}
          <div className="lg:col-span-4 space-y-6">
            <span className="block text-[11px] tracking-[0.3em] uppercase text-white/40">
              Contact & Trust
            </span>

            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              We work with serious founders, professionals, and registered
              businesses committed to building long-term digital value and
              sustainable growth.
            </p>

            <div className="space-y-3 text-sm">
              <Link
                href="#contact"
                className="block text-white/70 hover:text-white transition"
              >
                Start a Conversation
              </Link>

              <Link
                href="#partnerwithspotlite"
                className="block text-white/70 hover:text-white transition"
              >
                Become a Partner
              </Link>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM LINE ================= */}
        <div className="mt-20 text-center text-white/40 text-xs tracking-wide">
          © {new Date().getFullYear()} Spotlite Africa Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
