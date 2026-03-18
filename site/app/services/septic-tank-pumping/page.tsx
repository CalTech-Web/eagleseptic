import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Septic Tank Pumping - Eagle Septic Guide",
  description: "What septic tank pumping involves, how often you need it, typical costs in the Central Valley, and what to expect on service day.",
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
      name: "Septic Tank Pumping",
      description: "Full evacuation of liquid, sludge, and scum layers with visual inspection of baffles and tank walls. Written service summary provided. Serving Central Valley, California.",
      provider: { "@type": "LocalBusiness", name: "Eagle Septic Guide", url: "https://eaglesepticpumping.com" },
      areaServed,
      priceRange: "$300-$550",
      url: "https://eaglesepticpumping.com/services/septic-tank-pumping",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://eaglesepticpumping.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://eaglesepticpumping.com/services" },
        { "@type": "ListItem", position: 3, name: "Septic Tank Pumping" },
      ],
    },
  ],
};

export default function SepticTankPumpingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <section className="bg-[#0c4a6e] text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/services" className="text-blue-300 text-sm hover:text-white mb-4 inline-block">← All Services</Link>
          <h1 className="text-4xl font-bold mb-4">Septic Tank Pumping</h1>
          <p className="text-blue-200 text-lg">The most essential septic maintenance. What it involves, how often you need it, and what to expect.</p>
          <div className="mt-4 flex gap-3">
            <span className="bg-[#16a34a] text-white text-sm px-3 py-1 rounded-full font-medium">$300 to $550 typical</span>
            <span className="bg-white/20 text-white text-sm px-3 py-1 rounded-full">Every 3 to 5 years</span>
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3">What Is Septic Tank Pumping?</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">Septic tank pumping is the process of removing accumulated sludge and scum from your septic tank using a vacuum truck. Over time, solids that cannot be broken down by bacteria build up in the tank. When the sludge layer reaches the outlet baffle, solids begin entering the drain field, causing irreversible damage. Regular pumping prevents this entirely.</p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">What Is Included</h2>
        <ul className="space-y-2 mb-6">
          {[
            "Full evacuation of liquid, sludge, and scum layers",
            "Tank lid locating and safe excavation if buried",
            "Visual inspection of inlet and outlet baffles",
            "Check for cracks, leaks, and structural issues",
            "Measurement of sludge and scum layers for records",
            "Legally compliant waste transport and disposal",
            "Written service summary with recommended next pumping date",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-gray-700">
              <svg className="w-5 h-5 text-[#16a34a] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">How Often to Pump</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-[#0c4a6e] text-white">
                <th className="text-left p-3">Household Size</th>
                <th className="text-left p-3">Tank Size</th>
                <th className="text-left p-3">Recommended Interval</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["1 to 2 people", "1,000 gallons", "Every 4 to 5 years"],
                ["3 to 4 people", "1,000 gallons", "Every 3 to 4 years"],
                ["3 to 4 people", "1,500 gallons", "Every 4 to 5 years"],
                ["5 or more people", "1,000 gallons", "Every 2 to 3 years"],
                ["5 or more people", "1,500+ gallons", "Every 3 to 4 years"],
              ].map((row) => (
                <tr key={row[0] + row[1]} className="odd:bg-white even:bg-gray-50">
                  {row.map((cell, i) => (
                    <td key={i} className="p-3 text-gray-700">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">What to Expect on Service Day</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">The technician arrives with a vacuum truck and locates the tank lid. If the lid is buried, they will probe the yard and excavate by hand to expose it. The pump hose is lowered into the tank and the vacuum removes all contents. The technician inspects the baffles and tank walls, notes any issues, and provides a written summary before leaving. The entire process typically takes 45 minutes to 90 minutes.</p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Cost Factors</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">The typical cost for residential septic pumping in the Modesto and Central Valley area is $300 to $550. Price varies based on tank size, the amount of sludge present, and whether the lid needs to be excavated. There is no charge for finding a lid that is accessible. Upfront quotes are provided before any work begins.</p>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-8 mb-6">
          <h3 className="font-semibold text-amber-800 mb-2">The Real Cost of Skipping Pumping</h3>
          <p className="text-sm text-amber-700">A pump-out every 3 to 5 years costs $300 to $550. Drain field replacement after solids overflow costs $15,000 to $50,000. Regular pumping is not just maintenance. It is the best financial decision a homeowner with a septic system can make.</p>
        </div>

        <div className="flex flex-wrap gap-4 mt-8">
          <a href="tel:5558675309" className="bg-[#16a34a] hover:bg-[#15803d] text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">Schedule Pumping</a>
          <Link href="/services" className="border border-[#0c4a6e] text-[#0c4a6e] hover:bg-[#0c4a6e] hover:text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">All Services</Link>
        </div>
      </article>
    </>
  );
}
