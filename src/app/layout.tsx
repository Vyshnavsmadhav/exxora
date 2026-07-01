import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stitch Luxe | Aetheric Smart Wearables",
  description: "Discreet intelligence, premium craftsmanship. The ultimate minimalist smart wear experience.",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
