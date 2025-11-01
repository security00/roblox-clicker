import type { Metadata } from 'next';
import GameCard from '../../components/GameCard';
export const dynamic = 'force-static';


export const metadata: Metadata = {
  title: 'Clicker Games - Free Online Collection',
  description: 'Browse our free online clicker games. Play Roblox Clicker, Cookie Clicker, Money Clicker, and more. Start clicking, unlock upgrades, and enjoy idle fun.',
  alternates: { canonical: 'https://roblox-clicker.net/category/clicker' },
};

export default function ClickerCategoryPage() {
  const allGames = [
    { title: 'Clicker Games - Free Online Collection', slug: 'roblox-clicker', description: 'Browse our free online clicker games. Play Roblox Clicker, Cookie Clicker, Money Clicker, and more. Start clicking, unlock upgrades, and enjoy idle fun.', plays: '2.5M plays', rating: '4.8' },
    { title: 'Clicker Games - Free Online Collection', slug: 'cookie-clicker', description: 'Browse our free online clicker games. Play Roblox Clicker, Cookie Clicker, Money Clicker, and more. Start clicking, unlock upgrades, and enjoy idle fun.', plays: '5.1M plays', rating: '4.9' },
    { title: 'Clicker Games - Free Online Collection', slug: 'money-clicker', description: 'Browse our free online clicker games. Play Roblox Clicker, Cookie Clicker, Money Clicker, and more. Start clicking, unlock upgrades, and enjoy idle fun.', plays: '1.8M plays', rating: '4.7' },
    { title: 'Clicker Games - Free Online Collection', slug: 'fortnite-clicker', description: "Tap to earn V-Bucks, unlock upgrades, and dominate the island!", plays: '3.2M plays', rating: '4.6' },
    { title: 'Clicker Games - Free Online Collection', slug: 'mcdonald-clicker', description: 'Browse our free online clicker games. Play Roblox Clicker, Cookie Clicker, Money Clicker, and more. Start clicking, unlock upgrades, and enjoy idle fun.', plays: '1.5M plays', rating: '4.5' },
    { title: 'Clicker Games - Free Online Collection', slug: 'milk-clicker', description: 'Browse our free online clicker games. Play Roblox Clicker, Cookie Clicker, Money Clicker, and more. Start clicking, unlock upgrades, and enjoy idle fun.', plays: '2.1M plays', rating: '4.7' },
    { title: 'Clicker Games - Free Online Collection', slug: 'fruit-clicker', description: 'Browse our free online clicker games. Play Roblox Clicker, Cookie Clicker, Money Clicker, and more. Start clicking, unlock upgrades, and enjoy idle fun.', plays: '1.9M plays', rating: '4.6' },
    { title: 'Clicker Games - Free Online Collection', slug: 'burger-clicker', description: 'Browse our free online clicker games. Play Roblox Clicker, Cookie Clicker, Money Clicker, and more. Start clicking, unlock upgrades, and enjoy idle fun.', plays: '1.3M plays', rating: '4.4' },
  ];

  return (
    <div className="bg-[#1a1a1a]">
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-press-start)' }}>
            CLICKER GAMES
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {allGames.map((game) => (<GameCard key={game.slug} {...game} />))}
          </div>
        </div>
      </section>
    </div>
  );
}









