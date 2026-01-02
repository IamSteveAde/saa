"use client";

import { useRef, useState } from "react";
import { Volume2, X } from "lucide-react";

export default function AudioWelcome() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [showPrompt, setShowPrompt] = useState(true);

  const playAudio = () => {
    if (!audioRef.current) return;

    audioRef.current.muted = false;

    audioRef.current
      .play()
      .then(() => {
        setShowPrompt(false);
      })
      .catch(() => {
        // silently fail if browser blocks (rare after click)
      });
  };

  const dismiss = () => {
    setShowPrompt(false);
  };

  return (
    <>
      {/* Audio Element */}
      <audio
        ref={audioRef}
        src="/audio/welcome.m4a"
        preload="auto"
      />

      {/* Permission Popup */}
      {showPrompt && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <div className="flex items-center gap-4 rounded-2xl bg-white px-6 py-4 shadow-[0_30px_80px_rgba(0,0,0,0.15)] border border-black/5 max-w-[420px]">
            <Volume2 size={18} className="text-[#5f3b86] flex-shrink-0" />

            <div className="text-sm text-black/80">
              <strong className="block text-black mb-1">
                Welcome to Digital Inclusion Initiative
              </strong>
              Would you like to hear a brief audio introduction?
            </div>

            <button
              onClick={playAudio}
              className="ml-2 rounded-xl bg-[#5f3b86] px-4 py-2 text-xs tracking-wide uppercase text-white hover:opacity-90 transition"
            >
              Unmute & Play
            </button>

            <button
              onClick={dismiss}
              className="ml-1 text-black/40 hover:text-black transition"
              aria-label="Dismiss audio prompt"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
