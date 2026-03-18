import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Long Does a Septic System Last? - Eagle Septic Guide",
  description: "A concrete septic tank can last 40 years or more. The drain field feeding off it might fail in 20. Here is what determines lifespan and what shortens it.",
  openGraph: {
    title: "How Long Does a Septic System Last?",
    description: "A concrete septic tank can last 40 years or more. The drain field feeding off it might fail in 20. Here is what determines lifespan and what shortens it.",
    url: "https://eaglesepticpumping.com/blog/how-long-does-a-septic-system-last",
    type: "article",
    siteName: "Eagle Septic Guide",
  },
};

export default function HowLongSepticSystemLastPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Long Does a Septic System Last?",
    description: "A concrete septic tank can last 40 years or more. The drain field feeding off it might fail in 20. Here is what determines lifespan and what shortens it.",
    url: "https://eaglesepticpumping.com/blog/how-long-does-a-septic-system-last",
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
          <h1 className="text-4xl font-bold mb-4">How Long Does a Septic System Last?</h1>
          <p className="text-blue-200 text-lg">The tank and the drain field age differently. Most homeowners do not realize this until one of them fails.</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="relative h-64 mb-8 rounded-xl overflow-hidden">
          <Image src="/images/hero-residential-home.jpg" alt="Residential home with a septic system in the Central Valley" fill className="object-cover" />
        </div>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          A concrete septic tank, properly maintained, can last 40 years or more. The drain field feeding off it might fail in 20. That gap is where most homeowners get caught off guard, because the tank still looks fine when the field is already collapsing.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">The Tank Itself</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Concrete tanks are standard in Central Valley homes built before 1990, and they hold up well. With no significant cracking, no root intrusion into the lids or walls, and regular pumping every 3 to 5 years, a concrete tank can easily reach 40 to 50 years of service life. Some last longer.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Steel tanks tell a different story. Installed mostly in the 1960s and 1970s, they corrode from the inside out. Most fail between 15 and 25 years. If you have a steel tank and it is over 20 years old, schedule an inspection before the bottom rusts through. A collapsed steel tank can create a dangerous void in your yard.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Plastic and fiberglass tanks, more common in newer construction, are rated for 30 to 40 years. They resist corrosion but can shift in unstable soils or flex under heavy vehicle traffic. Never drive over any tank regardless of material.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">The Drain Field</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Drain fields are the more fragile component. A well-designed field in good soil, fed by a properly maintained tank with regular pumping, can last 25 to 30 years. Fields that receive excessive solids, chemical damage, or root intrusion often fail well short of that.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          When soil pores in the field clog with biomat, a layer of accumulated organic material, effluent can no longer absorb into the ground. That failure is usually permanent. Replacing a drain field in the Central Valley runs $10,000 to $30,000, depending on size, soil conditions, and permit requirements.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          In some cases, early-stage biomat can be addressed with aeration treatment or targeted pipe replacement, which costs $1,500 to $5,000. Whether that option is viable depends on how far the failure has progressed. Waiting makes that window smaller.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">What Cuts Years Off the System</h2>
        <p className="text-gray-700 mb-2 leading-relaxed font-semibold">Infrequent pumping</p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Every extra year past a pumping schedule, sludge and scum layers in the tank creep closer to the outlet baffle. Once solids clear that baffle, they travel into the distribution box and begin clogging the drain field. A tank that should be pumped every 4 years and goes 8 years without service has almost certainly sent solids downstream.
        </p>
        <p className="text-gray-700 mb-2 leading-relaxed font-semibold">Chemical exposure</p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Harsh drain cleaners, bleach in high volume, and antibiotics flushed regularly damage the bacterial culture inside the tank. Bacteria are what break down solid waste. Without an active culture, solids accumulate faster than pumping schedules account for. Small amounts of diluted bleach from routine toilet cleaning are not a serious concern. Pouring a bottle of chemical drain cleaner into a slow drain absolutely is.
        </p>
        <p className="text-gray-700 mb-2 leading-relaxed font-semibold">What goes down the drain</p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Wipes, grease, coffee grounds, and non-degradable solids accumulate faster than any maintenance schedule anticipates. A household flushing wipes regularly may need pumping every 2 years instead of every 4. Over a decade, that adds up to significantly more strain on the drain field, not just extra pump-out costs.
        </p>
        <p className="text-gray-700 mb-2 leading-relaxed font-semibold">Root intrusion</p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Tree and shrub roots follow moisture. Drain field pipes, which stay wet, are a reliable target. Once roots penetrate a lateral line, they expand and eventually block flow entirely. Eucalyptus, willow, and large fruit trees are the most aggressive offenders in Central Valley yards. Keep large trees at least 30 feet from the drain field, and smaller shrubs at least 10 feet.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">When to Get an Inspection</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          If a system is 15 years old or more with no documented service history, an inspection is worth the $175 to $400 it costs. A technician will measure sludge and scum depth after pumping, check the inlet and outlet baffles, inspect the distribution box, and evaluate the drain field surface for signs of failure.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          That data tells you whether you are looking at a system with 10 years of solid life left or one approaching a major repair decision. Finding a biomat issue at year 18 rather than year 25 is the difference between a repair and a full replacement.
        </p>

        <div className="bg-[#0c4a6e]/5 rounded-xl p-6 mt-10 mb-6">
          <h3 className="font-bold text-[#0c4a6e] mb-3">Typical Lifespans by Component</h3>
          <ul className="space-y-2">
            {[
              "Concrete tank: 40 to 50+ years with regular maintenance",
              "Steel tank: 15 to 25 years, inspect if over 20",
              "Drain field: 20 to 30 years depending on use and soil",
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
          Regular pumping every 3 to 5 years costs $300 to $550 per visit. A drain field replacement costs $10,000 to $30,000. The math on maintenance is not complicated.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <Link href="/blog/how-often-pump-septic-tank" className="bg-[#16a34a] hover:bg-[#15803d] text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">Pumping Schedule Guide</Link>
          <Link href="/blog/warning-signs-septic-system-failing" className="border border-[#0c4a6e] text-[#0c4a6e] hover:bg-[#0c4a6e] hover:text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">Warning Signs Guide</Link>
        </div>
      </article>
    </>
  );
}
