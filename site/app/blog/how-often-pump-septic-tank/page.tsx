import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Often Should I Pump My Septic Tank? - Eagle Septic Guide",
  description: "Most households need septic tank pumping every 3 to 5 years. Learn how tank size, household size, and usage affect your pumping schedule and what happens when you wait too long.",
  openGraph: {
    title: "How Often Should I Pump My Septic Tank?",
    description: "Most households need septic tank pumping every 3 to 5 years. Learn how tank size, household size, and usage affect your pumping schedule and what happens when you wait too long.",
    url: "https://eaglesepticpumping.com/blog/how-often-pump-septic-tank",
    type: "article",
    siteName: "Eagle Septic Guide",
  },
};

export default function HowOftenPumpPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Often Should I Pump My Septic Tank?",
    description: "Most households need septic tank pumping every 3 to 5 years. Learn how tank size, household size, and usage affect your pumping schedule and what happens when you wait too long.",
    url: "https://eaglesepticpumping.com/blog/how-often-pump-septic-tank",
    author: { "@type": "Organization", name: "Eagle Septic Guide", url: "https://eaglesepticpumping.com" },
    publisher: { "@type": "Organization", name: "Eagle Septic Guide", url: "https://eaglesepticpumping.com" },
    datePublished: "2026-02-01",
    dateModified: "2026-03-17",
    inLanguage: "en-US",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://eaglesepticpumping.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://eaglesepticpumping.com/blog" },
      { "@type": "ListItem", position: 3, name: "How Often Should I Pump My Septic Tank?" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="bg-[#0c4a6e] text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block bg-[#16a34a] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">Maintenance</span>
          <h1 className="text-4xl font-bold mb-4">How Often Should I Pump My Septic Tank?</h1>
          <p className="text-blue-200 text-lg">The answer depends on your household size and tank capacity. Here is how to figure out your schedule.</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="relative h-64 mb-8 rounded-xl overflow-hidden">
          <Image src="/images/lawn-drain-field.jpg" alt="Healthy green lawn over a residential septic drain field" fill className="object-cover" />
        </div>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Most households need their septic tank pumped every 3 to 5 years. But that range can shift based on how many people live in your home, how large your tank is, and how much water your household uses. Getting the timing right protects your drain field and saves thousands in avoidable repairs.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">The General Rule</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          A family of four with a 1,000-gallon tank typically needs pumping every 3 to 4 years. A smaller household (one or two people) with the same tank may go 5 to 7 years between pump-outs. A larger family (five or more) with a small tank may need service every 2 years.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Factors That Affect Your Schedule</h2>
        <ul className="space-y-3 mb-6">
          {[
            "Household size: More people means more wastewater and faster sludge accumulation.",
            "Tank size: Smaller tanks fill faster than larger ones.",
            "Water usage habits: Long showers, full loads of laundry, and frequent dishwasher use all add up.",
            "Garbage disposal: Using a garbage disposal significantly increases solids entering the tank.",
            "Age of system: Older systems and baffles may require more frequent attention.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-gray-700">
              <svg className="w-4 h-4 text-[#16a34a] mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">What Happens When You Wait Too Long</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          When sludge and scum build up past the outlet baffle, solids flow out of the tank and into your drain field. Once solids clog the drain field pipes, the soil can no longer absorb effluent. The system backs up into your home or saturates your yard. <Link href="/blog/drain-field-repair-cost" className="text-[#0c4a6e] underline hover:text-[#075985]">Drain field repair costs</Link> between $3,000 and $15,000, and full replacement runs $15,000 to $50,000. A routine pump-out costs $300 to $550. See our <Link href="/blog/septic-tank-pumping-cost-central-valley" className="text-[#0c4a6e] underline hover:text-[#075985]">Central Valley pumping cost guide</Link> for a full price breakdown.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Signs You Are Overdue</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          If you do not know when your tank was last pumped, look for these <Link href="/blog/warning-signs-septic-system-failing" className="text-[#0c4a6e] underline hover:text-[#075985]">warning signs of a failing septic system</Link>: slow or gurgling drains, sewage odors near the tank or drain field, unusually lush grass over the drain field, or wet or spongy ground. Any of these is a signal to call a technician.
        </p>

        <div className="bg-[#0c4a6e]/5 rounded-xl p-6 mt-10 mb-6">
          <h3 className="font-bold text-[#0c4a6e] mb-3">Pumping Frequency by Household Size (1,000-gallon tank)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b border-gray-200">
                  <th className="pb-2 font-semibold text-gray-700">Household Size</th>
                  <th className="pb-2 font-semibold text-gray-700">Recommended Interval</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["1 to 2 people", "5 to 7 years"],
                  ["3 to 4 people", "3 to 4 years"],
                  ["5 or more people", "2 to 3 years"],
                ].map(([size, interval]) => (
                  <tr key={size}>
                    <td className="py-2 text-gray-700">{size}</td>
                    <td className="py-2 text-gray-700">{interval}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-8">
          <Link href="/faq" className="bg-[#16a34a] hover:bg-[#15803d] text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">Read the FAQ</Link>
          <Link href="/services/septic-tank-pumping" className="border border-[#0c4a6e] text-[#0c4a6e] hover:bg-[#0c4a6e] hover:text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">About Septic Pumping</Link>
        </div>
      </article>
    </>
  );
}
