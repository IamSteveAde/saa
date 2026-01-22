"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Label (Desktop only) */}
      <div
        className="
          hidden md:flex
          items-center
          rounded-full
          bg-black
          px-4 py-2
          text-xs
          text-white
          shadow-[0_10px_30px_rgba(0,0,0,0.25)]
        "
      >
        Chat with us on WhatsApp
      </div>

      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/2347048048164?text=Hello%20I’m%20interested%20in%20working%20with%20Spotlite%20Africa%20Agency"
        target="_blank"
        aria-label="Chat with Spotlite Africa on WhatsApp"
        className="
          flex items-center justify-center
          h-14 w-14
          rounded-full
          bg-[#25D366]
          text-white
          shadow-[0_10px_30px_rgba(0,0,0,0.25)]
          transition
          hover:scale-105
        "
      >
        <MessageCircle size={26} />
      </Link>
    </div>
  );
}
