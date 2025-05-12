import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Juan D. Guzmán | Web CV",
  description: "Portfolio and CV of Juan D. Guzmán, Full Stack Developer",
  viewport: "width=device-width, initial-scale=1",
  applicationName: "Juan D. Guzmán CV",
  authors: [{ name: "Juan D. Guzmán" }],
  keywords: ["web developer", "portfolio", "CV", "resume"],
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="min-h-screen bg-background antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
