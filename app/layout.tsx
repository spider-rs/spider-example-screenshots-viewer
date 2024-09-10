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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
