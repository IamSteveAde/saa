"use client";

import { useEffect } from "react";

export default function ChatWidget() {
  useEffect(() => {
    // Prevent loading the script multiple times
    if (document.getElementById("chatbase-script")) return;

    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = "chatbase-script";
    script.async = true;

    // These two are REQUIRED by Chatbase
    script.setAttribute("domain", "www.chatbase.co");
    script.setAttribute("chatbotId", "rg3u5OLT9QLhs5DWdLdzJ");

    document.body.appendChild(script);

    return () => {
      // Optional cleanup (usually you DON’T remove it)
      // document.body.removeChild(script);
    };
  }, []);

  return null; // widget handles its own UI
}
