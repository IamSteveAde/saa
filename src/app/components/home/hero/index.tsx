"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Decorative Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-[#ffd6b6]/60 blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
          className="absolute top-1/3 -right-32 h-[480px] w-[480px] rounded-full bg-[#a93747]/30 blur-[140px]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:max-w-screen-xl pt-40 pb-32">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* LEFT — COPY */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <p className="uppercase tracking-[0.25em] text-xs text-black/50">
              Digital Marketing & Growth Agency
            </p>

            <h1 className="mt-6 text-[1.9rem] md:text-[3.2rem] leading-[1.05] font-light text-black">
              We Design Visibility,
              <span className="block mt-3 font-normal text-[#461248]">
                Then Engineer Revenue
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-black/70">
              Spotlite Africa partners with ambitious brands to build digital
              systems that attract the right audience, convert demand into sales,
              and scale with precision.
            </p>

            <div className="mt-12">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 rounded-full border border-black px-10 py-4 text-sm uppercase tracking-wide text-black transition-all hover:bg-black hover:text-white"
              >
                Get a Growth Strategy
                <span className="transition-transform group-hover:translate-x-1">
                  <ArrowRight size={16} />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT — HERO IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[520px]">
              <Image
                src="/images/hero/her.png" 
                alt="Digital business growth powered by Spotlite Africa Agency"
                width={520}
                height={520}
                priority
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
