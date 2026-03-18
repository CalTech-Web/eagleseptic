import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Septic Emergency: What to Do First - Eagle Septic Guide",
  description: "Sewage backup is a health emergency. Learn the first steps to take, what not to do, and when to call a professional for immediate help.",
  openGraph: {
    title: "Septic Emergency: What to Do First",
    description: "Sewage backup is a health emergency. Learn the first steps to take, what not to do, and when to call a professional for immediate help.",
    url: "https://eaglesepticpumping.com/blog/septic-emergency-what-to-do",
    type: "article",
    siteName: "Eagle Septic Guide",
  },
};

export default function SepticEmergencyPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Septic Emergency: What to Do First",
    description: "Sewage backup is a health emergency. Learn the first steps to take, what not to do, and when to call a professional for immediate help.",
    url: "https://eaglesepticpumping.com/blog/septic-emergency-what-to-do",
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
          { "@type": "ListItem", position: 3, name: "Septic Emergency: What to Do First" },
        ],
      }) }} />
      <section className="bg-red-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">Emergency</span>
          <h1 className="text-4xl font-bold mb-4">Septic Emergency: What to Do First</h1>
          <p className="text-red-200 text-lg">If sewage is backing up or surfacing, take these steps immediately.</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-8">
          <p className="font-bold text-red-800 text-lg mb-1">Immediate Action Required</p>
          <p className="text-red-700 text-sm">Stop all water use in your home right now. Do not flush, shower, run the dishwasher, or do laundry. Every gallon adds pressure to an already-overloaded system.</p>
        </div>

        <div className="relative h-64 mb-8 rounded-xl overflow-hidden">
          <Image src="/images/hero-residential-home.jpg" alt="Residential home with septic system" fill className="object-cover" />
        </div>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          A septic emergency is a health hazard. Raw sewage contains bacteria, viruses, and other pathogens. Knowing what to do in the first few minutes can limit damage to your home, your yard, and your health.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-4 mt-8">Step-by-Step: First 30 Minutes</h2>
        <ol className="space-y-4 mb-8">
          {[
            { step: "1", title: "Stop all water use", desc: "Every flush, shower, and sink drain adds more water to a system that is already overwhelmed. Stop using all water immediately." },
            { step: "2", title: "Keep everyone out of affected areas", desc: "Sewage contains dangerous pathogens. Keep children and pets away from wet or contaminated areas inside and outside." },
            { step: "3", title: "Ventilate if sewage odors are indoors", desc: "Open windows and doors to reduce gas buildup. Methane and hydrogen sulfide can accumulate in enclosed spaces." },
            { step: "4", title: "Do not use chemical drain cleaners", desc: "Harsh chemicals kill the beneficial bacteria in your septic tank that break down solids. They will make things worse." },
            { step: "5", title: "Call a septic professional", desc: "Most septic emergencies can be resolved with an emergency pump-out. Call a technician immediately, day or night." },
          ].map(({ step, title, desc }) => (
            <li key={step} className="flex gap-4">
              <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">{step}</div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">{title}</p>
                <p className="text-gray-700 text-sm">{desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Common Causes of Septic Emergencies</h2>
        <ul className="space-y-2 mb-6">
          {[
            "Tank is full and has not been pumped in many years",
            "Tree roots have intruded into the pipes or tank",
            "Drain field has failed due to compaction or saturation",
            "Heavy rain has overwhelmed the system",
            "Broken baffle or pipe causing direct flow into the drain field",
            "Non-flushable items clogging the outlet pipe",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
              <svg className="w-4 h-4 text-red-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">What Happens When the Technician Arrives</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          The technician will assess the severity of the backup, locate and access the tank, and perform an emergency pump-out to relieve system pressure. They will also identify the likely cause and provide a clear estimate for any additional repairs before any work begins.
        </p>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mt-8 mb-8">
          <p className="font-bold text-red-800 mb-2">24/7 Emergency Response</p>
          <p className="text-red-700 text-sm mb-4">Eagle Septic responds to emergencies day and night, including weekends and holidays. A real person answers the phone. Typical on-site arrival within 2 to 4 hours.</p>
          <a href="tel:5558675309" className="inline-block bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg font-semibold transition-colors text-sm">(555) 867-5309</a>
        </div>

        <div className="flex flex-wrap gap-4 mt-4">
          <Link href="/emergency" className="bg-[#0c4a6e] hover:bg-[#075985] text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">Full Emergency Guide</Link>
          <Link href="/blog/warning-signs-septic-system-failing" className="border border-[#0c4a6e] text-[#0c4a6e] hover:bg-[#0c4a6e] hover:text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">Warning Signs Guide</Link>
        </div>
      </article>
    </>
  );
}
