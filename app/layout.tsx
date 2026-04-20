import type { Metadata } from "next";
import { Manrope, Noto_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
});

export const metadata: Metadata = {
  title: "The Curated Lens",
  description: "A premium photography portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${notoSerif.variable} bg-[#f9f9f9] text-[#2d3435]`}
      >
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}