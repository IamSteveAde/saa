"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface WorkItem {
  client: string;
  industry: string;
  what: string;
  slug: string;
  tags: string[];
}

const work: WorkItem[] = [
  {
    client: "Soundhous",
    industry: "Premium Audio & Hi-Fi Retail",
    what: "Brand identity, digital presence, and content strategy for Nigeria's foremost premium audio destination.",
    slug: "soundhous",
    tags: ["Brand", "Digital", "Content"],
  },
  {
    client: "CED Africa",
    industry: "AV Design & Systems",
    what: "Full 360° digital marketing partnership — social media, content, SEO, and thought leadership for Africa's AV authority.",
    slug: "ced-africa",
    tags: ["Strategy", "Social", "SEO", "Content"],
  },
  {
    client: "Platform Capital",
    industry: "Financial Services",
    what: "Brand refinement and digital presence for one of Africa's leading investment platforms.",
    slug: "platform-capital",
    tags: ["Brand", "Digital"],
  },
  {
    client: "Rensource Energy",
    industry: "Energy",
    what: "Brand strategy and digital infrastructure for a leading distributed energy company across Africa.",
    slug: "rensource",
    tags: ["Brand", "Strategy", "Digital"],
  },
];

const fadeUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] as const },
  viewport: { once: true, margin: "-60px" },
});

export default function SelectedWork() {
  return (
    <section
      className="relative overflow-hidden py-32 px-6 md:px-20"
      style={{ background: "#0A0A0A" }}
    >
      {/* subtle top rule */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: "rgba(255,255,255,0.06)" }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ── HEADER ── */}
        <motion.div
          {...fadeUp(0)}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-xl">
            <p
              className="mb-6 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.32em]"
              style={{ color: "rgba(255,255,255,0.28)" }}
            >
              <span
                className="block h-px w-5 flex-shrink-0"
                style={{ background: "#F5C842" }}
              />
              Selected work
            </p>

            <h2
              className="text-3xl font-medium leading-[1.1] tracking-tight text-white md:text-5xl"
            >
              African brands,{" "}
              <span style={{ color: "#F5C842" }}>built to global standard.</span>
            </h2>
          </div>

          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide transition-opacity duration-200 hover:opacity-60 flex-shrink-0 self-start md:self-auto"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            See all work
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>

        {/* ── DIVIDER ── */}
        <div
          className="mt-14 h-px w-full"
          style={{ background: "rgba(255,255,255,0.07)" }}
        />

        {/* ── WORK GRID ── */}
        <div className="mt-0 divide-y"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
          {work.map((item, i) => (
            <motion.div
              key={item.slug}
              {...fadeUp(i * 0.08)}
            >
              <Link
                href={`/work`}
                className="group flex flex-col gap-5 py-10 md:flex-row md:items-center md:gap-0 transition-opacity duration-200 hover:opacity-70"
              >
                {/* index number */}
                <span
                  className="text-[11px] font-medium tracking-[0.2em] md:w-16 flex-shrink-0"
                  style={{ color: "rgba(255,255,255,0.2)" }}
                >
                  0{i + 1}
                </span>

                {/* client + industry */}
                <div className="flex flex-col gap-1 md:w-56 flex-shrink-0">
                  <span
                    className="text-lg font-medium tracking-tight text-white leading-none"
                  >
                    {item.client}
                  </span>
                  <span
                    className="text-[11px] tracking-wide"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                  >
                    {item.industry}
                  </span>
                </div>

                {/* what we did */}
                <p
                  className="flex-1 text-sm font-light leading-relaxed md:px-12"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {item.what}
                </p>

                {/* tags */}
                <div className="flex flex-wrap gap-2 md:w-48 md:justify-end flex-shrink-0">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-3 py-1 text-[10px] font-medium tracking-wide uppercase"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        color: "rgba(255,255,255,0.35)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* arrow */}
                <span
                  className="hidden md:block ml-8 flex-shrink-0 text-sm transition-transform duration-200 group-hover:translate-x-1"
                  style={{ color: "rgba(255,255,255,0.2)" }}
                >
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ── BOTTOM CTA ── */}
        <motion.div
          {...fadeUp(0.3)}
          className="mt-16 flex flex-col gap-8 md:flex-row md:items-center md:justify-between"
        >
          <p
            className="max-w-sm text-sm font-light leading-relaxed"
            style={{ color: "rgba(255,255,255,0.28)" }}
          >
            We work with a select group of businesses. Every engagement is built
            on a foundation of strategy — not just execution.
          </p>

          <button
            onClick={() => {
              const modal = document.getElementById("consultation-trigger");
              if (modal) modal.click();
            }}
            className="group inline-flex items-center gap-3 self-start rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-opacity duration-200 hover:opacity-80 md:self-auto"
            style={{ background: "#F5C842", color: "#0A0A0A" }}
          >
            Start the conversation
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}