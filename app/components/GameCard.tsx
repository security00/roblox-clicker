import Link from 'next/link';
import Image from 'next/image';

interface GameCardProps {
  title: string;
  description: string;
  slug: string;
  image?: string;
  plays?: string;
  rating?: string;
}

export default function GameCard({ title, description, slug, image, plays, rating }: GameCardProps) {
  // Support absolute slugs (e.g. '/') as direct links; otherwise link under /games/
  const href = slug.startsWith('/') ? slug : `/games/${slug}`;
  return (
    <Link href={href} className="group">
      <div className="bg-[#2a2a2a] border-2 border-[#e63946] hover:border-[#ffd700] transition-all duration-300 overflow-hidden btn-pixel">
        {/* Game Image */}
        <div className="relative h-48 bg-gradient-to-br from-[#c1121f] to-[#e63946] overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-6xl">🎮</div>
            </div>
          )}
          {/* Rating Badge */}
          {rating && (
            <div className="absolute top-2 right-2 bg-[#ffd700] text-black px-2 py-1 text-xs font-bold">
              ⭐ {rating}
            </div>
          )}
        </div>

        {/* Game Info */}
        <div className="p-4">
          <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#ffd700] transition-colors" style={{ fontFamily: 'var(--font-press-start)', fontSize: '0.875rem' }}>
            {title}
          </h3>
          <p className="text-gray-400 text-sm mb-3 line-clamp-2" style={{ fontFamily: 'var(--font-roboto)' }}>
            {description}
          </p>

          {/* Stats */}
          <div className="flex items-center justify-between text-xs text-gray-500" style={{ fontFamily: 'var(--font-roboto)' }}>
            {plays && (
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
                {plays}
              </span>
            )}
            <span className="text-[#e63946] group-hover:text-[#ffd700] font-medium">
              PLAY NOW →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
