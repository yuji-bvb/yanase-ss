import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PrelineScript from "./components/PrelineScript";
import Navi from "./components/Navi";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "簗瀬製作所",
  description:
    "簗瀬製作所の公式ホームページです。プレス加工による自動車部品等の製造及び溶接加工を行っています。",
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
      </body>
      <PrelineScript />
    </html>
  );
}
