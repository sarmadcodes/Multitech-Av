import type { Metadata } from "next";
import { Geist, Geist_Mono, Tinos } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsApp } from "@/components/WhatsApp";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const logoFont = Tinos({ subsets: ["latin"], weight: "700", variable: "--font-logo" });

export const metadata: Metadata = {
  title: { default: "Multitech | LED Screens and Audio Visual Systems in Pakistan", template: "%s | Multitech" },
  description: "LED walls, video walls, digital signage, conference microphones and speakers, designed and installed across Pakistan since 2006.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${mono.variable} ${logoFont.variable}`}>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsApp />
      </body>
    </html>
  );
}
