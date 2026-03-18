import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Septic System Installation - Eagle Septic Guide",
  description: "New septic system installation in Central Valley, California. Site evaluation, permits, full installation, and homeowner walkthrough.",
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
      name: "New Septic System Installation",
      description: "Complete new septic system installation including site evaluation, soil perc testing, system design, permit coordination, excavation, tank and drain field installation, and homeowner walkthrough. C-42 licensed. Serving Central Valley, California.",
      provider: { "@type": "LocalBusiness", name: "Eagle Septic Guide", url: "https://eaglesepticpumping.com" },
      areaServed,
      priceRange: "$10000-$30000",
      url: "https://eaglesepticpumping.com/services/new-system-installation",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://eaglesepticpumping.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://eaglesepticpumping.com/services" },
        { "@type": "ListItem", position: 3, name: "New Septic System Installation" },
      ],
    },
  ],
};

export default function NewSystemInstallationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <section className="bg-[#0c4a6e] text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/services" className="text-blue-300 text-sm hover:text-white mb-4 inline-block">← All Services</Link>
          <h1 className="text-4xl font-bold mb-4">New Septic System Installation</h1>
          <p className="text-blue-200 text-lg">From site evaluation and permits through final inspection and homeowner walkthrough.</p>
          <div className="mt-4 flex gap-3">
            <span className="bg-[#16a34a] text-white text-sm px-3 py-1 rounded-full font-medium">$10,000 to $30,000 typical</span>
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3">What Is Included</h2>
        <ul className="space-y-2 mb-6">
          {[
            "Site evaluation and soil percolation testing",
            "System design sized for household and soil conditions",
            "Permit application and county coordination",
            "Tank procurement and delivery",
            "Full excavation and installation",
            "Distribution system installation (pipes, distribution box)",
            "Drain field installation and grading",
            "Final inspection coordination and documentation",
            "System operation walkthrough for homeowners",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-gray-700">
              <svg className="w-5 h-5 text-[#16a34a] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Licensing and Compliance</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">All installation work is performed under C-42 (Sanitation System) licensure. Permits are pulled and county coordination is handled on your behalf. Systems are designed and installed in compliance with Stanislaus, Merced, and San Joaquin County regulations.</p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">When New Installation Is Required</h2>
        <ul className="space-y-1 mb-6 text-gray-700 text-sm">
          <li>New home construction on a lot without sewer access</li>
          <li>Complete replacement of a failed septic system</li>
          <li>Property conversion from shared to private septic</li>
          <li>Adding structures or increasing occupancy beyond existing system capacity</li>
        </ul>

        <div className="flex flex-wrap gap-4 mt-8">
          <a href="tel:5558675309" className="bg-[#16a34a] hover:bg-[#15803d] text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">Schedule Site Evaluation</a>
          <Link href="/services" className="border border-[#0c4a6e] text-[#0c4a6e] hover:bg-[#0c4a6e] hover:text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">All Services</Link>
        </div>
      </article>
    </>
  );
}
