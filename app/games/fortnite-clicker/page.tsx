import type { Metadata } from 'next';
import GameCard from '../../components/GameCard';
import GameEmbedWithFallback from '../../components/GameEmbedWithFallback';
export const dynamic = 'force-static';


export const metadata: Metadata = {
  title: 'Fortnite Clicker - Free Online V-Bucks Game',
  description: 'Play Fortnite Clicker online for free. Tap to earn V-Bucks, unlock upgrades, and progress fast. Switch to Local Mode anytime for instant play.',
  keywords: 'fortnite clicker, clicker game, v-bucks clicker, idle clicker, online clicker game',
  alternates: { canonical: 'https://roblox-clicker.net/games/fortnite-clicker' }
};

export default function FortniteClickerPage() {
  const relatedGames = [
    { title: 'Fortnite Clicker - Free Online V-Bucks Game', slug: 'roblox-clicker', description: 'Play Fortnite Clicker online for free. Tap to earn V-Bucks, unlock upgrades, and progress fast. Switch to Local Mode anytime for instant play.', plays: '2.5M', rating: '4.8' },
    { title: 'Fortnite Clicker - Free Online V-Bucks Game', slug: 'cookie-clicker', description: 'Play Fortnite Clicker online for free. Tap to earn V-Bucks, unlock upgrades, and progress fast. Switch to Local Mode anytime for instant play.', plays: '5.1M', rating: '4.9' },
    { title: 'Fortnite Clicker - Free Online V-Bucks Game', slug: 'money-clicker', description: 'Play Fortnite Clicker online for free. Tap to earn V-Bucks, unlock upgrades, and progress fast. Switch to Local Mode anytime for instant play.', plays: '1.8M', rating: '4.7' }
  ];

  return (
    <div className="bg-[#1a1a1a]">
      <section className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-press-start)' }}>FORTNITE CLICKER</h1>
            <p className="text-gray-400 mb-6" style={{ fontFamily: 'var(--font-roboto)' }}>Tap to earn V-Bucks, buy upgrades, and become the island champion.</p>

            <div className="relative bg-black border-4 border-[#e63946] aspect-video mb-4 overflow-hidden">
              <GameEmbedWithFallback
                title="Fortnite Clicker"
                src="https://scratch.mit.edu/projects/284682486/embed"
                theme="idle"
                timeoutMs={5000}
              />
            </div>

            <div className="bg-[#2a2a2a] border-2 border-[#e63946] p-6 mb-6">
              <h2 className="text-2xl font-bold text-[#ffd700] mb-4" style={{ fontFamily: 'var(--font-press-start)' }}>About Fortnite Clicker</h2>
              <div className="text-gray-300 space-y-4" style={{ fontFamily: 'var(--font-roboto)' }}>
                <p>Fortnite Clicker is a fast click and upgrade game. Click to earn V-Bucks, buy multipliers and auto-clickers, and scale your production for massive gains. Play instantly in your browser.</p>
                <p>If the external embed is slow in your region, switch to Local Mode at the top bar for instant play. No downloads required.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-[#2a2a2a] border-2 border-[#e63946] p-4 mb-6">
                <h3 className="text-lg font-bold text-[#ffd700] mb-3" style={{ fontFamily: 'var(--font-press-start)', fontSize: '0.875rem' }}>TIPS</h3>
                <ul className="space-y-2 text-sm text-gray-300" style={{ fontFamily: 'var(--font-roboto)' }}>
                  <li className="flex gap-2"><span className="text-[#e63946]">-</span><span>Invest V-Bucks into multipliers first</span></li>
                  <li className="flex gap-2"><span className="text-[#e63946]">-</span><span>Buy auto-clickers for idle gains</span></li>
                  <li className="flex gap-2"><span className="text-[#e63946]">-</span><span>Prestige for permanent boosts</span></li>
                </ul>
              </div>
              <div className="bg-[#2a2a2a] border-2 border-[#e63946] p-4">
                <h3 className="text-lg font-bold text-[#ffd700] mb-3" style={{ fontFamily: 'var(--font-press-start)', fontSize: '0.875rem' }}>GAME STATS</h3>
                <div className="space-y-3 text-sm" style={{ fontFamily: 'var(--font-roboto)' }}>
                  <div className="flex justify-between"><span className="text-gray-400">Mode:</span><span className="text-white font-bold">Embed</span></div>
                  <div className="flex justify-between"><span className="text-gray-400">Playability:</span><span className="text-white font-bold">External</span></div>
                  <div className="flex justify-between"><span className="text-gray-400">Category:</span><span className="text-white font-bold">Incremental</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-white mb-8 text-center" style={{ fontFamily: 'var(--font-press-start)' }}>MORE CLICKER GAMES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedGames.map((game) => (<GameCard key={game.slug} {...game} />))}
        </div>
      </section>
    </div>
  );
}



