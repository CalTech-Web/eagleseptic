import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Does a Septic Inspection Include? - Eagle Septic Guide",
  description: "A septic inspection covers more than a visual check. Learn exactly what a licensed technician inspects, what the written report includes, and when you need one.",
  openGraph: {
    title: "What Does a Septic Inspection Include?",
    description: "A septic inspection covers more than a visual check. Learn exactly what a licensed technician inspects, what the written report includes, and when you need one.",
    url: "https://eaglesepticpumping.com/blog/what-does-a-septic-inspection-include",
    type: "article",
    siteName: "Eagle Septic Guide",
  },
};

export default function SepticInspectionPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Does a Septic Inspection Include?",
    description: "A septic inspection covers more than a visual check. Learn exactly what a licensed technician inspects, what the written report includes, and when you need one.",
    url: "https://eaglesepticpumping.com/blog/what-does-a-septic-inspection-include",
    author: { "@type": "Organization", name: "Eagle Septic Guide", url: "https://eaglesepticpumping.com" },
    publisher: { "@type": "Organization", name: "Eagle Septic Guide", url: "https://eaglesepticpumping.com" },
    datePublished: "2026-02-01",
    dateModified: "2026-03-17",
    inLanguage: "en-US",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://eaglesepticpumping.com" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://eaglesepticpumping.com/blog" },
          { "@type": "ListItem", position: 3, name: "What Does a Septic Inspection Include?" },
        ],
      }) }} />
      <section className="bg-[#0c4a6e] text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-blue-300 mb-4" aria-label="Breadcrumb"><a href="/" className="hover:text-white">Home</a><span aria-hidden="true"> / </span><a href="/blog" className="hover:text-white">Blog</a></nav>
          <span className="inline-block bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">Inspections</span>
          <h1 className="text-4xl font-bold mb-4">What Does a Septic Inspection Include?</h1>
          <p className="text-blue-200 text-lg">Know what the technician is checking, why each step matters, and what you get in the written report.</p>
          <div className="mt-3 flex items-center gap-2 text-sm text-blue-300"><span>6 min read</span><span aria-hidden="true">&middot;</span><span>Updated March 2026</span></div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="relative h-64 mb-8 rounded-xl overflow-hidden">
          <Image src="/images/hero-residential-home.jpg" alt="Residential home with a septic system being inspected" fill className="object-cover" />
        </div>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Most homeowners schedule a septic inspection for one of two reasons: a real estate transaction, or a system that has started acting up. Both are good reasons. But the inspection itself looks the same either way, and knowing what to expect makes the process faster and the report more useful.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Step 1: Tank Pumping Before Inspection</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          A proper inspection starts with pumping the tank. You cannot accurately assess tank walls, baffles, or inlet and outlet conditions when the tank is full of waste. This is a common shortcut that less thorough inspectors skip. If an inspector is not pumping the tank first, the inspection is incomplete.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Pumping typically takes 30 to 60 minutes depending on tank size and how full it is. A 1,000-gallon residential tank is standard in most Central Valley homes. The technician measures sludge and scum depth before pumping to record how close the system was to overloading.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Step 2: Tank Structure and Lid Assessment</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          With the tank empty, the technician checks the interior walls for cracks, separations, or root intrusion. Concrete tanks older than 20 to 30 years are prone to hairline cracks that worsen over time. The lid is checked for integrity and proper seating. A damaged lid is both a safety hazard and a structural problem.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          If the lid was buried, excavating it is part of the process. Some homeowners install risers after an inspection to bring future access above grade, which saves money on every subsequent service call.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Step 3: Baffle Condition</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Baffles are the T-shaped fittings at the inlet and outlet of the tank. The inlet baffle slows incoming waste and prevents it from disturbing the settled solids at the bottom. The outlet baffle keeps floating scum from flowing directly into the drain field. A missing or broken outlet baffle is one of the fastest paths to drain field failure.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Both baffles are inspected for cracks, corrosion, or missing sections. Plastic baffles last longer than concrete or cast iron. If a baffle is failing, replacement at the time of inspection is usually the right call.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Step 4: Distribution Box and Drain Field Evaluation</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Effluent flows from the tank into a distribution box, which splits it evenly across the drain field laterals. The technician checks that the D-box is level and that all outlets are flowing at equal rates. An uneven D-box means one section of the drain field is getting overloaded while others are barely used.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          The drain field itself is evaluated by surface observation and probing. The technician looks for soggy ground, odors, or unusually lush growth above the laterals. A functioning drain field should show no surface signs at all. Any visible effluent is a failure indicator that requires immediate attention.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Optional: Camera Inspection</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          For older systems, real estate transactions on high-value properties, or any situation where the pipe condition is in question, a camera inspection of the inlet and outlet lines gives a definitive look at what the naked eye cannot see. Root intrusion, pipe offsets, and collapsed sections show up clearly on camera. It is an add-on, not a standard step, but worth doing when the stakes are high.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">What the Written Report Includes</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          A complete inspection report documents the tank size, sludge and scum measurements taken before pumping, condition of the tank walls and lid, baffle status, D-box flow assessment, drain field observations, and any identified issues with recommended follow-up. For real estate inspections, the report is written to satisfy FHA and USDA lender requirements and is delivered within 24 hours.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Keep the report. It becomes the baseline for every future service call. A technician who knows the sludge depth was 14 inches at your last inspection can compare that to the current reading and tell you exactly how your system is performing over time.
        </p>

        <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 mt-10 mb-6">
          <h3 className="font-bold text-[#0c4a6e] mb-3">What the Inspection Covers</h3>
          <ul className="space-y-2">
            {[
              "Tank pumping and pre-pump sludge measurement",
              "Tank wall, lid, and riser condition",
              "Inlet and outlet baffle assessment",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-teal-800">
                <svg className="w-4 h-4 text-[#16a34a] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <ul className="space-y-2 mt-2">
            {[
              "Distribution box inspection and flow testing",
              "Drain field surface evaluation and probing",
              "Written report with photos and recommendations",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-teal-800">
                <svg className="w-4 h-4 text-[#16a34a] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Standard inspections run $175 to $400 in the Central Valley, depending on tank size and whether the lid needs excavation. If you are buying a home and skipping this step to save $300, you are gambling on a system that could cost $15,000 to $30,000 to replace.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <Link href="/services/septic-inspections" className="bg-[#16a34a] hover:bg-[#15803d] text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">Schedule an Inspection</Link>
          <Link href="/real-estate-inspections" className="border border-[#0c4a6e] text-[#0c4a6e] hover:bg-[#0c4a6e] hover:text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">Real Estate Inspections</Link>
        </div>
      </article>
    </>
  );
}
