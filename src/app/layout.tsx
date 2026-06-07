import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "PitchIQ — Strike Zone & Pitch Prediction for High School Baseball",
  description:
    "Objective strike-ball calls and pitch location mapping for high school baseball practice. Free for teams.",
  openGraph: {
    title: "PitchIQ — Strike Zone & Pitch Prediction",
    description:
      "See every pitch. Predict the next one. Practice tools for high school baseball.",
    type: "website",
    siteName: "PitchIQ",
  },
  twitter: {
    card: "summary_large_image",
    title: "PitchIQ — Strike Zone & Pitch Prediction",
    description:
      "See every pitch. Predict the next one. Practice tools for high school baseball.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
