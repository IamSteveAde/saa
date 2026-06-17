"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type BusinessType = "established" | "emerging" | null;
type Availability = "today" | "tomorrow" | "this-week" | "next-week" | "flexible";

interface FormData {
  businessType: BusinessType;
  budget: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  location: string;
  services: string[];
  availability: Availability | null;
  message: string;
}

const ESTABLISHED_SERVICES = [
  "Brand Strategy & Positioning",
  "Brand Identity & Design",
  "Website Design & Development",
  "Social Media Management",
  "Content Creation & Production",
  "SEO & Digital Marketing",
  "PR & Communications",
  "Performance Marketing",
  "Email Marketing",
  "Full 360° Retainer",
];

const EMERGING_SERVICES = [
  "Brand Strategy & Positioning",
  "Brand Identity & Design",
  "Website Design & Development",
  "Go-to-Market Strategy",
  "Social Media Setup & Management",
  "Content Creation & Production",
  "SEO Foundation",
  "Full Launch Package",
];

const AVAILABILITY_OPTIONS: { value: Availability; label: string; sub: string }[] = [
  { value: "today",     label: "Today",     sub: "Ready immediately" },
  { value: "tomorrow",  label: "Tomorrow",  sub: "Next 24 hours"    },
  { value: "this-week", label: "This week", sub: "Within 7 days"    },
  { value: "next-week", label: "Next week", sub: "7 – 14 days"      },
  { value: "flexible",  label: "Flexible",  sub: "No rush"          },
];

const INDUSTRIES = [
  "Technology & Fintech",
  "Real Estate",
  "Hospitality & F&B",
  "Professional Services",
  "Healthcare",
  "Education",
  "E-commerce & Retail",
  "Energy",
  "Financial Services",
  "Media & Entertainment",
  "Logistics",
  "Other",
];

const ESTABLISHED_BUDGET_MIN = 500000;
const ESTABLISHED_BUDGET_MAX = 5000000;
const EMERGING_BUDGET_MIN    = 200000;
const EMERGING_BUDGET_MAX    = 2000000;

function formatNaira(value: number): string {
  if (value >= 1000000) {
    const m = value / 1000000;
    return `₦${m % 1 === 0 ? m.toFixed(0) : m.toFixed(1)}m`;
  }
  return `₦${(value / 1000).toFixed(0)}k`;
}

function getBudgetLabel(value: number, type: BusinessType): string {
  const max = type === "established" ? ESTABLISHED_BUDGET_MAX : EMERGING_BUDGET_MAX;
  return value >= max ? `${formatNaira(value)}+` : formatNaira(value);
}

function getBudgetSteps(type: BusinessType): number[] {
  return type === "established"
    ? [500000, 750000, 1000000, 1500000, 2000000, 3000000, 5000000]
    : [200000, 300000, 400000, 500000, 750000, 1000000, 2000000];
}

function snapToStep(raw: number, steps: number[]): number {
  return steps.reduce((prev, curr) =>
    Math.abs(curr - raw) < Math.abs(prev - raw) ? curr : prev
  );
}

