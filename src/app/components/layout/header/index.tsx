"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [step, setStep] = useState<"choice" | "form">("choice");
  const [type, setType] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen || openModal ? "hidden" : "";
  }, [menuOpen, openModal]);

  return (
    <>
      {/* ================= NAV ================= */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white text-black shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
            : "bg-transparent text-white"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">

            {/* 🔥 LOGO SWITCH */}
            <Link href="/">
              <Image
                src={
                  scrolled
                    ? "/images/logo/saa.svg"        // original logo
                    : "/images/logo/saawhite.png" // white logo
                }
                alt="Flight Africa"
                width={150}
                height={20}
                className="object-contain transition-all duration-300"
              />
            </Link>

            {/* NAV */}
            <nav className="hidden md:flex items-center gap-12">
              <NavItem href="/">Home</NavItem>
              <NavItem href="/established">Established</NavItem>
              <NavItem href="/emerging">Emerging</NavItem>
              <NavItem href="/work">Work</NavItem>

              {/* CTA */}
              <button
                onClick={() => setOpenModal(true)}
                className="ml-4 px-6 py-2 rounded-full border border-black/20 text-[11px] tracking-[0.3em] uppercase hover:border-[#c2410c] transition"
              >
                Consultation
              </button>
            </nav>

            {/* MOBILE */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden z-50"
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {openModal && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setOpenModal(false);
              setStep("choice");
            }}
          >
            <motion.div
              className="bg-[#111] w-full max-w-xl p-10 border border-white/10 text-white"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >

              {/* STEP 1 */}
              {step === "choice" && (
                <>
                  <h2 className="text-2xl mb-8 text-white">
                    Who are you?
                  </h2>

                  <div className="space-y-4">

                    {[
                      "Established Company",
                      "Emerging Brand",
                      "Other",
                    ].map((item) => (
                      <button
                        key={item}
                        onClick={() => {
                          setType(item);
                          setStep("form");
                        }}
                        className="w-full text-left p-4 border border-white/10 text-white hover:border-[#c2410c] transition"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {/* STEP 2 */}
              {step === "form" && (
                <form
                  action="https://formsubmit.co/info@spotliteafrica.com"
                  method="POST"
                  className="space-y-6"
                >
                  <h2 className="text-xl text-white">{type}</h2>

                  <input type="hidden" name="_captcha" value="false" />

                  <input
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full p-3 bg-transparent border border-white/10 text-white placeholder-white/40 focus:border-[#c2410c] outline-none"
                  />

                  <input
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full p-3 bg-transparent border border-white/10 text-white placeholder-white/40 focus:border-[#c2410c] outline-none"
                  />

                  <textarea
                    name="message"
                    placeholder="Tell us about your project"
                    rows={4}
                    className="w-full p-3 bg-transparent border border-white/10 text-white placeholder-white/40 focus:border-[#c2410c] outline-none"
                  />

                  <button
                    type="submit"
                    className="w-full py-3 border border-white/20 text-white hover:border-[#c2410c] transition"
                  >
                    Send Request →
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* NAV ITEM */
function NavItem({ href, children }: any) {
  return (
    <Link
      href={href}
      className="relative text-[11px] tracking-[0.3em] uppercase group"
    >
      {children}
      <span className="absolute left-1/2 bottom-[-6px] h-[1px] w-0 bg-gradient-to-r from-[#c2410c] to-[#e5e5e5] group-hover:w-full group-hover:left-0 transition-all duration-500" />
    </Link>
  );
}