import type { Metadata } from "next";
import SmoothScroll from "./components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "Orange Star Jewelry · goldsmith on Main Street, Orange NJ since 1997",
  description:
    "A working goldsmith's bench on Main Street in Orange, NJ. Custom rings, hand repair, 14k to 22k and platinum, annealed and set by master craftsman Rahim since 1997. Walk in at 283 Main St.",
  metadataBase: new URL("https://orange-star-jewelry.vercel.app"),
  openGraph: {
    title: "Orange Star Jewelry · Orange NJ",
    description:
      "Custom gold and hand repair at the bench since 1997. 283 Main St, City of Orange, NJ.",
    type: "website",
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="antialiased">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=boska@400,500,600,700,401&f[]=general-sans@300,400,500,600&display=swap"
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('reveal-armed')}}catch(e){}",
          }}
        />
      </head>
      <body className="bg-forge text-bone bench-grain min-h-screen">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
