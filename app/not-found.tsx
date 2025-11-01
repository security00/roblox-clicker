import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="bg-[#1a1a1a] min-h-[60vh] flex items-center">
      <section className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-press-start)' }}>
            404 — Page Not Found
          </h1>
          <p className="text-gray-300 mb-6" style={{ fontFamily: 'var(--font-roboto)' }}>
            Sorry, we couldn't find that page. Try one of these popular destinations:
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link href="/" className="btn-pixel border-2 p-3 text-white text-center" style={{ borderColor: '#e63946', background: '#1e1e1e' }}>🏠 Home</Link>
            <Link href="/category/clicker" className="btn-pixel border-2 p-3 text-white text-center" style={{ borderColor: '#e63946', background: '#1e1e1e' }}>🎮 All Games</Link>
            <Link href="/games/race-clicker" className="btn-pixel border-2 p-3 text-white text-center" style={{ borderColor: '#e63946', background: '#1e1e1e' }}>🏁 Race Clicker</Link>
            <Link href="/games/cookie-clicker" className="btn-pixel border-2 p-3 text-white text-center" style={{ borderColor: '#e63946', background: '#1e1e1e' }}>🍪 Cookie Clicker</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

