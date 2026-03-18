import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Not to Flush When You Have a Septic System - Eagle Septic Guide",
  description: "Flushing the wrong things is one of the leading causes of premature septic failure. Learn exactly what to keep out of your drains and why it matters.",
  openGraph: {
    title: "What Not to Flush When You Have a Septic System",
    description: "Flushing the wrong things is one of the leading causes of premature septic failure. Learn exactly what to keep out of your drains and why it matters.",
    url: "https://eaglesepticpumping.com/blog/what-not-to-flush-septic-system",
    type: "article",
    siteName: "Eagle Septic Guide",
  },
};

export default function WhatNotToFlushPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Not to Flush When You Have a Septic System",
    description: "Flushing the wrong things is one of the leading causes of premature septic failure. Learn exactly what to keep out of your drains and why it matters.",
    url: "https://eaglesepticpumping.com/blog/what-not-to-flush-septic-system",
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
          { "@type": "ListItem", position: 3, name: "What Not to Flush When You Have a Septic System" },
        ],
      }) }} />
      <section className="bg-[#0c4a6e] text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block bg-[#16a34a] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">Maintenance</span>
          <h1 className="text-4xl font-bold mb-4">What Not to Flush When You Have a Septic System</h1>
          <p className="text-blue-200 text-lg">Your toilet is not a trash can. What goes in stays in, until a technician pumps it out or it clogs something expensive.</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="relative h-64 mb-8 rounded-xl overflow-hidden">
          <Image src="/images/lawn-drain-field.jpg" alt="Residential septic drain field in the Central Valley" fill className="object-cover" />
        </div>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          A septic tank is a living system. Billions of bacteria inside it break down solid waste slowly over time. When you flush things that kill those bacteria, or dump solids that never break down, you accelerate failure. The most common cause of premature drain field damage is not neglect. It is flushing the wrong things for years until the system collapses.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">The Only Safe Rule</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Three things belong in a septic-connected toilet: human waste, toilet paper, and water. That is it. Everything else either passes through unbroken and clogs the outlet baffle, kills the bacterial culture in the tank, or accumulates in the drain field and destroys its absorption capacity.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Toilet paper matters too. Standard single or double-ply breaks down quickly in a septic tank. Thick quilted brands, recycled paper products with extra binders, and anything marketed as "premium" or "ultra-soft" tends to break down much more slowly. If you can, do a simple test: drop a sheet in a jar of water, seal it, and shake for 10 seconds. Septic-safe paper will be mostly dissolved. Paper that holds together will cause problems.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Never Flush These</h2>
        <p className="text-gray-700 mb-2 leading-relaxed font-semibold">Wipes of any kind</p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          This is the biggest problem in the field right now. "Flushable" wipes do not break down in septic systems. They accumulate, bind together, and eventually block the outlet baffle or clog the inlet pipe. One technician can pull a mass of wipes out of a tank that looks like a gray felt mat. It takes years to build up, but when it blocks the outlet, you have a backup in your home the next day.
        </p>
        <p className="text-gray-700 mb-2 leading-relaxed font-semibold">Feminine hygiene products</p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Pads, tampons, and applicators are designed to absorb and expand, not to break down. They settle in the tank and do not decompose. Every one you flush is still there waiting when the technician arrives. The packaging saying "do not flush" exists for a reason.
        </p>
        <p className="text-gray-700 mb-2 leading-relaxed font-semibold">Paper towels and tissue</p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Paper towels are engineered to hold together when wet. They will not break down in your tank. Facial tissue is thicker than toilet paper and breaks down more slowly. Neither belongs in a septic system.
        </p>
        <p className="text-gray-700 mb-2 leading-relaxed font-semibold">Medications and household chemicals</p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Antibiotics flushed down a toilet kill the bacteria in your tank. Bleach, disinfectants, and drain cleaners do the same. A small amount of diluted bleach from a weekly toilet cleaning is not a major concern. Pouring a bottle of liquid drain cleaner into a slow drain absolutely is. It does not fix the problem and it damages the biological culture that makes your tank function.
        </p>
        <p className="text-gray-700 mb-2 leading-relaxed font-semibold">Cooking grease and food waste</p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Grease poured down the kitchen drain cools and solidifies in the pipe. Over time it narrows the inlet line and creates a scum layer in the tank that accumulates faster than bacteria can process it. Coffee grounds are a specific offender: they are dense, do not break down, and pack the sludge layer at the bottom of the tank. Garbage disposals are fine on municipal sewer systems. On a septic system, they add solid load that accelerates the pumping schedule considerably.
        </p>
        <p className="text-gray-700 mb-2 leading-relaxed font-semibold">Cat litter</p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Clay litter expands aggressively when wet and has no place in any drain. Even litters marketed as "flushable" tend to clump and clog. Keep it out entirely.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">What Happens When These Things Get In</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Non-degradable solids build up in the scum and sludge layers faster than pumping schedules account for. When those layers get thick enough, they overflow through the outlet baffle into the distribution box and the drain field. Once solids reach the drain field, they clog the soil pores that allow effluent to absorb. That clogging is not reversible. You are looking at partial or full drain field replacement, which runs $3,000 to $15,000 for a repair and $10,000 to $30,000 for a full replacement.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Regular pumping, usually every 3 to 5 years for a family of four with a 1,000-gallon tank, catches accumulation before it reaches the outlet. But if the wrong things are going in consistently, pumping every 2 years may not be enough.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">A Note on Septic Additives</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Products marketed as septic system treatments, bacterial additives, enzyme boosters, and the rest claim to enhance tank performance. The research on these is thin. A healthy septic tank already contains the bacteria it needs to function. What additives cannot do is replace pumping. Solids must be physically removed. No powder or liquid poured down a drain changes that. Some chemical additives have been shown to damage the drain field. Save the money and spend it on your next pump-out.
        </p>

        <div className="bg-[#0c4a6e]/5 rounded-xl p-6 mt-10 mb-6">
          <h3 className="font-bold text-[#0c4a6e] mb-3">Quick Reference: Keep Out of Your System</h3>
          <ul className="space-y-2">
            {[
              "Wipes of any kind, including those labeled flushable",
              "Feminine hygiene products",
              "Paper towels or facial tissue",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                <svg className="w-4 h-4 text-red-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <ul className="space-y-2 mt-2">
            {[
              "Medications, antibiotics, or harsh chemicals",
              "Cooking grease, coffee grounds, or food solids",
              "Cat litter of any kind",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                <svg className="w-4 h-4 text-red-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-gray-700 mb-6 leading-relaxed">
          If you have been flushing wipes or other non-degradables for years and your system is overdue for service, an inspection will tell you where things stand. Better to know now than when the drain field is gone.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <Link href="/blog/how-often-pump-septic-tank" className="bg-[#16a34a] hover:bg-[#15803d] text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">Pumping Schedule Guide</Link>
          <Link href="/blog/warning-signs-septic-system-failing" className="border border-[#0c4a6e] text-[#0c4a6e] hover:bg-[#0c4a6e] hover:text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">Warning Signs Guide</Link>
        </div>
      </article>
    </>
  );
}
