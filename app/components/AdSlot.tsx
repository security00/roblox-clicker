interface AdSlotProps {
  type: 'banner' | 'square' | 'vertical' | 'leaderboard';
  className?: string;
}

export default function AdSlot({ type, className = '' }: AdSlotProps) {
  const adDimensions = {
    banner: '728x90',
    square: '300x250',
    vertical: '160x600',
    leaderboard: '970x90'
  };

  const adSizes = {
    banner: 'h-[90px] w-full max-w-[728px]',
    square: 'h-[250px] w-[300px]',
    vertical: 'h-[600px] w-[160px]',
    leaderboard: 'h-[90px] w-full max-w-[970px]'
  };

  return (
    <div className={`bg-gray-800 border-2 border-gray-700 flex items-center justify-center ${adSizes[type]} ${className}`}>
      <div className="text-center">
        <p className="text-gray-500 text-xs mb-1" style={{ fontFamily: 'var(--font-roboto)' }}>
          Advertisement
        </p>
        <p className="text-gray-600 text-xs" style={{ fontFamily: 'var(--font-roboto)' }}>
          [{adDimensions[type]}]
        </p>
      </div>
    </div>
  );
}
