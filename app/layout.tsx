import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Одиссей — Компьютерный клуб",
  description:
    "Одиссей — компьютерный клуб с профессиональными игровыми ПК, топовой периферией и комфортной атмосферой. Играй на уровне.",
  openGraph: {
    title: "Одиссей — Компьютерный клуб",
    description: "Играй на уровне.",
    images: ["/helmet.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#080808] text-[#f0f0f0]">
        {children}
      </body>
    </html>
  );
}
