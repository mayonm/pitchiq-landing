import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
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
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
