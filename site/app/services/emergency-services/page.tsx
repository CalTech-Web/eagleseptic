import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emergency Septic Services 24/7 - Eagle Septic Guide",
  description: "24/7 emergency septic service in the Central Valley. Real person answers. On-site within 2 to 4 hours. Sewage backup, system failure, emergency pump-out.",
};

const areaServed = [
  { "@type": "County", name: "Stanislaus County", containedInPlace: { "@type": "State", name: "California" } },
  { "@type": "County", name: "San Joaquin County", containedInPlace: { "@type": "State", name: "California" } },
  { "@type": "County", name: "Merced County", containedInPlace: { "@type": "State", name: "California" } },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Emergency Septic Services",
      description: "24/7 emergency septic service including sewage backup response, emergency tank pumping, and same-day dispatch. Real person answers every call. On-site within 2 to 4 hours. Serving Central Valley, California.",
      provider: { "@type": "LocalBusiness", name: "Eagle Septic Guide", url: "https://eaglesepticpumping.com" },
      areaServed,
      priceRange: "$500-$1200",
      url: "https://eaglesepticpumping.com/services/emergency-services",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://eaglesepticpumping.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://eaglesepticpumping.com/services" },
        { "@type": "ListItem", position: 3, name: "Emergency Septic Services" },
      ],
    },
  ],
};

export default function EmergencyServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <section className="bg-red-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/services" className="text-red-200 text-sm hover:text-white mb-4 inline-block">← All Services</Link>
          <h1 className="text-4xl font-bold mb-4">Emergency Septic Services</h1>
          <p className="text-red-100 text-lg">Available 24 hours a day, 7 days a week. Real person answers every call.</p>
          <div className="mt-6">
            <a href="tel:5558675309" className="inline-block bg-white text-red-700 hover:bg-red-50 px-6 py-3 rounded-lg font-bold text-lg transition-colors">(555) 867-5309</a>
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-amber-50 border border-amber-300 rounded-xl p-5 mb-8">
          <h3 className="font-bold text-amber-800 mb-2">If you have a sewage backup right now:</h3>
          <ol className="space-y-1 text-sm text-amber-700 list-decimal list-inside">
            <li>Stop all water use immediately. Every flush makes it worse.</li>
            <li>Keep people and pets away from any wet outdoor areas.</li>
            <li>Open windows if safe to reduce gas buildup inside.</li>
            <li>Call (555) 867-5309 for immediate assistance.</li>
          </ol>
        </div>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3">What Emergency Service Includes</h2>
        <ul className="space-y-2 mb-6">
          {[
            "24/7 phone response, real person answers",
            "Priority same-day dispatch",
            "Emergency tank pumping to relieve system pressure",
            "Sewage backup assessment and containment advice",
            "Diagnosis of failure cause",
            "Temporary solutions to restore function while permanent repairs are planned",
            "Clear estimate before any work begins",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-gray-700">
              <svg className="w-5 h-5 text-[#16a34a] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Response Time</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">Typical on-site response time is 2 to 4 hours after your call. Service is available nights, weekends, and holidays across the Central Valley service area.</p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Emergency Cost Range</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">Emergency services typically cost $500 to $1,200 depending on the nature of the problem, time of day, and work required. A clear estimate is provided before any work begins.</p>

        <div className="flex flex-wrap gap-4 mt-8">
          <a href="tel:5558675309" className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">Call Now: (555) 867-5309</a>
          <Link href="/emergency" className="border border-red-600 text-red-700 hover:bg-red-600 hover:text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">Emergency Guide</Link>
        </div>
      </article>
    </>
  );
}
