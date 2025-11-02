import type { Metadata } from 'next';
import GameCard from './components/GameCard';

import FeatureIcon from './components/FeatureIcon';
export const dynamic = 'force-static';


export const metadata: Metadata = {
  title: 'Roblox Clicker - Play Free Online Clicker Game 2025',
  description: 'Play Roblox Clicker online for free! Click to earn coins, upgrade gear, unlock auto-clicker features. Start playing the best clicker game now!',
  keywords: 'roblox clicker, roblox clicker game, play roblox clicker online, clicker game, free clicker game, race clicker, cookie clicker roblox, online clicker game',
  alternates: {
    canonical: 'https://roblox-clicker.net/'
  },
  openGraph: {
    title: 'Roblox Clicker - Play Free Online Clicker Game',
    description: 'Play Roblox Clicker online for free! Click to earn coins, upgrade gear, and become the clicking champion.',
    url: 'https://roblox-clicker.net/',
    type: 'website',
    images: ['/logo.png']
  }
};

export default function Home() {
  const relatedGames = [
    {
      title: 'Roblox Clicker',
      slug: 'roblox-clicker',
      description: 'Click to earn coins, unlock upgrades & auto-clickers, and prestige for permanent boosts.',
      plays: '2.5M plays',
      rating: '4.8'
    },
    {
      title: 'Cookie Clicker',
      slug: 'cookie-clicker',
      description: 'Click to bake cookies and build your cookie empire. Unlock upgrades and auto-clickers!',
      plays: '5.1M plays',
      rating: '4.9'
    },
    {
      title: 'Money Clicker',
      slug: 'money-clicker',
      description: 'Click to grow your cash! Buy upgrades, unlock auto income, and prestige for multipliers.',
      plays: '1.8M plays',
      rating: '4.7'
    },
    {
      title: 'Fortnite Clicker',
      slug: 'fortnite-clicker',
      description: 'Tap to earn V-Bucks, unlock upgrades, and dominate the island!',
      plays: '3.2M plays',
      rating: '4.6'
    },
    {
      title: 'McDonald Clicker',
      slug: 'mcdonald-clicker',
      description: 'Run a fast-food empire. Upgrade kitchen, hire staff, and open franchises!',
      plays: '1.5M plays',
      rating: '4.5'
    },
    {
      title: 'Milk Clicker',
      slug: 'milk-clicker',
      description: 'Click to milk cows, upgrade barns, and multiply your production!',
      plays: '2.1M plays',
      rating: '4.7'
    }
  ];

  return (
    <div className="bg-[#1a1a1a]">
      {/* Hero Section with Game */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Game Area */}
          <div className="lg:col-span-2">
            {/* Game Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-press-start)' }}>
              ROBLOX CLICKER
            </h1>
            <p className="text-gray-400 mb-6" style={{ fontFamily: 'var(--font-roboto)' }}>
              Play the ultimate Roblox Clicker game online for free! Click to earn coins, upgrade your gear, and become the clicking champion.
            </p>

            {/* Game Embed */}
            <div className="relative bg-black border-4 border-[#e63946] aspect-video mb-4">
              <iframe
                src="https://scratch.mit.edu/projects/944565612/embed"
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
                title="Roblox Clicker Game"
              ></iframe>
            </div>{/* Game Description */}
            <div className="bg-[#2a2a2a] border-2 border-[#e63946] p-6 mb-6">
              <h2 className="text-2xl font-bold text-[#ffd700] mb-4" style={{ fontFamily: 'var(--font-press-start)' }}>
                About Roblox Clicker Game
              </h2>
              <div className="text-gray-300 space-y-4" style={{ fontFamily: 'var(--font-roboto)' }}>
                <p>
                  Welcome to <strong>Roblox Clicker</strong>, the most addictive free online clicker game you'll ever play! This exciting <strong>roblox clicker game</strong> combines simple mechanics with deep progression systems to keep you engaged for hours. Whether you're a casual player looking for quick fun or a dedicated gamer aiming to maximize your clicking efficiency, Roblox Clicker offers an experience tailored for everyone.
                </p>
                <p>
                  In this <strong>roblox clicker</strong> game, your primary objective is straightforward: click to earn coins! But don't let the simplicity fool you. As you progress, you'll unlock powerful upgrades, multipliers, and auto-clickers that exponentially increase your earning potential. The game features a vibrant pixel art style reminiscent of classic arcade games, creating a nostalgic yet modern gaming experience.
                </p>
                <p>
                  What makes <strong>Roblox Clicker</strong> stand out from other <strong>clicker games</strong> is its unique progression system. Every click counts toward your total score, which unlocks new features and upgrades. You can purchase better clicking tools, hire automatic clickers, and activate special power-ups that multiply your earnings. The game also includes a prestige system, allowing you to reset your progress for permanent bonuses that make subsequent playthroughs even more rewarding.
                </p>
                <p>
                  Players who enjoy <strong>race clicker</strong> games will appreciate the competitive elements built into Roblox Clicker. Compare your clicking speed and total coins earned with players worldwide on our global leaderboards. Challenge yourself to reach new milestones and unlock achievements that showcase your clicking prowess. The game regularly updates with seasonal events and limited-time challenges, ensuring there's always something new to discover.
                </p>
                <p>
                  The <strong>roblox clicker game</strong> experience is enhanced by its idle mechanics. Even when you're not actively playing, your auto-clickers continue working, accumulating coins for your next session. This makes Roblox Clicker perfect for both active play sessions and passive progression. Come back after a break to find a treasure trove of coins waiting for you!
                </p>
                <p>
                  Our <strong>play roblox clicker online</strong> platform is completely free and requires no downloads or installations. Simply open your browser and start clicking! The game is fully optimized for both desktop and mobile devices, allowing you to continue your clicking adventure anywhere, anytime. The responsive design ensures smooth gameplay across all screen sizes, making it accessible whether you're on a computer, tablet, or smartphone.
                </p>
              </div>
            </div>

            {/* How to Play Section */}
            <div className="bg-[#2a2a2a] border-2 border-[#e63946] p-6 mb-6">
              <h2 className="text-2xl font-bold text-[#ffd700] mb-4" style={{ fontFamily: 'var(--font-press-start)' }}>
                How to Play Roblox Clicker
              </h2>
              <div className="text-gray-300 space-y-4" style={{ fontFamily: 'var(--font-roboto)' }}>
                <p>
                  Getting started with <strong>Roblox Clicker</strong> is incredibly easy, but mastering it requires strategy and dedication. Here's everything you need to know to become a clicking champion:
                </p>
                <ol className="list-decimal list-inside space-y-3 pl-4">
                  <li>
                    <strong>Basic Clicking:</strong> Start by clicking on the main button as fast as you can. Each click earns you coins, which form the foundation of your progression. The faster you click, the quicker you'll accumulate wealth in this <strong>roblox clicker game</strong>.
                  </li>
                  <li>
                    <strong>Purchase Upgrades:</strong> Use your earned coins to buy upgrades from the shop. These upgrades increase the coins earned per click, making each action more valuable. Prioritize upgrades that offer the best return on investment for optimal progression.
                  </li>
                  <li>
                    <strong>Unlock Auto-Clickers:</strong> As you progress, you'll unlock automatic clickers that generate coins without manual input. These are essential for long-term success in the game. Invest in multiple auto-clickers to create a passive income stream.
                  </li>
                  <li>
                    <strong>Activate Multipliers:</strong> Special multiplier bonuses can be activated to temporarily boost your earning rate. Use these strategically during active play sessions to maximize gains. Save your best multipliers for when you're actively clicking to get the most benefit.
                  </li>
                  <li>
                    <strong>Complete Achievements:</strong> The game features numerous achievements that reward you with bonus coins and special upgrades. Check the achievements menu regularly and work toward completing them for extra benefits.
                  </li>
                  <li>
                    <strong>Prestige System:</strong> Once you've reached certain milestones, consider using the prestige feature. This resets your progress but grants permanent bonuses that make future playthroughs significantly more efficient and rewarding.
                  </li>
                </ol>
                <p>
                  For advanced players, learning to balance active clicking with strategic upgrade purchases is key. Some upgrades offer immediate benefits, while others provide long-term value. Experiment with different strategies to find what works best for your playstyle in this <strong>roblox clicker</strong> adventure.
                </p>
              </div>
            </div>

            {/* Features Section */}
            <div className="bg-[#2a2a2a] border-2 border-[#e63946] p-6">
              <h2 className="text-2xl font-bold text-[#ffd700] mb-4" style={{ fontFamily: 'var(--font-press-start)' }}>
                Game Features
              </h2>
              <div className="grid md:grid-cols-2 gap-4 text-gray-300" style={{ fontFamily: 'var(--font-roboto)' }}>
                <div className="flex gap-3">
                  <FeatureIcon name="gamepad" className="text-[#e63946] text-2xl" />
                  <div>
                    <h3 className="font-bold text-white mb-1">Simple Yet Addictive</h3>
                    <p className="text-sm">Easy to learn but challenging to master, perfect for all skill levels.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <FeatureIcon name="star" className="text-[#e63946] text-2xl" />
                  <div>
                    <h3 className="font-bold text-white mb-1">Fast-Paced Action</h3>
                    <p className="text-sm">Quick clicking mechanics with instant gratification and rewards.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <FeatureIcon name="rocket" className="text-[#e63946] text-2xl" />
                  <div>
                    <h3 className="font-bold text-white mb-1">Progressive Upgrades</h3>
                    <p className="text-sm">Unlock powerful upgrades and multipliers as you advance.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <FeatureIcon name="coin" className="text-[#e63946] text-2xl" />
                  <div>
                    <h3 className="font-bold text-white mb-1">Idle Mechanics</h3>
                    <p className="text-sm">Earn coins even when you're away with auto-clickers.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <FeatureIcon name="trophy" className="text-[#e63946] text-2xl" />
                  <div>
                    <h3 className="font-bold text-white mb-1">Achievements System</h3>
                    <p className="text-sm">Complete challenges and earn special rewards and bonuses.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <FeatureIcon name="device" className="text-[#e63946] text-2xl" />
                  <div>
                    <h3 className="font-bold text-white mb-1">Cross-Platform Play</h3>
                    <p className="text-sm">Play on desktop, mobile, or tablet with full compatibility.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <FeatureIcon name="palette" className="text-[#e63946] text-2xl" />
                  <div>
                    <h3 className="font-bold text-white mb-1">Pixel Art Style</h3>
                    <p className="text-sm">Beautiful retro graphics with modern polish and effects.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <FeatureIcon name="free" className="text-[#e63946] text-2xl" />
                  <div>
                    <h3 className="font-bold text-white mb-1">100% Free</h3>
                    <p className="text-sm">No downloads, no payments, just pure clicking fun!</p>
                  </div>
                </div>
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
                    <span>Click rapidly to maximize coin earnings</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#e63946]">-</span>
                    <span>Invest in auto-clickers early for passive income</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#e63946]">-</span>
                    <span>Use multipliers during active play sessions</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#e63946]">-</span>
                    <span>Complete achievements for bonus rewards</span>
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
                    <span className="text-gray-400">Total Plays:</span>
                    <span className="text-white font-bold">8.2M+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Rating:</span>
                    <span className="text-white font-bold flex items-center gap-1"><FeatureIcon name="star" className="text-[#ffd700]" /> 4.9/5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Category:</span>
                    <span className="text-white font-bold">Clicker</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Platform:</span>
                    <span className="text-white font-bold">Browser</span>
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
            <GameCard key={game.slug} {...game} />
          ))}
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-[#2a2a2a] border-2 border-[#e63946] p-8">
          <h2 className="text-2xl font-bold text-[#ffd700] mb-6" style={{ fontFamily: 'var(--font-press-start)' }}>
            Why Play Roblox Clicker Online?
          </h2>
          <div className="text-gray-300 space-y-4" style={{ fontFamily: 'var(--font-roboto)' }}>
            <p>
              <strong>Roblox Clicker</strong> has become one of the most popular <strong>online clicker games</strong> for several compelling reasons. First and foremost, it's completely free to play and requires no downloads or installations. You can <strong>play roblox clicker online</strong> directly in your web browser, making it accessible to anyone with an internet connection. This convenience factor has contributed significantly to its massive player base of over 8 million players worldwide.
            </p>
            <p>
              The game's appeal lies in its perfect balance between simplicity and depth. While the core mechanic of clicking is easy to understand, the strategic elements of upgrade management, resource allocation, and prestige timing provide layers of complexity that keep experienced gamers engaged. This makes <strong>Roblox Clicker</strong> suitable for both casual players who want to unwind with some mindless clicking and serious gamers who enjoy optimizing their strategies for maximum efficiency.
            </p>
            <p>
              Another major advantage of playing <strong>roblox clicker game</strong> online is the continuous updates and new content. Unlike standalone games that remain static, our online platform regularly receives updates with new features, seasonal events, and limited-time challenges. This means there's always something new to discover, keeping the gameplay fresh and exciting even for long-time players.
            </p>
            <p>
              The social aspect of <strong>Roblox Clicker</strong> shouldn't be overlooked either. Compete with friends and players worldwide on global leaderboards, share your achievements on social media, and join a thriving community of clicker game enthusiasts. Many players find that the competitive elements add an extra layer of motivation to their clicking sessions, pushing them to reach new heights and beat their personal records.
            </p>
            <p>
              For fans of <strong>race clicker</strong> games and other similar titles like <strong>cookie clicker roblox</strong>, Roblox Clicker offers a familiar yet unique experience. It takes the best elements from various clicker games and combines them into one polished package. The pixel art aesthetic gives it a charming retro feel, while modern game design principles ensure smooth gameplay and intuitive controls.
            </p>
            <p>
              The idle mechanics in <strong>Roblox Clicker</strong> make it perfect for players with busy schedules. You don't need to dedicate hours at a time to make progress. Play for a few minutes during your coffee break, let your auto-clickers work while you're away, and come back to find substantial progress. This flexibility has made clicker games increasingly popular among working professionals and students who want engaging entertainment that fits their lifestyle.
            </p>
            <p>
              Whether you're a veteran of <strong>clicker games</strong> or completely new to the genre, Roblox Clicker welcomes you with open arms. The tutorial is helpful but not intrusive, allowing new players to learn at their own pace while giving experienced players the freedom to jump right into the action. With regular updates, active community, and genuinely fun gameplay, <strong>Roblox Clicker</strong> stands out as one of the best free online games available today.
            </p>
            <p>
              Start your clicking adventure now and see why millions of players have made <strong>Roblox Clicker</strong> their go-to game for quick entertainment and long-term progression. Whether you have five minutes or five hours, there's always something satisfying about watching those numbers go up. Join the clicking revolution and become a legend in the <strong>roblox clicker</strong> community!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}














