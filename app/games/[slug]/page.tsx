import type { Metadata } from 'next';
import SimpleClicker from '../../components/SimpleClicker';

// Allowed dynamic pages that were previously 404s
const GAME_CONFIG: Record<string, { title: string; desc: string; theme: 'space'|'idle'|'mine'|'hero'|'farm'|'factory'|'default' }> = {};

type AllowedSlug = string;

export async function generateMetadata({ params }: { params?: { slug?: string } }): Promise<Metadata> {
  const computeTitle = (s: string) => s.replace(/-/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase());
  const slug = typeof params?.slug === 'string' ? params!.slug : 'game';
  const cfg = GAME_CONFIG[slug as AllowedSlug];
  const title = (cfg?.title ?? computeTitle(slug));
  const desc = cfg?.desc ?? `Play ${title} - a lightweight clicker that runs instantly in your browser.`;
  return {
    title: `${title} - Free Online Clicker Game`,
    description: desc,
    alternates: { canonical: `https://roblox-clicker.net/games/${slug}` },
    openGraph: { title: `${title} - Free Online Clicker Game`, description: desc, url: `https://roblox-clicker.net/games/${slug}`, type: 'website' },
  } satisfies Metadata;
}

export default function DynamicClickerPage({ params }: { params?: { slug?: string } }) {
  const computeTitle = (s: string) => s.replace(/-/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase());
  const slug = typeof params?.slug === 'string' ? params!.slug : 'game';
  const cfg = GAME_CONFIG[slug as AllowedSlug] ?? {
    title: computeTitle(slug),
    desc: 'Instant local clicker mode. No downloads or external embeds.',
    theme: 'default' as const,
  };

  return (
    <div className="bg-[#1a1a1a]">
      <section className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-press-start)' }}>
              {cfg.title.toUpperCase()}
            </h1>
            <p className="text-gray-400 mb-6" style={{ fontFamily: 'var(--font-roboto)' }}>
              {cfg.desc}
            </p>

            {/* Playable local clicker without external embeds */}
            <div className="relative bg-black border-4 border-[#e63946] aspect-video mb-4 overflow-hidden">
              <SimpleClicker title={cfg.title} theme={cfg.theme} />
            </div>

            <div className="bg-[#2a2a2a] border-2 border-[#e63946] p-6 mb-6">
              <h2 className="text-2xl font-bold text-[#ffd700] mb-4" style={{ fontFamily: 'var(--font-press-start)' }}>
                About {cfg.title}
              </h2>
              <div className="text-gray-300 space-y-4" style={{ fontFamily: 'var(--font-roboto)' }}>
                <p>
                  Enjoy a streamlined clicker experience themed for {cfg.title}. Everything runs in your browser with no downloads or external resources. Click to earn coins, purchase upgrades, and scale your production.
                </p>
                <p>
                  This lightweight mode guarantees the game always loads and plays smoothly, even if third-party embeds are unavailable.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-[#2a2a2a] border-2 border-[#e63946] p-4">
                <h3 className="text-lg font-bold text-[#ffd700] mb-3" style={{ fontFamily: 'var(--font-press-start)', fontSize: '0.875rem' }}>
                  GAME STATS
                </h3>
                <div className="space-y-3 text-sm" style={{ fontFamily: 'var(--font-roboto)' }}>
                  <div className="flex justify-between"><span className="text-gray-400">Mode:</span><span className="text-white font-bold">Local</span></div>
                  <div className="flex justify-between"><span className="text-gray-400">Playability:</span><span className="text-white font-bold">Instant</span></div>
                  <div className="flex justify-between"><span className="text-gray-400">Category:</span><span className="text-white font-bold">Incremental</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
















