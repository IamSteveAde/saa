"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
  viewport: { once: true, margin: "-40px" },
});

const nav = [
  {
    label: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Work", href: "/work" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Who we serve",
    links: [
      { name: "Established businesses", href: "/established" },
      { name: "Emerging brands", href: "/emerging" },
    ],
  },
  {
    label: "Services",
    links: [
      { name: "Brand Strategy", href: "/services" },
      { name: "Social Media", href: "/services" },
      { name: "Content Creation", href: "/services" },
      { name: "SEO", href: "/services" },
      { name: "PR & Communications", href: "/services" },
      { name: "Performance Marketing", href: "/services" },
    ],
  },
];

const socials = [
  {
    name: "Instagram",
    href: "https://instagram.com/spotliteafrica",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/spotliteafrica",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path
          d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "Twitter / X",
    href: "https://twitter.com/spotliteafrica",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 4l16 16M4 20L20 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#0A0A0A" }}>

      {/* ── TOP CTA BAND ── */}
      <div
        className="border-b"
        style={{ borderColor: "rgba(255,255,255,0.07)" }}
      >
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-24">
          <motion.div
            {...fadeUp(0)}
            className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
          >
            <div>
              <p
                className="mb-3 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.32em]"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                <span
                  className="block h-px w-4 flex-shrink-0"
                  style={{ background: "#F5C842" }}
                />
                Ready to begin
              </p>
              <h2
                className="text-2xl font-medium leading-snug tracking-tight text-white md:text-3xl"
              >
                Your brand deserves to be seen{" "}
                <span style={{ color: "#F5C842" }}>at its level.</span>
              </h2>
            </div>
            <Link
              href="/contact"
              className="group inline-flex flex-shrink-0 items-center gap-3 self-start rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-opacity duration-200 hover:opacity-80 md:self-auto"
              style={{ background: "#F5C842", color: "#0A0A0A" }}
            >
              Start the conversation
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ── MAIN FOOTER BODY ── */}
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-24">
        <div className="grid gap-12 md:grid-cols-12">

          {/* brand column */}
          <motion.div {...fadeUp(0)} className="md:col-span-4">
            {/* logo */}
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center gap-1">
                <Link href="/" className="inline-block mb-6">
  <Image
    src="/images/logo/shh.svg"
    alt="Spotlite Africa"
    width={250}
    height={140}
    priority
    className="w-[140px] md:w-[150px] h-auto"
  />
</Link>
              </div>
            </Link>

            <p
              className="text-sm font-light leading-relaxed"
              style={{ color: "rgba(255,255,255,0.38)" }}
            >
              Africa&apos;s strategy-first brand and marketing agency. We take
              African businesses from where they are — to where they deserve to be.
            </p>

            {/* tagline */}
            <p
              className="mt-6 text-[10px] font-medium uppercase tracking-[0.28em]"
              style={{ color: "rgba(255,255,255,0.18)" }}
            >
              Strategy-first.&nbsp;&nbsp;Execution-obsessed.
            </p>

            {/* socials */}
            <div className="mt-8 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200"
                  style={{
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.35)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "rgba(255,255,255,0.3)";
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "#FFFFFF";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "rgba(255,255,255,0.1)";
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "rgba(255,255,255,0.35)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* spacer */}
          <div className="hidden md:block md:col-span-1" />

          {/* nav columns */}
          {nav.map((group, i) => (
            <motion.div
              key={group.label}
              {...fadeUp(0.05 + i * 0.05)}
              className="md:col-span-2"
            >
              <p
                className="mb-5 text-[10px] font-medium uppercase tracking-[0.28em]"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                {group.label}
              </p>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm font-light transition-colors duration-200"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          "#FFFFFF";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          "rgba(255,255,255,0.45)";
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* contact column */}
          <motion.div {...fadeUp(0.2)} className="md:col-span-3">
            <p
              className="mb-5 text-[10px] font-medium uppercase tracking-[0.28em]"
              style={{ color: "rgba(255,255,255,0.25)" }}
            >
              Contact
            </p>
            <div className="flex flex-col gap-4">
              <div>
                <p
                  className="text-[10px] font-medium uppercase tracking-[0.18em] mb-1"
                  style={{ color: "rgba(255,255,255,0.2)" }}
                >
                  Email
                </p>
                <a
                  href="mailto:info@spotliteafrica.com"
                  className="text-sm font-light transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "rgba(255,255,255,0.45)";
                  }}
                >
                  info@spotliteafrica.com
                </a>
              </div>
              <div>
                <p
                  className="text-[10px] font-medium uppercase tracking-[0.18em] mb-1"
                  style={{ color: "rgba(255,255,255,0.2)" }}
                >
                  Phone
                </p>
                <a
                  href="tel:+2347048048164"
                  className="text-sm font-light transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "rgba(255,255,255,0.45)";
                  }}
                >
                  +234 704 804 8164
                </a>
              </div>
              <div>
                <p
                  className="text-[10px] font-medium uppercase tracking-[0.18em] mb-1"
                  style={{ color: "rgba(255,255,255,0.2)" }}
                >
                  Location
                </p>
                <p
                  className="text-sm font-light"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  Lagos, Nigeria
                </p>
              </div>

              {/* mini CTA */}
              <Link
                href="/contact"
                className="group mt-2 inline-flex items-center gap-2 text-sm font-medium transition-opacity duration-200 hover:opacity-60"
                style={{ color: "#F5C842" }}
              >
                Start a conversation
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.07)" }}
      >
        <div className="mx-auto max-w-6xl px-6 py-6 md:px-24">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            {/* copyright */}
            <p
              className="text-[11px] font-light"
              style={{ color: "rgba(255,255,255,0.22)" }}
            >
              © {year} Spotlite Africa Agency. All rights reserved.
            </p>

            {/* legal links */}
            <div className="flex items-center gap-6">
              {[
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[11px] font-light transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.22)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "rgba(255,255,255,0.55)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "rgba(255,255,255,0.22)";
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* built by */}
            <p
              className="text-[11px] font-light"
              style={{ color: "rgba(255,255,255,0.15)" }}
            >
              Built by{" "}
              <span style={{ color: "rgba(255,255,255,0.28)" }}>
                Spotlite Africa
              </span>
            </p>

          </div>
        </div>
      </div>

    </footer>
  );
}