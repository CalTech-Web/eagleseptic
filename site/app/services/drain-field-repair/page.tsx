import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drain Field Repair and Restoration - Eagle Septic Guide",
  description: "Drain field diagnosis, repair, and restoration options before full replacement is needed. Serving Central Valley homeowners.",
};

export default function DrainFieldRepairPage() {
  return (
    <>
      <section className="bg-[#0c4a6e] text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/services" className="text-blue-300 text-sm hover:text-white mb-4 inline-block">← All Services</Link>
          <h1 className="text-4xl font-bold mb-4">Drain Field Repair and Restoration</h1>
          <p className="text-blue-200 text-lg">Not every failing drain field needs full replacement. Proper diagnosis comes first.</p>
          <div className="mt-4 flex gap-3">
            <span className="bg-[#16a34a] text-white text-sm px-3 py-1 rounded-full font-medium">$3,000 to $15,000 typical</span>
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-8">
          <p className="text-sm text-green-800 font-medium">Case study: A homeowner in Patterson, CA was told by two other companies that her drain field needed full replacement. Eagle Septic correctly diagnosed the root cause and repaired it for a fraction of the replacement cost. Read her story in our testimonials.</p>
        </div>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3">What Is Included</h2>
        <ul className="space-y-2 mb-6">
          {[
            "Full system inspection to confirm drain field failure",
            "Soil absorption testing to assess field condition",
            "Distribution box inspection and flow testing",
            "Root intrusion and pipe damage assessment",
            "Biomat treatment options for early-stage failures",
            "Targeted pipe repair or replacement for localized damage",
            "Full drain field replacement when restoration is not viable",
            "Permit assistance and county coordination",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-gray-700">
              <svg className="w-5 h-5 text-[#16a34a] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Warning Signs of Drain Field Failure</h2>
        <ul className="space-y-1 mb-6 text-gray-700 text-sm">
          <li>Wet, soggy, or spongy ground over the drain field</li>
          <li>Unusually lush or green grass above the drain field area</li>
          <li>Sewage odors outside the home</li>
          <li>Slow drains throughout the house</li>
          <li>Sewage backing up into toilets or floor drains</li>
        </ul>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Repair vs Replacement</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">The right solution depends on the cause and extent of the failure. Early-stage biomat buildup may respond to treatment and resting periods. Localized pipe damage can be repaired without touching the rest of the field. Full replacement is necessary when the soil has lost its absorption capacity across the entire field. Accurate diagnosis is the difference between a $3,000 repair and a $20,000 replacement.</p>

        <div className="flex flex-wrap gap-4 mt-8">
          <a href="tel:5558675309" className="bg-[#16a34a] hover:bg-[#15803d] text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">Get an Assessment</a>
          <Link href="/services" className="border border-[#0c4a6e] text-[#0c4a6e] hover:bg-[#0c4a6e] hover:text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">All Services</Link>
        </div>
      </article>
    </>
  );
}
