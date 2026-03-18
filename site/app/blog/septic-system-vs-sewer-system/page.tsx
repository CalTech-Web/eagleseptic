import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Septic System vs Sewer System: What Is the Difference? - Eagle Septic Guide",
  description: "Not sure if you have a septic system or sewer connection? Learn the key differences, pros and cons, and what each system means for your home.",
  openGraph: {
    title: "Septic System vs Sewer System: What Is the Difference?",
    description: "Not sure if you have a septic system or sewer connection? Learn the key differences, pros and cons, and what each system means for your home.",
    url: "https://eaglesepticpumping.com/blog/septic-system-vs-sewer-system",
    type: "article",
    siteName: "Eagle Septic Guide",
  },
};

export default function SepticVsSewerPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Septic System vs Sewer System: What Is the Difference?",
    description: "Not sure if you have a septic system or sewer connection? Learn the key differences, pros and cons, and what each system means for your home.",
    url: "https://eaglesepticpumping.com/blog/septic-system-vs-sewer-system",
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
          <span className="inline-block bg-[#16a34a] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">Basics</span>
          <h1 className="text-4xl font-bold mb-4">Septic System vs Sewer System: What Is the Difference?</h1>
          <p className="text-blue-200 text-lg">Not sure which system you have or how they compare? Here is a clear breakdown.</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="relative h-72 mb-8 rounded-xl overflow-hidden">
          <Image src="/images/residential-neighborhood-sewer-septic.jpg" alt="Residential neighborhood with homes that may use septic or sewer" fill className="object-cover" />
        </div>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">If you live outside a city or in a rural area, your home likely uses a private septic system. If you are in a dense urban or suburban neighborhood, you are probably on municipal sewer. Understanding which you have and how each works helps you maintain your home properly.</p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">How Sewer Systems Work</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">A municipal sewer system collects wastewater from every home and business in a neighborhood through a network of underground pipes. All that wastewater flows to a central wastewater treatment plant, where it is treated and eventually discharged or recycled. Homeowners pay monthly utility fees for this service, but they do not have to manage or maintain the treatment process.</p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">How Septic Systems Work</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">A septic system treats wastewater on your own property. Household wastewater flows into a buried tank where solids settle and bacteria break them down. Clarified liquid exits the tank and flows into a drain field, where soil filters it before it re-enters the groundwater. Everything happens on your property, with no connection to municipal infrastructure.</p>
        <p className="text-gray-700 mb-4 leading-relaxed">Because the system is on your property, you are responsible for its maintenance. That means regular pumping, watching for warning signs, and calling a professional when something seems off.</p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Key Differences at a Glance</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-[#0c4a6e] text-white">
                <th className="text-left p-3">Factor</th>
                <th className="text-left p-3">Septic</th>
                <th className="text-left p-3">Sewer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["Location", "On your property", "Off-site treatment plant"],
                ["Maintenance", "Homeowner responsible", "Utility handles treatment"],
                ["Monthly cost", "None (beyond maintenance)", "Monthly utility bill"],
                ["Pumping", "Every 3 to 5 years", "Not required"],
                ["Failure risk", "Yes, if neglected", "Rare for homeowner"],
                ["Common location", "Rural, suburban", "Urban, dense suburban"],
              ].map(([factor, septic, sewer]) => (
                <tr key={factor} className="odd:bg-white even:bg-gray-50">
                  <td className="p-3 font-medium text-gray-700">{factor}</td>
                  <td className="p-3 text-gray-600">{septic}</td>
                  <td className="p-3 text-gray-600">{sewer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">How to Tell Which System You Have</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">The simplest way is to check your water bill. If you receive a monthly bill that includes a sewer charge, you are on municipal sewer. If you have a water bill with no sewer line, you likely have a septic system. You can also check your property records with your county assessor or look for a cleanout access cap or lid in your yard.</p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Pros and Cons of Septic Systems</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-green-50 rounded-xl p-4">
            <h3 className="font-semibold text-green-800 mb-2">Advantages</h3>
            <ul className="space-y-1 text-sm text-green-700">
              <li>No monthly sewer fees</li>
              <li>Independent from municipal infrastructure</li>
              <li>Environmentally sound when maintained</li>
              <li>Often standard in rural areas</li>
            </ul>
          </div>
          <div className="bg-red-50 rounded-xl p-4">
            <h3 className="font-semibold text-red-800 mb-2">Disadvantages</h3>
            <ul className="space-y-1 text-sm text-red-700">
              <li>Requires regular pumping and maintenance</li>
              <li>Failure can be expensive ($15,000 to $50,000)</li>
              <li>Limitations on certain products (no harsh chemicals)</li>
              <li>Must locate and protect tank and drain field</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-8">
          <Link href="/blog/how-does-a-septic-system-work" className="bg-[#16a34a] hover:bg-[#15803d] text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">How Septic Systems Work</Link>
          <Link href="/services/septic-tank-pumping" className="border border-[#0c4a6e] text-[#0c4a6e] hover:bg-[#0c4a6e] hover:text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">About Septic Pumping</Link>
        </div>
      </article>
    </>
  );
}
