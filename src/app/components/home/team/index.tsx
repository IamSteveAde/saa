"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TeamMember {
  name: string;
  title: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
}

const team: TeamMember[] = [
  {
    name: "Stephen Adediran",
    title: "Founder & Creative Director",
    role: "Vision · Strategy · Creative",
    bio: "Stephen founded Spotlite Africa with one conviction, that African businesses deserve world-class brand and marketing, built by people who understand the continent. He leads strategy, creative direction, and client relationships across every engagement, setting the standard that the agency holds itself to.",
    image: "/images/hero/steve.png",
    linkedin: "https://www.linkedin.com/in/stephen-adediran-6852b01b4/",
  },
   {
    name: "Tijesu Tolulope",
    title: "Head of Social & Content",
    role: "Social · Content · Community",
    bio: "Tijesu leads social media and content across all client accounts, building brand presence and community that convert. She manages content strategy, production coordination, and platform performance with an eye for what resonates and what converts.",
    image: "/images/hero/tolu2.png",
  },
  {
    name: "Iyanu Odebode",
    title: "Digital Growth Strategist",
    role: "Performance · SEO · Analytics",
    bio: "Iyanu owns Spotlite Africa's digital growth function, from search strategy and performance marketing to analytics and campaign optimisation. He translates data into direction, ensuring every digital move compounds over time.",
    image: "/images/hero/iyanu.png",
  },
 
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] as const },
  viewport: { once: true, margin: "-60px" },
});

export default function Team() {
  return (
    <section
      className="relative overflow-hidden py-32 px-6 md:px-20"
      style={{ background: "#0A0A0A" }}
    >
      {/* top rule */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: "rgba(255,255,255,0.06)" }}
      />

      {/* subtle grain */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: 0.025,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ── HEADER ── */}
        <motion.div
          {...fadeUp(0)}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-20"
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
              The team
            </p>
            <h2
              className="text-3xl font-medium leading-[1.1] tracking-tight text-white md:text-5xl"
            >
              The people behind{" "}
              <span style={{ color: "#F5C842" }}>the standard.</span>
            </h2>
          </div>

          <p
            className="max-w-xs text-sm font-light leading-relaxed self-start md:self-auto"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            A lean, senior team that is involved in every engagement.
            Our clients never deal with juniors.
          </p>
        </motion.div>

        {/* ── TEAM GRID ── */}
        <div className="grid gap-6 md:grid-cols-3">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              {...fadeUp(i * 0.1)}
              className="group relative flex flex-col overflow-hidden rounded-2xl"
              style={{
                border: "1px solid rgba(255,255,255,0.07)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              {/* IMAGE */}
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "4/5" }}
              >
                {/* placeholder bg, remove when real image is added */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      i === 0
                        ? "linear-gradient(135deg, #1a1a1a 0%, #2a2008 100%)"
                        : i === 1
                        ? "linear-gradient(135deg, #1a1a1a 0%, #0a1020 100%)"
                        : "linear-gradient(135deg, #1a1a1a 0%, #1a0a10 100%)",
                  }}
                />

                {/* placeholder initials */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="text-5xl font-light tracking-tight"
                    style={{ color: "rgba(255,255,255,0.08)" }}
                  >
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>

                {/* actual image, swap placeholder when ready */}
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  style={{ opacity: 0 }}
                  onLoad={(e) => {
                    (e.currentTarget as HTMLImageElement).style.opacity = "1";
                  }}
                  onError={(e) => {
                    // silently hide broken image, placeholder shows
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />

                {/* bottom gradient for text legibility */}
                <div
                  className="absolute bottom-0 left-0 w-full h-32 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(10,10,10,0.85), transparent)",
                  }}
                />

                {/* role pills, sits over image bottom */}
                <div className="absolute bottom-5 left-5">
                  <span
                    className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-medium tracking-wide"
                    style={{
                      background: "rgba(0,0,0,0.5)",
                      color: "rgba(255,255,255,0.55)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {member.role}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="flex flex-col gap-3 p-6">

                {/* name + title */}
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h3
                      className="text-base font-medium leading-snug tracking-tight text-white"
                    >
                      {member.name}
                    </h3>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 mt-0.5 transition-opacity duration-200 hover:opacity-60"
                        aria-label={`${member.name} on LinkedIn`}
                      >
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          style={{ color: "rgba(255,255,255,0.3)" }}
                        >
                          <path
                            d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle
                            cx="4"
                            cy="4"
                            r="2"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </a>
                    )}
                  </div>

                  <p
                    className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em]"
                    style={{ color: "#F5C842" }}
                  >
                    {member.title}
                  </p>
                </div>

                {/* divider */}
                <div
                  className="h-px w-full"
                  style={{ background: "rgba(255,255,255,0.07)" }}
                />

                {/* bio */}
                <p
                  className="text-sm font-light leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── BOTTOM NOTE ── */}
        <motion.div
          {...fadeUp(0.3)}
          className="mt-16 flex flex-col gap-5 border-t pt-12 md:flex-row md:items-center md:justify-between"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
          <p
            className="max-w-md text-sm font-light leading-relaxed"
            style={{ color: "rgba(255,255,255,0.28)" }}
          >
            Every Spotlite Africa engagement is led by senior team members
            from start to finish. Strategy, execution, and continuity, owned
            at the top.
          </p>

          <p
            className="text-[10px] font-medium uppercase tracking-[0.28em]"
            style={{ color: "rgba(255,255,255,0.18)" }}
          >
            Strategy-first.&nbsp;&nbsp;Execution-obsessed.
          </p>
        </motion.div>

      </div>
    </section>
  );
}