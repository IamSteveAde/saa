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
        <div className="max-w-screen-xl mx-auto px-1 sm:px-2 lg:px-2">
          <div className="flex items-center justify-between h-16 sm:h-20">

            {/* LOGO */}
            <Link href="/">
  <Image
    src={scrolled 
      ? "/images/logo/shh.svg" 
      : "/images/logo/shh.svg"}
    alt="Spotlite Africa"
    width={140}
    height={24}
    priority
    className="object-contain transition-all duration-300"
  />
</Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-12">
              <NavItem href="/">Home</NavItem>
              <NavItem href="/about">About us</NavItem>
              <NavItem href="/services">Services</NavItem>
              <NavItem href="/work">Case Studies</NavItem>
              <NavItem href="/contact">Contact</NavItem>

              
            </nav>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden z-50"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-black text-white z-40 flex flex-col items-center justify-center space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {["Home", "Established", "Emerging", "Work"].map((item) => (
              <Link
                key={item}
                href={
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase()}`
                }
                onClick={() => setMenuOpen(false)}
                className="text-lg tracking-[0.3em] uppercase"
              >
                {item}
              </Link>
            ))}

            <button
              onClick={() => {
                setMenuOpen(false);
                setOpenModal(true);
              }}
              className="mt-6 px-6 py-3 border border-white/20 uppercase tracking-[0.3em]"
            >
              Consultation
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {openModal && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setOpenModal(false);
              setStep("choice");
            }}
          >
            <motion.div
              className="bg-[#111] w-full max-w-lg sm:max-w-xl p-6 sm:p-10 border border-white/10 text-white"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* STEP 1 */}
              {step === "choice" && (
                <>
                  <h2 className="text-xl sm:text-2xl mb-6 sm:mb-8">
                    Who are you?
                  </h2>

                  <div className="space-y-3 sm:space-y-4">
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
                        className="w-full text-left p-3 sm:p-4 border border-white/10 hover:border-[#c2410c] transition"
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
                  className="space-y-4 sm:space-y-6"
                >
                  <h2 className="text-lg sm:text-xl">{type}</h2>

                  <input type="hidden" name="_captcha" value="false" />

                  <input
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full p-3 bg-transparent border border-white/10 placeholder-white/40 focus:border-[#c2410c] outline-none"
                  />

                  <input
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full p-3 bg-transparent border border-white/10 placeholder-white/40 focus:border-[#c2410c] outline-none"
                  />

                  <textarea
                    name="message"
                    placeholder="Tell us about your project"
                    rows={4}
                    className="w-full p-3 bg-transparent border border-white/10 placeholder-white/40 focus:border-[#c2410c] outline-none"
                  />

                  <button
                    type="submit"
                    className="w-full py-3 border border-white/20 hover:border-[#c2410c] transition"
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