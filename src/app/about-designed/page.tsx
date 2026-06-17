"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Rocket,
  Wallet,
  Users,
  TrendingUp,
  BadgeCheck,
  Briefcase,
  GraduationCap,
  HeartHandshake,
} from "lucide-react";

export default function ForEmployersAndWorkers() {
  return (
    <section className="relative bg-white overflow-hidden" id="hire">
      {/* ORBIT BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/5" />
        <div className="absolute top-1/2 left-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/5" />
        <div className="absolute top-1/2 left-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/5" />
      </div>

      <div className="relative z-10 py-32">
        <div className="container mx-auto px-6 lg:max-w-screen-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            {/* ================= EMPLOYERS ================= */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border border-black/5 p-10 shadow-[0_30px_90px_rgba(0,0,0,0.06)]"
            >
              <span className="block text-[11px] tracking-[0.4em] uppercase text-[#5f3b86] mb-4">
                For Employers
              </span>

              <h3 className="text-3xl font-light text-black">
                Hire Better. Faster. Safer.
              </h3>

              <p className="mt-4 text-black/70 leading-relaxed max-w-md">
                Optivance removes the stress and risk of blue-collar hiring —
                giving you a dependable, scalable workforce you can trust.
              </p>

              <ul className="mt-8 space-y-4">
                <Item icon={<ShieldCheck />} text="Pre-screened, verified workers" />
                <Item icon={<BadgeCheck />} text="Role-specific training and certification" />
                <Item icon={<Rocket />} text="Faster deployment and replacements" />
                <Item icon={<Wallet />} text="Payroll, tax, and compliance handled" />
                <Item icon={<Users />} text="Reduced theft, absenteeism, and turnover" />
                <Item icon={<TrendingUp />} text="Scalable workforce on demand" />
              </ul>

              <p className="mt-8 text-black/60 italic max-w-md">
                We act as your trusted workforce partner, not just a recruiter.
              </p>
            </motion.div>

            {/* ================= WORKERS ================= */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border border-black/5 p-10 shadow-[0_30px_90px_rgba(0,0,0,0.06)]"
            >
              <span className="block text-[11px] tracking-[0.4em] uppercase text-[#61abbb] mb-4">
                For Workers
              </span>

              <h3 className="text-3xl font-light text-black">
                More Than a Job. A Career Path.
              </h3>

              <p className="mt-4 text-black/70 leading-relaxed max-w-md">
                Optivance helps workers move from informal jobs to structured,
                protected employment with dignity and growth.
              </p>

              <ul className="mt-8 space-y-4">
                <Item icon={<Briefcase />} text="Job matching based on skills" />
                <Item icon={<GraduationCap />} text="Free or subsidized training" />
                <Item icon={<BadgeCheck />} text="Digital certifications employers trust" />
                <Item icon={<Wallet />} text="Stable income and payroll transparency" />
                <Item icon={<ShieldCheck />} text="Tax and insurance coverage" />
                <Item icon={<TrendingUp />} text="Opportunities to grow and earn more" />
              </ul>

              <p className="mt-8 text-black/60 italic max-w-md">
                All through WhatsApp, in simple, familiar language.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------
   LIST ITEM
------------------------------------- */
function Item({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <li className="flex items-start gap-4">
      <div className="h-10 w-10 rounded-xl bg-black/5 text-black flex items-center justify-center">
        {icon}
      </div>
      <span className="text-black/80 text-sm leading-relaxed">{text}</span>
    </li>
  );
}
