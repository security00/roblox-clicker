import type { Metadata } from 'next';
export const dynamic = 'force-static';


export const metadata: Metadata = {
  title: 'How to Play Roblox Clicker - Beginners Guide',
  description: 'Learn how to play Roblox Clicker from scratch. Master clicking techniques, upgrade paths, prestige timing, and strategies to progress faster.',
  alternates: { canonical: 'https://roblox-clicker.net/guides/how-to-play' }
};

export default function HowToPlayPage() {
  return (
    <div className="bg-[#1a1a1a]">
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-press-start)' }}>
            HOW TO PLAY ROBLOX CLICKER
          </h1>

          <div className="bg-[#2a2a2a] border-2 border-[#e63946] p-8 mb-6">
            <h2 className="text-2xl font-bold text-[#ffd700] mb-4" style={{ fontFamily: 'var(--font-press-start)' }}>Getting Started</h2>
            <div className="text-gray-300 space-y-4" style={{ fontFamily: 'var(--font-roboto)' }}>
              <p>
                Roblox Clicker is simple to begin and deep to master. Click to earn coins, buy upgrades and auto-clickers, and use prestige to gain permanent multipliers.
              </p>
              <p>
                Start by focusing on per-click power and your first auto-clicker. Once progress slows, prestige to accelerate long-term growth.
              </p>
            </div>
          </div>

          <div className="bg-[#2a2a2a] border-2 border-[#e63946] p-8">
            <h2 className="text-2xl font-bold text-[#ffd700] mb-4" style={{ fontFamily: 'var(--font-press-start)' }}>Essential Tips</h2>
            <ul className="space-y-3 text-gray-300" style={{ fontFamily: 'var(--font-roboto)' }}>
              <li><strong>Invest Early:</strong> Buy upgrades that pay back quickly instead of hoarding coins.</li>
              <li><strong>Balance Builds:</strong> Decide between active (click power) and idle (auto-clickers) styles.</li>
              <li><strong>Prestige Smart:</strong> Prestige when gains slow to boost future runs.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}


