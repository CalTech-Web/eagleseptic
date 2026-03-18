import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Does a Septic System Work? - Eagle Septic Guide",
  description: "A plain-language guide to how septic systems work. From the tank to the drain field, learn what happens to wastewater after it leaves your home.",
  openGraph: {
    title: "How Does a Septic System Work?",
    description: "A plain-language guide to how septic systems work. From the tank to the drain field, learn what happens to wastewater after it leaves your home.",
    url: "https://eaglesepticpumping.com/blog/how-does-a-septic-system-work",
    type: "article",
    siteName: "Eagle Septic Guide",
  },
};

export default function HowSepticSystemWorksPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Does a Septic System Work?",
    description: "A plain-language guide to how septic systems work. From the tank to the drain field, learn what happens to wastewater after it leaves your home.",
    url: "https://eaglesepticpumping.com/blog/how-does-a-septic-system-work",
    author: { "@type": "Organization", name: "Eagle Septic Guide", url: "https://eaglesepticpumping.com" },
    publisher: { "@type": "Organization", name: "Eagle Septic Guide", url: "https://eaglesepticpumping.com" },
    datePublished: "2026-02-01",
    dateModified: "2026-03-17",
    inLanguage: "en-US",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <section className="bg-[#0c4a6e] text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block bg-[#16a34a] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">How It Works</span>
          <h1 className="text-4xl font-bold mb-4">How Does a Septic System Work?</h1>
          <p className="text-blue-200 text-lg">A plain-language explanation of what happens to wastewater after it leaves your home.</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="relative h-72 mb-8 rounded-xl overflow-hidden">
          <Image src="/images/lawn-drain-field.jpg" alt="Healthy green lawn over a residential septic drain field" fill className="object-cover" />
        </div>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">If your home is not connected to a municipal sewer line, it uses a septic system to treat and dispose of household wastewater. Understanding how it works helps you maintain it properly and catch problems early.</p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">The Basic Flow</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">Wastewater from every drain in your home, sinks, toilets, showers, and washing machines, flows through a single underground pipe to the septic tank. Inside the tank, solids separate from liquids. Heavy solids sink to the bottom and form a layer called sludge. Lighter materials like grease float to the top and form scum. The liquid in the middle, called effluent, is the relatively clear wastewater that moves forward in the system.</p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">The Septic Tank</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">The tank is typically buried in your yard and made of concrete, fiberglass, or polyethylene. Most residential tanks range from 1,000 to 2,000 gallons. Inside, natural bacteria break down the organic solids, reducing their volume over time. But the breakdown is never 100 percent complete. Sludge and scum accumulate over the years, which is why the tank must be pumped every 3 to 5 years.</p>
        <p className="text-gray-700 mb-4 leading-relaxed">The tank has an inlet pipe (where wastewater enters from the house) and an outlet pipe (where effluent exits to the drain field). Both use baffles, physical barriers that prevent scum from escaping and direct flow appropriately. Damaged baffles are a leading cause of drain field problems.</p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">The Drain Field</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">After leaving the tank, effluent flows into the drain field (also called a leach field). The drain field is a network of perforated pipes buried in gravel-filled trenches. Effluent seeps out of these pipes into the soil, which acts as a natural filter. Bacteria in the soil treat the effluent before it re-enters the groundwater.</p>
        <p className="text-gray-700 mb-4 leading-relaxed">A healthy drain field has no visible signs above ground. If you notice soggy areas, unusually green grass, or odors over the drain field, the system may be failing.</p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Why Systems Fail</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">The most common cause of septic failure is neglect. When sludge and scum build up past the outlet baffle, solids flow out into the drain field pipes. Once solids clog the drain field, the soil can no longer absorb effluent. Water backs up into the house or surfaces in the yard. At that point, drain field replacement is often the only option, costing $15,000 to $50,000.</p>
        <p className="text-gray-700 mb-4 leading-relaxed">Regular pumping, every 3 to 5 years depending on household size, prevents this entirely. A $400 pump-out is the most cost-effective maintenance a homeowner can do.</p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Distribution Boxes</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">Many systems include a distribution box (d-box) between the tank and drain field. This concrete or plastic box receives effluent from the tank outlet and distributes it evenly across multiple drain field trenches. If the d-box is cracked, tilted, or clogged, uneven distribution can kill portions of the drain field prematurely.</p>

        <div className="bg-[#0c4a6e]/5 rounded-xl p-6 mt-10 mb-6">
          <h3 className="font-bold text-[#0c4a6e] mb-3">Key Takeaways</h3>
          <ul className="space-y-2">
            {[
              "Wastewater flows from your home into the septic tank",
              "Solids settle, scum floats, clarified liquid (effluent) moves to the drain field",
              "Natural bacteria in the soil treat the effluent before it re-enters groundwater",
              "Sludge and scum must be pumped out every 3 to 5 years",
              "Clogged drain fields are permanent and expensive to replace",
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
          <Link href="/faq" className="bg-[#16a34a] hover:bg-[#15803d] text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">Read the FAQ</Link>
          <Link href="/services/septic-tank-pumping" className="border border-[#0c4a6e] text-[#0c4a6e] hover:bg-[#0c4a6e] hover:text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">About Septic Pumping</Link>
        </div>
      </article>
    </>
  );
}
