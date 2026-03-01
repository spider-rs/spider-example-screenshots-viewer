import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const description =
  "View screenshots of websites in realtime using Spider Cloud.";
const url =
  process.env.PUBLIC_NEXT_SITENAME || "https://screenshots.spider.cloud";

export const metadata: Metadata = {
  title: "Screenshots Spider Cloud",
  description,
  openGraph: {
    type: "website",
    url,
    title: "Screenshots Spider Cloud",
    description,
    siteName: "Spider Cloud Screenshots Live",
    images: [
      {
        url: `${url}/og.png`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Spider Screenshot Viewer",
              url: "https://screenshot-viewer.spider.cloud",
              description:
                "Take screenshots of any website during crawl.",
              applicationCategory: "WebApplication",
              operatingSystem: "Any",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              author: {
                "@type": "Organization",
                name: "Spider",
                url: "https://spider.cloud",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
