"use client";

import { useState } from "react";
import SimpleClicker from "./SimpleClicker";

interface Props {
  title: string;
  iframeSrc: string;
  theme?: "space" | "idle" | "mine" | "hero" | "farm" | "factory" | "default";
  // Allow pages to choose the initial mode; default to local for reliability
  defaultMode?: "embed" | "local";
}

// Switcher between third-party iframe and local fallback.
export default function EmbedGameSwitcher({ title, iframeSrc, theme = "default", defaultMode = "local" }: Props) {
  const [mode, setMode] = useState<"embed" | "local">(defaultMode);
  const [overlayGone, setOverlayGone] = useState(false);

  return (
    <div className="w-full">
      <div className="flex gap-2 mb-3">
        <button
          onClick={() => setMode("embed")}
          className={(mode === "embed" ? "px-3 py-2 border-2 btn-pixel bg-[#e63946] text-white" : "px-3 py-2 border-2 btn-pixel bg-[#1f1f1f] text-gray-300")}
          style={{ borderColor: "#e63946" }}
        >
          Embedded Game
        </button>
        <button
          onClick={() => setMode("local")}
          className={(mode === "local" ? "px-3 py-2 border-2 btn-pixel bg-[#ffd700] text-black" : "px-3 py-2 border-2 btn-pixel bg-[#1f1f1f] text-gray-300")}
          style={{ borderColor: (mode === "local" ? "#ffd700" : "#444") }}
        >
          Local Mode (No External)
        </button>
      </div>

      {mode === "embed" ? (
        <div className="relative bg-black border-4 border-[#e63946] aspect-video overflow-hidden">
          {/* Optional overlay to help focus iframe on first click if the embed needs focus */}
          {!overlayGone && (
            <button
              onClick={() => setOverlayGone(true)}
              className="absolute inset-0 z-10 flex items-center justify-center text-white bg-black/40"
            >
              Click to play (focus)
            </button>
          )}
          <iframe
            src={iframeSrc}
            className="w-full h-full"
            // Allow additional capabilities some embeds require
            allow="autoplay; fullscreen; clipboard-write; gamepad; encrypted-media"
            allowFullScreen
            loading="lazy"
            title={title + " Game"}
          />
        </div>
      ) : (
        <div className="relative bg-black border-4 border-[#e63946] aspect-video overflow-hidden">
          <SimpleClicker title={title} theme={theme} />
        </div>
      )}
    </div>
  );
}
