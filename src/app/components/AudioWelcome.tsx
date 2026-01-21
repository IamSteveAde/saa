"use client";

import { useRef, useState } from "react";
import { Volume2, X } from "lucide-react";

export default function AudioWelcome() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [showPrompt, setShowPrompt] = useState(true);

  const playAudio = () => {
    if (!audioRef.current) return;

    audioRef.current.muted = false;
    audioRef.current.play().then(() => {
      setShowPrompt(false);
    });
  };

  const dismiss = () => {
    setShowPrompt(false);
  };

  return (
    <>
      {/* AUDIO */}
      <audio ref={audioRef} src="/audio/welcomes.mp3" preload="auto" />

      {showPrompt && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[440px]">
          <div
            className="
              relative
              rounded-2xl
              bg-white
              px-5 py-4
              shadow-[0_30px_80px_rgba(0,0,0,0.15)]
              border border-black/5
            "
          >
            {/* Close */}
            <button
              onClick={dismiss}
              aria-label="Dismiss audio prompt"
              className="absolute top-3 right-3 text-black/40 hover:text-black transition"
            >
              <X size={16} />
            </button>

            {/* Content */}
            <div className="flex items-start gap-3">
              <Volume2 size={18} className="text-[#461248] mt-1 shrink-0" />

              <div className="text-sm text-black/80 leading-relaxed">
                <strong className="block text-black mb-1">
                  Welcome to Spotlite Africa Agency
                </strong>

                {/* Mobile copy */}
                <span className="block sm:hidden">
                  Listen to a short overview of how we help businesses build
                  strong brands and grow through digital marketing.
                </span>

                {/* Desktop copy */}
                <span className="hidden sm:block">
                  Would you like a brief audio overview of how we help registered
                  businesses build visibility, convert attention, and scale
                  revenue through strategy-led digital marketing?
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:justify-end">
              <button
                onClick={playAudio}
                className="
                  w-full sm:w-auto
                  rounded-xl
                  bg-[#461248]
                  px-5 py-3
                  text-xs
                  tracking-wide
                  uppercase
                  text-white
                  hover:opacity-90
                  transition
                "
              >
                Play Audio
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
