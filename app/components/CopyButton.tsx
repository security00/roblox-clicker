'use client';

interface CopyButtonProps {
  code: string;
}

export default function CopyButton({ code }: CopyButtonProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <button
      onClick={handleCopy}
      className="bg-[#ffd700] hover:bg-[#ffed4e] text-black px-6 py-2 font-bold transition-colors btn-pixel whitespace-nowrap"
      style={{ fontFamily: 'var(--font-press-start)', fontSize: '0.75rem' }}
    >
      COPY CODE
    </button>
  );
}
