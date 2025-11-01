import type { Metadata } from 'next';
export const dynamic = 'force-static';


export const metadata: Metadata = {
  title: '',
  description: 'Learn how Roblox Clicker collects, uses, and protects your data. Read about cookies, analytics, third-party services, and your privacy rights.',
  alternates: { canonical: 'https://roblox-clicker.net/privacy' },
};

export default function PrivacyPage() {
  return (
    <div className="bg-[#1a1a1a]">
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-press-start)' }}>PRIVACY POLICY</h1>
        <div className="text-gray-300 space-y-4" style={{ fontFamily: 'var(--font-roboto)' }}>
          <p>This website does not require account registration. We use basic, privacy鈥慺riendly analytics and cookies only for essential functionality (e.g., game progress in localStorage).</p>
          <p>If you have any questions, contact us at the Contact page.</p>
        </div>
      </section>
    </div>
  );
}






