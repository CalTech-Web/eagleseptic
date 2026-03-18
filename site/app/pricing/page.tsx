import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Septic Service Pricing - Eagle Septic Guide",
  description: "Typical septic service costs in California's Central Valley. Pumping, cleaning, inspections, emergency service, drain field repair, and new installation.",
};

const pricingData = [
  { service: "Residential Pump-Out", range: "$300 to $550", notes: "Standard single-family tank. Larger tanks and buried lids may affect price." },
  { service: "Tank Cleaning", range: "$400 to $750", notes: "Includes high-pressure interior wash and complete residue removal." },
  { service: "Standard Inspection", range: "$175 to $400", notes: "Full system evaluation with written report. Tank pumping prior to inspection." },
  { service: "Real Estate Inspection", range: "Contact for quote", notes: "FHA and USDA compliant. Report within 24 hours." },
  { service: "Emergency Service", range: "$500 to $1,200", notes: "Available 24/7. Price varies by time of day and scope of work." },
  { service: "Drain Field Repair", range: "$3,000 to $15,000", notes: "Depends on cause, extent of damage, and repair type required." },
  { service: "New System Installation", range: "$10,000 to $30,000", notes: "Includes site evaluation, permits, full installation, and homeowner walkthrough." },
  { service: "Essential Maintenance Plan", range: "$299/year", notes: "Annual pump-out, 10% off services, priority scheduling." },
  { service: "Complete Care Maintenance Plan", range: "$499/year", notes: "Pump-out and cleaning, filter service, drain field assessment, same-day emergency." },
  { service: "Commercial Services", range: "Custom quote", notes: "Grease traps, large-capacity tanks, health department compliance documentation." },
];

export default function PricingPage() {
  return (
    <>
      <section className="bg-[#0c4a6e] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Septic Service Pricing</h1>
          <p className="text-blue-200 text-lg">Typical cost ranges for all septic services in the Central Valley.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 text-sm text-amber-800">
          All prices shown are typical ranges for the Modesto and Central Valley area. Actual quotes depend on tank size, access, condition, and scope of work. Upfront quotes are provided before any work begins. No surprise charges.
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-[#0c4a6e] text-white">
                <th className="text-left p-4">Service</th>
                <th className="text-left p-4">Typical Range</th>
                <th className="text-left p-4 hidden md:table-cell">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {pricingData.map((row) => (
                <tr key={row.service} className="odd:bg-white even:bg-gray-50">
                  <td className="p-4 font-medium text-gray-900">{row.service}</td>
                  <td className="p-4 text-[#16a34a] font-semibold whitespace-nowrap">{row.range}</td>
                  <td className="p-4 text-gray-600 hidden md:table-cell">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="bg-[#0c4a6e] text-white rounded-xl p-6">
            <h3 className="font-bold text-lg mb-2">Free Upfront Quotes</h3>
            <p className="text-blue-200 text-sm">All services include a free quote before work begins. No service call fee for routine work.</p>
          </div>
          <div className="bg-green-50 rounded-xl p-6">
            <h3 className="font-bold text-[#166534] text-lg mb-2">Save With a Maintenance Plan</h3>
            <p className="text-green-700 text-sm">The Essential Plan at $299/year includes your annual pump-out and 10% off all additional services.</p>
            <Link href="/maintenance-plan" className="inline-block mt-3 text-sm text-[#16a34a] font-medium underline">View Plans</Link>
          </div>
        </div>
      </section>
    </>
  );
}
