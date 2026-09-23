import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "./CartProvider";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://campfirewalker.org";
const title = "Camp Firewalker | Adventure. Community. Character.";
const description =
  "Camp Firewalker is a volunteer-driven, donor-supported Dallas nonprofit creating outdoor adventures that build teamwork, confidence, and self-reliance.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Camp Firewalker",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Camp Firewalker social preview card" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <CartProvider>
          {children}
          <p className="site-memorial">In memory of Mark Wood and Matt Van Eaton</p>
        </CartProvider>
      </body>
    </html>
  );
}
