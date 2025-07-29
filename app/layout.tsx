import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import ClientRoot from "./client-root";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Campaign Retention & Growth Dashboard",
  description:
    "A modern, glassmorphic analytics dashboard visualizing user growth, campaign retention, and engagement trends with interactive line/bar charts and dynamic tooltips — built using Next.js and ApexCharts.",
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
