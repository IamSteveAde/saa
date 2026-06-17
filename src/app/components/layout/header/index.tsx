"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  scrolled: boolean;
  onClick?: () => void;
}

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "Contact", href: "/contact" },
];

function DesktopNavLink({ href, children, scrolled }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="group relative text-[11px] font-medium uppercase tracking-[0.28em] transition-colors duration-200"
      style={{ color: scrolled ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.65)" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.color = scrolled
          ? "#0A0A0A"
          : "#FFFFFF";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.color = scrolled
          ? "rgba(0,0,0,0.6)"
          : "rgba(255,255,255,0.65)";
      }}
    >
      {children}
      <span
        className="absolute -bottom-1 left-0 h-px w-0 transition-all duration-400 group-hover:w-full"
        style={{ background: scrolled ? "#E8881A" : "#F5C842" }}
      />
    </Link>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      {/* ── NAVBAR ── */}
      <header
        className="fixed left-0 top-0 z-50 w-full transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(255,255,255,0.97)"
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled
            ? "0 1px 0 rgba(0,0,0,0.07), 0 4px 24px rgba(0,0,0,0.05)"
            : "none",
        }}
      >
        <div className="mx-auto flex h-16 w-full max-w-screen-xl items-center justify-between px-6 md:h-20 md:px-20">

          {/* LOGO */}
          <Link href="/" className="relative z-50 flex-shrink-0">
            <Image
              src="/images/logo/shh.svg"
              alt="Spotlite Africa"
              width={140}
              height={28}
              priority
              className="object-contain transition-all duration-300"
              style={{
                filter: scrolled ? "none" : "brightness(0) invert(1)",
              }}
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <DesktopNavLink
                key={link.name}
                href={link.href}
                scrolled={scrolled}
              >
                {link.name}
              </DesktopNavLink>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.22em] transition-all duration-200"
              style={{
                background: scrolled ? "#0A0A0A" : "rgba(255,255,255,0.12)",
                color: scrolled ? "#FFFFFF" : "#FFFFFF",
                border: scrolled
                  ? "1px solid #0A0A0A"
                  : "1px solid rgba(255,255,255,0.25)",
                backdropFilter: scrolled ? "none" : "blur(6px)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                if (scrolled) {
                  el.style.background = "#F5C842";
                  el.style.color = "#0A0A0A";
                  el.style.border = "1px solid #F5C842";
                } else {
                  el.style.background = "#F5C842";
                  el.style.color = "#0A0A0A";
                  el.style.border = "1px solid #F5C842";
                }
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                if (scrolled) {
                  el.style.background = "#0A0A0A";
                  el.style.color = "#FFFFFF";
                  el.style.border = "1px solid #0A0A0A";
                } else {
                  el.style.background = "rgba(255,255,255,0.12)";
                  el.style.color = "#FFFFFF";
                  el.style.border = "1px solid rgba(255,255,255,0.25)";
                }
              }}
            >
              Get started
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </div>

          {/* MOBILE BURGER */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="relative z-50 flex h-10 w-10 flex-shrink-0 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span
              className="block h-px w-6 origin-center transition-all duration-300"
              style={{
                background: menuOpen
                  ? "#FFFFFF"
                  : scrolled
                  ? "#0A0A0A"
                  : "#FFFFFF",
                transform: menuOpen
                  ? "translateY(6px) rotate(45deg)"
                  : "none",
              }}
            />
            <span
              className="block h-px w-6 transition-all duration-300"
              style={{
                background: menuOpen
                  ? "#FFFFFF"
                  : scrolled
                  ? "#0A0A0A"
                  : "#FFFFFF",
                opacity: menuOpen ? 0 : 1,
                transform: menuOpen ? "scaleX(0)" : "none",
              }}
            />
            <span
              className="block h-px w-6 origin-center transition-all duration-300"
              style={{
                background: menuOpen
                  ? "#FFFFFF"
                  : scrolled
                  ? "#0A0A0A"
                  : "#FFFFFF",
                transform: menuOpen
                  ? "translateY(-6px) rotate(-45deg)"
                  : "none",
              }}
            />
          </button>
        </div>
      </header>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col"
            style={{ background: "#0A0A0A" }}
          >
            {/* grain */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                opacity: 0.03,
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E\")",
                backgroundSize: "200px 200px",
              }}
            />

            {/* grid */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />

            {/* gold corner accent */}
            <div
              className="pointer-events-none absolute left-0 top-0 h-px w-32"
              style={{
                background: "linear-gradient(to right, #F5C842, transparent)",
              }}
            />
            <div
              className="pointer-events-none absolute left-0 top-0 h-32 w-px"
              style={{
                background: "linear-gradient(to bottom, #F5C842, transparent)",
              }}
            />

            {/* content */}
            <div className="relative z-10 flex flex-1 flex-col justify-between px-8 pb-12 pt-24">

              {/* nav links */}
              <nav className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.05 + i * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="group flex items-center justify-between border-b py-5 transition-colors duration-200"
                      style={{ borderColor: "rgba(255,255,255,0.07)" }}
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className="text-[10px] font-medium"
                          style={{ color: "rgba(255,255,255,0.2)" }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className="text-2xl font-medium tracking-tight text-white transition-colors duration-200 group-hover:text-[#F5C842]"
                        >
                          {link.name}
                        </span>
                      </div>
                      <span
                        className="text-lg transition-all duration-300 group-hover:translate-x-1"
                        style={{ color: "rgba(255,255,255,0.2)" }}
                      >
                        →
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* bottom, cta + contact + tagline */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-6"
              >
                {/* CTA button */}
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="group inline-flex items-center justify-center gap-3 rounded-full py-4 text-sm font-medium tracking-wide transition-opacity duration-200 hover:opacity-80"
                  style={{ background: "#F5C842", color: "#0A0A0A" }}
                >
                  Start the conversation
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                {/* divider */}
                <div
                  className="h-px w-full"
                  style={{ background: "rgba(255,255,255,0.07)" }}
                />

                {/* contact info row */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <p
                      className="text-[10px] font-medium uppercase tracking-[0.22em]"
                      style={{ color: "rgba(255,255,255,0.22)" }}
                    >
                      Email
                    </p>
                    <a
                      href="mailto:info@spotliteafrica.com"
                      className="text-sm font-light transition-colors duration-200"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          "#FFFFFF";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          "rgba(255,255,255,0.5)";
                      }}
                    >
                      info@spotliteafrica.com
                    </a>
                  </div>

                  {/* social icons */}
                  <div className="flex items-center gap-3">
                    {[
                      {
                        label: "Instagram",
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
                        label: "LinkedIn",
                        href: "https://linkedin.com/company/spotliteafrica",
                        icon: (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path
                              d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7H10v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" />
                          </svg>
                        ),
                      },
                    ].map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200"
                        style={{
                          border: "1px solid rgba(255,255,255,0.1)",
                          color: "rgba(255,255,255,0.35)",
                        }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget as HTMLAnchorElement;
                          el.style.borderColor = "rgba(255,255,255,0.3)";
                          el.style.color = "#FFFFFF";
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget as HTMLAnchorElement;
                          el.style.borderColor = "rgba(255,255,255,0.1)";
                          el.style.color = "rgba(255,255,255,0.35)";
                        }}
                      >
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>

                {/* tagline */}
                <p
                  className="text-[10px] font-medium uppercase tracking-[0.28em]"
                  style={{ color: "rgba(255,255,255,0.15)" }}
                >
                  Strategy-first.&nbsp;&nbsp;Execution-obsessed.
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}