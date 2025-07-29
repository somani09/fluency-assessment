import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import ClientRoot from "./client-root";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "User Analytics Dashboard",
  description:
    "An interactive user analytics dashboard featuring growth insights, gain/loss trends, and dynamic charts built with Next.js, ApexCharts, and a modern UI.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        suppressHydrationWarning
        className={` ${spaceGrotesk.className} antialiased`}
      >
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  );
}
