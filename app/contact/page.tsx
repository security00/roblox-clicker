import type { Metadata } from 'next';
export const dynamic = 'force-static';


export const metadata: Metadata = {
  title: '',
  description: 'Get in touch with the Roblox Clicker team for support, feedback, partnerships, or questions. Send us a message and we will respond within 24-48 hours.',
  alternates: { canonical: 'https://roblox-clicker.net/contact' },
};

export default function ContactPage() {
  return (
    <div className="bg-[#1a1a1a]">
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-press-start)' }}>CONTACT</h1>
        <div className="text-gray-300 space-y-4" style={{ fontFamily: 'var(--font-roboto)' }}>
          <p>For inquiries, feature requests, or takedowns, please email: support@roblox-clicker.net</p>
          <p>We usually reply within 3鈥? business days.</p>
        </div>
      </section>
    </div>
  );
}






