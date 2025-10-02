import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "SpectraCoin - Futuristic Memecoin Landing Page for Builders",
  description: "SpectraCoin is a neon-forward memecoin with clear buy steps, transparent tokenomics, and a vibrant, friendly community. Fast, fun, and future-ready.",
  keywords: ["spectracoin","memecoin","futuristic","neon","crypto","tokenomics","community","wallet","buy-crypto","landing-page","blockchain"],
  alternates: { canonical: "/" },
  openGraph: { title: "SpectraCoin - Futuristic Memecoin Landing Page for Builders", description: "SpectraCoin is a neon-forward memecoin with clear buy steps, transparent tokenomics, and a vibrant, friendly community. Fast, fun, and future-ready.", type: "website", url: "/", siteName: "SpectraCoin", images: [{ url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/design-a-simple-high-contrast-logo-for-s-1759393460004-6903a070.jpg", width: 1200, height: 630, alt: "SpectraCoin Logo" }] },
  twitter: { card: "summary_large_image", title: "SpectraCoin - Futuristic Memecoin Landing Page for Builders", description: "SpectraCoin is a neon-forward memecoin with clear buy steps, transparent tokenomics, and a vibrant, friendly community. Fast, fun, and future-ready.", images: ["https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/design-a-simple-high-contrast-logo-for-s-1759393460004-6903a070.jpg"] },
  robots: { index: true, follow: true }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}> 
        {children}
      </body>
    </html>
  );
}