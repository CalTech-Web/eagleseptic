import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Septic System FAQ - Eagle Septic Guide",
  description: "Answers to the most common septic system questions. How often to pump, warning signs, costs, emergencies, and more. Written by licensed technicians.",
};

const faqs = [
  {
    q: "How often should I pump my septic tank?",
    a: "Most households need pumping every 3 to 5 years. A family of four with a 1,000-gallon tank typically pumps every 3 to 4 years. Waiting too long lets solids overflow into the drain field, turning a $400 pump job into a $15,000 or more repair.",
  },
  {
    q: "What are the warning signs of a failing septic system?",
    a: "Key warning signs include slow or gurgling drains, sewage odors inside or outside, unusually lush grass over the drain field, and wet or spongy ground near the tank. Any of these signals you need service soon.",
  },
  {
    q: "How does a septic system work?",
    a: "Wastewater flows from your home into a buried tank where solids settle and bacteria break them down. Clarified liquid (effluent) exits through the outlet pipe into a drain field, where soil filters it before it re-enters the groundwater.",
  },
  {
    q: "How much does septic pumping cost in the Central Valley?",
    a: "Residential septic pumping in the Modesto and Central Valley area typically runs $300 to $550 for a standard residential tank, depending on tank size and access. Larger tanks, difficult access, or high sludge levels can push prices higher. Eagle Septic provides an upfront quote before any work begins.",
  },
  {
    q: "What should I do during a septic emergency?",
    a: "Stop all water use immediately. Every flush makes it worse. Keep people and pets away from wet outdoor areas (sewage is a health hazard). Open windows if safe to reduce gas buildup. Then call a septic professional right away. Most emergencies can be resolved with an emergency pump-out.",
  },
  {
    q: "Do I need to be home during a pump-out?",
    a: "Yes. The technician needs access to the tank lid and the ability to ask questions about system history. Someone 18 or older should be available for the appointment.",
  },
  {
    q: "Can I use septic additives instead of pumping?",
    a: "Septic additives, biological or chemical, do not eliminate the need for pumping. Solids must be physically removed. Some chemical additives can actually harm the drain field. Regular pumping is the only effective maintenance.",
  },
  {
    q: "What happens if I never pump my septic tank?",
    a: "Solids build up until they overflow the outlet baffle into your drain field. Once the drain field is clogged with solids, it cannot be unclogged. Full replacement costs $15,000 to $50,000. Regular pumping is the cheapest insurance a homeowner can have.",
  },
  {
    q: "How do I know where my septic tank is?",
    a: "Check your property records or original construction documents. The tank is typically buried 10 to 25 feet from the house in the direction of the sewer cleanout. A technician can locate a buried tank using a soil probe or electronic locator.",
  },
  {
    q: "What should I not flush or pour down the drain?",
    a: "Never flush wipes (even labeled flushable), feminine hygiene products, dental floss, paper towels, or medications. Avoid pouring cooking grease, harsh chemical cleaners, paint, or solvents down the drain. These disrupt the bacterial balance in the tank and can damage the drain field.",
  },
  {
    q: "How long does a septic system last?",
    a: "A well-maintained concrete septic tank can last 40 or more years. The drain field can last 25 to 30 years or longer. Neglect, excessive water use, and harmful products dramatically shorten system lifespan.",
  },
  {
    q: "What is a distribution box?",
    a: "A distribution box (d-box) sits between the septic tank and the drain field. It receives effluent from the tank outlet and distributes it evenly across multiple drain field trenches. A damaged or uneven d-box can cause uneven loading, which kills portions of the drain field prematurely.",
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="bg-[#0c4a6e] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Septic System FAQ</h1>
          <p className="text-blue-200 text-lg">Straight answers to the questions homeowners ask most.</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16">
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="border border-gray-200 rounded-xl p-6">
              <h2 className="font-bold text-gray-900 mb-3 text-lg">{faq.q}</h2>
              <p className="text-gray-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
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
    </>
  );
}
