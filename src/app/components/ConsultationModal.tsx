"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ConsultationModal({ open, setOpen }: any) {
  const [step, setStep] = useState(1);
  const [type, setType] = useState("");
  const [goal, setGoal] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    booking_time: "",
    message: "",
  });

  if (!open) return null;

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      // ✅ Send to Google Sheets
      await fetch(
  "https://script.google.com/macros/s/AKfycbzI460aOSvRGl6KI2DPmI_JxqSfTU-4wHZcWytXGg04N0d04eBXCjXd8op_Z41B6vrx/exec",
  {
    method: "POST",
    mode: "no-cors", // ✅ IMPORTANT FIX
    body: JSON.stringify({
      ...formData,
      type,
      goal,
    }),
  }
);

      // Small delay to ensure data saves
      await new Promise((resolve) => setTimeout(resolve, 500));

      // ✅ WhatsApp message
      const text = `Hello Spotlite,

I’d like to start a consultation.

• Name: ${formData.name}
• Business: ${formData.company}
• Phone: ${formData.phone}
• Type: ${type}
• Goal: ${goal}
• Preferred Time: ${formData.booking_time}

Message: ${formData.message}`;

      const encoded = encodeURIComponent(text);

      // ✅ Redirect to WhatsApp
      window.location.href = `https://wa.me/2347048048164?text=${encoded}`;

    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-xl text-white/70">Your details</h2>

              <input
                name="name"
                placeholder="Full Name"
                required
                onChange={handleChange}
                className="w-full p-3 bg-transparent border border-white/10 text-white placeholder-white/40"
              />

              <input
                name="company"
                placeholder="Business Name"
                required
                onChange={handleChange}
                className="w-full p-3 bg-transparent border border-white/10 text-white placeholder-white/40"
              />

              <input
                name="phone"
                placeholder="Phone Number"
                required
                onChange={handleChange}
                className="w-full p-3 bg-transparent border border-white/10 text-white placeholder-white/40"
              />

              <input
                type="datetime-local"
                name="booking_time"
                required
                onChange={handleChange}
                className="w-full p-3 bg-transparent border border-white/10 text-white"
              />

              <textarea
                name="message"
                placeholder="Anything we should know"
                onChange={handleChange}
                className="w-full p-3 bg-transparent border border-white/10 text-white placeholder-white/40"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 border border-white/20 hover:border-[#c2410c] transition"
              >
                {loading ? "Connecting..." : "Start a Conversation →"}
              </button>

              {/* Microcopy */}
              <p className="text-sm text-white/40 text-center">
                No pressure. Just a quick conversation on WhatsApp.
              </p>
            </form>
          )}

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}