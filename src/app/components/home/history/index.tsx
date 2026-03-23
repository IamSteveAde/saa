"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ConsultationModal from "../../../components/ConsultationModal";

export default function Consultation() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <section className="relative bg-[#0a0a0a] text-white py-32 px-6 md:px-20 overflow-hidden">

        {/* SUBTLE GLOW */}
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#c2410c]/10 blur-[180px] pointer-events-none" />

        {/* CONTENT */}
        <div className="max-w-3xl mx-auto text-center relative z-10">

          {/* LABEL */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[11px] tracking-[0.35em] uppercase text-white/40 mb-6 flex items-center justify-center gap-3"
          >
            <span className="w-6 h-[1px] bg-[#c2410c]" />
            Consultation
          </motion.p>

          {/* HEADLINE */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-medium tracking-tight leading-tight bg-gradient-to-r from-[#e5e5e5] via-white to-[#c2410c] bg-clip-text text-transparent"
          >
            Start the conversation
          </motion.h2>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mt-6 text-lg text-white/60 leading-relaxed"
          >
            We partner with a select number of companies.  
            If this aligns with where you're going, we can explore it.
          </motion.p>

          {/* ✅ CTA → OPEN MODAL */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-12 flex justify-center"
          >
            <button
              onClick={() => setOpenModal(true)}
              className="group relative inline-flex items-center gap-4 px-10 py-4 rounded-full border border-white/20 backdrop-blur-xl overflow-hidden transition"
            >

              {/* glow */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-[#c2410c]/10 via-transparent to-[#c2410c]/10" />

              {/* text */}
              <span className="relative z-10 text-sm tracking-wide">
                Request Private Consultation
              </span>

              {/* arrow */}
              <span className="relative z-10 text-white/60 group-hover:text-white transition transform group-hover:translate-x-1">
                →
              </span>

              {/* underline */}
              <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#c2410c] group-hover:w-full transition-all duration-500" />
            </button>
          </motion.div>

          {/* EXCLUSIVITY */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-sm text-white/30 tracking-wide"
          >
            We don’t take on every project.
          </motion.p>
        </div>

        {/* FADE */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
      </section>

      {/* ✅ SAME MODAL USED HERE */}
      <ConsultationModal open={openModal} setOpen={setOpenModal} />
    </>
  );
}