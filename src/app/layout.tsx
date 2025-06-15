import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GrainOverlay } from "@/components/GrainOverlay"
import "./globals.css";
import clsx from "clsx";

const inter = Inter({
  weight: ["400", "500", "600","700","800","900"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Christopher Miranda Portfolio",
  description: "2D Animator web porfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "antialiased bg-black text-white sticky inset-0  ")}>{children}<GrainOverlay intensity={0} animated={false} glowIntensity={15}/> </body>
    </html>
  );
}
