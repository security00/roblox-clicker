import type { Metadata } from 'next';
export const dynamic = 'force-static';


export const metadata: Metadata = {
  title: '',
  description: 'Read the Roblox Clicker Terms of Service and policies. Learn about acceptable use, user content, disclaimers, and your rights while using our site.',
  alternates: { canonical: 'https://roblox-clicker.net/terms' },
};

export default function TermsPage() {
  return (
    <div className="bg-[#1a1a1a]">
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-press-start)' }}>TERMS OF SERVICE</h1>
        <div className="text-gray-300 space-y-4" style={{ fontFamily: 'var(--font-roboto)' }}>
          <p>Use this site for personal entertainment only. All games and trademarks belong to their respective owners.</p>
          <p>By using the site, you agree not to abuse services, attempt unauthorized access, or infringe intellectual property.</p>
        </div>
      </section>
    </div>
  );
}






