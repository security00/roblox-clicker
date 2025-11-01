import type { Metadata } from 'next';
import GameCard from '../../components/GameCard';
import GameEmbedWithFallback from '../../components/GameEmbedWithFallback';
export const dynamic = 'force-static';


export const metadata: Metadata = {
  title: 'Cookie Clicker Roblox - Bake & Build Empire',
  description: 'Play Cookie Clicker Roblox edition. Bake cookies, unlock upgrades, hire grandmas, and grow your cookie empire with satisfying progression.',
  keywords: 'cookie clicker, cookie clicker roblox, roblox cookie clicker, baking clicker game, cookie game, incremental game',
  alternates: {
    canonical: 'https://roblox-clicker.net/games/cookie-clicker'
  }
};

export default function CookieClickerPage() {
  const relatedGames = [
    { title: 'Cookie Clicker Roblox - Bake & Build Empire', slug: 'roblox-clicker', description: 'Play Cookie Clicker Roblox edition. Bake cookies, unlock upgrades, hire grandmas, and grow your cookie empire with satisfying progression.', plays: '2.5M', rating: '4.8' },
    { title: 'Cookie Clicker Roblox - Bake & Build Empire', slug: 'money-clicker', description: 'Play Cookie Clicker Roblox edition. Bake cookies, unlock upgrades, hire grandmas, and grow your cookie empire with satisfying progression.', plays: '1.8M', rating: '4.7' },
    { title: 'Cookie Clicker Roblox - Bake & Build Empire', slug: 'fortnite-clicker', description: 'Play Cookie Clicker Roblox edition. Bake cookies, unlock upgrades, hire grandmas, and grow your cookie empire with satisfying progression.', plays: '3.2M', rating: '4.6' }
  ];

  return (
    <div className="bg-[#1a1a1a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "VideoGame", "name": "Cookie Clicker Roblox", "description": "Bake cookies and build your cookie empire", "genre": "Clicker Game", "gamePlatform": "Web Browser", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "ratingCount": "18200" } }) }} />

      <section className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-press-start)' }}>COOKIE CLICKER</h1>
            <p className="text-gray-400 mb-6" style={{ fontFamily: 'var(--font-roboto)' }}>Click to bake delicious cookies and build the ultimate cookie empire! Hire grandmas, unlock upgrades, and become the cookie tycoon.</p>

            <div className="relative bg-black border-4 border-[#e63946] aspect-video mb-4 overflow-hidden">
              <GameEmbedWithFallback
                title="Cookie Clicker"
                src="https://scratch.mit.edu/projects/930655286/embed"
                theme="idle"
                timeoutMs={4000}
              />
            </div>

            <div className="bg-[#2a2a2a] border-2 border-[#e63946] p-6 mb-6">
              <h2 className="text-2xl font-bold text-[#ffd700] mb-4" style={{ fontFamily: 'var(--font-press-start)' }}>About Cookie Clicker Roblox</h2>
              <div className="text-gray-300 space-y-4" style={{ fontFamily: 'var(--font-roboto)' }}>
                <p><strong>Cookie Clicker Roblox</strong> brings the beloved <strong>cookie clicker</strong> experience to a new level. This addictive <strong>incremental game</strong> starts simple: click the giant cookie to bake cookies. But soon you'll discover a vast world of upgrades, automation, and exponential growth that will keep you engaged for hours.</p>
                <p>The magic of <strong>cookie clicker roblox</strong> lies in its progression system. Your first few cookies are earned through manual clicking, but as you accumulate cookies, you can purchase various production buildings like cursor clickers, grandmas, farms, factories, and even time machines. Each building automatically produces cookies, allowing your empire to grow even when you're not actively clicking.</p>
                <p>What makes this <strong>roblox cookie clicker</strong> special is the endless upgrade tree. Unlock golden cookies for temporary boosts, discover secret achievements, and purchase powerful upgrades that multiply your production by astronomical amounts. The game features prestige mechanics where you can reset your progress for permanent bonuses, enabling even faster growth in subsequent playthroughs.</p>
                <p>Strategy is key in <strong>cookie clicker</strong> games. Do you invest in cheap cursors for quick early growth, or save for expensive time machines that produce millions of cookies per second? Should you click manually to boost your rate, or let your automated producers do the work? These decisions create surprising depth in what appears to be a simple clicking game.</p>
                <p>The <strong>baking clicker game</strong> includes numerous achievements that challenge you to reach specific milestones, discover hidden features, and optimize your cookie production. From baking your first cookie to producing quintillions per second, every achievement brings satisfaction and rewards that further enhance your cookie empire.</p>
                <p>Whether you're a casual player who checks in occasionally or a dedicated optimizer calculating the most efficient upgrade path, <strong>Cookie Clicker Roblox</strong> offers an engaging experience. The cheerful graphics, satisfying clicking sounds, and exponential progression create an almost meditative gameplay loop that's easy to pick up but hard to put down. Start clicking today and see how quickly you can build your cookie empire!</p>
              </div>
            </div>

            <div className="bg-[#2a2a2a] border-2 border-[#e63946] p-6">
              <h2 className="text-2xl font-bold text-[#ffd700] mb-4" style={{ fontFamily: 'var(--font-press-start)' }}>Cookie Clicker Strategy Guide</h2>
              <div className="text-gray-300 space-y-4" style={{ fontFamily: 'var(--font-roboto)' }}>
                <p>Master <strong>cookie clicker</strong> with these expert strategies for maximum efficiency:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li><strong>Early Game:</strong> Focus on cursors and grandmas for cheap, reliable cookie production. Click actively to boost your initial growth rate.</li>
                  <li><strong>Mid Game:</strong> Balance purchases between new buildings and upgrades. Upgrades that multiply production are often better value than new buildings.</li>
                  <li><strong>Late Game:</strong> Prioritize the highest-tier buildings and their multiplier upgrades. Golden cookie synergies become crucial for massive production spikes.</li>
                  <li><strong>Prestige System:</strong> Reset when your prestige cookies would provide at least 10-20% boost. This accelerates long-term progress significantly.</li>
                  <li><strong>Active vs Idle:</strong> Active players should focus on clicking upgrades and golden cookie bonuses. Idle players benefit more from production multipliers.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-[#2a2a2a] border-2 border-[#e63946] p-4 mb-6">
                <h3 className="text-lg font-bold text-[#ffd700] mb-3" style={{ fontFamily: 'var(--font-press-start)', fontSize: '0.875rem' }}>BAKING TIPS</h3>
                <ul className="space-y-2 text-sm text-gray-300" style={{ fontFamily: 'var(--font-roboto)' }}>
                  <li className="flex gap-2"><span className="text-[#e63946]">-</span><span>Buy upgrades before new buildings</span></li>
                  <li className="flex gap-2"><span className="text-[#e63946]">-</span><span>Click golden cookies for huge boosts</span></li>
                  <li className="flex gap-2"><span className="text-[#e63946]">-</span><span>Unlock achievements for permanent bonuses</span></li>
                  <li className="flex gap-2"><span className="text-[#e63946]">-</span><span>Prestige for faster long-term growth</span></li>
                </ul>
              </div>
              <div className="bg-[#2a2a2a] border-2 border-[#e63946] p-4">
                <h3 className="text-lg font-bold text-[#ffd700] mb-3" style={{ fontFamily: 'var(--font-press-start)', fontSize: '0.875rem' }}>GAME STATS</h3>
                <div className="space-y-3 text-sm" style={{ fontFamily: 'var(--font-roboto)' }}>
                  <div className="flex justify-between"><span className="text-gray-400">Total Plays:</span><span className="text-white font-bold">5.1M+</span></div>
                  <div className="flex justify-between"><span className="text-gray-400">Rating:</span><span className="text-white font-bold">猸?4.9/5</span></div>
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





