import type { Metadata } from 'next';
import Link from 'next/link';
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Privacy Policy - Roblox Clicker',
  description: 'Learn how Roblox Clicker collects, uses, and protects information. Read about cookies, localStorage, analytics (Google Analytics, Microsoft Clarity), third-party embeds, children\'s privacy, and your choices.',
  alternates: { canonical: 'https://roblox-clicker.net/privacy' },
  openGraph: {
    title: 'Privacy Policy - Roblox Clicker',
    description: 'How we handle cookies, localStorage, analytics, third-party content, data retention, and your choices.',
    url: 'https://roblox-clicker.net/privacy',
    type: 'article'
  }
};

export default function PrivacyPage() {
  return (
    <div className="bg-[#1a1a1a]">
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-press-start)' }}>
            PRIVACY POLICY
          </h1>

          <p className="text-gray-400 mb-6" style={{ fontFamily: 'var(--font-roboto)' }}>
            Last updated: 2025-11-02
          </p>

          <div className="bg-[#2a2a2a] border-2 border-[#e63946] p-6 mb-6 text-gray-300" style={{ fontFamily: 'var(--font-roboto)' }}>
            <p>
              Roblox Clicker is a simple, free-to-play browser game. We do not require account
              registration and we do not collect information that directly identifies you unless you
              contact us voluntarily. This page explains what limited information may be processed
              to operate the site and improve the experience.
            </p>
          </div>

          <div className="space-y-8 text-gray-300" style={{ fontFamily: 'var(--font-roboto)' }}>
            <section>
              <h2 className="text-xl font-bold text-white mb-3">Information We Process</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Basic device and usage information (e.g., page views, approximate location based on IP,
                  browser type, and events) collected by analytics tools to understand traffic and improve
                  the site. We use Google Analytics and Microsoft Clarity. See their policies for details.
                </li>
                <li>
                  Error and performance data (aggregated) to keep the site reliable.
                </li>
                <li>
                  Content you choose to send us when you <Link href="/contact" className="underline">contact us</Link>.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Cookies and Local Storage</h2>
              <p className="mb-2">
                We use a small number of cookies and localStorage entries:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Game state saved in your browser (localStorage) so progress and settings persist locally.
                  This is stored only on your device and is not uploaded to our servers.
                </li>
                <li>
                  Analytics cookies that help measure visits and usage. These may be set by Google Analytics
                  and Microsoft Clarity to understand how the site is used.
                </li>
              </ul>
              <p className="mt-2">
                You can clear these anytime via your browser settings. If you block cookies or local storage,
                some features may not work as intended (for example, saved progress).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Third-Party Content</h2>
              <p className="mb-2">
                Some pages embed third-party content (for example, Scratch game iframes). When you interact
                with embedded content, that provider may collect data under its own privacy policy. You can
                switch to our Local Mode on many pages to avoid external embeds.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">How We Use Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Operate, secure, and improve the site and gameplay.</li>
                <li>Understand aggregate usage to plan content and performance improvements.</li>
                <li>Respond to messages you send through the contact page.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Your Choices</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Browser settings to block/clear cookies and localStorage.</li>
                <li>Opt-out tools from Google (GA) and Microsoft Clarity if you prefer reduced analytics tracking.</li>
                <li>Use Local Mode on game pages to avoid third-party embeds.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Children\'s Privacy</h2>
              <p>
                Our site is designed for a general audience and does not knowingly collect personal
                information from children. If you believe we have collected a child\'s information,
                please <Link href="/contact" className="underline">contact us</Link> and we will promptly address it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Data Retention</h2>
              <p>
                We retain analytics data in aggregated form for a limited period consistent with the
                defaults of the analytics providers. Game progress stored in localStorage remains only on
                your device until you clear it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">International Users</h2>
              <p>
                By using the site, you understand that information may be processed in the country where
                our service or providers operate. We aim to use privacy-friendly defaults and minimize data
                collection.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Contact</h2>
              <p>
                Questions about this policy? Reach us on the <Link href="/contact" className="underline">Contact</Link> page.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
