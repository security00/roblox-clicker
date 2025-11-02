import type { Metadata } from "next";
import GameEmbedWithFallback from "../../components/GameEmbedWithFallback";
import GameCard from "../../components/GameCard";
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: 'Money Clicker - Free Online Clicker Game',
  description: 'Play Money Clicker online. Click to grow your cash, buy upgrades and auto income, and prestige for permanent multipliers in your browser.',
  alternates: { canonical: 'https://roblox-clicker.net/games/money-clicker' },
  openGraph: {
    title: 'Money Clicker - Free Online Clicker Game',
    description: 'Play Money Clicker online. Click to grow your cash, buy upgrades and auto income, and prestige for permanent multipliers in your browser.',
    url: 'https://roblox-clicker.net/games/money-clicker',
    type: 'website'
  }
};

export default function MoneyClickerPage() {
  const relatedGames = [
    { title: 'Cookie Clicker Roblox - Bake & Build Empire', slug: 'cookie-clicker', description: 'Bake cookies, unlock upgrades, hire grandmas, and grow your cookie empire.', plays: '5.1M', rating: '4.9' },
    { title: 'Roblox Clicker - Play Free Online Clicker Game', slug: 'roblox-clicker', description: 'Click to earn coins, buy upgrades and auto-clickers, and prestige for permanent boosts.', plays: '2.5M', rating: '4.8' },
    { title: 'Burger Clicker - Free Online Clicker Game', slug: 'burger-clicker', description: 'Grill burgers, upgrade equipment, hire staff, and open franchises.', plays: '1.3M', rating: '4.4' }
  ];
  return (
    <div className="bg-[#1a1a1a]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"VideoGame","name":"Money Clicker","description":"Play Money Clicker online. Click to grow your cash, buy upgrades and auto income, and prestige for permanent multipliers in your browser.","genre":"Clicker Game","gamePlatform":"Web Browser","author":{"@type":"Organization","name":"Roblox Clicker"}}) }} />
<section className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-press-start)' }}>
              MONEY CLICKER
            </h1>
            <p className="text-gray-400 mb-6" style={{ fontFamily: 'var(--font-roboto)' }}>
              Click to grow your cash! Buy upgrades and auto income, unlock achievements, and prestige to gain permanent multipliers.
            </p>

            <div className="relative bg-black border-4 border-[#e63946] aspect-video mb-4 overflow-hidden">
              <GameEmbedWithFallback
                title="Money Clicker"
                src="https://scratch.mit.edu/projects/208974963/embed"
                theme="idle"
                timeoutMs={3000}
              />
            </div>
            <div className="bg-[#2a2a2a] border-2 border-[#e63946] p-6 mb-6">
              <h2 className="text-2xl font-bold text-[#ffd700] mb-4" style={{ fontFamily: 'var(--font-press-start)' }}>
                About Money Clicker
              </h2>
              <div className="text-gray-300 space-y-4" style={{ fontFamily: 'var(--font-roboto)' }}>
                <p>
                  Money Clicker is a classic incremental game about growing your cash. Start by clicking to earn coins, then invest in upgrades and auto income to scale up.
                </p>
                <p>
                  Stack global multipliers and prestige when progress slows to gain permanent bonuses for your next run. If the external embed is slow in your region, you can switch to Local Mode.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-[#2a2a2a] border-2 border-[#e63946] p-4 mb-6">
                <h3 className="text-lg font-bold text-[#ffd700] mb-3" style={{ fontFamily: 'var(--font-press-start)', fontSize: '0.875rem' }}>
                  GAME INFO
                </h3>
                <div className="space-y-3 text-sm" style={{ fontFamily: 'var(--font-roboto)' }}>
                  <div className="flex justify-between"><span className="text-gray-400">Mode:</span><span className="text-white font-bold">Embed / Local</span></div>
                  <div className="flex justify-between"><span className="text-gray-400">Category:</span><span className="text-white font-bold">Clicker / Idle</span></div>
                  <div className="flex justify-between"><span className="text-gray-400">Playability:</span><span className="text-white font-bold">Instant</span></div>
                </div>
              </div>
              <div className="bg-[#2a2a2a] border-2 border-[#e63946] p-4">
                <h3 className="text-lg font-bold text-[#ffd700] mb-3" style={{ fontFamily: 'var(--font-press-start)', fontSize: '0.875rem' }}>
                  NOTE
                </h3>
                <div className="space-y-2 text-sm" style={{ fontFamily: 'var(--font-roboto)' }}>
                  <p className="text-gray-300">This page embeds a Scratch project. If it fails to load or accept clicks, switch to Local Mode using the top button.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-white mb-8 text-center" style={{ fontFamily: 'var(--font-press-start)' }}>
          MORE CLICKER GAMES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedGames.map((game) => (<GameCard key={game.slug} {...game} />))}
        </div>
      </section>
    </div>
  );
}








