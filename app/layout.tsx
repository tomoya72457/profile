import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  weight: ["400", "500", "700"],
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  variable: "--font-noto-serif-jp",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "井手智也 | Portfolio - Tech & Logic",
  description: "データサイエンス × Web開発 × 生成AI活用 | 潜在的ニーズを実装するエンジニア",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth dark">
      <body
        suppressHydrationWarning={true}
        className={`${inter.variable} ${jetbrainsMono.variable} ${notoSansJP.variable} ${notoSerifJP.variable} antialiased selection:bg-primary-500 selection:text-white overflow-x-hidden font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
