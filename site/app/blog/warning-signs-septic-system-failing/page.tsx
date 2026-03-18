import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Warning Signs of a Failing Septic System - Eagle Septic Guide",
  description: "Slow drains, sewage odors, soggy ground. Learn the early warning signs that your septic system needs attention before a small problem becomes a costly failure.",
  openGraph: {
    title: "Warning Signs of a Failing Septic System",
    description: "Slow drains, sewage odors, soggy ground. Learn the early warning signs that your septic system needs attention before a small problem becomes a costly failure.",
    url: "https://eaglesepticpumping.com/blog/warning-signs-septic-system-failing",
    type: "article",
    siteName: "Eagle Septic Guide",
  },
};

export default function WarningSeparatePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Warning Signs of a Failing Septic System",
    description: "Slow drains, sewage odors, soggy ground. Learn the early warning signs that your septic system needs attention before a small problem becomes a costly failure.",
    url: "https://eaglesepticpumping.com/blog/warning-signs-septic-system-failing",
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
          { "@type": "ListItem", position: 3, name: "Warning Signs of a Failing Septic System" },
        ],
      }) }} />
      <section className="bg-[#0c4a6e] text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block bg-[#16a34a] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">Troubleshooting</span>
          <h1 className="text-4xl font-bold mb-4">Warning Signs of a Failing Septic System</h1>
          <p className="text-blue-200 text-lg">Know the early signals before a small problem turns into a $15,000 drain field replacement.</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="relative h-64 mb-8 rounded-xl overflow-hidden">
          <Image src="/images/rain-septic-stress.jpg" alt="Signs of a stressed septic system" fill className="object-cover" />
        </div>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          A septic system rarely fails all at once. It sends warnings first. Catching those warning signs early is the difference between a $400 pump-out and a $30,000 drain field replacement. Here is what to look for.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">1. Slow or Gurgling Drains</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          When multiple drains in your home are slow at the same time, the problem is usually in the septic system, not the individual fixtures. Gurgling sounds after flushing or draining are especially telling. A single slow drain is likely a localized clog. Multiple slow drains point to the tank or drain field.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">2. Sewage Odors Indoors or Outdoors</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          A properly functioning septic system is odor-free. If you smell sewage gas inside your home or near the tank and drain field area, something is wrong. Indoors, it may signal a dry trap or cracked plumbing. Outdoors near the tank or drain field, it often means the system is overloaded or backing up.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">3. Unusually Green or Lush Grass Over the Drain Field</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          If one area of your yard is noticeably greener or growing faster than the rest, especially over where the drain field is located, effluent may be surfacing. The nutrients in the wastewater act as fertilizer. This is not a good sign, it means the drain field is saturated.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">4. Wet or Spongy Ground Near the Tank</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Soggy or marshy ground over the septic tank or drain field, especially during dry weather, is a serious red flag. It indicates effluent is surfacing rather than absorbing into the soil. Standing water or a visible wet spot above the drain field should be treated as an emergency.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">5. Sewage Backup Into the Home</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          The most obvious and serious sign: raw sewage backing up into sinks, tubs, or toilets. This requires immediate action. Stop using water in the home and call a septic professional immediately. Every additional flush makes the situation worse. Read our <Link href="/blog/septic-emergency-what-to-do" className="text-[#0c4a6e] underline hover:text-[#075985]">septic emergency guide</Link> for exact steps.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">6. Very Old System or Unknown Service History</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          If you do not know when your tank was last pumped, or the system is more than 20 to 30 years old, schedule an inspection. Our guide on <Link href="/blog/how-often-pump-septic-tank" className="text-[#0c4a6e] underline hover:text-[#075985]">how often to pump a septic tank</Link> explains the recommended intervals by household size. Older systems, especially those with concrete tanks or distribution boxes, may have cracked components that are not immediately visible. If the tank is overdue and the drain field smells or is soggy, also read our article on <Link href="/blog/signs-drain-field-failing" className="text-[#0c4a6e] underline hover:text-[#075985]">signs a drain field is failing</Link>.
        </p>

        <div className="bg-[#0c4a6e]/5 rounded-xl p-6 mt-10 mb-6">
          <h3 className="font-bold text-[#0c4a6e] mb-3">Quick Reference: When to Call</h3>
          <ul className="space-y-2">
            {[
              "Multiple drains slow simultaneously",
              "Sewage odors inside or outside",
              "Lush green patch over drain field",
              "Soggy ground above tank or drain field",
              "Sewage backing up into fixtures",
              "System has not been pumped in 5 or more years",
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
          <Link href="/emergency" className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">Emergency Guide</Link>
          <Link href="/services/septic-inspections" className="border border-[#0c4a6e] text-[#0c4a6e] hover:bg-[#0c4a6e] hover:text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">Schedule Inspection</Link>
        </div>
      </article>
    </>
  );
}
