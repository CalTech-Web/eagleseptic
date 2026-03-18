import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate Septic Inspections - Eagle Septic Guide",
  description: "FHA and USDA compliant real estate septic inspections in the Central Valley. Written reports within 24 hours. For buyers, sellers, agents, and lenders.",
};

export default function RealEstateInspectionsPage() {
  return (
    <>
      <section className="bg-[#0c4a6e] text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Real Estate Septic Inspections</h1>
          <p className="text-blue-200 text-lg">FHA and USDA compliant inspection reports delivered within 24 hours.</p>
          <div className="mt-4 flex gap-3">
            <span className="bg-[#16a34a] text-white text-sm px-3 py-1 rounded-full font-medium">Report in 24 hours</span>
            <span className="bg-white/20 text-white text-sm px-3 py-1 rounded-full">FHA and USDA Compliant</span>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3">Who This Is For</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">Real estate septic inspections serve buyers, sellers, agents, and lenders who need a thorough, documented evaluation of a septic system as part of a home sale. Many loan programs, including FHA and USDA, require a septic inspection as part of the underwriting process.</p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">What Is Included</h2>
        <ul className="space-y-2 mb-6">
          {[
            "Reports within 24 hours",
            "FHA and USDA compliant",
            "Tank pumping prior to inspection",
            "Tank structural evaluation",
            "Inlet and outlet baffle assessment",
            "Distribution box inspection",
            "Drain field evaluation",
            "Written report with photos",
            "Optional: camera inspection add-on",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-gray-700">
              <svg className="w-5 h-5 text-[#16a34a] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">For Buyers</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">A septic inspection gives you a clear picture of the system you are buying. You will know its current condition, estimated age, any deficiencies, and what maintenance it has had. You can use this information to negotiate repairs or credits before closing, or to walk away from a system that is near end of life.</p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">For Sellers and Agents</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">Getting a pre-listing inspection avoids surprises in escrow. If issues are found, you have time to address them on your schedule rather than under the pressure of a closing deadline. A clean inspection report can also accelerate the sale by giving buyers and their lenders confidence in the property.</p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Short Notice Scheduling</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">We understand that real estate transactions move fast. Short-notice scheduling is available to accommodate escrow timelines across the Central Valley.</p>

        <div className="bg-[#0c4a6e] text-white rounded-xl p-6 mt-8 text-center">
          <h3 className="font-bold text-xl mb-2">Schedule a Real Estate Inspection</h3>
          <p className="text-blue-200 mb-4">Report delivered within 24 hours.</p>
          <a href="tel:5558675309" className="inline-block bg-[#16a34a] hover:bg-[#15803d] text-white px-6 py-3 rounded-lg font-bold transition-colors">(555) 867-5309</a>
        </div>
      </section>
    </>
  );
}
