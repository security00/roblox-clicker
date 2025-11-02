import type { Metadata } from 'next';
import GameCard from '../../components/GameCard';
import GameEmbedWithFallback from '../../components/GameEmbedWithFallback';
export const dynamic = 'force-static';


export const metadata: Metadata = {
  title: 'Fruit Clicker - Free Online Harvest Clicker',
  description: 'Play Fruit Clicker online. Harvest fruit, upgrade orchards, hire helpers, and unlock new crops to grow your farm into a fruit empire.',
  keywords: 'fruit clicker, farm clicker, orchard clicker, idle clicker, online clicker game',
  alternates: { canonical: 'https://roblox-clicker.net/games/fruit-clicker' }
};

export default function FruitClickerPage() {
  const relatedGames = [
    { title: 'Fruit Clicker - Free Online Harvest Clicker', slug: 'roblox-clicker', description: 'Play Fruit Clicker online. Harvest fruit, upgrade orchards, hire helpers, and unlock new crops to grow your farm into a fruit empire.', plays: '2.5M', rating: '4.8' },
    { title: 'Fruit Clicker - Free Online Harvest Clicker', slug: 'cookie-clicker', description: 'Play Fruit Clicker online. Harvest fruit, upgrade orchards, hire helpers, and unlock new crops to grow your farm into a fruit empire.', plays: '5.1M', rating: '4.9' },
    { title: 'Fruit Clicker - Free Online Harvest Clicker', slug: 'milk-clicker', description: 'Play Fruit Clicker online. Harvest fruit, upgrade orchards, hire helpers, and unlock new crops to grow your farm into a fruit empire.', plays: '2.1M', rating: '4.7' }
  ];

  return (
    <div className="bg-[#1a1a1a]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"VideoGame","name":"Fruit Clicker","description":"Play Fruit Clicker online. Harvest fruit, upgrade orchards, hire helpers, and unlock new crops to grow your farm into a fruit empire.","genre":"Clicker Game","gamePlatform":"Web Browser","author":{"@type":"Organization","name":"Roblox Clicker"}}) }} />
<section className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-press-start)' }}>FRUIT CLICKER</h1>
            <p className="text-gray-400 mb-6" style={{ fontFamily: 'var(--font-roboto)' }}>
              Click to harvest fruit, upgrade your orchards, hire helpers, and unlock new crops. Grow from a small garden to a fruit empire!
            </p>

            <div className="relative bg-black border-4 border-[#e63946] aspect-video mb-4 overflow-hidden">
              <GameEmbedWithFallback
                title="Fruit Clicker"
                src="https://scratch.mit.edu/projects/303846468/embed"
                theme="idle"
                timeoutMs={5000}
              />
            </div>

            <div className="bg-[#2a2a2a] border-2 border-[#e63946] p-6 mb-6">
              <h2 className="text-2xl font-bold text-[#ffd700] mb-4" style={{ fontFamily: 'var(--font-press-start)' }}>About Fruit Clicker</h2>
              <div className="text-gray-300 space-y-4" style={{ fontFamily: 'var(--font-roboto)' }}>
                <p>Fruit Clicker is a farm-themed incremental game. Start with basic harvesting and reinvest profits into faster tools, better seeds, and automation to scale production.</p>
                <p>Hire helpers, unlock new orchards, and stack multipliers to grow exponentially. If the external embed is slow in your region, switch to Local Mode at the top bar for instant play.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-[#2a2a2a] border-2 border-[#e63946] p-4 mb-6">
                <h3 className="text-lg font-bold text-[#ffd700] mb-3" style={{ fontFamily: 'var(--font-press-start)', fontSize: '0.875rem' }}>TIPS</h3>
                <ul className="space-y-2 text-sm text-gray-300" style={{ fontFamily: 'var(--font-roboto)' }}>
                  <li className="flex gap-2"><span className="text-[#e63946]">-</span><span>Prioritize seed and tool multipliers</span></li>
                  <li className="flex gap-2"><span className="text-[#e63946]">-</span><span>Hire helpers early for idle gains</span></li>
                  <li className="flex gap-2"><span className="text-[#e63946]">-</span><span>Prestige for permanent yield bonuses</span></li>
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





