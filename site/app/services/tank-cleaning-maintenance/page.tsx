import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Septic Tank Cleaning and Maintenance - Eagle Septic Guide",
  description: "What tank cleaning and maintenance involves, how it differs from standard pumping, and when to schedule it.",
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
      name: "Septic Tank Cleaning and Maintenance",
      description: "High-pressure interior tank wash, full sludge removal, baffle inspection and cleaning, filter service, and detailed written maintenance report. Serving Central Valley, California.",
      provider: { "@type": "LocalBusiness", name: "Eagle Septic Guide", url: "https://eaglesepticpumping.com" },
      areaServed,
      priceRange: "$400-$750",
      url: "https://eaglesepticpumping.com/services/tank-cleaning-maintenance",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://eaglesepticpumping.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://eaglesepticpumping.com/services" },
        { "@type": "ListItem", position: 3, name: "Tank Cleaning and Maintenance" },
      ],
    },
  ],
};

export default function TankCleaningPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <section className="bg-[#0c4a6e] text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/services" className="text-blue-300 text-sm hover:text-white mb-4 inline-block">← All Services</Link>
          <h1 className="text-4xl font-bold mb-4">Tank Cleaning and Maintenance</h1>
          <p className="text-blue-200 text-lg">A more thorough service than standard pumping. Here is what is included and when you need it.</p>
          <div className="mt-4 flex gap-3">
            <span className="bg-[#16a34a] text-white text-sm px-3 py-1 rounded-full font-medium">$400 to $750 typical</span>
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3">Cleaning vs Standard Pumping</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">Standard pumping removes the contents of the tank through suction. Tank cleaning goes further: after pumping, the interior walls are washed with high-pressure water to loosen compacted sludge and residue from the tank walls and floor. All loosened material is then removed. The result is a significantly cleaner tank, not just an empty one.</p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">What Is Included</h2>
        <ul className="space-y-2 mb-6">
          {[
            "Full tank pumping and liquid waste removal",
            "High-pressure interior wash to loosen compacted sludge",
            "Complete sludge and residue removal",
            "Baffle inspection, cleaning, and replacement if needed",
            "Filter cleaning (if applicable)",
            "Tank wall and lid inspection for cracks or deterioration",
            "Detailed written maintenance report",
            "Optional: annual or biennial maintenance plan enrollment",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-gray-700">
              <svg className="w-5 h-5 text-[#16a34a] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">When to Schedule Cleaning</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">Consider full tank cleaning instead of (or in addition to) standard pumping when: the tank has not been serviced in more than 5 years, you are buying or selling a home, you have noticed slow drains or odors, or you are enrolling in a maintenance plan for the first time. Annual maintenance plans typically include full cleaning in alternating years.</p>

        <div className="flex flex-wrap gap-4 mt-8">
          <a href="tel:5558675309" className="bg-[#16a34a] hover:bg-[#15803d] text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">Schedule Service</a>
          <Link href="/maintenance-plan" className="border border-[#0c4a6e] text-[#0c4a6e] hover:bg-[#0c4a6e] hover:text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">View Maintenance Plans</Link>
        </div>
      </article>
    </>
  );
}
