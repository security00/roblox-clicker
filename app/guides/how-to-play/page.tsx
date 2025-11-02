import type { Metadata } from 'next';
import Link from 'next/link';
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'How to Play Roblox Clicker - Complete Beginner Guide',
  description: 'Step-by-step guide to play Roblox Clicker: controls, upgrade priorities, active vs idle builds, first 10 minutes walkthrough, prestige timing, tips, and FAQs.',
  alternates: { canonical: 'https://roblox-clicker.net/guides/how-to-play' },
  openGraph: {
    title: 'How to Play Roblox Clicker - Complete Beginner Guide',
    description: 'Controls, upgrade paths, active vs idle strategies, first 10 minutes, prestige timing, common mistakes, and troubleshooting.',
    url: 'https://roblox-clicker.net/guides/how-to-play',
    type: 'article'
  }
};

export default function HowToPlayPage() {
  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Play Roblox Clicker',
    description: 'A practical, step-by-step introduction to playing Roblox Clicker efficiently from the first minute to your first prestige.',
    totalTime: 'PT10M',
    supply: [{ '@type': 'HowToSupply', name: 'Browser with internet access' }],
    tool: [{ '@type': 'HowToTool', name: 'Mouse or touch screen' }],
    step: [
      { '@type': 'HowToStep', name: 'Open the game', text: 'Open the game page and wait for the game area to load.' },
      { '@type': 'HowToStep', name: 'Start clicking', text: 'Click the main button to earn coins and unlock your first upgrade.' },
      { '@type': 'HowToStep', name: 'Buy first upgrades', text: 'Purchase per-click power and the first auto-clicker as soon as they are affordable.' },
      { '@type': 'HowToStep', name: 'Balance income', text: 'Alternate between click-power and passive income upgrades to keep progress smooth.' },
      { '@type': 'HowToStep', name: 'Prestige', text: 'When progress slows significantly, prestige to gain permanent multipliers and restart stronger.' }
    ]
  } as const;

  return (
    <div className="bg-[#1a1a1a]">
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-press-start)' }}>
            HOW TO PLAY ROBLOX CLICKER
          </h1>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
          />

          <div className="bg-[#2a2a2a] border-2 border-[#e63946] p-8 mb-6 text-gray-300" style={{ fontFamily: 'var(--font-roboto)' }}>
            <p>
              This guide teaches you the core loop, the fastest beginner upgrade path, and when to prestige
              to accelerate long-term growth. It also includes troubleshooting and a quick glossary.
            </p>
          </div>

          <nav className="mb-8 text-sm text-gray-300" style={{ fontFamily: 'var(--font-roboto)' }}>
            <ol className="list-decimal list-inside space-y-1">
              <li><a href="#controls" className="underline">Controls & UI</a></li>
              <li><a href="#first-10" className="underline">First 10 Minutes (Walkthrough)</a></li>
              <li><a href="#upgrades" className="underline">Upgrade Priorities</a></li>
              <li><a href="#builds" className="underline">Active vs Idle Builds</a></li>
              <li><a href="#prestige" className="underline">When to Prestige</a></li>
              <li><a href="#mistakes" className="underline">Common Mistakes</a></li>
              <li><a href="#faq" className="underline">FAQ</a></li>
              <li><a href="#troubleshoot" className="underline">Troubleshooting</a></li>
              <li><a href="#glossary" className="underline">Glossary</a></li>
            </ol>
          </nav>

          <section id="controls" className="bg-[#2a2a2a] border-2 border-[#e63946] p-6 mb-6">
            <h2 className="text-2xl font-bold text-[#ffd700] mb-4" style={{ fontFamily: 'var(--font-press-start)' }}>Controls & UI</h2>
            <ul className="space-y-2 text-gray-300" style={{ fontFamily: 'var(--font-roboto)' }}>
              <li>Click or tap the main button to earn coins.</li>
              <li>Use the upgrades panel to buy permanent boosts and auto-clickers.</li>
              <li>Watch the multiplier and income-per-second to measure progress.</li>
              <li>Settings and progress are saved locally in your browser (localStorage).</li>
            </ul>
          </section>

          <section id="first-10" className="bg-[#2a2a2a] border-2 border-[#e63946] p-6 mb-6">
            <h2 className="text-2xl font-bold text-[#ffd700] mb-4" style={{ fontFamily: 'var(--font-press-start)' }}>First 10 Minutes (Walkthrough)</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-300" style={{ fontFamily: 'var(--font-roboto)' }}>
              <li>Minutes 0–1: Click actively to unlock the first per-click upgrade. Buy it immediately.</li>
              <li>Minutes 1–3: Save for the first auto-clicker. Keep clicking while saving.</li>
              <li>Minutes 3–6: Alternate between per-click and auto income upgrades. Keep both rising.</li>
              <li>Minutes 6–8: Add a multiplier upgrade if available; it scales all sources.</li>
              <li>Minutes 8–10: Evaluate progress. If upgrades become too expensive relative to income, prepare for prestige.</li>
            </ol>
          </section>

          <section id="upgrades" className="bg-[#2a2a2a] border-2 border-[#e63946] p-6 mb-6">
            <h2 className="text-2xl font-bold text-[#ffd700] mb-4" style={{ fontFamily: 'var(--font-press-start)' }}>Upgrade Priorities</h2>
            <ul className="space-y-2 text-gray-300" style={{ fontFamily: 'var(--font-roboto)' }}>
              <li>Early: per-click power 1–3 ranks; first auto-clicker; cheap cost-reduction or multiplier if offered.</li>
              <li>Mid: balance auto income and per-click so neither bottlenecks; buy upgrades with best cost/benefit.</li>
              <li>Late pre-prestige: push global multipliers; stop buying low-value upgrades before a reset.</li>
            </ul>
          </section>

          <section id="builds" className="bg-[#2a2a2a] border-2 border-[#e63946] p-6 mb-6">
            <h2 className="text-2xl font-bold text-[#ffd700] mb-4" style={{ fontFamily: 'var(--font-press-start)' }}>Active vs Idle Builds</h2>
            <div className="text-gray-300 space-y-3" style={{ fontFamily: 'var(--font-roboto)' }}>
              <p><strong>Active:</strong> Focus on per-click power and click multipliers. Best when you can play continuously.</p>
              <p><strong>Idle:</strong> Prioritize auto-clickers and passive multipliers. Best for background or mobile play.</p>
              <p>Most players do a hybrid: start active to spike early income, then lean into idle for stability.</p>
            </div>
          </section>

          <section id="prestige" className="bg-[#2a2a2a] border-2 border-[#e63946] p-6 mb-6">
            <h2 className="text-2xl font-bold text-[#ffd700] mb-4" style={{ fontFamily: 'var(--font-press-start)' }}>When to Prestige</h2>
            <div className="text-gray-300 space-y-2" style={{ fontFamily: 'var(--font-roboto)' }}>
              <p>Prestige when your next meaningful upgrade takes far longer than previous ones or when a prestige
              will grant a strong permanent multiplier (e.g., 10%+ total boost for the next run).</p>
              <p>Rule of thumb: after your first solid multiplier and 1–2 auto-clickers, a reset usually speeds up future progress.</p>
            </div>
          </section>

          <section id="mistakes" className="bg-[#2a2a2a] border-2 border-[#e63946] p-6 mb-6">
            <h2 className="text-2xl font-bold text-[#ffd700] mb-4" style={{ fontFamily: 'var(--font-press-start)' }}>Common Mistakes</h2>
            <ul className="space-y-2 text-gray-300" style={{ fontFamily: 'var(--font-roboto)' }}>
              <li>Hoarding coins instead of buying quick-payback upgrades.</li>
              <li>Over-investing in a single source (only clicks or only idle) causing bottlenecks.</li>
              <li>Prestiging too early without enough permanent gain, or too late when progress stalls.</li>
            </ul>
          </section>

          <section id="faq" className="bg-[#2a2a2a] border-2 border-[#e63946] p-6 mb-6">
            <h2 className="text-2xl font-bold text-[#ffd700] mb-4" style={{ fontFamily: 'var(--font-press-start)' }}>FAQ</h2>
            <div className="space-y-3 text-gray-300" style={{ fontFamily: 'var(--font-roboto)' }}>
              <div>
                <p className="font-bold text-white">Do I need to keep the tab active?</p>
                <p>Passive income runs in the background as long as your device allows it; some devices suspend inactive tabs.</p>
              </div>
              <div>
                <p className="font-bold text-white">Is there a best upgrade order?</p>
                <p>No single order fits all versions. Use cost-per-gain: buy the upgrade that increases income the most per coin spent.</p>
              </div>
              <div>
                <p className="font-bold text-white">Can I play without external embeds?</p>
                <p>Yes. Many pages include a Local Mode that runs directly in your browser.</p>
              </div>
            </div>
          </section>

          <section id="troubleshoot" className="bg-[#2a2a2a] border-2 border-[#e63946] p-6 mb-6">
            <h2 className="text-2xl font-bold text-[#ffd700] mb-4" style={{ fontFamily: 'var(--font-press-start)' }}>Troubleshooting</h2>
            <ul className="space-y-2 text-gray-300" style={{ fontFamily: 'var(--font-roboto)' }}>
              <li>Game not loading: try Local Mode or check your connection; some embeds may be blocked by region or extensions.</li>
              <li>Progress lost: make sure your browser allows localStorage and you did not clear site data.</li>
              <li>Lag: lower animation settings (if available) or close other heavy tabs.</li>
            </ul>
          </section>

          <section id="glossary" className="bg-[#2a2a2a] border-2 border-[#e63946] p-6">
            <h2 className="text-2xl font-bold text-[#ffd700] mb-4" style={{ fontFamily: 'var(--font-press-start)' }}>Glossary</h2>
            <dl className="grid md:grid-cols-2 gap-4 text-gray-300" style={{ fontFamily: 'var(--font-roboto)' }}>
              <div>
                <dt className="font-bold text-white">Per-click Power</dt>
                <dd>Income gained per manual click.</dd>
              </div>
              <div>
                <dt className="font-bold text-white">Auto-clicker</dt>
                <dd>Passive income source that adds coins automatically over time.</dd>
              </div>
              <div>
                <dt className="font-bold text-white">Multiplier</dt>
                <dd>A bonus that scales multiple income sources at once.</dd>
              </div>
              <div>
                <dt className="font-bold text-white">Prestige</dt>
                <dd>Reset current progress to gain a permanent bonus for faster future runs.</dd>
              </div>
            </dl>
          </section>

          <div className="mt-8 text-gray-300" style={{ fontFamily: 'var(--font-roboto)' }}>
            <p>
              Looking for automation tips? Read the <Link href="/guides/auto-clicker" className="underline">Auto Clicker Guide</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
