import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://eaglesepticpumping.com"),
  title: "Eagle Septic Guide - Free Septic System Information for Homeowners",
  description: "Free septic system information for homeowners. Plain-language guides, maintenance tips, cost information, and troubleshooting help from licensed technicians with 18+ years of experience.",
  openGraph: {
    title: "Eagle Septic Guide",
    description: "Free septic system information for homeowners across California's Central Valley.",
    images: ["/og-image.png"],
    url: "https://eaglesepticpumping.com",
    type: "website",
    siteName: "Eagle Septic Guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eagle Septic Guide",
    description: "Free septic system information for homeowners across California's Central Valley.",
    images: ["/og-image.png"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Eagle Septic Guide",
  url: "https://eaglesepticpumping.com",
  telephone: "(555) 867-5309",
  description:
    "Free educational resource for homeowners across California's Central Valley, offering plain-language guides on septic system maintenance, troubleshooting, costs, and emergency response — written by licensed technicians with 18+ years of experience.",
  areaServed: [
    { "@type": "County", name: "Stanislaus County", containedInPlace: { "@type": "State", name: "California" } },
    { "@type": "County", name: "San Joaquin County", containedInPlace: { "@type": "State", name: "California" } },
    { "@type": "County", name: "Merced County", containedInPlace: { "@type": "State", name: "California" } },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
    bestRating: "5",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Septic Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Septic Tank Pumping" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tank Cleaning and Maintenance" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Septic Inspections" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency Septic Services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drain Field Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "New Septic System Installation" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="antialiased bg-white text-gray-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
