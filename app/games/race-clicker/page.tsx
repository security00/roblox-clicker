import type { Metadata } from 'next';
import SimpleClicker from '../../components/SimpleClicker';
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Race Clicker - Free Online Racing Clicker Game',
  description: 'Play Race Clicker online. Click to race, upgrade your vehicle, unlock auto-racers, and dominate the leaderboard with fast-paced clicker action.',
  keywords: 'race clicker, racing clicker, car clicker, speed clicker, online clicker game',
  alternates: { canonical: 'https://roblox-clicker.net/games/race-clicker' }
};

export default function RaceClickerPage() {
  const relatedGames = [
    { title: 'Roblox Clicker', slug: 'roblox-clicker', description: 'Click to earn coins, unlock upgrades & auto-clickers, and prestige for permanent boosts.', plays: '2.5M', rating: '4.8' },
    { title: 'Cookie Clicker', slug: 'cookie-clicker', description: 'Click to bake cookies and build your cookie empire. Unlock upgrades and auto-clickers!', plays: '5.1M', rating: '4.9' },
    { title: 'Money Clicker', slug: 'money-clicker', description: 'Click to grow your cash! Buy upgrades, unlock auto income, and prestige for multipliers.', plays: '1.8M', rating: '4.7' }
  ];

  return (
    <div className="bg-[#1a1a1a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"VideoGame","name":"Race Clicker","description":"Click to race, upgrade your vehicle, and dominate the leaderboard with fast-paced clicker action.","genre":"Clicker Game","gamePlatform":"Web Browser","author":{"@type":"Organization","name":"Roblox Clicker"}}) }} />

      <section className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-press-start)' }}>
              RACE CLICKER
            </h1>
            <p className="text-gray-400 mb-6" style={{ fontFamily: 'var(--font-roboto)' }}>
              Click to race, upgrade your vehicle, unlock auto-racers, and dominate the leaderboard with fast-paced clicker action!
            </p>

            {/* Game Embed */}
            <div className="relative bg-black border-4 border-[#e63946] aspect-video mb-4 overflow-hidden">
              <SimpleClicker title="Race Clicker" theme="default" />
            </div>

            {/* Game Description */}
            <div className="bg-[#2a2a2a] border-2 border-[#e63946] p-6 mb-6">
              <h2 className="text-2xl font-bold text-[#ffd700] mb-4" style={{ fontFamily: 'var(--font-press-start)' }}>
                About Race Clicker
              </h2>
              <div className="text-gray-300 space-y-4" style={{ fontFamily: 'var(--font-roboto)' }}>
                <p>
                  Welcome to <strong>Race Clicker</strong>, the ultimate racing-themed clicker game! Click to accelerate your vehicle, earn speed points, and upgrade your racing machine. This addictive game combines the excitement of racing with the satisfying progression of clicker mechanics.
                </p>
                <p>
                  Start with a basic vehicle and work your way up to supercars and hypercars. Each click propels you forward, earning you coins that can be spent on powerful upgrades. Unlock auto-racers that generate speed points even when you're not actively clicking, allowing for passive progression.
                </p>
                <p>
                  The game features a prestige system where you can reset your progress for permanent multipliers, making each subsequent playthrough faster and more rewarding. Compete on global leaderboards and prove you're the ultimate racing clicker champion!
                </p>
              </div>
            </div>

            {/* How to Play */}
            <div className="bg-[#2a2a2a] border-2 border-[#e63946] p-6">
              <h2 className="text-2xl font-bold text-[#ffd700] mb-4" style={{ fontFamily: 'var(--font-press-start)' }}>
                How to Play
              </h2>
              <div className="text-gray-300 space-y-4" style={{ fontFamily: 'var(--font-roboto)' }}>
                <ol className="list-decimal list-inside space-y-3 pl-4">
                  <li><strong>Click to Race:</strong> Click the main button to accelerate and earn speed points</li>
                  <li><strong>Upgrade Your Vehicle:</strong> Use coins to purchase better engines, tires, and aerodynamics</li>
                  <li><strong>Unlock Auto-Racers:</strong> Hire pit crew members who generate points automatically</li>
                  <li><strong>Activate Boosters:</strong> Use temporary speed multipliers during active play sessions</li>
                  <li><strong>Prestige for Bonuses:</strong> Reset your progress for permanent speed multipliers</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Quick Tips */}
              <div className="bg-[#2a2a2a] border-2 border-[#e63946] p-4 mb-6">
                <h3 className="text-lg font-bold text-[#ffd700] mb-3" style={{ fontFamily: 'var(--font-press-start)', fontSize: '0.875rem' }}>
                  QUICK TIPS
                </h3>
                <ul className="space-y-2 text-sm text-gray-300" style={{ fontFamily: 'var(--font-roboto)' }}>
                  <li className="flex gap-2">
                    <span className="text-[#e63946]">-</span>
                    <span>Click rapidly to maximize speed points</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#e63946]">-</span>
                    <span>Invest in auto-racers early for passive income</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#e63946]">-</span>
                    <span>Use boosters during active play sessions</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#e63946]">-</span>
                    <span>Balance vehicle upgrades with auto-racer purchases</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#e63946]">-</span>
                    <span>Prestige when you hit diminishing returns</span>
                  </li>
                </ul>
              </div>

              {/* Stats */}
              <div className="bg-[#2a2a2a] border-2 border-[#e63946] p-4">
                <h3 className="text-lg font-bold text-[#ffd700] mb-3" style={{ fontFamily: 'var(--font-press-start)', fontSize: '0.875rem' }}>
                  GAME STATS
                </h3>
                <div className="space-y-3 text-sm" style={{ fontFamily: 'var(--font-roboto)' }}>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Category:</span>
                    <span className="text-white font-bold">Racing Clicker</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Platform:</span>
                    <span className="text-white font-bold">Browser</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Mode:</span>
                    <span className="text-white font-bold">Single Player</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Cost:</span>
                    <span className="text-white font-bold">Free</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Games Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-white mb-8 text-center" style={{ fontFamily: 'var(--font-press-start)' }}>
          MORE CLICKER GAMES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedGames.map((game) => (
            <div key={game.slug} className="bg-[#2a2a2a] border-2 border-[#e63946] p-4">
              <h3 className="text-xl font-bold text-[#ffd700] mb-2" style={{ fontFamily: 'var(--font-press-start)', fontSize: '1rem' }}>
                {game.title}
              </h3>
              <p className="text-gray-300 text-sm mb-3" style={{ fontFamily: 'var(--font-roboto)' }}>
                {game.description}
              </p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">{game.plays}</span>
                <span className="text-[#ffd700]">★ {game.rating}</span>
              </div>
              <a
                href={`/games/${game.slug}`}
                className="mt-3 block text-center bg-[#e63946] text-white py-2 px-4 font-bold hover:bg-[#d62839] transition-colors"
                style={{ fontFamily: 'var(--font-press-start)', fontSize: '0.75rem' }}
              >
                PLAY NOW
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
