import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signs Your Drain Field Is Failing - Eagle Septic Guide",
  description: "Wet spots, green grass, outdoor sewage odor. Here is how to read the early warning signs of drain field failure before the repair window closes.",
  openGraph: {
    title: "Signs Your Drain Field Is Failing",
    description: "Wet spots, green grass, outdoor sewage odor. Here is how to read the early warning signs of drain field failure before the repair window closes.",
    url: "https://eaglesepticpumping.com/blog/signs-drain-field-failing",
    type: "article",
    siteName: "Eagle Septic Guide",
  },
};

export default function SignsDrainFieldFailingPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Signs Your Drain Field Is Failing",
    description: "Wet spots, green grass, outdoor sewage odor. Here is how to read the early warning signs of drain field failure before the repair window closes.",
    url: "https://eaglesepticpumping.com/blog/signs-drain-field-failing",
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
          <span className="inline-block bg-[#16a34a] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">Troubleshooting</span>
          <h1 className="text-4xl font-bold mb-4">Signs Your Drain Field Is Failing</h1>
          <p className="text-blue-200 text-lg">Most homeowners misread the early signs as yard drainage issues and wait. By the time they call, the repair window has often closed.</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="relative h-64 mb-8 rounded-xl overflow-hidden">
          <Image src="/images/lawn-drain-field.jpg" alt="Residential lawn over a septic drain field in the Central Valley" fill className="object-cover" />
        </div>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          The drain field fails in stages. Catching it at stage one can mean a $3,000 repair. Missing it until the effluent is surfacing in your yard means a $10,000 to $30,000 replacement. The signs are readable if you know what to look for.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Wet Spot Over the Field</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          A consistently wet or spongy area over the drain field, present even without recent rain, is the first concrete sign. The soil is not absorbing effluent fast enough. This might mean the field is temporarily overloaded, or it might mean the early stages of biomat clogging the lateral lines.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Central Valley clay soils complicate the read. Water tends to pool in low spots rather than spread. If a patch of ground stays wet when the surrounding yard is dry and there is no sprinkler or surface runoff feeding it, start watching it closely.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Unusually Green Grass in Summer</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          In dry months when surrounding turf goes dormant, a strip of dark, thick grass over the drain lines feeds on effluent nutrients. Most homeowners assume they missed a sprinkler zone. It usually means the field is getting more moisture from below than it should. Distinct stripes that follow the leach line layout are particularly telling.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Sewage Odor Outside</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Odor inside the house typically traces back to the tank, a dry trap, a failing wax ring, or a system that needs pumping. Odor outside, near the drain field, is different. That smell means effluent is surfacing close enough to the ground that it evaporates into the air. It is further along than indoor odor and harder to ignore once neighbors start noticing it too.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Multiple Slow Drains</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          One slow drain points to a local clog. Two or three fixtures slowing at once means the problem is downstream, either in the tank or the field. Gurgling sounds in the toilet when you run the shower, or in the kitchen sink when the washing machine drains, are the same signal coming through a different fixture. When the system backs up into a floor drain or bathtub, it is past slow.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Sewage Surfacing on the Ground</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Raw effluent pooling on the ground above the drain field is the terminal sign. The field cannot process incoming waste. At this point biomat has clogged the lateral lines completely or the soil structure itself has changed. Full replacement is usually the only remaining option. Keep people and pets away from the area. Surfacing effluent carries real pathogen risk.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">What to Do at Each Stage</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          If you see wet spots or green grass over the field, schedule an inspection now. The sooner a technician measures sludge depth, checks the distribution box, and evaluates the field surface, the more options stay available. Early-stage biomat can sometimes be addressed with aeration treatment or targeted pipe repair, which runs $1,500 to $5,000.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          If you have outdoor sewage odor or multiple slow drains, cut water use immediately. Drop laundry to one load a day, shorten showers, run the dishwasher once instead of twice. Every gallon you send into the system is a gallon the field has to absorb. Lowering the hydraulic load buys time until service arrives.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          If you have surfacing sewage, call for emergency service. In Stanislaus, Merced, and San Joaquin counties, surfacing sewage may require notification to the county environmental health department. Do not assume it will drain on its own.
        </p>

        <div className="bg-[#0c4a6e]/5 rounded-xl p-6 mt-10 mb-6">
          <h3 className="font-bold text-[#0c4a6e] mb-3">Early Warning Checklist</h3>
          <ul className="space-y-2">
            {[
              "Wet ground over field without rain means the soil is rejecting effluent",
              "Green grass stripes in summer follow the leach lines, fed from below",
              "Multiple slow drains together signal downstream failure, not a local clog",
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
          A drain field inspection costs $175 to $400. Early biomat treatment runs $1,500 to $5,000. Full replacement is $10,000 to $30,000. Acting when you see the first wet spot is a different financial outcome than waiting until sewage surfaces.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <Link href="/blog/warning-signs-septic-system-failing" className="bg-[#16a34a] hover:bg-[#15803d] text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">Warning Signs Guide</Link>
          <Link href="/blog/what-does-a-septic-inspection-include" className="border border-[#0c4a6e] text-[#0c4a6e] hover:bg-[#0c4a6e] hover:text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">What an Inspection Covers</Link>
        </div>
      </article>
    </>
  );
}
