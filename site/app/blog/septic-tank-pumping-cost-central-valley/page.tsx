import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Septic Tank Pumping Cost in the Central Valley - Eagle Septic Guide",
  description: "Residential septic pumping in Modesto and the Central Valley typically runs $300 to $550. Learn what affects the price and what is included in a standard pump-out.",
  openGraph: {
    title: "Septic Tank Pumping Cost in the Central Valley",
    description: "Residential septic pumping in Modesto and the Central Valley typically runs $300 to $550. Learn what affects the price and what is included in a standard pump-out.",
    url: "https://eaglesepticpumping.com/blog/septic-tank-pumping-cost-central-valley",
    type: "article",
    siteName: "Eagle Septic Guide",
  },
};

export default function PumpingCostPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Septic Tank Pumping Cost in the Central Valley",
    description: "Residential septic pumping in Modesto and the Central Valley typically runs $300 to $550. Learn what affects the price and what is included in a standard pump-out.",
    url: "https://eaglesepticpumping.com/blog/septic-tank-pumping-cost-central-valley",
    author: { "@type": "Organization", name: "Eagle Septic Guide", url: "https://eaglesepticpumping.com" },
    publisher: { "@type": "Organization", name: "Eagle Septic Guide", url: "https://eaglesepticpumping.com" },
    datePublished: "2026-02-01",
    dateModified: "2026-03-17",
    inLanguage: "en-US",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://eaglesepticpumping.com" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://eaglesepticpumping.com/blog" },
          { "@type": "ListItem", position: 3, name: "Septic Tank Pumping Cost in the Central Valley" },
        ],
      }) }} />
      <section className="bg-[#0c4a6e] text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-blue-300 mb-4" aria-label="Breadcrumb"><a href="/" className="hover:text-white">Home</a><span aria-hidden="true"> / </span><a href="/blog" className="hover:text-white">Blog</a></nav>
          <span className="inline-block bg-purple-50 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">Cost &amp; Pricing</span>
          <h1 className="text-4xl font-bold mb-4">Septic Tank Pumping Cost in the Central Valley</h1>
          <p className="text-blue-200 text-lg">What to expect to pay in Modesto, Turlock, Ceres, and the surrounding area, and what affects the final price.</p>
          <div className="mt-3 flex items-center gap-2 text-sm text-blue-300"><span>5 min read</span><span aria-hidden="true">&middot;</span><span>Updated March 2026</span></div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="relative h-64 mb-8 rounded-xl overflow-hidden">
          <Image src="/images/lawn-drain-field.jpg" alt="Residential septic drain field in the Central Valley" fill className="object-cover" />
        </div>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Residential septic pumping in the Modesto and Central Valley area typically runs $300 to $550 for a standard residential tank. The exact price depends on tank size, location, access, and how full the tank is. We provide a firm upfront quote before any work begins.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Typical Price Ranges</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Service</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Typical Range</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["Standard residential pump-out (up to 1,000 gal)", "$300 to $450"],
                ["Larger tank pump-out (1,500 to 2,000 gal)", "$400 to $550"],
                ["Tank cleaning with high-pressure wash", "$400 to $750"],
                ["Standard inspection", "$175 to $400"],
                ["Emergency service", "$500 to $1,200"],
              ].map(([service, range]) => (
                <tr key={service} className="bg-white">
                  <td className="px-4 py-3 text-gray-700">{service}</td>
                  <td className="px-4 py-3 font-semibold text-gray-900">{range}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">What Affects the Price</h2>
        <ul className="space-y-3 mb-6">
          {[
            "Tank size: Larger tanks hold more waste and take longer to pump. A 1,500-gallon tank costs more to service than a 1,000-gallon tank.",
            "Access: If your tank lid is buried, the technician may need to locate and excavate it. Difficult access adds to the cost.",
            "Sludge level: A tank that has not been pumped in many years will have more compacted solids and may take longer to empty.",
            "Location: Service address within the Central Valley service area is standard pricing. Remote or rural addresses may carry a mileage fee.",
            "Additional services: If the inspection reveals broken baffles or other issues, repair costs are separate from the pump-out fee.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-gray-700">
              <svg className="w-4 h-4 text-[#16a34a] mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">What Is Included in a Standard Pump-Out</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          A standard pump-out with Eagle Septic includes full evacuation of liquid, sludge, and scum layers, a visual inspection of inlet and outlet baffles, a check for cracks and structural issues, sludge depth measurement for your records, legal waste transport to a licensed facility, and a written service summary with the recommended next pumping date.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Why Regular Pumping Saves Money</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          A $400 pump-out <Link href="/blog/how-often-pump-septic-tank" className="text-[#0c4a6e] underline hover:text-[#075985]">every 3 to 5 years</Link> is the most cost-effective maintenance a homeowner can do. When the tank overflows and solids reach the drain field, <Link href="/blog/drain-field-repair-cost" className="text-[#0c4a6e] underline hover:text-[#075985]">drain field repair costs</Link> jump to $3,000 to $15,000. A full drain field replacement runs $10,000 to $30,000. Regular pumping prevents all of that. Our <Link href="/maintenance-plan" className="text-[#0c4a6e] underline hover:text-[#075985]">annual maintenance plans</Link> starting at $299/year make it easy to stay on schedule.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <Link href="/services/septic-tank-pumping" className="bg-[#16a34a] hover:bg-[#15803d] text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">About Septic Pumping</Link>
          <Link href="/pricing" className="border border-[#0c4a6e] text-[#0c4a6e] hover:bg-[#0c4a6e] hover:text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">View Full Pricing</Link>
        </div>
      </article>
    </>
  );
}
