"use client";

import { motion } from "framer-motion";
import Contact from "../components/home/history";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function ContactPage() {
  return (
    <main className="bg-white">

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden px-6 pt-36 pb-28 md:px-24 md:pt-44 md:pb-36"
        style={{ background: "#0A0A0A" }}
      >
        {/* grid texture */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* grain */}
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

        {/* gold accent — top left corner */}
        <div
          className="pointer-events-none absolute left-0 top-0 h-px w-48 md:w-72"
          style={{ background: "linear-gradient(to right, #F5C842, transparent)" }}
        />
        <div
          className="pointer-events-none absolute left-0 top-0 h-48 w-px md:h-72"
          style={{ background: "linear-gradient(to bottom, #F5C842, transparent)" }}
        />

        {/* bottom right accent */}
        <div
          className="pointer-events-none absolute right-0 bottom-0 h-px w-48 md:w-72"
          style={{ background: "linear-gradient(to left, rgba(245,200,66,0.3), transparent)" }}
        />
        <div
          className="pointer-events-none absolute right-0 bottom-0 h-48 w-px md:h-72"
          style={{ background: "linear-gradient(to top, rgba(245,200,66,0.3), transparent)" }}
        />

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid gap-16 md:grid-cols-2 md:items-end">

            {/* left — headline */}
            <div>
              <motion.p
                {...fadeUp(0)}
                className="mb-6 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.32em]"
                style={{ color: "rgba(255,255,255,0.28)" }}
              >
                <span
                  className="block h-px w-5 flex-shrink-0"
                  style={{ background: "#F5C842" }}
                />
                Start the conversation
              </motion.p>

              <motion.h1
                {...fadeUp(0.08)}
                className="text-[2.8rem] font-medium leading-[1.07] tracking-tight text-white md:text-[4.5rem]"
              >
                Let&apos;s build
                <br />
                <span style={{ color: "#F5C842" }}>something serious.</span>
              </motion.h1>

              <motion.p
                {...fadeUp(0.16)}
                className="mt-8 max-w-md text-lg font-light leading-relaxed"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                We review every enquiry personally. If there is a fit,
                we will reach out within 24 hours to schedule a private
                consultation.
              </motion.p>

              {/* tagline */}
              <motion.p
                {...fadeUp(0.24)}
                className="mt-10 text-[10px] font-medium uppercase tracking-[0.28em]"
                style={{ color: "rgba(255,255,255,0.18)" }}
              >
                Strategy-first.&nbsp;&nbsp;Execution-obsessed.
              </motion.p>
            </div>

            {/* right — quick info cards */}
            <motion.div
              {...fadeUp(0.12)}
              className="flex flex-col gap-4"
            >
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path
                        d="M9 1.5C5.96 1.5 3.5 3.96 3.5 7c0 4.25 5.5 9.5 5.5 9.5s5.5-5.25 5.5-9.5c0-3.04-2.46-5.5-5.5-5.5zM9 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                  label: "Location",
                  value: "Lagos, Nigeria",
                  sub: "Africa-wide engagements",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path
                        d="M2.5 4.5h13a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1zM1.5 5l7.5 5.5L16.5 5"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                  label: "Email",
                  value: "info@spotliteafrica.com",
                  sub: "We respond within 24 hours",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path
                        d="M3.5 3.5h3l1.5 3.5-1.75 1.25c.9 1.8 2.5 3.4 4.25 4.25L11.75 10.75 15.25 12v3a1.5 1.5 0 0 1-1.5 1.5A12.5 12.5 0 0 1 2 4a1.5 1.5 0 0 1 1.5-1.5z"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                  label: "Phone",
                  value: "+234 704 804 8164",
                  sub: "Available during business hours",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.3" />
                      <path
                        d="M9 5v4l2.5 2.5"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                  label: "Response time",
                  value: "Within 24 hours",
                  sub: "Monday to Friday, 9am – 6pm WAT",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  {...fadeUp(0.15 + i * 0.06)}
                  className="flex items-start gap-4 rounded-xl p-5"
                  style={{
                    border: "1px solid rgba(255,255,255,0.07)",
                    background: "rgba(255,255,255,0.03)",
                  }}
                >
                  <div
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg"
                    style={{
                      background: "rgba(245,200,66,0.12)",
                      color: "#F5C842",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p
                      className="text-[10px] font-medium uppercase tracking-[0.2em]"
                      style={{ color: "rgba(255,255,255,0.28)" }}
                    >
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-white">
                      {item.value}
                    </p>
                    <p
                      className="mt-0.5 text-xs font-light"
                      style={{ color: "rgba(255,255,255,0.35)" }}
                    >
                      {item.sub}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* what to expect strip */}
          <motion.div
            {...fadeUp(0.3)}
            className="mt-20 grid gap-px grid-cols-1 md:grid-cols-3"
            style={{ background: "rgba(255,255,255,0.06)" }}
          >
            {[
              {
                step: "01",
                title: "You enquire",
                desc: "Fill in the form below. Tell us about your business, your budget, and what you need. The more context, the better.",
              },
              {
                step: "02",
                title: "We review",
                desc: "Every enquiry is reviewed personally. If there is a strategic fit, you will hear from us within 24 hours.",
              },
              {
                step: "03",
                title: "We meet",
                desc: "We schedule a private consultation — no pitch decks, no pressure. A genuine conversation about your business.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex flex-col gap-4 px-8 py-8"
                style={{ background: "#0A0A0A" }}
              >
                <span
                  className="text-[11px] font-medium"
                  style={{ color: "rgba(255,255,255,0.2)" }}
                >
                  {item.step}
                </span>
                <div
                  className="h-px w-6"
                  style={{ background: "#F5C842" }}
                />
                <h3
                  className="text-base font-medium text-white"
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm font-light leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.38)" }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT FORM COMPONENT ── */}
      <Contact />

      {/* ── NOT THE RIGHT FIT ── */}
      <section
        className="relative overflow-hidden py-24 px-6 md:px-24"
        style={{ background: "#F8F7F4" }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            opacity: 0.5,
          }}
        />
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">

            {/* left */}
            <motion.div {...fadeUp(0)}>
              <p
                className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.32em]"
                style={{ color: "rgba(0,0,0,0.3)" }}
              >
                <span
                  className="block h-px w-5 flex-shrink-0"
                  style={{ background: "#E8881A" }}
                />
                Not sure yet
              </p>
              <h2
                className="text-2xl font-medium leading-[1.1] tracking-tight md:text-3xl"
                style={{ color: "#0A0A0A" }}
              >
                Not every enquiry becomes a client.
                <span style={{ color: "#E8881A" }}> That is intentional.</span>
              </h2>
              <p
                className="mt-5 text-base font-light leading-relaxed"
                style={{ color: "rgba(0,0,0,0.5)" }}
              >
                We are selective about who we work with — not because we are
                difficult, but because the best work comes from the right
                partnerships. If we do not think there is a fit, we will tell
                you honestly and point you in the right direction.
              </p>
              <p
                className="mt-4 text-base font-light leading-relaxed"
                style={{ color: "rgba(0,0,0,0.5)" }}
              >
                If there is a fit — you will know within 24 hours.
              </p>
            </motion.div>

            {/* right — what makes a good fit */}
            <motion.div {...fadeUp(0.1)}>
              <div
                className="rounded-2xl p-8"
                style={{
                  border: "1.5px solid rgba(0,0,0,0.08)",
                  background: "#FFFFFF",
                }}
              >
                <p
                  className="mb-6 text-[10px] font-medium uppercase tracking-[0.25em]"
                  style={{ color: "rgba(0,0,0,0.3)" }}
                >
                  The right fit looks like this
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    "A real business with a real product or service",
                    "A founder or executive who understands brand investment",
                    "A willingness to commit to a 3-month minimum engagement",
                    "Growth-focused — not looking for quick fixes or overnight results",
                    "Respect for the agency's expertise and process",
                    "Budget aligned with Spotlite Africa's retainer structure",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3"
                    >
                      <span
                        className="mt-[7px] block h-px w-3 flex-shrink-0"
                        style={{ background: "#E8881A" }}
                      />
                      <p
                        className="text-sm font-light leading-snug"
                        style={{ color: "rgba(0,0,0,0.6)" }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="relative overflow-hidden bg-white py-24 px-6 md:px-24">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp(0)} className="mb-14">
            <p
              className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.32em]"
              style={{ color: "rgba(0,0,0,0.3)" }}
            >
              <span
                className="block h-px w-5 flex-shrink-0"
                style={{ background: "#E8881A" }}
              />
              Common questions
            </p>
            <h2
              className="text-2xl font-medium leading-[1.1] tracking-tight md:text-3xl"
              style={{ color: "#0A0A0A" }}
            >
              Before you reach out.
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                q: "How quickly will you respond?",
                a: "Every enquiry submitted through this page is reviewed personally within 24 hours. If there is a fit, we will reach out to schedule a consultation. If there is not, we will tell you honestly.",
              },
              {
                q: "What is your minimum engagement?",
                a: "All Spotlite Africa engagements require a minimum 3-month commitment. Brand and marketing strategy compounds over time — 30-day engagements do not produce meaningful results.",
              },
              {
                q: "How do you charge?",
                a: "Monthly retainers with a 50% deposit at the start of each month and 50% at the end. Production work — video shoots, events, creator campaigns — is billed separately at a 15% management fee on the production budget.",
              },
              {
                q: "Do you work with businesses outside Lagos?",
                a: "Yes. While we are based in Lagos, we work with businesses across Nigeria and Africa. Most of our ongoing work is managed remotely, with in-person sessions for content production where required.",
              },
              {
                q: "What if I am not sure which services I need?",
                a: "Start with a consultation. We will review your current position, identify the gaps, and recommend a scope that makes strategic sense. We do not just pitch everything we offer.",
              },
              {
                q: "Do you work with startups?",
                a: "Yes — emerging brands are one of our two core audiences. We work with startups that are serious about building correctly from day one, not those looking for cheap execution without a strategy.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.06)}
                className="rounded-2xl p-7"
                style={{
                  border: "1.5px solid rgba(0,0,0,0.08)",
                  background: "#FAFAF9",
                }}
              >
                <div
                  className="mb-3 h-px w-6"
                  style={{ background: "#E8881A" }}
                />
                <h3
                  className="mb-3 text-sm font-medium"
                  style={{ color: "#0A0A0A" }}
                >
                  {faq.q}
                </h3>
                <p
                  className="text-sm font-light leading-relaxed"
                  style={{ color: "rgba(0,0,0,0.52)" }}
                >
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}