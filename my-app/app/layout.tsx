import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PrelineScript from "./components/PrelineScript";
import Navi from "./components/Navi";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

const siteName = "簗瀬製作所";
const description =
  "簗瀬製作所の公式ホームページです。プレス加工による自動車部品等の製造及び溶接加工を行っています。";
const url = "https://yanase-seisakusho.com/";

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s - ${siteName}`,
  },
  description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: "ja_JP",
    type: "website",
  },
  verification: {
    google:
      "google-site-verification=0sTZZXgYlBKNKGvHcYgzIh8bCzhrsXWoh_dwbOeUXpA",
  },
  alternates: {
    canonical: url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Navi />
        {children}
        <Footer />
        <PrelineScript />
      </body>
    </html>
  );
}
