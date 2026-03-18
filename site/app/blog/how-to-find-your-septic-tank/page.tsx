import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Find Your Septic Tank - Eagle Septic Guide",
  description: "Most homeowners have no idea where their septic tank is buried. Here is a step-by-step guide to locating it before your next service call.",
  openGraph: {
    title: "How to Find Your Septic Tank",
    description: "Most homeowners have no idea where their septic tank is buried. Here is a step-by-step guide to locating it before your next service call.",
    url: "https://eaglesepticpumping.com/blog/how-to-find-your-septic-tank",
    type: "article",
    siteName: "Eagle Septic Guide",
  },
};

export default function HowToFindSepticTankPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Find Your Septic Tank",
    description: "Most homeowners have no idea where their septic tank is buried. Here is a step-by-step guide to locating it before your next service call.",
    url: "https://eaglesepticpumping.com/blog/how-to-find-your-septic-tank",
    author: { "@type": "Organization", name: "Eagle Septic Guide", url: "https://eaglesepticpumping.com" },
    publisher: { "@type": "Organization", name: "Eagle Septic Guide", url: "https://eaglesepticpumping.com" },
    datePublished: "2026-02-15",
    dateModified: "2026-03-17",
    inLanguage: "en-US",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <section className="bg-[#0c4a6e] text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block bg-[#16a34a] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">How It Works</span>
          <h1 className="text-4xl font-bold mb-4">How to Find Your Septic Tank</h1>
          <p className="text-blue-200 text-lg">Most homeowners have no idea where it is buried. That is fine until a technician is probing your yard for an hour at your expense.</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="relative h-64 mb-8 rounded-xl overflow-hidden">
          <Image src="/images/lawn-drain-field.jpg" alt="Residential lawn over a septic system in the Central Valley" fill className="object-cover" />
        </div>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Knowing where your tank is before you need service saves time and money. A technician who cannot locate the lid has to probe the yard blind, and that time goes on your bill. If you ever plan to sell the property, you will need this information anyway. Here is how to find it, starting with the fastest method.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Start With County Permit Records</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Every system installed with a permit has a plot plan on file. In Stanislaus County, contact the Environmental Resources Department. San Joaquin and Merced counties both have environmental health offices that maintain the same records. The permit document typically includes a hand-drawn site plan showing the tank location relative to the house and property lines, sometimes with measurements.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Not every system has records. Older installations and some rural properties predate permit requirements, or records were lost over time. If the county has nothing, move on to the next method.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Follow the Sewer Line Out of the House</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Find where the main sewer line exits the house. In most homes built before 1990, that line exits through the foundation or crawl space. Watch for a 4-inch pipe heading toward an exterior wall. From that exit point, the line runs in a straight or gently curved path to the tank. The direction it exits gives you your starting heading.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Tanks are typically 5 to 20 feet from the foundation, depending on the lot. Older systems on larger properties sometimes sit further out. The tank will never be under a structure, driveway, or large tree. If there is a patio or addition, the original sewer line ran before it was built, so think about what the yard looked like before any additions.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Probe the Soil in a Grid</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Once you have a general area, use a thin metal rod, a soil probe, or even a long screwdriver to locate the lid. Push it down 6 to 12 inches every few feet in a grid pattern. Concrete or plastic will stop the rod cold. Soft soil means nothing solid beneath. The tank top usually sits 6 to 18 inches below grade, though some older Central Valley systems are buried deeper.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Most tanks have two lids, one for each compartment. If you find one, the second is typically 3 to 5 feet away in the same direction as the outlet pipe. Both need to be accessible for a thorough pump-out.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Try a Metal Detector</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Steel tanks installed in the 1960s through 1980s respond well to a standard metal detector. Concrete tanks with steel rebar also give a mild signal. If you know your system is older and suspect a steel tank, this method can narrow down the search area quickly. Newer concrete and plastic tanks may give weak or inconsistent readings.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Mark It Once You Find It</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Take a photo from a fixed reference point, like the back door or a corner of the house, with the lid location visible. Note the distance from that reference. Log the GPS coordinates on your phone if you want to be thorough. Write this down and keep it with your home records. The technician at your next service call will know exactly where to dig, and if you sell the home, the inspection will go faster.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Locate the Drain Field Too</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          The drain field extends downhill or downslope from the tank, in the direction the outlet pipe runs. Look for a rectangular area of slightly different vegetation, often greener during dry summer months because effluent feeds the soil. You may see parallel lines of slightly raised ground over the leach lines.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Once you know where it is, protect it. Do not drive over it, do not plant trees or shrubs near it, and do not build anything above it. Root intrusion into drain field pipes is one of the leading causes of field failure, and field replacement runs $10,000 to $30,000.
        </p>

        <div className="bg-[#0c4a6e]/5 rounded-xl p-6 mt-10 mb-6">
          <h3 className="font-bold text-[#0c4a6e] mb-3">Finding Your Tank: Quick Reference</h3>
          <ul className="space-y-2">
            {[
              "Check county permit records first, fastest when available",
              "Follow the sewer line from the house foundation outward",
              "Probe the soil in a grid 5 to 20 feet from the house",
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
          If you are overdue for a pump-out and want a technician to locate the tank for you, most companies include lid locating in the service fee. Some charge separately for deep or buried lids that require excavation. Ask before scheduling so you know what to expect on the invoice.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <Link href="/blog/how-often-pump-septic-tank" className="bg-[#16a34a] hover:bg-[#15803d] text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">Pumping Schedule Guide</Link>
          <Link href="/blog/what-does-a-septic-inspection-include" className="border border-[#0c4a6e] text-[#0c4a6e] hover:bg-[#0c4a6e] hover:text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">What an Inspection Covers</Link>
        </div>
      </article>
    </>
  );
}
