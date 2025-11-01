import type { Metadata } from 'next';
import GameCard from '../../components/GameCard';
import GameEmbedWithFallback from '../../components/GameEmbedWithFallback';
export const dynamic = 'force-static';


export const metadata: Metadata = {
  title: 'Burger Clicker - Free Online Clicker Game',
  description: 'Play Burger Clicker online. Grill burgers, upgrade equipment, hire staff, and open franchises to scale your fast-food empire quickly.',
  keywords: 'burger clicker, factory clicker, fast food clicker, idle clicker, online clicker game',
  alternates: { canonical: 'https://roblox-clicker.net/games/burger-clicker' }
};

export default function BurgerClickerPage() {
  const relatedGames = [
    { title: 'Burger Clicker - Free Online Clicker Game', slug: 'mcdonald-clicker', description: 'Play Burger Clicker online. Grill burgers, upgrade equipment, hire staff, and open franchises to scale your fast-food empire quickly.', plays: '1.5M', rating: '4.5' },
    { title: 'Burger Clicker - Free Online Clicker Game', slug: 'milk-clicker', description: 'Play Burger Clicker online. Grill burgers, upgrade equipment, hire staff, and open franchises to scale your fast-food empire quickly.', plays: '2.1M', rating: '4.7' },
    { title: 'Burger Clicker - Free Online Clicker Game', slug: 'cookie-clicker', description: 'Play Burger Clicker online. Grill burgers, upgrade equipment, hire staff, and open franchises to scale your fast-food empire quickly.', plays: '5.1M', rating: '4.9' }
  ];

  return (
    <div className="bg-[#1a1a1a]">
      <section className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-press-start)' }}>BURGER CLICKER</h1>
            <p className="text-gray-400 mb-6" style={{ fontFamily: 'var(--font-roboto)' }}>
              Click to grill burgers, upgrade kitchen gear, hire staff, and expand from a single stand to a burger franchise empire!
            </p>

            <div className="relative bg-black border-4 border-[#e63946] aspect-video mb-4 overflow-hidden">
              <GameEmbedWithFallback
                title="Burger Clicker"
                src="https://scratch.mit.edu/projects/212303361/embed"
                theme="idle"
                timeoutMs={5000}
              />
            </div>

            <div className="bg-[#2a2a2a] border-2 border-[#e63946] p-6 mb-6">
              <h2 className="text-2xl font-bold text-[#ffd700] mb-4" style={{ fontFamily: 'var(--font-press-start)' }}>About Burger Clicker</h2>
              <div className="text-gray-300 space-y-4" style={{ fontFamily: 'var(--font-roboto)' }}>
                <p>Burger Clicker is a fast-food themed incremental game. Start small, flip burgers, and reinvest profits into better grills, faster service, and automation.</p>
                <p>Hire staff, unlock menu multipliers, and open new locations to scale exponentially. If the external embed is slow in your region, switch to Local Mode at the top bar for instant play.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-[#2a2a2a] border-2 border-[#e63946] p-4 mb-6">
                <h3 className="text-lg font-bold text-[#ffd700] mb-3" style={{ fontFamily: 'var(--font-press-start)', fontSize: '0.875rem' }}>TIPS</h3>
                <ul className="space-y-2 text-sm text-gray-300" style={{ fontFamily: 'var(--font-roboto)' }}>
                  <li className="flex gap-2"><span className="text-[#e63946]">-</span><span>Upgrade grills and speed first</span></li>
                  <li className="flex gap-2"><span className="text-[#e63946]">-</span><span>Hire staff early for idle gains</span></li>
                  <li className="flex gap-2"><span className="text-[#e63946]">-</span><span>Prestige to unlock permanent multipliers</span></li>
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



