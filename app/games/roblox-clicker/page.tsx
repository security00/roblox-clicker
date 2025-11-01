import type { Metadata } from 'next';
import GameCard from '../../components/GameCard';
import EmbedGameSwitcher from '../../components/EmbedGameSwitcher';
export const dynamic = 'force-static';


export const metadata: Metadata = {
  title: 'Roblox Clicker - Play Free Online Clicker Game',
  description: 'Play Roblox Clicker free online! Click to earn coins, buy upgrades and auto-clickers, and prestige for permanent boosts. Instant play in your browser.',
  keywords: 'roblox clicker, clicker game, online clicker, idle game, incremental game, auto clicker, prestige',
  alternates: {
    canonical: 'https://roblox-clicker.net/games/roblox-clicker'
  },
  openGraph: {
    title: 'Roblox Clicker - Play Free Online Clicker Game',
    description: 'Click to earn coins, purchase upgrades, and prestige for permanent bonuses. Instant, free, play-in-browser.',
    url: 'https://roblox-clicker.net/games/roblox-clicker',
    type: 'website',
    images: ['/logo.png']
  }
};

export default function RaceClickerPage() {
  const relatedGames = [
    {
      title: 'Cookie Clicker',
      slug: 'cookie-clicker',
      description: 'Click to bake cookies and build your cookie empire. Unlock upgrades and auto-clickers!',
      plays: '5.1M plays',
      rating: '4.9'
    },
        {
      title: 'McDonald Clicker',
      slug: 'mcdonald-clicker',
      description: 'Mine resources and build your mining empire. Upgrade tools and dig deeper!',
      plays: '1.5M plays',
      rating: '4.5'
    }
  ];

  return (
    <div className="bg-[#1a1a1a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Roblox Clicker",
            "description": "A classic clicker/idle game. Click to earn coins, buy upgrades and auto-clickers, and prestige for permanent boosts.",
            "genre": "Clicker Game",
            "gamePlatform": "Web Browser",
            "author": {
              "@type": "Organization",
              "name": "Roblox Clicker"
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "12500"
            }
          })
        }}
      />

      <section className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-press-start)' }}>
              ROBLOX CLICKER
            </h1>
            <p className="text-gray-400 mb-6" style={{ fontFamily: 'var(--font-roboto)' }}>
              Play Roblox Clicker in your browser. Click to earn coins, unlock upgrades and auto-clickers, and prestige to gain permanent multipliers.
            </p>

            {/* Use a switcher: embedded third-party (may block input) or guaranteed local mode */}
            <div className="mb-4">
              <EmbedGameSwitcher
                title="Roblox Clicker"
                iframeSrc="https://scratch.mit.edu/projects/944565612/embed"
                theme="default"
                defaultMode="local"
              />
            </div>

            <div className="bg-[#2a2a2a] border-2 border-[#e63946] p-6 mb-6">
              <h2 className="text-2xl font-bold text-[#ffd700] mb-4" style={{ fontFamily: 'var(--font-press-start)' }}>
                About Roblox Clicker
              </h2>
              <div className="text-gray-300 space-y-4" style={{ fontFamily: 'var(--font-roboto)' }}>
                <p>
                  <strong>Roblox Clicker</strong> is a classic browser clicker/idle game. Click to earn coins, buy upgrades and auto-clickers, unlock achievements, and use prestige to gain permanent multipliers for exponential growth.
                </p>
                <p>
                  Core loop: Click 鈫?earn coins 鈫?purchase upgrades/auto 鈫?unlock achievements 鈫?prestige for long-term boosts 鈫?grow faster. Everything runs locally in your browser and progress is saved in localStorage.
                </p>
                <p>
                  New players should prioritize per-click and per-second income first, then prestige at good breakpoints to accelerate long-term progression.
                </p>
              </div>
            </div>

            <div className="bg-[#2a2a2a] border-2 border-[#e63946] p-6 mb-6">
              <h2 className="text-2xl font-bold text-[#ffd700] mb-4" style={{ fontFamily: 'var(--font-press-start)' }}>
                How to Play Roblox Clicker
              </h2>
              <div className="text-gray-300 space-y-4" style={{ fontFamily: 'var(--font-roboto)' }}>
                <p>
                  Mastering <strong>Roblox Clicker</strong> is about balancing active clicking with smart upgrades and timely prestige. Use these tips to progress efficiently:
                </p>
                <ol className="list-decimal list-inside space-y-3 pl-4">
                  <li>
                    <strong>Optimize Your Clicking Technique:</strong> Develop a consistent clicking rhythm that you can maintain throughout entire races. Many top players find that using multiple fingers or alternating between fingers reduces fatigue and maintains speed over longer races.
                  </li>
                  <li>
                    <strong>Prioritize Speed Upgrades:</strong> In the early game, focus on purchasing speed upgrades that offer the best cost-to-benefit ratio. Basic speed upgrades provide significant improvements for relatively low costs, allowing you to win more races and earn points faster.
                  </li>
                  <li>
                    <strong>Use Power-Ups Strategically:</strong> Save your temporary speed boosts for crucial moments, such as the final stretch of close races or when competing against particularly difficult opponents. Timing your power-ups correctly can mean the difference between victory and defeat.
                  </li>
                  <li>
                    <strong>Practice Consistent Clicking:</strong> Consistency often beats pure speed in race clicker. A steady clicking rate of 8-10 clicks per second sustained throughout the race typically performs better than bursts of 15 clicks per second followed by slower periods.
                  </li>
                  <li>
                    <strong>Unlock Higher Tiers Gradually:</strong> Don't rush to challenge the hardest opponents before you're ready. Progress through difficulty tiers methodically, ensuring you have adequate upgrades before moving to more challenging races where opponents have higher base speeds.
                  </li>
                </ol>
                <p>
                  Advanced <strong>race clicker</strong> players also recommend taking short breaks between intense clicking sessions to maintain peak performance and prevent fatigue. Remember, this is a marathon, not a sprint鈥攖hough ironically, it's about sprinting as fast as possible!
                </p>
              </div>
            </div>

            <div className="bg-[#2a2a2a] border-2 border-[#e63946] p-6">
              <h2 className="text-2xl font-bold text-[#ffd700] mb-4" style={{ fontFamily: 'var(--font-press-start)' }}>
                Game Features
              </h2>
              <div className="grid md:grid-cols-2 gap-4 text-gray-300" style={{ fontFamily: 'var(--font-roboto)' }}>
                <div className="flex gap-3">
                  <span className="text-[#e63946] text-2xl">-</span>
                  <div>
                    <h3 className="font-bold text-white mb-1">Achievements</h3>
                    <p className="text-sm">Complete challenges and earn special achievements.</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-white mb-8 text-center" style={{ fontFamily: 'var(--font-press-start)' }}>
          MORE GAMES YOU'LL LOVE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedGames.map((game) => (
            <GameCard key={game.slug} {...game} />
          ))}
        </div>
      </section>
    </div>
  );
}












