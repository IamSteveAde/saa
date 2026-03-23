"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ConsultationModal({ open, setOpen }: any) {
  const [step, setStep] = useState(1);
  const [type, setType] = useState("");
  const [goal, setGoal] = useState("");

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => {
          setOpen(false);
          setStep(1);
        }}
      >
        <motion.div
          className="bg-[#111] text-white w-full max-w-2xl p-10 border border-white/10"
          initial={{ scale: 0.96 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.96 }}
          onClick={(e) => e.stopPropagation()}
        >

          {/* ================= STEP 1 ================= */}
          {step === 1 && (
            <>
              <h2 className="text-2xl text-white/80 mb-8">Who are you?</h2>

              <div className="space-y-4">
                {["Established Company", "Emerging Brand", "Other"].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setType(item);
                      setStep(2);
                    }}
                    className="w-full p-4 border border-white/10 hover:border-[#c2410c] transition text-left"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* ================= STEP 2 ================= */}
          {step === 2 && (
            <>
              <h2 className="text-xl text-white/70 mb-6">What are you looking to do?</h2>

              <div className="space-y-4">
                {[
                  "Refine existing brand",
                  "Build from scratch",
                  "Redesign website",
                  "Full digital restructuring",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setGoal(item);
                      setStep(3);
                    }}
                    className="w-full p-4 border border-white/10 hover:border-[#c2410c] transition text-left"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* ================= STEP 3 ================= */}
          {step === 3 && (
            <form
              action="https://formsubmit.co/info@spotliteafrica.com"
              method="POST"
              className="space-y-6"
            >
              <h2 className="text-xl text-white/70">Your details</h2>

              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="Type" value={type} />
              <input type="hidden" name="Goal" value={goal} />

              <input
                name="name"
                placeholder="Full Name"
                required
                className="w-full p-3 bg-transparent border border-white/10 text-white placeholder-white/40"
              />

              <input
                name="company"
                placeholder="Business Name"
                required
                className="w-full p-3 bg-transparent border border-white/10 text-white placeholder-white/40"
              />

              <input
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full p-3 bg-transparent border border-white/10 text-white placeholder-white/40"
              />

              <input
                type="datetime-local"
                name="booking_time"
                required
                className="w-full p-3 bg-transparent border border-white/10 text-white"
              />

              <textarea
                name="message"
                placeholder="Anything we should know"
                className="w-full p-3 bg-transparent border border-white/10 text-white placeholder-white/40"
              />

              <button
                type="submit"
                className="w-full py-3 border border-white/20 hover:border-[#c2410c] transition"
              >
                Secure Consultation →
              </button>
            </form>
          )}

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}