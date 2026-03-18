import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Septic Services - Eagle Septic Guide",
  description: "Commercial septic services in the Central Valley. Grease trap pumping, large-capacity tanks, health department compliance, restaurant and farm service.",
};

export default function CommercialPage() {
  return (
    <>
      <section className="bg-[#0c4a6e] text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Commercial Septic Services</h1>
          <p className="text-blue-200 text-lg">Serving restaurants, farms, multi-family properties, and commercial facilities across the Central Valley.</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3">Services for Commercial Properties</h2>
        <ul className="space-y-2 mb-8">
          {[
            "Grease trap pumping and cleaning (restaurants)",
            "High-frequency pump-out schedules",
            "Health department compliance documentation",
            "Large-capacity tank pumping (5,000+ gallons)",
            "Multi-structure farm system service",
            "Seasonal scheduling for harvest operations",
            "Annual maintenance contracts with fixed pricing",
            "Dedicated commercial account contact",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-gray-700">
              <svg className="w-5 h-5 text-[#16a34a] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Industries We Serve</h2>
        <div className="grid grid-cols-2 gap-3 mb-8">
          {[
            "Restaurants and Food Service",
            "Agricultural and Farm Properties",
            "Apartment and Multi-Family",
            "Industrial and Commercial",
            "RV Parks and Campgrounds",
            "Churches and Event Venues",
          ].map((industry) => (
            <div key={industry} className="bg-gray-50 rounded-lg p-3 text-sm text-gray-700 font-medium">{industry}</div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Equipment Capacity</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">Our vacuum trucks handle up to 4,000 gallons per load and can service tanks of 10,000+ gallons. Large-volume commercial jobs are scheduled with appropriate equipment to complete the work efficiently.</p>

        <div className="bg-[#0c4a6e] text-white rounded-xl p-6 mt-8 text-center">
          <h3 className="font-bold text-xl mb-2">Request a Commercial Quote</h3>
          <p className="text-blue-200 mb-4">Fixed annual pricing available for high-frequency accounts.</p>
          <a href="tel:5558675309" className="inline-block bg-[#16a34a] hover:bg-[#15803d] text-white px-6 py-3 rounded-lg font-bold transition-colors">(555) 867-5309</a>
        </div>
      </section>
    </>
  );
}
