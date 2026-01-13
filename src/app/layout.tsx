import type { Metadata } from "next";
import { Inter, Playfair_Display, Libre_Baskerville } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"]
});

const ivyProstoDisplay = localFont({
  src: "../../public/fonts/ivyprostodisplay.otf",
  variable: "--font-ivy-prosto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Psalms Coffee - Where Every Cup Tells a Story",
  description:
    "Experience exceptional coffee, warm community, and genuine connection at Psalms Coffee. Serving fair trade coffee with a heart for faith and fellowship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfairDisplay.variable} ${libreBaskerville.variable} ${ivyProstoDisplay.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
