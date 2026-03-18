import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Septic Inspections - Eagle Septic Guide",
  description: "What a septic inspection covers, when to schedule one, and what the written report includes. Serving Central Valley homeowners and real estate transactions.",
};

export default function SepticInspectionsPage() {
  return (
    <>
      <section className="bg-[#0c4a6e] text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/services" className="text-blue-300 text-sm hover:text-white mb-4 inline-block">← All Services</Link>
          <h1 className="text-4xl font-bold mb-4">Septic Inspections</h1>
          <p className="text-blue-200 text-lg">Thorough evaluation of your entire system. Written report provided. FHA and USDA compliant.</p>
          <div className="mt-4 flex gap-3">
            <span className="bg-[#16a34a] text-white text-sm px-3 py-1 rounded-full font-medium">$175 to $400 typical</span>
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3">What Is Covered</h2>
        <ul className="space-y-2 mb-6">
          {[
            "Tank pumping prior to inspection for accurate evaluation",
            "Visual inspection of tank structure, lid, and risers",
            "Baffle condition assessment (inlet and outlet)",
            "Distribution box inspection",
            "Drain field evaluation (surface observation and probing)",
            "Detailed written inspection report",
            "Optional: camera inspection of tank interior and pipes",
            "Recommendations for any needed repairs or maintenance",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-gray-700">
              <svg className="w-5 h-5 text-[#16a34a] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">When to Get an Inspection</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">A septic inspection is recommended when buying or selling a home, when the system history is unknown, when you notice warning signs of failure, or as part of a proactive maintenance schedule every 3 to 5 years. Real estate transactions often require an inspection as part of the escrow process.</p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Real Estate Inspections</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">Septic inspection reports for real estate transactions are FHA and USDA compliant. Reports are delivered within 24 hours. Buyers, sellers, agents, and lenders can rely on these reports for escrow and underwriting requirements.</p>
        <Link href="/real-estate-inspections" className="inline-block text-[#0c4a6e] underline text-sm mb-6">Read more about real estate septic inspections</Link>

        <div className="flex flex-wrap gap-4 mt-8">
          <a href="tel:5558675309" className="bg-[#16a34a] hover:bg-[#15803d] text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">Schedule Inspection</a>
          <Link href="/real-estate-inspections" className="border border-[#0c4a6e] text-[#0c4a6e] hover:bg-[#0c4a6e] hover:text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">Real Estate Inspections</Link>
        </div>
      </article>
    </>
  );
}
