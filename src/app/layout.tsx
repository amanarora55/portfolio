import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Aman Arora — Senior Software Developer · React / React Native / AI",
  description:
    "Toronto-based Senior Software Developer (Permanent Resident) with 7+ years building offline-first React & React Native apps for 25,000+ users across 17+ global clients.",
  openGraph: {
    title: "Aman Arora — Senior Software Developer",
    description:
      "7+ years · 25K+ users · 80%+ crash reduction · React, React Native, Next.js, Vue.js, Python, AI integration.",
    type: "profile",
  },
};

export const viewport: Viewport = {
  themeColor: "#14151c",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">{children}</body>
    </html>
  );
}
