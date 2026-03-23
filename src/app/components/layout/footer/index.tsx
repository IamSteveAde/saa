"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] text-white overflow-hidden">

      {/* SUBTLE GLOW */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#c2410c]/10 blur-[180px]" />

      <div className="relative z-10 px-6 md:px-20 py-24">

        {/* ================= TOP ================= */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">

          {/* BRAND */}
          <div>
            <Image
              src="/images/logo/saawhite.png"
              alt="Spotlite Africa"
              width={160}
              height={40}
              className="mb-6"
            />

            <p className="text-white/50 leading-relaxed max-w-sm">
              We structure how brands are experienced — refining clarity, alignment, and digital presence for companies operating at a high level.
            </p>
          </div>

          {/* NAV */}
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-white/40 mb-6">
              Navigation
            </p>

            <div className="flex flex-col gap-4 text-white/70">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/established">Established</FooterLink>
              <FooterLink href="/emerging">Emerging</FooterLink>
              <FooterLink href="/work">Work</FooterLink>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-white/40 mb-6">
              Contact
            </p>

            <div className="space-y-4 text-white/70">

              <a
                href="mailto:info@spotliteafrica.com"
                className="block hover:text-white transition"
              >
                info@spotliteafrica.com
              </a>

              <p className="text-white/40">
                Lagos, Nigeria
              </p>

             {/* CONTACT NUMBER */}
<div className="mt-6">
  <a
    href="tel:+2347048048164"
    className="group relative inline-block text-sm text-white/80 hover:text-white transition"
  >
    +234 704 804 8164

    {/* PREMIUM UNDERLINE */}
    <span className="absolute left-0 bottom-[-4px] h-[1px] w-0 bg-gradient-to-r from-[#c2410c] to-[#e5e5e5] group-hover:w-full transition-all duration-500" />
  </a>
</div>

            </div>
          </div>

        </div>

        {/* ================= MIDDLE LINE ================= */}
        <div className="mt-20 relative h-[1px] w-full overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <motion.div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, transparent, #c2410c, #e5e5e5, #c2410c, transparent)",
              backgroundSize: "200% 100%",
            }}
            animate={{ backgroundPosition: ["0%", "200%"] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/40 gap-4">

          <p>
            © {new Date().getFullYear()} Spotlite Africa. All rights reserved.
          </p>

          

        </div>

      </div>
    </footer>
  );
}

/* ================= FOOTER LINK ================= */

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="relative group w-fit"
    >
      {children}

      <span className="absolute left-0 bottom-[-4px] h-[1px] w-0 bg-gradient-to-r from-[#c2410c] to-[#e5e5e5] group-hover:w-full transition-all duration-500" />
    </Link>
  );
}