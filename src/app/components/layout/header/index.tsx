"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [onDark, setOnDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* --------------------------------------------------
     Detect dark sections
  -------------------------------------------------- */
  useEffect(() => {
    const sections =
      document.querySelectorAll<HTMLElement>("section[data-dark]");
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setOnDark(entries.some((entry) => entry.isIntersecting));
      },
      {
        rootMargin: "-80px 0px -70% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* --------------------------------------------------
     Lock scroll on mobile menu
  -------------------------------------------------- */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`
          fixed top-0 left-0 w-full z-50
          backdrop-blur-xl
          bg-white/80
          transition-colors duration-300
          ${onDark ? "text-white" : "text-black"}
        `}
      >
        <div className="container mx-auto px-6 lg:max-w-screen-xl">
          <div className="flex items-center justify-between h-20">
            {/* LOGO */}
            <Link href="/" className="z-50 flex items-center">
              <Image
                src="/images/logo/saa.svg"
                alt="Spotlite Africa Agency"
                width={180}
                height={20}
                priority
                className="object-contain"
              />
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-10">
              <NavItem onDark={onDark} href="#services">
                Services
              </NavItem>

              <NavItem onDark={onDark} href="#process">
                How We Work
              </NavItem>

              <NavItem onDark={onDark} href="#why">
                Why Spotlite
              </NavItem>

              <NavItem onDark={onDark} href="#partnerwithspotlite">
                Partner With Us
              </NavItem>

              <NavItem
                onDark={onDark}
                href="#contact"
                className="px-5 py-2 rounded-full border border-black/20 hover:border-black transition"
              >
                Get Started
              </NavItem>
            </nav>

            {/* MOBILE TOGGLE */}
            <button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="
                md:hidden z-50
                h-11 w-11
                rounded-full
                flex items-center justify-center
                backdrop-blur-xl
                bg-white/20
                border border-white/30
                shadow-[0_8px_30px_rgba(0,0,0,0.18)]
                transition hover:bg-white/30
              "
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 backdrop-blur-2xl">
          <nav className="h-full flex flex-col items-center justify-center">
            <MobileNavItem
              delay={0}
              href="#services"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </MobileNavItem>

            <Divider />

            <MobileNavItem
              delay={1}
              href="#process"
              onClick={() => setMenuOpen(false)}
            >
              How We Work
            </MobileNavItem>

            <Divider />

            <MobileNavItem
              delay={2}
              href="#why"
              onClick={() => setMenuOpen(false)}
            >
              Why Spotlite
            </MobileNavItem>

            <Divider />

            <MobileNavItem
              delay={3}
              href="#partnerwithspotlite"
              onClick={() => setMenuOpen(false)}
            >
              Partner With Us
            </MobileNavItem>

            <Divider />

            <MobileNavItem
              delay={4}
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </MobileNavItem>
          </nav>
        </div>
      )}
    </>
  );
}

/* ======================================================
   DESKTOP NAV ITEM
====================================================== */
function NavItem({
  href,
  children,
  onDark,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  onDark: boolean;
  className?: string;
}) {
  const base = `
    text-[11px] tracking-[0.3em] uppercase
    transition-colors duration-300
    ${onDark ? "text-white/90 hover:text-white" : "text-black/85 hover:text-black"}
  `;

  return (
    <Link href={href} className={`${base} ${className}`}>
      {children}
    </Link>
  );
}

/* ======================================================
   MOBILE NAV ITEM
====================================================== */
function MobileNavItem({
  href,
  children,
  onClick,
  delay = 0,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
  delay?: number;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      style={{ animationDelay: `${delay * 90}ms` }}
      className="
        text-white/90
        text-sm
        tracking-[0.35em]
        uppercase
        py-4
        transition hover:opacity-70
      "
    >
      {children}
    </Link>
  );
}

/* ======================================================
   DIVIDER
====================================================== */
function Divider() {
  return (
    <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
  );
}
