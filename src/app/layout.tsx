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
  weight: ["400", "700"],
});

const ivyProstoDisplay = localFont({
  src: "../../public/fonts/ivyprostodisplay.otf",
  variable: "--font-ivy-prosto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://psalmscoffee.vercel.app"), // Update with your actual domain
  title: {
    default:
      "Psalms Coffee - Mobile Specialty Coffee Cart for Weddings & Events",
    template: "%s | Psalms Coffee",
  },
  description:
    "Premium mobile coffee cart service for weddings, corporate events, and celebrations in the Salem Metro Area. Specialty espresso drinks, fast service, and elegant presentation. Book your event today!",
  keywords: [
    "mobile coffee cart",
    "wedding coffee service",
    "event coffee catering",
    "specialty coffee Salem",
    "mobile espresso bar",
    "coffee cart rental",
    "wedding coffee bar",
    "corporate event coffee",
    "Salem Metro Area coffee",
    "specialty coffee catering",
  ],
  authors: [{ name: "Psalms Coffee" }],
  creator: "Psalms Coffee",
  publisher: "Psalms Coffee",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/manifest.json",
  themeColor: "#78350f",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Psalms Coffee",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://psalmscoffee.vercel.app", // Update with your actual domain
    siteName: "Psalms Coffee",
    title: "Psalms Coffee - Mobile Specialty Coffee Cart for Weddings & Events",
    description:
      "Premium mobile coffee cart service for weddings, corporate events, and celebrations in the Salem Metro Area. Specialty espresso drinks, fast service, and elegant presentation.",
    images: [
      {
        url: "https://psalmscoffee.vercel.app/images/psalms-coffee-logo.png",
        width: 1200,
        height: 630,
        alt: "Psalms Coffee - Mobile Specialty Coffee Cart for Weddings & Events",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psalms Coffee - Mobile Specialty Coffee Cart",
    description:
      "Premium mobile coffee cart service for weddings, corporate events, and celebrations in the Salem Metro Area.",
    images: ["https://psalmscoffee.vercel.app/images/psalms-coffee-logo.png"],
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
    // Add your verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  alternates: {
    canonical: "https://psalmscoffee.vercel.app", // Update with your actual domain
  },
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
