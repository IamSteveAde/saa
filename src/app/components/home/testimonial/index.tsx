"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Audit",
    desc: "We assess your current brand and digital presence — identifying gaps, inconsistencies, and opportunities for refinement.",
  },
  {
    number: "02",
    title: "Direction",
    desc: "We define structure, positioning, and clarity — establishing how your brand should appear and communicate.",
  },
  {
    number: "03",
    title: "Execution",
    desc: "We design and build your digital systems — ensuring every touchpoint reflects a refined, premium experience.",
  },
  {
    number: "04",
    title: "Continuity",
    desc: "We refine and maintain alignment over time — keeping your brand consistent as it evolves.",
  },
];

export default function Process() {
  return (
    <section className="relative py-32 px-6 md:px-20 overflow-hidden bg-gradient-to-b from-[#f5f5f5] via-white to-[#eaeaea] text-black">

      {/* LIGHT GLOW */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-white blur-[200px] opacity-60 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-xl"
        >
          <p className="text-[11px] tracking-[0.35em] uppercase text-black/40 mb-6 flex items-center gap-3">
            <span className="w-6 h-[1px] bg-[#c2410c]" />
            Process
          </p>

          <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight">
            How we work
          </h2>

          <p className="mt-6 text-black/60 text-lg leading-relaxed">
            A structured approach to refining your digital presence.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="mt-24 relative">

          {/* CENTER LINE */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-black/20 to-transparent" />

          <div className="space-y-24">

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* DOT */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-[#c2410c] rounded-full shadow-[0_0_10px_rgba(194,65,12,0.6)]" />

                {/* CONTENT */}
                <div className="ml-10 md:ml-0 md:w-1/2 px-6">

                  {/* NUMBER */}
                  <div className="text-black/20 text-5xl font-light mb-4">
                    {step.number}
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl text-black/70 font-medium tracking-wide">
                    {step.title}
                  </h3>

                  {/* DESC */}
                  <p className="mt-4 text-black/60 leading-relaxed max-w-md">
                    {step.desc}
                  </p>

                  {/* ACCENT LINE */}
                  <span className="block mt-6 h-[1px] w-12 bg-gradient-to-r from-[#c2410c] to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}