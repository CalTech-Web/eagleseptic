import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Septic Backup After Heavy Rain: Why It Happens & What to Do - Eagle Septic Guide",
  description: "Heavy rain can saturate your drain field and overwhelm your septic system. Learn why it happens and what to do in the first 30 minutes to protect your home.",
  openGraph: {
    title: "Septic Backup After Heavy Rain: Why It Happens & What to Do",
    description: "Heavy rain can saturate your drain field and overwhelm your septic system. Learn why it happens and what to do in the first 30 minutes to protect your home.",
    url: "https://eaglesepticpumping.com/blog/septic-backup-after-heavy-rain",
    type: "article",
    siteName: "Eagle Septic Guide",
  },
};

export default function SepticBackupRainPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Septic Backup After Heavy Rain: Why It Happens & What to Do",
    description: "Heavy rain can saturate your drain field and overwhelm your septic system. Learn why it happens and what to do in the first 30 minutes to protect your home.",
    url: "https://eaglesepticpumping.com/blog/septic-backup-after-heavy-rain",
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
          { "@type": "ListItem", position: 3, name: "Septic Backup After Heavy Rain: Why It Happens & What to Do" },
        ],
      }) }} />
      <section className="bg-[#0c4a6e] text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block bg-[#16a34a] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">Troubleshooting</span>
          <h1 className="text-4xl font-bold mb-4">Septic Backup After Heavy Rain: Why It Happens and What to Do</h1>
          <p className="text-blue-200 text-lg">Rain and septic systems have a complicated relationship. Here is what to do in the first 30 minutes.</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="relative h-64 mb-8 rounded-xl overflow-hidden">
          <Image src="/images/rain-septic-stress.jpg" alt="Heavy rain falling on a residential yard near a septic system" fill className="object-cover" />
        </div>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          If your drains slow down, your yard gets soggy, or sewage odors appear after a heavy rainstorm, your septic system is under stress. This is more common than most homeowners realize, and it is not always a sign of a failing system. But you need to act quickly.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">Why Rain Affects Your Septic System</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Your drain field works by allowing treated effluent to slowly absorb into the soil. When heavy rain saturates the ground, the soil cannot accept any more water. Effluent from the tank has nowhere to go, so it backs up. In severe cases, it can surface in your yard or flow backward into the house.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          The same problem can happen when surface water flows toward your septic tank and fills it with groundwater. This dilutes the bacteria in the tank and reduces its ability to break down solids, which can accelerate sludge buildup.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">What to Do in the First 30 Minutes</h2>
        <ul className="space-y-3 mb-6">
          {[
            "Stop all water use immediately. Do not flush, shower, run the dishwasher, or do laundry. Every additional gallon you add to the system makes the situation worse.",
            "Keep people and pets away from wet areas in the yard. Sewage contains pathogens that are hazardous to health.",
            "Do not pump the tank during a storm. A flooded tank can collapse or float out of the ground if pumped while the soil is saturated.",
            "Note which drains are slow or backing up. This information helps the technician diagnose the problem faster.",
            "Call a septic professional for assessment if the problem persists after the rain stops.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-gray-700">
              <svg className="w-4 h-4 text-[#16a34a] mt-1 shrink-0 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">When It Passes: What to Watch For</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          After the rain stops and the ground dries out, most rain-related septic problems resolve on their own within a day or two. If your system still shows signs of backup, odors, or wet areas after three to five dry days, the issue is likely more serious and warrants a professional inspection.
        </p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">How to Protect Your System Before the Next Storm</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Keep your tank pumped on schedule. A full tank has less reserve capacity and is far more vulnerable during heavy rain. Make sure downspouts, sump pumps, and drainage ditches direct water away from the drain field. Avoid parking or driving over the drain field, which compacts the soil and reduces absorption.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <Link href="/emergency" className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">Emergency Guide</Link>
          <Link href="/blog/how-often-pump-septic-tank" className="border border-[#0c4a6e] text-[#0c4a6e] hover:bg-[#0c4a6e] hover:text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">Pumping Schedule Guide</Link>
        </div>
      </article>
    </>
  );
}
