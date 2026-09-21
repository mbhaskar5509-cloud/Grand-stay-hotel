import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GrandStay Hotel | Premium Hotel in Tirupati",
  description:
    "Stay at GrandStay Hotel in Tirupati with comfortable rooms, premium facilities, easy booking and warm hospitality.",
  keywords: [
    "hotel in Tirupati",
    "best hotel in Tirupati",
    "Tirupati hotel booking",
    "GrandStay Hotel",
    "rooms in Tirupati",
  ],
  openGraph: {
    title: "GrandStay Hotel | Premium Hotel in Tirupati",
    description:
      "Comfortable rooms, premium facilities and warm hospitality in Tirupati.",
    type: "website",
  },
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