"use client";

import { useEffect, useMemo, useState } from "react";

interface SimpleClickerProps {
  title: string;
  theme?: "space" | "idle" | "mine" | "hero" | "farm" | "factory" | "default";
}

// Lightweight, self-contained clicker that works fully client-side (no network).
export default function SimpleClicker({ title, theme = "default" }: SimpleClickerProps) {
  // Core state
  const [coins, setCoins] = useState(0);
  const [perClick, setPerClick] = useState(1);
  const [cps, setCps] = useState(0); // coins per second
  const [clickLvl, setClickLvl] = useState(0);
  const [autoLvl, setAutoLvl] = useState(0);

  // Meta progression
  const [prestige, setPrestige] = useState(0); // number of prestiges
  const prestigeMult = 1 + prestige * 0.25; // 25% more income per prestige

  // Achievements (simple milestones)
  const [ach, setAch] = useState<{ [id: string]: boolean }>({});

  // Persistence key per game
  const storageKey = `simple-clicker:${title.toLowerCase().replace(/\s+/g, '-')}`;

  // Load from localStorage once
  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const s = JSON.parse(raw);
        setCoins(s.coins ?? 0);
        setPerClick(s.perClick ?? 1);
        setCps(s.cps ?? 0);
        setClickLvl(s.clickLvl ?? 0);
        setAutoLvl(s.autoLvl ?? 0);
        setPrestige(s.prestige ?? 0);
        setAch(s.ach ?? {});
      }
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Save when important state changes
  useEffect(() => {
    try {
      const s = { coins, perClick, cps, clickLvl, autoLvl, prestige, ach };
      localStorage.setItem(storageKey, JSON.stringify(s));
    } catch {}
  }, [coins, perClick, cps, clickLvl, autoLvl, prestige, ach, storageKey]);

  // Costs scale up as the player buys upgrades
  const clickCost = useMemo(() => Math.floor(25 * Math.pow(1.5, clickLvl)), [clickLvl]);
  const autoCost = useMemo(() => Math.floor(50 * Math.pow(1.6, autoLvl)), [autoLvl]);

  // Passive income loop
  useEffect(() => {
    const id = setInterval(() => setCoins((c) => c + Math.floor(cps * prestigeMult)), 1000);
    return () => clearInterval(id);
  }, [cps, prestigeMult]);

  // Click handler with prestige multiplier
  const handleClick = () => setCoins(coins + Math.floor(perClick * prestigeMult));

  const buyClickUpgrade = () => {
    if (coins < clickCost) return;
    setCoins(coins - clickCost);
    setClickLvl(clickLvl + 1);
    setPerClick(perClick + 1);
  };

  const buyAuto = () => {
    if (coins < autoCost) return;
    setCoins(coins - autoCost);
    setAutoLvl(autoLvl + 1);
    setCps(cps + 1);
  };

  // Prestige: reset run for permanent multiplier
  const canPrestige = coins >= 10000 || (clickLvl + autoLvl) >= 30;
  const doPrestige = () => {
    if (!canPrestige) return;
    setPrestige(prestige + 1);
    setCoins(0); setPerClick(1); setCps(0); setClickLvl(0); setAutoLvl(0);
  };

  // Unlock achievements (coins milestones and first purchases)
  useEffect(() => {
    const next = { ...ach };
    if (coins >= 100 && !next["c100"]) next["c100"] = true;
    if (coins >= 1000 && !next["c1k"]) next["c1k"] = true;
    if (coins >= 10000 && !next["c10k"]) next["c10k"] = true;
    if (clickLvl >= 1 && !next["click1"]) next["click1"] = true;
    if (autoLvl >= 1 && !next["auto1"]) next["auto1"] = true;
    if (prestige >= 1 && !next["p1"]) next["p1"] = true;
    if (JSON.stringify(next) !== JSON.stringify(ach)) setAch(next);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coins, clickLvl, autoLvl, prestige]);

  const palette = {
    default: { icon: "🎮", accent: "#e63946" },
    space: { icon: "🚀", accent: "#4cc9f0" },
    idle: { icon: "🕒", accent: "#ffd700" },
    mine: { icon: "⛏️", accent: "#a3b18a" },
    hero: { icon: "🗡️", accent: "#8ecae6" },
    farm: { icon: "🌾", accent: "#90be6d" },
    factory: { icon: "🏭", accent: "#f8961e" },
  } as const;

  const { icon, accent } = palette[theme] ?? palette.default;

  // Device-only best stats
  const bestCoins = useMemo(() => {
    try {
      const raw = localStorage.getItem(storageKey + ":bestCoins");
      return raw ? parseInt(raw, 10) : 0;
    } catch { return 0; }
  }, [storageKey]);
  useEffect(() => {
    try {
      if (coins > bestCoins) localStorage.setItem(storageKey + ":bestCoins", String(coins));
    } catch {}
  }, [coins, bestCoins, storageKey]);

  return (
    <div className="w-full h-full flex flex-col" style={{ fontFamily: "var(--font-roboto)" }}>
      {/* Top Bar */}
      <div className="flex items-center justify-between p-3 text-white text-sm bg-black/50">
        <div className="flex items-center gap-2">
          <span className="text-xl">{icon}</span>
          <span className="font-bold" style={{ fontFamily: "var(--font-press-start)", fontSize: "0.75rem" }}>{title}</span>
        </div>
        <div className="flex items-center gap-4">
          <span>Coins: <strong>{coins}</strong></span>
          <span>+{Math.floor(perClick * prestigeMult)}/click</span>
          <span>{Math.floor(cps * prestigeMult)}/s</span>
          <span>Prestige x{prestigeMult.toFixed(2)}</span>
        </div>
      </div>

      {/* Play Area */}
      <div className="flex-1 grid md:grid-cols-3 gap-4 p-4 bg-[#111] min-h-0">
        <div className="md:col-span-2 flex flex-col items-center justify-center gap-4">
          <button
            onClick={handleClick}
            className="btn-pixel text-white font-bold px-8 py-6 border-4"
            style={{ borderColor: accent, background: "#222" }}
          >
            <span className="text-2xl mr-2">{icon}</span>
            CLICK (+{Math.floor(perClick * prestigeMult)})
          </button>

          <div className="text-gray-300 text-center">
            <p>Click to earn coins. Buy upgrades to speed up. Prestige to gain a permanent multiplier.</p>
          </div>
        </div>

        {/* Right column: Upgrades + Meta */}
        <div className="flex flex-col gap-3 overflow-auto">
          {/* Upgrades */}
          <button
            onClick={buyClickUpgrade}
            disabled={coins < clickCost}
            className="btn-pixel text-left text-white p-3 border-2 disabled:opacity-60"
            style={{ borderColor: accent, background: "#1e1e1e" }}
          >
            <div className="font-bold" style={{ color: accent }}>Click Power Lv.{clickLvl}</div>
            <div className="text-xs text-gray-300">Increase coins per click by 1</div>
            <div className="text-xs">Cost: {clickCost}</div>
          </button>

          <button
            onClick={buyAuto}
            disabled={coins < autoCost}
            className="btn-pixel text-left text-white p-3 border-2 disabled:opacity-60"
            style={{ borderColor: accent, background: "#1e1e1e" }}
          >
            <div className="font-bold" style={{ color: accent }}>Auto Clicker Lv.{autoLvl}</div>
            <div className="text-xs text-gray-300">Adds +1 coin per second</div>
            <div className="text-xs">Cost: {autoCost}</div>
          </button>

          {/* Meta: Prestige */}
          <div className="btn-pixel text-left text-white p-3 border-2" style={{ borderColor: "#555", background: "#1a1a1a" }}>
            <div className="font-bold">Prestige</div>
            <div className="text-xs text-gray-300 mb-2">Reset your progress to gain +25% permanent income. Current: x{prestigeMult.toFixed(2)}</div>
            <button
              onClick={doPrestige}
              disabled={!canPrestige}
              className="mt-1 px-3 py-1 border-2 disabled:opacity-60"
              style={{ borderColor: canPrestige ? accent : "#444", background: "#222" }}
            >
              {canPrestige ? 'Prestige Now' : 'Prestige locked (need 10,000 coins or Lv.30 total)'}
            </button>
          </div>

          {/* Achievements */}
          <div className="btn-pixel text-left text-white p-3 border-2" style={{ borderColor: "#555", background: "#171717" }}>
            <div className="font-bold">Achievements</div>
            <ul className="text-xs text-gray-300 mt-1 space-y-1">
              <li>{ach.c100 ? '✅' : '⬜'} 100 Coins</li>
              <li>{ach.c1k ? '✅' : '⬜'} 1,000 Coins</li>
              <li>{ach.c10k ? '✅' : '⬜'} 10,000 Coins</li>
              <li>{ach.click1 ? '✅' : '⬜'} First Click Power</li>
              <li>{ach.auto1 ? '✅' : '⬜'} First Auto Clicker</li>
              <li>{ach.p1 ? '✅' : '⬜'} First Prestige</li>
            </ul>
          </div>

          {/* Reset */}
          <button
            onClick={() => { setCoins(0); setPerClick(1); setCps(0); setClickLvl(0); setAutoLvl(0); setAch({}); }}
            className="btn-pixel text-left text-white p-3 border-2"
            style={{ borderColor: "#444", background: "#1a1a1a" }}
          >
            <div className="font-bold">Reset Progress</div>
            <div className="text-xs text-gray-300">Start fresh if you want a new run</div>
          </button>
        </div>
      </div>
    </div>
  );
}
