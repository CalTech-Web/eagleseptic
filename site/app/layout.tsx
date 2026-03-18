import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Eagle Septic Guide - Free Septic System Information for Homeowners",
  description: "Free septic system information for homeowners. Plain-language guides, maintenance tips, cost information, and troubleshooting help from licensed technicians with 18+ years of experience.",
  openGraph: {
    title: "Eagle Septic Guide",
    description: "Free septic system information for homeowners across California's Central Valley.",
    images: ["/og-image.png"],
    url: "https://eaglesepticpumping.com",
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
      <body className="antialiased bg-white text-gray-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
