import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] border-t-4 border-[#c1121f] mt-12">
      <div className="container mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-[#e63946] font-bold mb-4 text-sm" style={{ fontFamily: 'var(--font-press-start)' }}>
              ABOUT
            </h3>
            <p className="text-gray-400 text-sm" style={{ fontFamily: 'var(--font-roboto)' }}>
              Roblox Clicker is your ultimate destination for free online clicker games. Play, compete, and master the art of clicking!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#e63946] font-bold mb-4 text-sm" style={{ fontFamily: 'var(--font-press-start)' }}>
              QUICK LINKS
            </h3>
            <ul className="space-y-2 text-sm" style={{ fontFamily: 'var(--font-roboto)' }}>
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#ffd700] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/category/clicker" className="text-gray-400 hover:text-[#ffd700] transition-colors">
                  All Games
                </Link>
              </li>
              <li>
                <Link href="/guides/how-to-play" className="text-gray-400 hover:text-[#ffd700] transition-colors">
                  How to Play
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Games */}
          <div>
            <h3 className="text-[#e63946] font-bold mb-4 text-sm" style={{ fontFamily: 'var(--font-press-start)' }}>
              POPULAR
            </h3>
            <ul className="space-y-2 text-sm" style={{ fontFamily: 'var(--font-roboto)' }}>
              <li>
                <Link href="/games/roblox-clicker" className="text-gray-400 hover:text-[#ffd700] transition-colors">
                  Roblox Clicker
                </Link>
              </li>
              <li>
                <Link href="/games/cookie-clicker" className="text-gray-400 hover:text-[#ffd700] transition-colors">
                  Cookie Clicker
                </Link>
              </li>
              <li>
                <Link href="/games/money-clicker" className="text-gray-400 hover:text-[#ffd700] transition-colors">
                  Money Clicker
                </Link>
              </li>
              <li>
                <Link href="/games/fortnite-clicker" className="text-gray-400 hover:text-[#ffd700] transition-colors">Fortnite Clicker</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-[#e63946] font-bold mb-4 text-sm" style={{ fontFamily: 'var(--font-press-start)' }}>
              RESOURCES
            </h3>
            <ul className="space-y-2 text-sm" style={{ fontFamily: 'var(--font-roboto)' }}>
              <li>
                <Link href="/guides/tips-and-tricks" className="text-gray-400 hover:text-[#ffd700] transition-colors">
                  Tips & Tricks
                </Link>
              </li>
              <li>
                <Link href="/guides/auto-clicker" className="text-gray-400 hover:text-[#ffd700] transition-colors">
                  Auto Clicker Guide
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-[#ffd700] transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm" style={{ fontFamily: 'var(--font-roboto)' }}>
              漏 {currentYear} Roblox Clicker. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm" style={{ fontFamily: 'var(--font-roboto)' }}>
              <Link href="/privacy" className="text-gray-500 hover:text-[#ffd700] transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-700">|</span>
              <Link href="/terms" className="text-gray-500 hover:text-[#ffd700] transition-colors">
                Terms of Service
              </Link>
              <span className="text-gray-700">|</span>
              <Link href="/contact" className="text-gray-500 hover:text-[#ffd700] transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <p className="text-gray-600 text-xs mt-4 text-center" style={{ fontFamily: 'var(--font-roboto)' }}>
            Disclaimer: This website is not affiliated with Roblox Corporation. All game names, logos, and trademarks are property of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}




