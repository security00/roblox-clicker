import type { Metadata } from "next";
import { Press_Start_2P, Roboto } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://roblox-clicker.net"),
  title: {
    default: "Roblox Clicker - Play Free Online Clicker Game | Roblox Clicker Game",
    template: "%s | Roblox Clicker"
  },
  description: "Play Roblox Clicker, the ultimate free online clicker game! Click to earn coins, upgrade your gear, and become the clicking champion. Features auto clicker support, codes, and more.",
  keywords: ["roblox clicker", "roblox clicker game", "play roblox clicker online", "clicker game", "roblox games", "free clicker game", "online clicker", "race clicker", "cookie clicker roblox"],
  authors: [{ name: "Roblox Clicker" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://roblox-clicker.net/",
    siteName: "Roblox Clicker",
    title: "Roblox Clicker - Play Free Online Clicker Game",
    description: "Play Roblox Clicker, the ultimate free online clicker game! Click to earn coins, upgrade your gear, and become the clicking champion.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Roblox Clicker Game"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Roblox Clicker - Play Free Online Clicker Game",
    description: "Play Roblox Clicker, the ultimate free online clicker game! Click to earn coins and become the clicking champion.",
    images: ["/logo.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
        <link rel="canonical" href="https://roblox-clicker.net/" />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FHVRNG0TPZ"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FHVRNG0TPZ');
            `,
          }}
        />
        {/* Microsoft Clarity */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "tzfcp7vnf8");
            `,
          }}
        />
      </head>
      <body className={`${pressStart.variable} ${roboto.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

