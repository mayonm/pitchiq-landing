import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PitchIQ — AI Strike Zone & Pitch Prediction for High School Baseball",
  description:
    "AI strike/ball detection and pitch location prediction built for high school baseball practice. Free for teams.",
  openGraph: {
    title: "PitchIQ — AI Strike Zone & Pitch Prediction",
    description:
      "See every pitch. Predict the next one. AI-powered practice tools for high school baseball.",
    type: "website",
    siteName: "PitchIQ",
  },
  twitter: {
    card: "summary_large_image",
    title: "PitchIQ — AI Strike Zone & Pitch Prediction",
    description:
      "See every pitch. Predict the next one. AI-powered practice tools for high school baseball.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
