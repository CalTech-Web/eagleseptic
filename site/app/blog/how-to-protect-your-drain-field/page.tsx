import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Protect Your Drain Field - Eagle Septic Guide",
  description: "A drain field that lasts 25 years and one that fails in 10 are often the same system, managed differently. Here is what makes the difference.",
  openGraph: {
    title: "How to Protect Your Drain Field",
    description: "A drain field that lasts 25 years and one that fails in 10 are often the same system, managed differently. Here is what makes the difference.",
    url: "https://eaglesepticpumping.com/blog/how-to-protect-your-drain-field",
    type: "article",
    siteName: "Eagle Septic Guide",
  },
};

export default function HowToProtectYourDrainFieldPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Protect Your Drain Field",
    description: "A drain field that lasts 25 years and one that fails in 10 are often the same system, managed differently. Here is what makes the difference.",
    url: "https://eaglesepticpumping.com/blog/how-to-protect-your-drain-field",
    author: { "@type": "Organization", name: "Eagle Septic Guide", url: "https://eaglesepticpumping.com" },
    publisher: { "@type": "Organization", name: "Eagle Septic Guide", url: "https://eaglesepticpumping.com" },
    datePublished: "2026-03-01",
    dateModified: "2026-03-17",
    inLanguage: "en-US",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <section className="bg-[#0c4a6e] text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block bg-[#16a34a] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">Maintenance</span>
          <h1 className="text-4xl font-bold mb-4">How to Protect Your Drain Field</h1>
          <p className="text-blue-200 text-lg">Most drain fields fail from management decisions made over years, not from a single event. The right habits cost nothing. Replacing the field costs $10,000 to $30,000.</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="relative h-64 mb-8 rounded-xl overflow-hidden">
          <Image src="/images/lawn-drain-field.jpg" alt="Green residential lawn over a healthy septic drain field in the Central Valley" fill className="object-cover" />
        </div>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          The drain field has one job: filter effluent through soil before it reaches groundwater. It does that job through billions of bacteria living in the top 18 inches of soil and through the pore spaces between soil particles that let liquid move slowly through. Both of those things can be destroyed. The first by what you send down the drain. The second by pressure, water, and root intrusion from above.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Keep the Tank Pumped on Schedule</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          The most direct protection for a drain field is keeping solids out of it. When the tank overflows because sludge has built up past the outlet baffle, raw solids move into the lateral lines. Those solids do not dissolve. They clog the perforations in the pipes and begin forming the biomat layer that eventually suffocates the soil below. A household of four needs pumping every 3 to 4 years with a 1,000-gallon tank.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Waiting until you notice a slow drain or a smell means the tank has already been overloaded for some time. The $400 pump-out on schedule costs less in one year than a single service call to diagnose what went wrong from skipping it.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Control the Hydraulic Load</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Every gallon of water that enters the house eventually reaches the drain field. The field absorbs that effluent at a rate limited by soil type and pore capacity. Send more water than the soil can handle and it backs up, saturates the soil, and breaks down the biomat layer.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Fix leaking toilets immediately. A flapper that fails and runs constantly can send 50 to 200 gallons a day into a system designed for 60 to 75 gallons per bedroom. Space laundry loads across the week rather than running them all in a single day. Full loads also help, since a half-load uses nearly as much water as a full one. High-efficiency fixtures reduce baseline load over time and are worth considering when replacing aging appliances.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Divert Surface Water Away</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Surface water running onto the drain field saturates the soil from above while the system is trying to disperse effluent from below. During heavy rain, this is the primary cause of temporary septic backups in the Central Valley, where clay soils drain slowly. Gutters that discharge near the field, graded lots that direct runoff across it, and irrigation systems that saturate that zone all compound the problem.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Check where your downspouts discharge. Redirecting them 10 feet further from the field costs almost nothing. Grade the soil around the field area so water drains away from it rather than pooling on top. Avoid irrigating directly over the leach lines.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Keep Weight Off the Field</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Vehicles compact soil. Compacted soil loses the pore structure that allows effluent to move through it. A single pass by a riding mower is fine. Parking a truck on the field for a weekend is not. Keep heavy equipment off the field area entirely. No concrete pads, no sheds, no raised garden beds placed over the lateral lines.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Grass is the ideal cover for a drain field. It transpires moisture from the surface, holds soil in place, and does not root deep enough to interfere with the pipes. Avoid planting trees or large shrubs anywhere near the field. Willow, poplar, and eucalyptus roots are aggressive and seek water. A tree 20 feet from a lateral line can send roots into it within a few years.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Watch What Goes Down the Drain</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Grease accumulates in the tank and eventually passes into the field, where it coats soil particles and reduces absorption. Pour cooking grease into a container and throw it in the trash. Harsh chemical cleaners in volume can kill the bacterial population in the tank and slow the breakdown of solids that the field depends on. Normal household cleaning products in typical quantities are fine. Dumping a bucket of bleach down the drain weekly is not.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Flushable wipes do not break down in the tank. Neither does cat litter, paper towels, or feminine hygiene products. These materials accumulate in the sludge layer and accelerate the timeline to the next overflow.
        </p>

        <div className="bg-[#0c4a6e]/5 rounded-xl p-6 mt-10 mb-6">
          <h3 className="font-bold text-[#0c4a6e] mb-3">Field Protection Checklist</h3>
          <ul className="space-y-2">
            {[
              "Pump tank every 3 to 5 years, more often with large households",
              "Fix leaking toilets and spread laundry loads across the week",
              "Keep vehicles, trees, and structures off the field area",
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

        <p className="text-gray-700 mb-6 leading-relaxed">
          None of this is complicated. The field was designed to last 20 to 30 years with reasonable use. Protect the soil structure from above and the bacterial environment from what you flush, and it will. If you cannot remember the last pump-out, that is the place to start.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <Link href="/blog/how-often-pump-septic-tank" className="bg-[#16a34a] hover:bg-[#15803d] text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">Pumping Schedule Guide</Link>
          <Link href="/blog/signs-drain-field-failing" className="border border-[#0c4a6e] text-[#0c4a6e] hover:bg-[#0c4a6e] hover:text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">Signs of Drain Field Failure</Link>
        </div>
      </article>
    </>
  );
}