function StepLabel({ number, label, sub }: { number: string; label: string; sub?: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="text-[11px] font-medium" style={{ color: "rgba(0,0,0,0.25)" }}>
        {number}
      </span>
      <div>
        <h3 className="text-base font-medium tracking-tight md:text-lg" style={{ color: "#0A0A0A" }}>
          {label}
        </h3>
        {sub && (
          <p className="mt-0.5 text-[11px] font-light" style={{ color: "rgba(0,0,0,0.35)" }}>
            {sub}
          </p>
        )}
      </div>
    </div>
  );
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    businessType: null,
    budget: 0,
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    location: "",
    services: [],
    availability: null,
    message: "",
  });
  const [submitted,  setSubmitted]  = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const services    = form.businessType === "established" ? ESTABLISHED_SERVICES : EMERGING_SERVICES;
  const budgetSteps = form.businessType ? getBudgetSteps(form.businessType) : [];
  const budgetMin   = form.businessType === "established" ? ESTABLISHED_BUDGET_MIN : EMERGING_BUDGET_MIN;
  const budgetMax   = form.businessType === "established" ? ESTABLISHED_BUDGET_MAX : EMERGING_BUDGET_MAX;
  const budgetPct   = form.budget > 0 ? ((form.budget - budgetMin) / (budgetMax - budgetMin)) * 100 : 0;

  const setType = (type: BusinessType) => {
    const min = type === "established" ? ESTABLISHED_BUDGET_MIN : EMERGING_BUDGET_MIN;
    setForm((f) => ({ ...f, businessType: type, budget: min, services: [] }));
  };

  const handleBudgetChange = (raw: number) => {
    setForm((f) => ({ ...f, budget: snapToStep(raw, budgetSteps) }));
  };

  const toggleService = (service: string) => {
    setForm((f) => ({
      ...f,
      services: f.services.includes(service)
        ? f.services.filter((s) => s !== service)
        : [...f.services, service],
    }));
  };

  // Step gate conditions
  const step1Done = !!form.businessType;
  const step2Done = form.budget > 0;
  const step3Done = !!form.name.trim() && !!form.email.trim() && !!form.phone.trim();
  const step4Done = !!form.company.trim() && !!form.industry && !!form.location.trim();
  const step5Done = form.services.length > 0;
  const step6Done = !!form.availability;

  const canSubmit = step1Done && step2Done && step3Done && step4Done && step5Done && step6Done;

  const handleSubmit = async () => {
    if (!canSubmit) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessType: form.businessType,
          budget:       form.budget,
          name:         form.name,
          email:        form.email,
          phone:        form.phone,
          company:      form.company,
          industry:     form.industry,
          location:     form.location,
          services:     form.services,
          availability: form.availability,
          message:      form.message,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please email us directly at info@spotliteafrica.com");
    } finally {
      setSubmitting(false);
    }
  };

  /* ── SUCCESS STATE ── */
  if (submitted) {
    return (
      <section className="relative overflow-hidden bg-white py-32 px-6 md:px-20">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
          <div
            className="flex h-16 w-16 items-center justify-center rounded-full"
            style={{ background: "#F5C842" }}
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M6 14.5L11.5 20L22 9" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <h2 className="text-3xl font-medium tracking-tight md:text-4xl" style={{ color: "#0A0A0A" }}>
              We will be in touch.
            </h2>
            <p className="mt-4 text-base font-light leading-relaxed" style={{ color: "rgba(0,0,0,0.45)" }}>
              Thank you, {form.name.split(" ")[0]}. Your enquiry has been received.
              A member of the Spotlite Africa team will contact you within 24 hours.
            </p>
          </div>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em]" style={{ color: "rgba(0,0,0,0.22)" }}>
            Strategy-first. Execution-obsessed.
          </p>
        </div>
      </section>
    );
  }

  /* ── FORM ── */
  return (
    <section className="relative overflow-hidden bg-white py-24 px-6 md:px-20" id="contact">
      {/* dot grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.55,
        }}
      />
      <div className="absolute top-0 left-0 w-full h-px" style={{ background: "rgba(0,0,0,0.06)" }} />

      <div className="relative z-10 mx-auto max-w-4xl">

        {/* HEADER */}
        <motion.div {...fadeUp(0)} className="mb-16 max-w-2xl">
          <p
            className="mb-6 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.32em]"
            style={{ color: "rgba(0,0,0,0.3)" }}
          >
            <span className="block h-px w-5 flex-shrink-0" style={{ background: "#E8881A" }} />
            Start the conversation
          </p>
          <h2 className="text-3xl font-medium leading-[1.1] tracking-tight md:text-5xl" style={{ color: "#0A0A0A" }}>
            Tell us about{" "}
            <span style={{ color: "#E8881A" }}>your business.</span>
          </h2>
          <p className="mt-5 text-base font-light leading-relaxed" style={{ color: "rgba(0,0,0,0.45)" }}>
            We review every enquiry personally. If there is a fit, we will reach out within 24 hours
            to schedule a private consultation.
          </p>
        </motion.div>

        <div className="flex flex-col gap-14">

          {/* ── 01 BUSINESS TYPE ── */}
          <motion.div {...fadeUp(0.05)}>
            <StepLabel number="01" label="What best describes your business?" />
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {([
                {
                  id: "established" as BusinessType,
                  title: "Established Business",
                  desc: "Already operating. Need your digital presence to match your level.",
                  bullets: ["5+ years in business", "Proven revenue", "Premium clients"],
                },
                {
                  id: "emerging" as BusinessType,
                  title: "Emerging Brand",
                  desc: "Entering the market. Need a strong foundation from day one.",
                  bullets: ["Early stage or pre-launch", "Growth-focused", "Serious intent"],
                },
              ] as { id: BusinessType; title: string; desc: string; bullets: string[] }[]).map((option) => {
                const active = form.businessType === option.id;
                return (
                  <button
                    key={option.id!}
                    onClick={() => setType(option.id)}
                    className="relative flex flex-col items-start gap-4 rounded-2xl p-6 text-left transition-all duration-300"
                    style={{
                      border: active ? "1.5px solid #0A0A0A" : "1.5px solid rgba(0,0,0,0.1)",
                      background: active ? "#0A0A0A" : "transparent",
                    }}
                  >
                    <div
                      className="flex h-5 w-5 items-center justify-center rounded-full transition-all duration-200"
                      style={{
                        background: active ? "#F5C842" : "rgba(0,0,0,0.08)",
                        border: active ? "none" : "1.5px solid rgba(0,0,0,0.15)",
                      }}
                    >
                      {active && (
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5.5L4 7.5L8 3" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <p className="text-base font-medium leading-snug" style={{ color: active ? "#FFFFFF" : "#0A0A0A" }}>
                        {option.title}
                      </p>
                      <p className="mt-2 text-sm font-light leading-relaxed" style={{ color: active ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.45)" }}>
                        {option.desc}
                      </p>
                    </div>
                    <ul className="flex flex-col gap-2">
                      {option.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-xs font-light" style={{ color: active ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.38)" }}>
                          <span className="block h-px w-3 flex-shrink-0" style={{ background: active ? "#F5C842" : "rgba(0,0,0,0.25)" }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* ── 02 BUDGET ── */}
          <AnimatePresence>
            {step1Done && (
              <motion.div key="budget" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
                <StepLabel number="02" label="What is your monthly marketing budget?" />
                <div className="mt-6 rounded-2xl p-8" style={{ border: "1.5px solid rgba(0,0,0,0.08)", background: "#FAFAF9" }}>
                  <div className="mb-8 flex items-end justify-between">
                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-[0.25em]" style={{ color: "rgba(0,0,0,0.3)" }}>
                        Selected budget
                      </p>
                      <p className="mt-1 text-4xl font-medium tracking-tight md:text-5xl" style={{ color: "#0A0A0A" }}>
                        {getBudgetLabel(form.budget, form.businessType)}
                        <span className="ml-1 text-base font-light" style={{ color: "rgba(0,0,0,0.3)" }}>/month</span>
                      </p>
                    </div>
                    <p className="text-xs font-light" style={{ color: "rgba(0,0,0,0.35)" }}>Drag to adjust</p>
                  </div>

                  <div className="relative">
                    <div className="relative h-1.5 w-full overflow-hidden rounded-full" style={{ background: "rgba(0,0,0,0.08)" }}>
                      <div className="absolute left-0 top-0 h-full rounded-full transition-all duration-150" style={{ width: `${budgetPct}%`, background: "#0A0A0A" }} />
                    </div>
                    <input
                      type="range"
                      min={budgetMin}
                      max={budgetMax}
                      step={(budgetMax - budgetMin) / 100}
                      value={form.budget}
                      onChange={(e) => handleBudgetChange(Number(e.target.value))}
                      className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                      style={{ zIndex: 2 }}
                    />
                    <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-150" style={{ left: `${budgetPct}%` }}>
                      <div className="h-5 w-5 rounded-full shadow-md" style={{ background: "#0A0A0A", border: "3px solid #F5C842" }} />
                    </div>
                  </div>

                  <div className="mt-5 flex justify-between">
                    {budgetSteps.map((step) => (
                      <button key={step} onClick={() => setForm((f) => ({ ...f, budget: step }))} className="flex flex-col items-center gap-1.5">
                        <div className="h-1 w-1 rounded-full transition-all duration-200" style={{ background: form.budget === step ? "#0A0A0A" : "rgba(0,0,0,0.2)", transform: form.budget === step ? "scale(1.6)" : "scale(1)" }} />
                        <span className="text-[10px] font-light transition-colors duration-200" style={{ color: form.budget === step ? "#0A0A0A" : "rgba(0,0,0,0.3)" }}>
                          {formatNaira(step)}
                        </span>
                      </button>
                    ))}
                  </div>

                  <p className="mt-6 text-xs font-light leading-relaxed" style={{ color: "rgba(0,0,0,0.35)" }}>
                    {form.businessType === "established"
                      ? "Our standard retainer for established businesses starts at ₦750k/month for 3–4 services. Full 360° engagements start at ₦1.2m/month."
                      : "Our launch packages for emerging brands start at ₦300k/month. Full brand foundation packages start at ₦500k/month."}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── 03 CONTACT DETAILS ── */}
          <AnimatePresence>
            {step2Done && (
              <motion.div key="contact" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
                <StepLabel number="03" label="Your contact details" />
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {([
                    { key: "name",  label: "Full name",     type: "text",  placeholder: "Stephen Adediran"      },
                    { key: "email", label: "Email address", type: "email", placeholder: "stephen@company.com"   },
                    { key: "phone", label: "Phone number",  type: "tel",   placeholder: "+234 000 000 0000"     },
                  ] as { key: keyof FormData; label: string; type: string; placeholder: string }[]).map((field) => (
                    <div key={field.key} className="flex flex-col gap-2">
                      <label className="text-[10px] font-medium uppercase tracking-[0.25em]" style={{ color: "rgba(0,0,0,0.38)" }}>
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={form[field.key] as string}
                        onChange={(e) => setForm((f) => ({ ...f, [field.key]: e.target.value }))}
                        className="w-full rounded-xl px-4 py-3.5 text-sm font-light outline-none transition-all duration-200"
                        style={{ border: "1.5px solid rgba(0,0,0,0.1)", background: "#FAFAF9", color: "#0A0A0A" }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "#0A0A0A")}
                        onBlur={(e)  => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)")}
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── 04 BUSINESS DETAILS ── */}
          <AnimatePresence>
            {step3Done && (
              <motion.div key="bizdetails" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
                <StepLabel number="04" label="About your business" />
                <div className="mt-6 grid gap-4 md:grid-cols-3">

                  {/* Company name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-medium uppercase tracking-[0.25em]" style={{ color: "rgba(0,0,0,0.38)" }}>
                      Company name
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Ltd"
                      value={form.company}
                      onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                      className="w-full rounded-xl px-4 py-3.5 text-sm font-light outline-none transition-all duration-200"
                      style={{ border: "1.5px solid rgba(0,0,0,0.1)", background: "#FAFAF9", color: "#0A0A0A" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#0A0A0A")}
                      onBlur={(e)  => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)")}
                    />
                  </div>

                  {/* Industry, dropdown */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-medium uppercase tracking-[0.25em]" style={{ color: "rgba(0,0,0,0.38)" }}>
                      Industry
                    </label>
                    <div className="relative">
                      <select
                        value={form.industry}
                        onChange={(e) => setForm((f) => ({ ...f, industry: e.target.value }))}
                        className="w-full appearance-none rounded-xl px-4 py-3.5 text-sm font-light outline-none transition-all duration-200 pr-10"
                        style={{
                          border: "1.5px solid rgba(0,0,0,0.1)",
                          background: "#FAFAF9",
                          color: form.industry ? "#0A0A0A" : "rgba(0,0,0,0.38)",
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "#0A0A0A")}
                        onBlur={(e)  => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)")}
                      >
                        <option value="" disabled>Select industry</option>
                        {INDUSTRIES.map((ind) => (
                          <option key={ind} value={ind}>{ind}</option>
                        ))}
                      </select>
                      {/* chevron */}
                      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 4.5L6 8.5L10 4.5" stroke="rgba(0,0,0,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-medium uppercase tracking-[0.25em]" style={{ color: "rgba(0,0,0,0.38)" }}>
                      Location
                    </label>
                    <input
                      type="text"
                      placeholder="Lagos, Nigeria"
                      value={form.location}
                      onChange={(e) => setForm((f) => ({ ...f, location: e.target.value }))}
                      className="w-full rounded-xl px-4 py-3.5 text-sm font-light outline-none transition-all duration-200"
                      style={{ border: "1.5px solid rgba(0,0,0,0.1)", background: "#FAFAF9", color: "#0A0A0A" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#0A0A0A")}
                      onBlur={(e)  => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)")}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── 05 SERVICES ── */}
          <AnimatePresence>
            {step4Done && (
              <motion.div key="services" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
                <StepLabel number="05" label="What do you need from us?" sub="Select all that apply" />
                <div className="mt-6 flex flex-wrap gap-3">
                  {services.map((service) => {
                    const active = form.services.includes(service);
                    return (
                      <button
                        key={service}
                        onClick={() => toggleService(service)}
                        className="rounded-full px-4 py-2.5 text-sm font-light transition-all duration-200"
                        style={{
                          background: active ? "#0A0A0A" : "transparent",
                          color: active ? "#FFFFFF" : "rgba(0,0,0,0.55)",
                          border: active ? "1.5px solid #0A0A0A" : "1.5px solid rgba(0,0,0,0.12)",
                        }}
                      >
                        {active && <span style={{ color: "#F5C842", marginRight: 6 }}>✓</span>}
                        {service}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── 06 AVAILABILITY ── */}
          <AnimatePresence>
            {step5Done && (
              <motion.div key="availability" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
                <StepLabel number="06" label="When can we meet?" sub="We will confirm within 24 hours" />
                <div className="mt-6 grid gap-3 grid-cols-2 md:grid-cols-5">
                  {AVAILABILITY_OPTIONS.map((option) => {
                    const active = form.availability === option.value;
                    return (
                      <button
                        key={option.value}
                        onClick={() => setForm((f) => ({ ...f, availability: option.value }))}
                        className="flex flex-col items-center gap-2 rounded-2xl py-5 px-3 text-center transition-all duration-200"
                        style={{
                          background: active ? "#0A0A0A" : "#FAFAF9",
                          border: active ? "1.5px solid #0A0A0A" : "1.5px solid rgba(0,0,0,0.08)",
                        }}
                      >
                        <span className="text-sm font-medium" style={{ color: active ? "#F5C842" : "#0A0A0A" }}>
                          {option.label}
                        </span>
                        <span className="text-[11px] font-light" style={{ color: active ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.38)" }}>
                          {option.sub}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── 07 MESSAGE (optional) ── */}
          <AnimatePresence>
            {step6Done && (
              <motion.div key="message" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
                <StepLabel number="07" label="Anything else we should know?" sub="Optional" />
                <textarea
                  placeholder="Tell us about your business, your goals, or any context that would help us prepare for our conversation."
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  rows={4}
                  className="mt-6 w-full resize-none rounded-xl px-4 py-4 text-sm font-light leading-relaxed outline-none transition-all duration-200"
                  style={{ border: "1.5px solid rgba(0,0,0,0.1)", background: "#FAFAF9", color: "#0A0A0A" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#0A0A0A")}
                  onBlur={(e)  => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)")}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── SUBMIT ── */}
          <AnimatePresence>
            {canSubmit && (
              <motion.div key="submit" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col gap-6 border-t pt-10" style={{ borderColor: "rgba(0,0,0,0.07)" }}>

                {/* summary */}
                <div className="rounded-2xl p-6" style={{ background: "#0A0A0A" }}>
                  <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.28em]" style={{ color: "rgba(255,255,255,0.3)" }}>
                    Your enquiry summary
                  </p>
                  <div className="grid gap-3 md:grid-cols-3">
                    {[
                      { label: "Business",     value: form.businessType === "established" ? "Established Business" : "Emerging Brand" },
                      { label: "Company",      value: form.company   },
                      { label: "Industry",     value: form.industry  },
                      { label: "Location",     value: form.location  },
                      { label: "Budget",       value: `${getBudgetLabel(form.budget, form.businessType)}/month` },
                      { label: "Availability", value: AVAILABILITY_OPTIONS.find((a) => a.value === form.availability)?.label ?? "" },
                    ].map((item) => (
                      <div key={item.label}>
                        <p className="text-[10px] font-medium uppercase tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.25)" }}>
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm font-light text-white">{item.value}</p>
                      </div>
                    ))}
                  </div>

                  {form.services.length > 0 && (
                    <div className="mt-5">
                      <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.25)" }}>
                        Services requested
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {form.services.map((s) => (
                          <span key={s} className="rounded-full px-3 py-1 text-[11px] font-light" style={{ background: "rgba(245,200,66,0.15)", color: "#F5C842", border: "1px solid rgba(245,200,66,0.2)" }}>
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* submit row */}
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <p className="text-xs font-light leading-relaxed max-w-sm" style={{ color: "rgba(0,0,0,0.35)" }}>
                    We review every enquiry personally. You will hear from us within 24 hours if there is a fit.
                  </p>
                  <button
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="group inline-flex items-center gap-3 self-start rounded-full px-8 py-4 text-sm font-medium tracking-wide transition-all duration-200 disabled:opacity-60 md:self-auto"
                    style={{ background: "#F5C842", color: "#0A0A0A" }}
                  >
                    {submitting ? (
                      <>
                        <svg className="animate-spin" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="6" stroke="rgba(0,0,0,0.2)" strokeWidth="2" />
                          <path d="M14 8a6 6 0 0 0-6-6" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        Sending your enquiry…
                      </>
                    ) : (
                      <>
                        Send enquiry
                        <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}