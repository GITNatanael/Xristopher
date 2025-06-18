import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GrainOverlay } from "@/components/GrainOverlay";
import "./globals.css";
import clsx from "clsx";
import { useEffect } from "react";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Christopher | Illustrator & Animator",
  description:
    "Professional 2D animation, illustration, motion graphics and VFX. Let your ideas come to life with unique visual storytelling.",
  keywords: [
    "Illustration",
    "Animation",
    "2D",
    "VFX",
    "Motion Graphics",
    "Artist Portfolio",
    "Christopher",
  ],
  authors: [{ name: "Christopher", url: "https://tusitio.com" }],
  creator: "nate.html",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  openGraph: {
    title: "Christopher | Illustrator & Animator",
    description:
      "Explore a creative portfolio full of animations, illustrations and visual effects.",
    url: "https://tusitio.com",
    siteName: "Christopher MRND Portfolio",
    images: [
      {
        url: "/images/MRND.jpg",
        width: 1200,
        height: 630,
        alt: "Preview of Christopher's animation portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
  const setVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };
  setVh();
  window.addEventListener('resize', setVh);
  return () => window.removeEventListener('resize', setVh);
}, []);

  return (
    <html lang="en">
      <head>
        <head>
          <link
            rel="preconnect"
            href="https://firebasestorage.googleapis.com"
            crossOrigin="anonymous"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
        </head>
      </head>
      <body
        className={clsx(
          inter.className,
          "antialiased bg-black text-white sticky inset-0"
        )}
      >
        {children}
        <GrainOverlay intensity={0} animated={false} glowIntensity={15} />
      </body>
    </html>
  );
}
