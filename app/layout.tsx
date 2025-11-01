import type { Metadata } from "next";
import { Press_Start_2P, Roboto } from "next/font/google";
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
