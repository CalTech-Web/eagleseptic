import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Much Does Drain Field Repair Cost? - Eagle Septic Guide",
  description: "Drain field repair in the Central Valley runs $3,000 to $15,000 depending on what failed and how far it progressed. Here is the full cost breakdown.",
  openGraph: {
    title: "How Much Does Drain Field Repair Cost?",
    description: "Drain field repair in the Central Valley runs $3,000 to $15,000 depending on what failed and how far it progressed. Here is the full cost breakdown.",
    url: "https://eaglesepticpumping.com/blog/drain-field-repair-cost",
    type: "article",
    siteName: "Eagle Septic Guide",
  },
};

export default function DrainFieldRepairCostPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Much Does Drain Field Repair Cost?",
    description: "Drain field repair in the Central Valley runs $3,000 to $15,000 depending on what failed and how far it progressed. Here is the full cost breakdown.",
    url: "https://eaglesepticpumping.com/blog/drain-field-repair-cost",
    author: { "@type": "Organization", name: "Eagle Septic Guide", url: "https://eaglesepticpumping.com" },
    publisher: { "@type": "Organization", name: "Eagle Septic Guide", url: "https://eaglesepticpumping.com" },
    datePublished: "2026-03-01",
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
          { "@type": "ListItem", position: 3, name: "How Much Does Drain Field Repair Cost?" },
        ],
      }) }} />
      <section className="bg-[#0c4a6e] text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-blue-300 mb-4" aria-label="Breadcrumb"><a href="/" className="hover:text-white">Home</a><span aria-hidden="true"> / </span><a href="/blog" className="hover:text-white">Blog</a></nav>
          <span className="inline-block bg-purple-50 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">Cost &amp; Pricing</span>
          <h1 className="text-4xl font-bold mb-4">How Much Does Drain Field Repair Cost?</h1>
          <p className="text-blue-200 text-lg">The price range is wide because the answer depends on what failed, not just how big your yard is.</p>
          <div className="mt-3 flex items-center gap-2 text-sm text-blue-300"><span>6 min read</span><span aria-hidden="true">&middot;</span><span>Updated March 2026</span></div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="relative h-64 mb-8 rounded-xl overflow-hidden">
          <Image src="/images/lawn-drain-field.jpg" alt="Residential lawn over a septic drain field in Stanislaus County, California" fill className="object-cover" />
        </div>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          A homeowner in Patterson got a quote from two companies for full drain field replacement before calling a third. That third technician found the problem was a collapsed distribution box and two short sections of lateral pipe. Repair cost: $2,800. The full replacement quotes had been $22,000. The outcome hinges entirely on diagnosis.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">What Drives the Cost</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Drain field repairs divide into two categories. Targeted repairs fix a specific, identifiable failure point. Full replacement installs a new absorption field when the existing one is no longer viable. The cost difference between those two outcomes is substantial, and getting the right diagnosis first is the most important variable in the whole process.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Soil type matters, especially in the Central Valley. Heavy clay soils in Stanislaus and Merced counties hold moisture and compact around pipes differently than sandier soils to the east. A drain field in clay that has been stressed for three years may have suffered more soil structure damage than the same-age field in lighter soil, which affects which repair options are viable.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Targeted Repair Costs</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Distribution box failures are the most common and least expensive repair. The distribution box routes effluent from the tank outlet to the lateral lines. When it cracks, shifts, or becomes blocked, the field stops receiving even flow. Replacement typically runs $500 to $1,500 depending on access and the condition of the pipes leading from it.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Lateral line repairs, where individual perforated pipes have collapsed, cracked, or been invaded by roots, run $1,500 to $5,000 for partial replacement. The range depends on how many lines are affected and how deep they are buried. Shallow lines are faster to reach. Lines buried under concrete, pavement, or dense root systems add excavation time.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Early-stage biomat treatment is another option when the soil is saturated with a biological mat that has clogged the pore spaces. Aeration-based treatments that introduce oxygen into the lateral lines to break down the biomat run $1,500 to $4,000. This approach only works when the biomat has not progressed too far and the underlying soil structure is still intact.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Full Replacement Costs</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          When the field cannot be salvaged through targeted repair, full replacement is the remaining option. In the Central Valley, full drain field replacement typically runs $10,000 to $30,000 for a residential system. The range reflects lot conditions, required field size based on household and percolation rate, permit costs, and whether the existing tank is being retained or also replaced.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Stanislaus, Merced, and San Joaquin counties each have their own permit requirements for new drain field installations. Permit fees alone can add $500 to $2,000 to the project. Some parcels with smaller lots or challenging soil conditions require alternative system designs, like mound systems or pressure-dosed systems, which push costs toward the upper end of that range.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">What a Thorough Inspection Reveals</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Before any repair estimate is meaningful, a technician needs to see the tank condition, the distribution box, and the field surface. A pump-out is usually included so the technician can assess baffle condition and sludge levels. Probing the field and checking flow through each lateral line identifies whether the failure is localized or spread across the full field.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          A thorough inspection runs $175 to $400 and is worth doing before accepting any replacement quote. The cost of the inspection comes off the repair if you hire the same company, and it sets a baseline that prevents being oversold a full replacement when targeted repair would work.
        </p>

        <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 mt-10 mb-6">
          <h3 className="font-bold text-[#0c4a6e] mb-3">Repair Cost Reference</h3>
          <ul className="space-y-2">
            {[
              "Distribution box replacement: $500 to $1,500",
              "Partial lateral line repair: $1,500 to $5,000",
              "Full replacement: $10,000 to $30,000",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-teal-800">
                <svg className="w-4 h-4 text-[#16a34a] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-gray-700 mb-6 leading-relaxed">
          The homeowner who catches wet spots and schedules an inspection is looking at a completely different set of options than the one who waits until the yard is surfacing sewage. Timing is the variable that affects the final bill more than any other factor.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <Link href="/blog/signs-drain-field-failing" className="bg-[#16a34a] hover:bg-[#15803d] text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">Signs of Drain Field Failure</Link>
          <Link href="/blog/what-does-a-septic-inspection-include" className="border border-[#0c4a6e] text-[#0c4a6e] hover:bg-[#0c4a6e] hover:text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">What an Inspection Covers</Link>
        </div>
      </article>
    </>
  );
}
