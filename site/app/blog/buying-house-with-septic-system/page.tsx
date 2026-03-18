import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buying a House with a Septic System - Eagle Septic Guide",
  description: "A standard home inspection does not cover the drain field. Here is what buyers need to know about septic inspections, permit records, and negotiating repairs before closing.",
  openGraph: {
    title: "Buying a House with a Septic System",
    description: "A standard home inspection does not cover the drain field. Here is what buyers need to know about septic inspections, permit records, and negotiating repairs before closing.",
    url: "https://eaglesepticpumping.com/blog/buying-house-with-septic-system",
    type: "article",
    siteName: "Eagle Septic Guide",
  },
};

export default function BuyingHouseWithSepticSystemPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Buying a House with a Septic System",
    description: "A standard home inspection does not cover the drain field. Here is what buyers need to know about septic inspections, permit records, and negotiating repairs before closing.",
    url: "https://eaglesepticpumping.com/blog/buying-house-with-septic-system",
    author: { "@type": "Organization", name: "Eagle Septic Guide", url: "https://eaglesepticpumping.com" },
    publisher: { "@type": "Organization", name: "Eagle Septic Guide", url: "https://eaglesepticpumping.com" },
    datePublished: "2026-03-17",
    dateModified: "2026-03-17",
    inLanguage: "en-US",
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <section className="bg-[#0c4a6e] text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block bg-[#16a34a] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">Inspections</span>
          <h1 className="text-4xl font-bold mb-4">Buying a House with a Septic System</h1>
          <p className="text-blue-200 text-lg">A home inspector confirms the toilets flush. That does not tell you whether the drain field has three years left or thirty.</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="relative h-64 mb-8 rounded-xl overflow-hidden">
          <Image src="/images/residential-neighborhood-sewer-septic.jpg" alt="Residential neighborhood in the Central Valley where homes rely on private septic systems" fill className="object-cover" />
        </div>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          The mistake most buyers make is scheduling a standard home inspection and assuming the septic is covered. It usually is not. A home inspector will note whether the toilets flush. They will not measure sludge depth, probe the drain field, or check baffle condition. The gap between those two checks can cost $20,000 after closing.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Request a Dedicated Septic Inspection</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Ask for a full septic inspection as part of the purchase contingency, separate from the general home inspection. Not a visual assessment and not just a pump-out. A proper inspection includes pumping the tank, measuring sludge levels, checking inlet and outlet baffle condition, inspecting the distribution box, and probing the drain field surface for wet areas or failed soil.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          In the Central Valley, a pre-sale inspection with pump-out runs $250 to $400. Most sellers absorb that cost during contingency negotiations. Buyers who want to move fast can pay it directly and use the findings to negotiate price or repairs at closing.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Ask for Pumping Records</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Some sellers have service records. Many do not. The absence of documentation is its own piece of information. A tank that was last pumped more than 6 years ago, or never pumped at all, will show elevated sludge levels at inspection. High sludge levels mean solids have likely been reaching the drain field and compressing its remaining life, even if no symptoms are visible yet.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">FHA and USDA Loan Requirements</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          FHA and USDA loans both require a functioning, permitted septic system. The well and septic must be a minimum distance apart, typically 50 feet for FHA, though Stanislaus, Merced, and San Joaquin county regulations can require more. Your inspector should be familiar with local standards and flag anything that does not meet current requirements.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Conventional loans have no mandatory septic inspection. That is exactly why buyers using conventional financing need to be more proactive, not less. There is no lender-side trigger prompting the inspection if you do not request it yourself.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Reading the Inspection Report</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          A complete report covers three areas. Tank condition, including structural integrity, baffle condition, and sludge measurements. Distribution box condition, including whether it is level, cracked, or showing unequal flow to the lateral lines. Drain field status, including any surfacing effluent, wet ground, or soil probing results that suggest saturation.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Any component marked as marginal or approaching end-of-life warrants a direct conversation with the inspector before you remove contingencies. Marginal today can mean failed in two winters.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Negotiating After a Problem Is Found</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          A distribution box replacement is a $1,500 repair. A drain field that has been hydraulically stressed and is approaching failure represents $15,000 to $30,000 in eventual replacement costs. Those two findings require completely different negotiation responses. Price reduction, a seller-funded repair credit, or requiring specific work before close are all reasonable options depending on the severity.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Walking away is also valid. A system with no service history, a stressed drain field, and years of neglect is a fundamentally different purchase than a property with documented maintenance and a field that has been probed and passed.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Check County Permit Records Before the Offer</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Septic installation permits are public record in Stanislaus, Merced, and San Joaquin counties. A search before writing an offer confirms whether the system was installed with permits and whether the permitted tank size matches what is actually there. Systems installed without permits create compliance complications that are easier to surface before you are in escrow than after.
        </p>

        <div className="bg-[#0c4a6e]/5 rounded-xl p-6 mt-10 mb-6">
          <h3 className="font-bold text-[#0c4a6e] mb-3">Buyer Checklist</h3>
          <ul className="space-y-2">
            {[
              "Request a full inspection as a purchase contingency",
              "Ask for service records and check county permit history",
              "Review all inspection findings before removing contingencies",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                <svg className="w-4 h-4 text-[#16a34a] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 mt-8">
          <Link href="/blog/what-does-a-septic-inspection-include" className="bg-[#16a34a] hover:bg-[#15803d] text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">What an Inspection Covers</Link>
          <Link href="/blog/drain-field-repair-cost" className="border border-[#0c4a6e] text-[#0c4a6e] hover:bg-[#0c4a6e] hover:text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">Drain Field Repair Costs</Link>
        </div>
      </article>
    </>
  );
}
