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
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125m16.5 2.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    name: "Tank Cleaning and Maintenance",
    href: "/services/tank-cleaning-maintenance",
    cost: "$400 to $750",
    desc: "Full pumping plus high-pressure interior wash. Complete sludge removal and baffle inspection.",
    frequency: "Every 3 to 5 years or as needed",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    name: "Septic Inspections",
    href: "/services/septic-inspections",
    cost: "$175 to $400",
    desc: "Thorough evaluation of tank, baffles, distribution box, and drain field. Detailed written report.",
    frequency: "At purchase, sale, or every 3 years",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
  },
  {
    name: "Emergency Services",
    href: "/services/emergency-services",
    cost: "$500 to $1,200",
    desc: "24/7 phone response, priority dispatch, emergency pump-out, and backup assessment.",
    frequency: "As needed",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    name: "Drain Field Repair",
    href: "/services/drain-field-repair",
    cost: "$3,000 to $15,000",
    desc: "Diagnosis, soil testing, pipe repair, biomat treatment, or full drain field replacement.",
    frequency: "As needed",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    ),
  },
  {
    name: "New System Installation",
    href: "/services/new-system-installation",
    cost: "$10,000 to $30,000",
    desc: "Site evaluation, permits, tank installation, drain field construction, and homeowner walkthrough.",
    frequency: "New construction or full replacement",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: "Real Estate Inspections",
    href: "/real-estate-inspections",
    cost: "Included in inspection fee",
    desc: "FHA and USDA compliant reports within 24 hours. Required for many home sales.",
    frequency: "At time of sale",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    name: "Commercial Services",
    href: "/commercial",
    cost: "Custom quote",
    desc: "Grease trap pumping, large-capacity tanks, health department compliance documentation.",
    frequency: "Varies by business type",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    name: "Maintenance Plans",
    href: "/maintenance-plan",
    cost: "$299 to $499/year",
    desc: "Essential and Complete Care annual plans with scheduled service, priority dispatch, and repair discounts.",
    frequency: "Annual enrollment",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
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

      <section className="max-w-5xl mx-auto px-4 pt-10 pb-16">
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((svc) => (
            <Link key={svc.name} href={svc.href} className="group bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow flex flex-col">
              <div className="flex items-start gap-4 mb-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#0c4a6e]/10 text-[#0c4a6e]">
                  {svc.icon}
                </div>
                <div className="flex-1">
                  <h2 className="font-bold text-gray-900 group-hover:text-[#0c4a6e] transition-colors">{svc.name}</h2>
                  <div className="flex gap-3 text-xs mt-1">
                    <span className="bg-[#16a34a]/10 text-[#16a34a] px-2 py-0.5 rounded font-medium">{svc.cost}</span>
                    <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{svc.frequency}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 flex-1">{svc.desc}</p>
              <span className="mt-3 text-xs font-semibold text-[#0c4a6e] group-hover:underline">
                Learn more about {svc.name} →
              </span>
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
