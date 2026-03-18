"use client";

import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    q: "How often should I pump my septic tank?",
    a: "Most households need pumping every 3 to 5 years. A family of four with a 1,000-gallon tank typically pumps every 3 to 4 years. Waiting too long lets solids overflow into the drain field, turning a $400 pump job into a $15,000 or more repair.",
    category: "Basics",
  },
  {
    q: "What are the warning signs of a failing septic system?",
    a: "Key warning signs include slow or gurgling drains, sewage odors inside or outside, unusually lush grass over the drain field, and wet or spongy ground near the tank. Any of these signals you need service soon.",
    category: "Basics",
  },
  {
    q: "How does a septic system work?",
    a: "Wastewater flows from your home into a buried tank where solids settle and bacteria break them down. Clarified liquid (effluent) exits through the outlet pipe into a drain field, where soil filters it before it re-enters the groundwater.",
    category: "Basics",
  },
  {
    q: "How much does septic pumping cost in the Central Valley?",
    a: "Residential septic pumping in the Modesto and Central Valley area typically runs $300 to $550 for a standard residential tank, depending on tank size and access. Larger tanks, difficult access, or high sludge levels can push prices higher. Eagle Septic provides an upfront quote before any work begins.",
    category: "Costs",
  },
  {
    q: "What should I do during a septic emergency?",
    a: "Stop all water use immediately. Every flush makes it worse. Keep people and pets away from wet outdoor areas (sewage is a health hazard). Open windows if safe to reduce gas buildup. Then call a septic professional right away. Most emergencies can be resolved with an emergency pump-out.",
    category: "Emergencies",
  },
  {
    q: "Do I need to be home during a pump-out?",
    a: "Yes. The technician needs access to the tank lid and the ability to ask questions about system history. Someone 18 or older should be available for the appointment.",
    category: "Basics",
  },
  {
    q: "Can I use septic additives instead of pumping?",
    a: "Septic additives, biological or chemical, do not eliminate the need for pumping. Solids must be physically removed. Some chemical additives can actually harm the drain field. Regular pumping is the only effective maintenance.",
    category: "Maintenance",
  },
  {
    q: "What happens if I never pump my septic tank?",
    a: "Solids build up until they overflow the outlet baffle into your drain field. Once the drain field is clogged with solids, it cannot be unclogged. Full replacement costs $15,000 to $50,000. Regular pumping is the cheapest insurance a homeowner can have.",
    category: "Maintenance",
  },
  {
    q: "How do I know where my septic tank is?",
    a: "Check your property records or original construction documents. The tank is typically buried 10 to 25 feet from the house in the direction of the sewer cleanout. A technician can locate a buried tank using a soil probe or electronic locator.",
    category: "Basics",
  },
  {
    q: "What should I not flush or pour down the drain?",
    a: "Never flush wipes (even labeled flushable), feminine hygiene products, dental floss, paper towels, or medications. Avoid pouring cooking grease, harsh chemical cleaners, paint, or solvents down the drain. These disrupt the bacterial balance in the tank and can damage the drain field.",
    category: "Maintenance",
  },
  {
    q: "How long does a septic system last?",
    a: "A well-maintained concrete septic tank can last 40 or more years. The drain field can last 25 to 30 years or longer. Neglect, excessive water use, and harmful products dramatically shorten system lifespan.",
    category: "Basics",
  },
  {
    q: "What is a distribution box?",
    a: "A distribution box (d-box) sits between the septic tank and the drain field. It receives effluent from the tank outlet and distributes it evenly across multiple drain field trenches. A damaged or uneven d-box can cause uneven loading, which kills portions of the drain field prematurely.",
    category: "Basics",
  },
  {
    q: "How much does drain field repair cost?",
    a: "Drain field repair in the Central Valley runs $3,000 to $15,000 for targeted fixes. Full replacement costs $10,000 to $30,000 or more. The cause and extent of damage determine which option is needed.",
    category: "Costs",
  },
  {
    q: "What does a septic inspection include?",
    a: "A thorough inspection covers the tank condition, inlet and outlet baffles, distribution box, drain field, and lids. The technician pumps the tank first, then inspects all accessible components and provides a written report with findings and recommendations.",
    category: "Inspections",
  },
];

const categories = [
  { label: "All Questions", value: "All" },
  { label: "Septic System Basics", value: "Basics" },
  { label: "Maintenance", value: "Maintenance" },
  { label: "Costs", value: "Costs" },
  { label: "Emergencies", value: "Emergencies" },
  { label: "Inspections", value: "Inspections" },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className={`h-5 w-5 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

export default function FAQClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? faqs
    : faqs.filter((f) => f.category === activeCategory);

  const categoryCount = (val: string) =>
    val === "All" ? faqs.length : faqs.filter((f) => f.category === val).length;

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      {/* Category filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.value;
          return (
            <button
              key={cat.value}
              onClick={() => { setActiveCategory(cat.value); setOpenIndex(null); }}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                isActive
                  ? "bg-[#0c4a6e] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat.label}
              <span className={`text-xs rounded-full px-1.5 py-0.5 ${isActive ? "bg-white/20 text-white" : "bg-gray-200 text-gray-500"}`}>
                {categoryCount(cat.value)}
              </span>
            </button>
          );
        })}
      </div>

      {/* Category heading */}
      <div className="mb-4">
        <h2 className="text-lg font-bold text-gray-900">
          {categories.find((c) => c.value === activeCategory)?.label ?? "All Questions"}
        </h2>
        <p className="text-sm text-gray-500 mt-0.5">{filtered.length} question{filtered.length !== 1 ? "s" : ""}</p>
      </div>

      {/* Accordion */}
      <div className="space-y-3">
        {filtered.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={faq.q} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-gray-900 text-base">{faq.q}</span>
                <ChevronIcon open={isOpen} />
              </button>
              {isOpen && (
                <div className="px-6 pb-5 pt-1">
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-12 bg-[#0c4a6e]/5 rounded-xl p-6 text-center">
        <h3 className="font-bold text-[#0c4a6e] mb-2">Have a question not answered here?</h3>
        <p className="text-gray-600 text-sm mb-4">Browse our full guide library or read the blog for more in-depth coverage.</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/resources" className="bg-[#16a34a] hover:bg-[#15803d] text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">Browse All Guides</Link>
          <Link href="/blog" className="border border-[#0c4a6e] text-[#0c4a6e] hover:bg-[#0c4a6e] hover:text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">Read the Blog</Link>
        </div>
      </div>
    </section>
  );
}
