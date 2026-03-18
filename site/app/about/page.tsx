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

const stats = [
  { value: "40+", label: "Free Guides" },
  { value: "18+", label: "Years Experience" },
  { value: "4,200+", label: "Tanks Serviced" },
  { value: "3 Counties", label: "Central Valley" },
];

const values = [
  {
    title: "Accurate Information",
    desc: "Written by licensed C-42 technicians with field experience, not marketing teams.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "No Ads or Upsells",
    desc: "No advertising, no affiliate links, no paywalls. Just the information you need.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
  },
  {
    title: "Central Valley Focus",
    desc: "Built for homeowners in Stanislaus, San Joaquin, and Merced counties. Local knowledge, local costs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: "Regularly Updated",
    desc: "Guides reflect current regulations, costs, and best practices in the Central Valley area.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
  },
];

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

      <section className="max-w-5xl mx-auto px-4 py-14">
        {/* Two-column layout: 60/40 */}
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left column (60%) */}
          <div className="lg:col-span-3">
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
            <p className="text-gray-700 mb-4 leading-relaxed">Eagle Septic Guide serves homeowners across California&apos;s Central Valley, with deep familiarity in Stanislaus County (Modesto, Turlock, Ceres, Riverbank, Oakdale, Patterson, Waterford, Hughson, Newman, Denair), San Joaquin County (Escalon, Stockton, Tracy, Manteca, Ripon), and Merced County (Atwater, Merced, Los Banos, Livingston, Gustine).</p>

            {/* Disclaimer */}
            <div className="mt-10 rounded-xl border border-amber-200 bg-amber-50 p-6">
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 flex-shrink-0 text-amber-600 mt-0.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
                <div>
                  <h3 className="font-bold text-amber-800 mb-1">Disclaimer</h3>
                  <p className="text-sm text-amber-700 leading-relaxed">
                    Eagle Septic Guide is an educational resource only. Information provided is general in nature and does not constitute professional advice for your specific system. Always consult a licensed septic professional before making decisions about your system. Local regulations, soil conditions, and system age vary significantly.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/resources" className="bg-[#16a34a] hover:bg-[#15803d] text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">Browse All Guides</Link>
              <Link href="/faq" className="border border-[#0c4a6e] text-[#0c4a6e] hover:bg-[#0c4a6e] hover:text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">Read the FAQ</Link>
            </div>
          </div>

          {/* Right column (40%) */}
          <div className="lg:col-span-2">
            {/* Divider */}
            <div className="mb-6 hidden lg:block">
              <div className="h-1 w-12 rounded bg-[#16a34a]" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Our Core Values</h3>
            <div className="space-y-4">
              {values.map((v) => (
                <div key={v.title} className="flex gap-4 rounded-xl border border-gray-100 bg-gray-50 p-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#0c4a6e]/10 text-[#0c4a6e]">
                    {v.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{v.title}</h4>
                    <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl bg-[#0c4a6e] p-6 text-white">
              <h3 className="font-bold text-lg mb-3">By the Numbers</h3>
              <ul className="space-y-2 text-sm text-blue-100">
                <li className="flex items-center gap-2">
                  <span className="font-bold text-green-400">18+</span> years of field experience
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-green-400">4,200+</span> tanks serviced
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-green-400">40+</span> free guides published
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-green-400">3</span> counties covered
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-green-400">4.9</span> stars on Google
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
