import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Septic System Guides - Eagle Septic Guide",
  description: "All septic system guides for homeowners. Maintenance schedules, cost breakdowns, troubleshooting tips, and more. Free and written in plain language.",
};

// Standardized category tag colors
const tagColors: Record<string, string> = {
  "Maintenance": "bg-green-50 text-green-700",
  "Troubleshooting": "bg-orange-50 text-orange-700",
  "Education": "bg-blue-50 text-blue-700",
  "Cost & Pricing": "bg-purple-50 text-purple-700",
  "Local Guide": "bg-teal-50 text-teal-700",
  "Repairs": "bg-red-50 text-red-700",
  "Inspections": "bg-gray-100 text-gray-700",
  "Home Buying": "bg-indigo-50 text-indigo-700",
  "Hiring Guide": "bg-teal-50 text-teal-700",
  "Regulations": "bg-orange-50 text-orange-700",
  "Commercial": "bg-gray-100 text-gray-600",
};

function tagClass(category: string): string {
  return tagColors[category] ?? "bg-gray-100 text-gray-700";
}

const stats = [
  { value: "40+", label: "Free Guides" },
  { value: "18+", label: "Years Experience" },
  { value: "4,200+", label: "Tanks Serviced" },
  { value: "C-42", label: "Licensed Pros" },
];

const quickAnswers = [
  {
    category: "Maintenance",
    title: "How often to pump",
    desc: "Every 3 to 5 years for most households. A family of four with a 1,000-gallon tank typically pumps every 3 to 4 years.",
    href: "/blog/how-often-pump-septic-tank",
  },
  {
    category: "Troubleshooting",
    title: "Warning signs of failure",
    desc: "Slow drains, sewage odors inside or outside, unusually lush grass over the drain field, and wet or spongy ground near the tank.",
    href: "/blog/warning-signs-septic-system-failing",
  },
  {
    category: "Cost & Pricing",
    title: "Cost of pumping",
    desc: "Residential septic pumping in the Central Valley runs $300 to $550 for a standard tank. Larger tanks or buried lids may cost more.",
    href: "/blog/septic-tank-pumping-cost-central-valley",
  },
  {
    category: "Education",
    title: "How septic systems work",
    desc: "Wastewater flows into the tank where solids settle. Clarified liquid moves to the drain field, where soil filters it before returning to groundwater.",
    href: "/blog/how-does-a-septic-system-work",
  },
];

const centralValleyResources = [
  {
    title: "Septic Pumping in Modesto",
    href: "/service-areas/modesto",
    desc: "Serving Stanislaus County homeowners with upfront pricing and same-day scheduling.",
    category: "Local Guide",
  },
  {
    title: "Septic Services in Turlock",
    href: "/service-areas/turlock",
    desc: "Licensed technicians covering Turlock and surrounding Stanislaus County communities.",
    category: "Local Guide",
  },
  {
    title: "Serving Merced County",
    href: "/service-areas/merced",
    desc: "Atwater, Merced, Los Banos, and Livingston. Same service standards, local familiarity.",
    category: "Local Guide",
  },
  {
    title: "San Joaquin County Service",
    href: "/service-areas/stockton",
    desc: "Escalon, Ripon, Manteca, Tracy, and Stockton. 24/7 emergency availability.",
    category: "Local Guide",
  },
];

const guides = [
  {
    category: "Getting Started",
    tag: "Education",
    items: [
      { title: "How Does a Septic System Work?", href: "/blog/how-does-a-septic-system-work", desc: "From tank to drain field, plain-language overview." },
      { title: "Septic vs Sewer: Key Differences", href: "/blog/septic-system-vs-sewer-system", desc: "How each system handles wastewater and what it means for you." },
    ],
  },
  {
    category: "Maintenance",
    tag: "Maintenance",
    items: [
      { title: "How Often to Pump Your Septic Tank", href: "/blog/how-often-pump-septic-tank", desc: "Pumping intervals by household size and tank capacity." },
      { title: "What Not to Flush or Pour Down the Drain", href: "/blog/what-not-to-flush-septic-system", desc: "Products and habits that can damage your system." },
      { title: "Understanding Maintenance Plans", href: "/maintenance-plan", desc: "Compare Essential ($299/yr) and Complete Care ($499/yr) plans." },
    ],
  },
  {
    category: "Troubleshooting",
    tag: "Troubleshooting",
    items: [
      { title: "Warning Signs of a Failing Septic System", href: "/blog/warning-signs-septic-system-failing", desc: "Slow drains, odors, soggy yard. What each symptom means." },
      { title: "What to Do in a Septic Emergency", href: "/blog/septic-emergency-what-to-do", desc: "Step-by-step guide for sewage backups and system failures." },
    ],
  },
  {
    category: "Costs",
    tag: "Cost & Pricing",
    items: [
      { title: "Septic Service Pricing Guide", href: "/pricing", desc: "Typical cost ranges for pumping, cleaning, inspections, and repair." },
      { title: "Why Drain Field Repair Costs So Much", href: "/services/drain-field-repair", desc: "What is involved in repair vs. replacement." },
    ],
  },
  {
    category: "Real Estate",
    tag: "Home Buying",
    items: [
      { title: "What Is a Real Estate Septic Inspection?", href: "/real-estate-inspections", desc: "FHA and USDA compliant inspection reports within 24 hours." },
      { title: "Buying a Home with a Septic System", href: "/blog/buying-house-with-septic-system", desc: "What buyers, sellers, and agents need to know." },
    ],
  },
];

const browseTopics = [
  "Maintenance",
  "Troubleshooting",
  "Education",
  "Cost & Pricing",
  "Inspections",
  "Home Buying",
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

      {/* Stats bar */}
      <section className="bg-[#075985] text-white">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-green-400">{s.value}</div>
                <div className="text-xs text-blue-200 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Answers */}
      <section className="max-w-5xl mx-auto px-4 pt-12 pb-8">
        <h2 className="text-xl font-bold text-[#0c4a6e] mb-6">Quick Answers</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickAnswers.map((qa) => (
            <Link
              key={qa.title}
              href={qa.href}
              className="group flex flex-col bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow"
            >
              <span className={`inline-block mb-2 rounded-full px-2.5 py-0.5 text-xs font-semibold self-start ${tagClass(qa.category)}`}>
                {qa.category}
              </span>
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#0c4a6e]">{qa.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-3">{qa.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Browse by Topic */}
      <section className="max-w-5xl mx-auto px-4 pb-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 pr-2 border-r border-gray-300">Browse by Topic:</span>
          {browseTopics.map((topic) => (
            <span
              key={topic}
              className={`inline-block rounded-full px-3 py-1 text-xs font-semibold cursor-default ${tagClass(topic)}`}
            >
              {topic}
            </span>
          ))}
        </div>
      </section>

      {/* Guide sections */}
      <section className="max-w-5xl mx-auto px-4 py-8 space-y-12">
        {guides.map((section) => (
          <div key={section.category}>
            <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-200">
              <h2 className="text-xl font-bold text-[#0c4a6e]">{section.category}</h2>
              <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${tagClass(section.tag)}`}>
                {section.tag}
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {section.items.map((item) => (
                <Link key={item.title} href={item.href} className="flex flex-col bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow h-full">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 flex-1">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Central Valley Specific Resources */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-200">
          <h2 className="text-xl font-bold text-[#0c4a6e]">Central Valley Specific Resources</h2>
          <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${tagClass("Local Guide")}`}>
            Local Guide
          </span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {centralValleyResources.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="flex flex-col bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow h-full"
            >
              <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600 flex-1">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
