import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-[#c1121f] border-b-4 border-black sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image src="/logo.png" alt="Roblox Clicker Logo" width={50} height={50} className="pixel-border" priority />
            <span className="text-white font-bold text-xl hidden sm:block" style={{ fontFamily: 'var(--font-press-start)' }}>
              ROBLOX CLICKER
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-white hover:text-[#ffd700] transition-colors font-medium">Home</Link>
            <Link href="/category/clicker" className="text-white hover:text-[#ffd700] transition-colors font-medium">Games</Link>
            <Link href="/guides/how-to-play" className="text-white hover:text-[#ffd700] transition-colors font-medium">Guides</Link>
            <Link href="/faq" className="text-white hover:text-[#ffd700] transition-colors font-medium">FAQ</Link>
            <Link href="/privacy" className="text-white hover:text-[#ffd700] transition-colors font-medium">Privacy</Link>
          </div>

          {/* Mobile Menu (CSS only via <details>) */}
          <details className="md:hidden relative">
            <summary className="list-none cursor-pointer text-white p-2 select-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </summary>
            <div className="absolute right-0 mt-2 w-40 bg-[#1f1f1f] border border-[#e63946] p-2 flex flex-col gap-2">
              <Link href="/" className="text-white hover:text-[#ffd700] transition-colors py-1">Home</Link>
              <Link href="/category/clicker" className="text-white hover:text-[#ffd700] transition-colors py-1">Games</Link>
              <Link href="/guides/how-to-play" className="text-white hover:text-[#ffd700] transition-colors py-1">Guides</Link>
              <Link href="/faq" className="text-white hover:text-[#ffd700] transition-colors py-1">FAQ</Link>
              <Link href="/privacy" className="text-white hover:text-[#ffd700] transition-colors py-1">Privacy</Link>
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}
