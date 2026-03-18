import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Septic Services Explained - Eagle Septic Guide",
  description: "Plain-language explanations of every septic service. Pumping, cleaning, inspections, emergency response, drain field repair, and new installation.",
};

const services = [
  {
    name: "Septic Tank Pumping",
    href: "/services/septic-tank-pumping",
    cost: "$300 to $550",
    desc: "Full evacuation of liquid, sludge, and scum layers. Includes visual inspection of baffles and tank walls.",
    frequency: "Every 3 to 5 years",
  },
  {
    name: "Tank Cleaning and Maintenance",
    href: "/services/tank-cleaning-maintenance",
    cost: "$400 to $750",
    desc: "Full pumping plus high-pressure interior wash. Complete sludge removal and baffle inspection.",
    frequency: "Every 3 to 5 years or as needed",
  },
  {
    name: "Septic Inspections",
    href: "/services/septic-inspections",
    cost: "$175 to $400",
    desc: "Thorough evaluation of tank, baffles, distribution box, and drain field. Detailed written report.",
    frequency: "At purchase, sale, or every 3 years",
  },
  {
    name: "Emergency Services",
    href: "/services/emergency-services",
    cost: "$500 to $1,200",
    desc: "24/7 phone response, priority dispatch, emergency pump-out, and backup assessment.",
    frequency: "As needed",
  },
  {
    name: "Drain Field Repair",
    href: "/services/drain-field-repair",
    cost: "$3,000 to $15,000",
    desc: "Diagnosis, soil testing, pipe repair, biomat treatment, or full drain field replacement.",
    frequency: "As needed",
  },
  {
    name: "New System Installation",
    href: "/services/new-system-installation",
    cost: "$10,000 to $30,000",
    desc: "Site evaluation, permits, tank installation, drain field construction, and homeowner walkthrough.",
    frequency: "New construction or full replacement",
  },
  {
    name: "Real Estate Inspections",
    href: "/real-estate-inspections",
    cost: "Included in inspection fee",
    desc: "FHA and USDA compliant reports within 24 hours. Required for many home sales.",
    frequency: "At time of sale",
  },
  {
    name: "Commercial Services",
    href: "/commercial",
    cost: "Custom quote",
    desc: "Grease trap pumping, large-capacity tanks, health department compliance documentation.",
    frequency: "Varies by business type",
  },
  {
    name: "Maintenance Plans",
    href: "/maintenance-plan",
    cost: "$299 to $499/year",
    desc: "Essential and Complete Care annual plans with scheduled service, priority dispatch, and repair discounts.",
    frequency: "Annual enrollment",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#0c4a6e] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Septic Services Explained</h1>
          <p className="text-blue-200 text-lg">Understand what each service involves before you schedule anything.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((svc) => (
            <Link key={svc.name} href={svc.href} className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow">
              <h2 className="font-bold text-gray-900 mb-1">{svc.name}</h2>
              <div className="flex gap-4 text-xs mb-3">
                <span className="bg-[#16a34a]/10 text-[#16a34a] px-2 py-0.5 rounded font-medium">{svc.cost}</span>
                <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{svc.frequency}</span>
              </div>
              <p className="text-sm text-gray-600">{svc.desc}</p>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-[#0c4a6e] text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Not Sure What You Need?</h2>
          <p className="text-blue-200 mb-6">Read our FAQ for common questions or call for a free assessment.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/faq" className="bg-[#16a34a] hover:bg-[#15803d] text-white px-6 py-3 rounded-lg font-semibold transition-colors">Read the FAQ</Link>
            <a href="tel:5558675309" className="border border-white text-white hover:bg-white hover:text-[#0c4a6e] px-6 py-3 rounded-lg font-semibold transition-colors">(555) 867-5309</a>
          </div>
        </div>
      </section>
    </>
  );
}
