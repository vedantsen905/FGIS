import { Geist, Geist_Mono } from "next/font/google";
import { Oxanium } from "next/font/google";
import "./globals.css";
import GoogleTranslate from "./components/GoogleTranslate";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oxanium = Oxanium({
  variable: "--font-oxanium",
  subsets: ["latin"],
});

export const metadata = {
  title: "FGIS - FG Life Insurance",
  description: "Welcome to FG LIFE INSURANCE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon (will be shown in browser tab) */}
        <link rel="icon" href="/favicon.png" />

        {/* Title (text shown beside favicon in tab) */}
        <title>FGIS - FG Life Insurance</title>

        {/* Meta Description */}
        <meta name="description" content="Welcome to FG LIFE INSURANCE" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oxanium.variable} antialiased`}
      >
        {/* <GoogleTranslate /> */}
        {children}
      </body>
    </html>
  );
}
