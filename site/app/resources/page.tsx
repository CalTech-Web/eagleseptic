import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Septic System Guides - Eagle Septic Guide",
  description: "All septic system guides for homeowners. Maintenance schedules, cost breakdowns, troubleshooting tips, and more. Free and written in plain language.",
};

const guides = [
  {
    category: "Getting Started",
    items: [
      { title: "How Does a Septic System Work?", href: "/blog/how-does-a-septic-system-work", desc: "From tank to drain field, plain-language overview." },
      { title: "Septic vs Sewer: Key Differences", href: "/blog/septic-system-vs-sewer-system", desc: "How each system handles wastewater and what it means for you." },
    ],
  },
  {
    category: "Maintenance",
    items: [
      { title: "How Often to Pump Your Septic Tank", href: "/blog/how-often-pump-septic-tank", desc: "Pumping intervals by household size and tank capacity." },
      { title: "What Not to Flush or Pour Down the Drain", href: "/blog/what-not-to-flush-septic-system", desc: "Products and habits that can damage your system." },
      { title: "Understanding Maintenance Plans", href: "/maintenance-plan", desc: "Compare Essential ($299/yr) and Complete Care ($499/yr) plans." },
    ],
  },
  {
    category: "Troubleshooting",
    items: [
      { title: "Warning Signs of a Failing Septic System", href: "/blog/warning-signs-septic-system-failing", desc: "Slow drains, odors, soggy yard. What each symptom means." },
      { title: "What to Do in a Septic Emergency", href: "/blog/septic-emergency-what-to-do", desc: "Step-by-step guide for sewage backups and system failures." },
    ],
  },
  {
    category: "Costs",
    items: [
      { title: "Septic Service Pricing Guide", href: "/pricing", desc: "Typical cost ranges for pumping, cleaning, inspections, and repair." },
      { title: "Why Drain Field Repair Costs So Much", href: "/services/drain-field-repair", desc: "What is involved in repair vs. replacement." },
    ],
  },
  {
    category: "Real Estate",
    items: [
      { title: "What Is a Real Estate Septic Inspection?", href: "/real-estate-inspections", desc: "FHA and USDA compliant inspection reports within 24 hours." },
      { title: "Buying a Home with a Septic System", href: "/blog/buying-house-with-septic-system", desc: "What buyers, sellers, and agents need to know." },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-[#0c4a6e] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Septic System Guides</h1>
          <p className="text-blue-200 text-lg">Free educational guides for Central Valley homeowners. Plain language, no jargon.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 space-y-12">
        {guides.map((section) => (
          <div key={section.category}>
            <h2 className="text-xl font-bold text-[#0c4a6e] mb-4 pb-2 border-b border-gray-200">{section.category}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {section.items.map((item) => (
                <Link key={item.title} href={item.href} className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
