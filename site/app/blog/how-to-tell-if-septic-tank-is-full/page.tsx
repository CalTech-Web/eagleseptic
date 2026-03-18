import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Tell If Your Septic Tank Is Full - Eagle Septic Guide",
  description: "A full septic tank has early warning signs. Slow drains, gurgling sounds, and outdoor odors tell you the system needs attention before it damages the drain field.",
  openGraph: {
    title: "How to Tell If Your Septic Tank Is Full",
    description: "A full septic tank has early warning signs. Slow drains, gurgling sounds, and outdoor odors tell you the system needs attention before it damages the drain field.",
    url: "https://eaglesepticpumping.com/blog/how-to-tell-if-septic-tank-is-full",
    type: "article",
    siteName: "Eagle Septic Guide",
  },
};

export default function HowToTellIfSepticTankIsFullPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Tell If Your Septic Tank Is Full",
    description: "A full septic tank has early warning signs. Slow drains, gurgling sounds, and outdoor odors tell you the system needs attention before it damages the drain field.",
    url: "https://eaglesepticpumping.com/blog/how-to-tell-if-septic-tank-is-full",
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
          { "@type": "ListItem", position: 3, name: "How to Tell If Your Septic Tank Is Full" },
        ],
      }) }} />
      <section className="bg-[#0c4a6e] text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block bg-[#16a34a] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">Troubleshooting</span>
          <h1 className="text-4xl font-bold mb-4">How to Tell If Your Septic Tank Is Full</h1>
          <p className="text-blue-200 text-lg">The warning signs come fast once sludge gets close to the outlet baffle. Here is what to watch for before the problem gets expensive.</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="relative h-64 mb-8 rounded-xl overflow-hidden">
          <Image src="/images/lawn-drain-field.jpg" alt="Residential lawn over a buried septic tank in the Central Valley" fill className="object-cover" />
        </div>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          A family of four with a 1,200-gallon tank can go four years without any symptoms. Then the kitchen sink starts draining slowly. A week later, the toilet takes an extra flush. Two weeks after that, a wet patch appears in the yard. At that point the problem is no longer a pump-out, it is a drain field repair.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">What a Full Tank Actually Means</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          A septic tank is never empty. It holds liquid effluent at all times, with a floating scum layer on top and a settled sludge layer on the bottom. What technicians measure is how close those solid layers have crept toward the outlet baffle. When sludge and scum combined take up roughly a third of the tank's working capacity, it needs to be pumped.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          At that threshold, solids start passing out of the tank into the drain field. The drain field cannot handle solids. Once it is clogged with them, no amount of pumping fixes it. The repair window closes and replacement becomes the only option.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Slow Drains Throughout the House</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          The most reliable early sign is slow drains across multiple fixtures, not just one. A single slow drain points to a clog in that specific line. When the kitchen sink, bathroom sink, and shower all drain sluggishly at the same time, the bottleneck is downstream in the tank or beyond.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Run water in one fixture while watching another. If the toilet gurgles when you run the washing machine, that is a pressure problem in the system. Full tanks push back.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Gurgling Sounds from Multiple Fixtures</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          When a full tank receives incoming water, something has to give. Gurgling from multiple fixtures, or from floor drains during laundry cycles, is the system venting pressure the only way it can. A single gurgling toilet is less concerning. The same sound coming from three different drains is worth a call.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Outdoor Odors Near the Tank</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Sulfur and sewage odor near the tank access lid or in the yard directly above the buried tank suggests the system is under pressure or seeping at the lid seam. Indoor odors usually point to a different problem, a dried p-trap or a cracked wax ring. Smell coming from outside near the tank is a direct signal.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Wet Ground or Unusually Lush Grass</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          When the outlet baffle is submerged in sludge, effluent has no clean path forward. It can back up into the soil around the tank itself. The same wet, spongy ground associated with a failing drain field sometimes appears directly over an overfull tank. Green grass that is noticeably more vibrant than the surrounding yard is another tell worth investigating.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Measure Before the Symptoms Start</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          A technician can measure sludge depth with a calibrated sludge judge before any symptoms appear. Standard residential pump-out schedules run every 3 to 5 years depending on household size and tank capacity, not when the drains start slowing.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          By the time the slow drains start, the window for a simple $400 pump-out may already be closing. The drain field damage that makes a pump-out pointless happens quietly, over weeks.
        </p>

        <div className="bg-[#0c4a6e]/5 rounded-xl p-6 mt-10 mb-6">
          <h3 className="font-bold text-[#0c4a6e] mb-3">Early Warning Signs</h3>
          <ul className="space-y-2">
            {[
              "Slow drains in multiple fixtures at the same time",
              "Gurgling sounds when running water elsewhere in the house",
              "Sewage or sulfur odor near the tank lid or access area",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                <svg className="w-4 h-4 text-[#16a34a] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 mt-8">
          <Link href="/blog/how-often-pump-septic-tank" className="bg-[#16a34a] hover:bg-[#15803d] text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">How Often to Pump</Link>
          <Link href="/blog/septic-tank-pumping-cost-central-valley" className="border border-[#0c4a6e] text-[#0c4a6e] hover:bg-[#0c4a6e] hover:text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">Pumping Costs in the Central Valley</Link>
        </div>
      </article>
    </>
  );
}
