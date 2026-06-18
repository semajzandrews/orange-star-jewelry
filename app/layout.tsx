import type { Metadata } from "next";
import SmoothScroll from "./components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "Orange Star Jewelry — Goldsmith on Main Street, Orange NJ since 1997",
  description:
    "A working goldsmith's bench on Main Street in Orange, NJ. Custom rings, hand repairs, 14k to 22k and platinum, by master craftsman Rahim. Walk in: 283 Main St. Call (973) 676-7400.",
  openGraph: {
    title: "Orange Star Jewelry · Orange NJ",
    description: "Custom gold and repair by hand since 1997. 283 Main St, Orange NJ.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="antialiased">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=satoshi@300,400,500,700&display=swap"
        />
      </head>
      <body className="bg-forge text-bone forge-grain min-h-screen">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
