import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Septic System Blog - Eagle Septic Guide",
  description: "Plain-language articles on septic system maintenance, troubleshooting, costs, and care. Written by licensed technicians for homeowners.",
};

const posts = [
  {
    title: "How Does a Septic System Work?",
    slug: "/blog/how-does-a-septic-system-work",
    excerpt: "A plain-language explanation of what happens to wastewater after it leaves your home, from tank to drain field.",
    category: "How It Works",
    image: "/images/lawn-drain-field.jpg",
  },
  {
    title: "Warning Signs of a Failing Septic System",
    slug: "/blog/warning-signs-septic-system-failing",
    excerpt: "Gurgling drains, soggy yard, foul odors. Learn the early warning signs that your system needs attention before it becomes a crisis.",
    category: "Troubleshooting",
    image: "/images/rain-septic-stress.jpg",
  },
  {
    title: "Septic Backup After Heavy Rain: Why It Happens and What to Do",
    slug: "/blog/septic-backup-after-heavy-rain",
    excerpt: "Heavy rain can saturate the soil around your drain field and overwhelm your system. Here is what to do in the first 30 minutes.",
    category: "Troubleshooting",
    image: "/images/rain-septic-stress.jpg",
  },
  {
    title: "How Often Should You Pump Your Septic Tank?",
    slug: "/blog/how-often-pump-septic-tank",
    excerpt: "The answer depends on household size and tank capacity. We break down the general guidelines and what factors affect your pumping schedule.",
    category: "Maintenance",
    image: "/images/lawn-drain-field.jpg",
  },
  {
    title: "Septic Tank Pumping Cost in the Central Valley",
    slug: "/blog/septic-tank-pumping-cost-central-valley",
    excerpt: "Residential septic pumping in Modesto and the surrounding area typically runs $300 to $550. Here is what affects the final price.",
    category: "Costs",
    image: "/images/lawn-drain-field.jpg",
  },
  {
    title: "Septic Emergency: What to Do First",
    slug: "/blog/septic-emergency-what-to-do",
    excerpt: "Sewage backup is a health hazard. Learn the first steps to take, what not to do, and when to call for immediate help.",
    category: "Emergency",
    image: "/images/hero-residential-home.jpg",
  },
  {
    title: "What Does a Septic Inspection Include?",
    slug: "/blog/what-does-a-septic-inspection-include",
    excerpt: "Buying or selling a home? A septic inspection is not just about passing escrow. Here is what a thorough inspection covers.",
    category: "Inspections",
    image: "/images/hero-residential-home.jpg",
  },
  {
    title: "What Not to Flush When You Have a Septic System",
    slug: "/blog/what-not-to-flush-septic-system",
    excerpt: "Flushable wipes, paper towels, and grease are the leading causes of premature septic failure. Here is exactly what to keep out of your drains.",
    category: "Maintenance",
    image: "/images/lawn-drain-field.jpg",
  },
  {
    title: "Septic System vs Sewer System: What Is the Difference?",
    slug: "/blog/septic-system-vs-sewer-system",
    excerpt: "Not sure which system you have? This guide explains the key differences, pros and cons, and what to expect from each.",
    category: "Basics",
    image: "/images/residential-neighborhood-sewer-septic.jpg",
  },
  {
    title: "How to Find Your Septic Tank",
    slug: "/blog/how-to-find-your-septic-tank",
    excerpt: "Most homeowners have no idea where their tank is buried. Here is how to locate it before your next service call, starting with county permit records.",
    category: "How It Works",
    image: "/images/lawn-drain-field.jpg",
  },
  {
    title: "How Long Does a Septic System Last?",
    slug: "/blog/how-long-does-a-septic-system-last",
    excerpt: "A concrete tank can last 40 years. The drain field feeding off it might fail in 20. Here is what determines lifespan and what cuts it short.",
    category: "How It Works",
    image: "/images/hero-residential-home.jpg",
  },
  {
    title: "Signs Your Drain Field Is Failing",
    slug: "/blog/signs-drain-field-failing",
    excerpt: "Wet spots, green grass stripes, outdoor sewage odor. Here is how to read the early warning signs before the repair window closes.",
    category: "Troubleshooting",
    image: "/images/lawn-drain-field.jpg",
  },
  {
    title: "Do Septic Additives Actually Work?",
    slug: "/blog/do-septic-additives-work",
    excerpt: "Biological enzymes, bacterial supplements, chemical treatments. Here is what the research says about septic additives and what actually protects your system.",
    category: "Maintenance",
    image: "/images/lawn-drain-field.jpg",
  },
  {
    title: "How Much Does Drain Field Repair Cost?",
    slug: "/blog/drain-field-repair-cost",
    excerpt: "Drain field repair in the Central Valley runs $3,000 to $15,000 for targeted fixes, or $10,000 to $30,000 for full replacement. Here is what separates those outcomes.",
    category: "Costs",
    image: "/images/lawn-drain-field.jpg",
  },
  {
    title: "How to Protect Your Drain Field",
    slug: "/blog/how-to-protect-your-drain-field",
    excerpt: "Most drain fields fail from years of management decisions, not a single event. The habits that protect a field cost nothing. Replacing it costs $10,000 to $30,000.",
    category: "Maintenance",
    image: "/images/lawn-drain-field.jpg",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-[#0c4a6e] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Septic System Blog</h1>
          <p className="text-blue-200 text-lg">Plain-language articles for Central Valley homeowners. No jargon, no sales pitch.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.title} href={post.slug} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="relative h-48">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <span className="inline-block bg-[#16a34a]/10 text-[#16a34a] text-xs font-semibold px-2 py-1 rounded mb-2">{post.category}</span>
                <h2 className="font-bold text-gray-900 mb-2 leading-tight">{post.title}</h2>
                <p className="text-sm text-gray-600">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
