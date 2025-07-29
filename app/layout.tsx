import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import ClientRoot from "./client-root";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Community Pulse – Creator Analytics Dashboard",
  description:
    "Community Pulse is a modern analytics dashboard for SMS-based creators, showcasing campaign growth, churn, and retention insights using interactive line/bar charts, dynamic tooltips, and glassmorphic UI. Built with Next.js, Tailwind CSS, and ApexCharts. Features include summary stats, campaign breakdowns, AI-assisted suggestions, and mobile-responsive design.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Community Pulse – Creator Analytics Dashboard",
    description:
      "Visualize campaign growth, churn, and stickiness in a modern glass UI. Powered by Next.js and ApexCharts.",
    url: "https://fluency-assessment.vercel.app/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Community Pulse – Creator Analytics Dashboard",
    description:
      "SMS campaign analytics made beautiful — track retention, churn, and growth with interactive visualizations.",
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
