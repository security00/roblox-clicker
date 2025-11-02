"use client";

import { useEffect, useRef, useState } from "react";
import SimpleClicker from "./SimpleClicker";

interface Props {
  title: string;
  src: string;
  theme?: "space" | "idle" | "mine" | "hero" | "farm" | "factory" | "default";
  timeoutMs?: number; // switch suggestion if iframe doesn't load in time
  defaultLocal?: boolean; // start directly in local mode
}

// Renders an iframe game with a user-visible fallback to a local SimpleClicker.
// If the iframe fails to load (or times out), user can instantly switch to local mode.
export default function GameEmbedWithFallback({ title, src, theme = "default", timeoutMs = 8000, defaultLocal = false }: Props) {
  const [useLocal, setUseLocal] = useState(!!defaultLocal);
  const [loaded, setLoaded] = useState(false);
  const [timedOut, setTimedOut] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    // Allow forcing local mode via query (?local=1)
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get('local') === '1') {
        setUseLocal(true);
      }
    } catch {}

    // Start a timer; if the iframe hasn't fired onLoad after timeoutMs, show timeout hint
    timerRef.current = window.setTimeout(() => {
      setTimedOut(true);
      // Auto-switch to local if still not loaded and user hasn't chosen
      setUseLocal((prev) => (loaded ? prev : true));
    }, timeoutMs);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [timeoutMs]);

  const onLoad = () => {
    setLoaded(true);
    if (timerRef.current) window.clearTimeout(timerRef.current);
  };

  return (
    // Use absolute fill so it works reliably inside aspect-ratio wrappers
    <div className="absolute inset-0 flex flex-col">
    <noscript>
      <div className="p-3 text-xs text-gray-200 bg-black/60" style={{ fontFamily: 'var(--font-roboto)' }}>
        JavaScript is disabled. The interactive embed requires JS. You can read about {title} below or play the Local Mode when JS is enabled.
      </div>
    </noscript>
      <div className="flex items-center justify-between p-2 text-xs bg-black/50 text-gray-200" style={{ fontFamily: 'var(--font-roboto)' }}>
        <div className="flex items-center gap-2">
          <span className="font-bold" style={{ fontFamily: 'var(--font-press-start)', fontSize: '0.7rem' }}>{title}</span>
          {!useLocal && !loaded && (
            <span className="text-gray-400">Loading external game…</span>
          )}
          {!useLocal && timedOut && !loaded && (
            <span className="text-orange-300">Seems slow to load. You can switch to Local Mode.</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setUseLocal((v) => !v)}
            className="btn-pixel px-3 py-1 border-2 text-white"
            style={{ borderColor: '#e63946', background: useLocal ? '#2a2a2a' : '#1e1e1e' }}
            title={useLocal ? 'Switch back to external embed' : 'Use Local Mode if the embed does not load'}
          >
            {useLocal ? 'Use Embed' : 'Use Local Mode'}
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-hidden bg-black">
        {useLocal ? (
          <SimpleClicker title={title} theme={theme} />
        ) : (
          <iframe
            src={src}
            className="w-full h-full"
            allow="autoplay; fullscreen"
            allowFullScreen
            loading="eager"
            title={`${title} Game`}
            onLoad={onLoad}
            onError={() => setUseLocal(true)}
          />
        )}
      </div>
    </div>
  );
}


