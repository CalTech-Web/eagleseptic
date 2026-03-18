import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Eagle Septic Guide",
  description: "Eagle Septic Guide is a free educational resource for homeowners across California's Central Valley. Written by licensed C-42 technicians with 18+ years of experience.",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Eagle Septic Guide",
  url: "https://eaglesepticpumping.com",
  description: "Free educational resource for homeowners across California's Central Valley, offering plain-language guides on septic system maintenance, troubleshooting, costs, and emergency response, written by licensed C-42 technicians with 18+ years of experience.",
  areaServed: [
    { "@type": "County", name: "Stanislaus County", containedInPlace: { "@type": "State", name: "California" } },
    { "@type": "County", name: "San Joaquin County", containedInPlace: { "@type": "State", name: "California" } },
    { "@type": "County", name: "Merced County", containedInPlace: { "@type": "State", name: "California" } },
  ],
  knowsAbout: [
    "Septic tank pumping",
    "Septic system maintenance",
    "Drain field repair",
    "Septic inspections",
    "Septic system installation",
    "Emergency septic services",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://eaglesepticpumping.com" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://eaglesepticpumping.com/about" },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="bg-[#0c4a6e] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Eagle Septic Guide</h1>
          <p className="text-blue-200 text-lg">A free educational resource for homeowners. No jargon, no sales pitch.</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-4">Why This Site Exists</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">Most online septic system information is buried inside service company websites built to generate calls, not to educate. The content is often vague, incomplete, or written to create urgency rather than provide clarity. Homeowners deserve better.</p>
        <p className="text-gray-700 mb-4 leading-relaxed">Eagle Septic Guide was built to fill that gap. The goal is simple: give homeowners the straightforward, accurate information they need to understand their septic system, make informed maintenance decisions, and avoid the expensive mistakes that come from neglect or misinformation.</p>

        <blockquote className="border-l-4 border-[#16a34a] pl-4 my-8 italic text-gray-600 text-lg">
          &ldquo;We wanted to build a straightforward resource where homeowners can get honest answers without a sales pitch.&rdquo;
        </blockquote>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-4 mt-8">Who Writes This</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">Content on Eagle Septic Guide is written and reviewed by licensed C-42 (Sanitation System) certified technicians with 18+ years of hands-on residential and commercial septic system experience across Stanislaus, Merced, and San Joaquin counties.</p>
        <p className="text-gray-700 mb-4 leading-relaxed">We draw on real field experience: the systems we have pumped, inspected, diagnosed, repaired, and installed. The 4,200+ tanks serviced behind us represent a wide range of conditions, soil types, age of systems, and failure modes. That experience informs every guide and FAQ answer on this site.</p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-4 mt-8">Our Commitment</h2>
        <ul className="space-y-3 mb-8">
          {[
            "Free information with no subscription, no paywall, no form to fill out",
            "No advertising or affiliate links that bias recommendations",
            "Plain language written for homeowners, not industry professionals",
            "Accurate, up-to-date content that reflects current regulations and best practices",
            "Transparent about what we know and what we do not",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-gray-700">
              <svg className="w-5 h-5 text-[#16a34a] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-4 mt-8">Service Area</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">Eagle Septic Guide serves homeowners across California's Central Valley, with deep familiarity in Stanislaus County (Modesto, Turlock, Ceres, Riverbank, Oakdale, Patterson, Waterford, Hughson, Newman, Denair), San Joaquin County (Escalon, Stockton, Tracy, Manteca, Ripon), and Merced County (Atwater, Merced, Los Banos, Livingston, Gustine).</p>

        <div className="flex flex-wrap gap-4 mt-8">
          <Link href="/resources" className="bg-[#16a34a] hover:bg-[#15803d] text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">Browse All Guides</Link>
          <Link href="/faq" className="border border-[#0c4a6e] text-[#0c4a6e] hover:bg-[#0c4a6e] hover:text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">Read the FAQ</Link>
        </div>
      </section>
    </>
  );
}
