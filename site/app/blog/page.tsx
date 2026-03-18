import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Septic System Blog - Eagle Septic Guide",
  description: "Plain-language articles on septic system maintenance, troubleshooting, costs, and care. Written by licensed technicians for homeowners.",
};

// Standardized category tag colors
const tagColors: Record<string, string> = {
  "Maintenance": "bg-green-50 text-green-700",
  "Troubleshooting": "bg-orange-50 text-orange-700",
  "Education": "bg-blue-50 text-blue-700",
  "Cost & Pricing": "bg-purple-50 text-purple-700",
  "Local Guide": "bg-teal-50 text-teal-700",
  "Repairs": "bg-red-50 text-red-700",
  "Inspections": "bg-gray-100 text-gray-700",
  "Home Buying": "bg-indigo-50 text-indigo-700",
  "Hiring Guide": "bg-teal-50 text-teal-700",
  "Regulations": "bg-orange-50 text-orange-700",
  "Commercial": "bg-gray-100 text-gray-600",
  // Legacy / unmapped categories get a neutral fallback
  "How It Works": "bg-blue-50 text-blue-700",
  "Basics": "bg-blue-50 text-blue-700",
  "Costs": "bg-purple-50 text-purple-700",
  "Emergency": "bg-red-50 text-red-700",
};

function tagClass(category: string): string {
  return tagColors[category] ?? "bg-gray-100 text-gray-700";
}

const featured = {
  title: "How Does a Septic System Work?",
  slug: "/blog/how-does-a-septic-system-work",
  excerpt:
    "About 1 in 5 U.S. homes runs on a septic system, but most homeowners could not explain how one actually works. This guide walks through every stage: what happens inside the tank, how the drain field filters effluent, why bacteria are essential, and what your role is in keeping the system healthy.",
  category: "Education",
  readTime: "10 min read",
  image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=630&q=80&fit=crop&crop=center",
  imageAlt: "Green grass lawn over a residential septic drain field on a sunny day",
};

const posts = [
  {
    title: "Warning Signs of a Failing Septic System",
    slug: "/blog/warning-signs-septic-system-failing",
    excerpt: "Gurgling drains, soggy yard, foul odors. Learn the early warning signs that your system needs attention before it becomes a crisis.",
    category: "Troubleshooting",
    image: "/images/rain-septic-stress.jpg",
    readTime: "6 min read",
  },
  {
    title: "Septic Backup After Heavy Rain: Why It Happens and What to Do",
    slug: "/blog/septic-backup-after-heavy-rain",
    excerpt: "Heavy rain can saturate the soil around your drain field and overwhelm your system. Here is what to do in the first 30 minutes.",
    category: "Troubleshooting",
    image: "/images/rain-septic-stress.jpg",
    readTime: "7 min read",
  },
  {
    title: "How Often Should You Pump Your Septic Tank?",
    slug: "/blog/how-often-pump-septic-tank",
    excerpt: "The answer depends on household size and tank capacity. We break down the general guidelines and what factors affect your pumping schedule.",
    category: "Maintenance",
    image: "/images/lawn-drain-field.jpg",
    readTime: "5 min read",
  },
  {
    title: "Septic Tank Pumping Cost in the Central Valley",
    slug: "/blog/septic-tank-pumping-cost-central-valley",
    excerpt: "Residential septic pumping in Modesto and the surrounding area typically runs $300 to $550. Here is what affects the final price.",
    category: "Cost & Pricing",
    image: "/images/lawn-drain-field.jpg",
    readTime: "5 min read",
  },
  {
    title: "Septic Emergency: What to Do First",
    slug: "/blog/septic-emergency-what-to-do",
    excerpt: "Sewage backup is a health hazard. Learn the first steps to take, what not to do, and when to call for immediate help.",
    category: "Emergency",
    image: "/images/hero-residential-home.jpg",
    readTime: "4 min read",
  },
  {
    title: "What Does a Septic Inspection Include?",
    slug: "/blog/what-does-a-septic-inspection-include",
    excerpt: "Buying or selling a home? A septic inspection is not just about passing escrow. Here is what a thorough inspection covers.",
    category: "Inspections",
    image: "/images/hero-residential-home.jpg",
    readTime: "6 min read",
  },
  {
    title: "What Not to Flush When You Have a Septic System",
    slug: "/blog/what-not-to-flush-septic-system",
    excerpt: "Flushable wipes, paper towels, and grease are the leading causes of premature septic failure. Here is exactly what to keep out of your drains.",
    category: "Maintenance",
    image: "/images/lawn-drain-field.jpg",
    readTime: "5 min read",
  },
  {
    title: "Septic System vs Sewer System: What Is the Difference?",
    slug: "/blog/septic-system-vs-sewer-system",
    excerpt: "Not sure which system you have? This guide explains the key differences, pros and cons, and what to expect from each.",
    category: "Education",
    image: "/images/residential-neighborhood-sewer-septic.jpg",
    readTime: "8 min read",
  },
  {
    title: "How to Find Your Septic Tank",
    slug: "/blog/how-to-find-your-septic-tank",
    excerpt: "Most homeowners have no idea where their tank is buried. Here is how to locate it before your next service call, starting with county permit records.",
    category: "Education",
    image: "/images/lawn-drain-field.jpg",
    readTime: "5 min read",
  },
  {
    title: "How Long Does a Septic System Last?",
    slug: "/blog/how-long-does-a-septic-system-last",
    excerpt: "A concrete tank can last 40 years. The drain field feeding off it might fail in 20. Here is what determines lifespan and what cuts it short.",
    category: "Education",
    image: "/images/hero-residential-home.jpg",
    readTime: "7 min read",
  },
  {
    title: "Signs Your Drain Field Is Failing",
    slug: "/blog/signs-drain-field-failing",
    excerpt: "Wet spots, green grass stripes, outdoor sewage odor. Here is how to read the early warning signs before the repair window closes.",
    category: "Troubleshooting",
    image: "/images/lawn-drain-field.jpg",
    readTime: "6 min read",
  },
  {
    title: "Do Septic Additives Actually Work?",
    slug: "/blog/do-septic-additives-work",
    excerpt: "Biological enzymes, bacterial supplements, chemical treatments. Here is what the research says about septic additives and what actually protects your system.",
    category: "Maintenance",
    image: "/images/lawn-drain-field.jpg",
    readTime: "5 min read",
  },
  {
    title: "How Much Does Drain Field Repair Cost?",
    slug: "/blog/drain-field-repair-cost",
    excerpt: "Drain field repair in the Central Valley runs $3,000 to $15,000 for targeted fixes, or $10,000 to $30,000 for full replacement.",
    category: "Cost & Pricing",
    image: "/images/lawn-drain-field.jpg",
    readTime: "6 min read",
  },
  {
    title: "How to Protect Your Drain Field",
    slug: "/blog/how-to-protect-your-drain-field",
    excerpt: "Most drain fields fail from years of management decisions, not a single event. The habits that protect a field cost nothing. Replacing it costs $10,000 to $30,000.",
    category: "Maintenance",
    image: "/images/lawn-drain-field.jpg",
    readTime: "6 min read",
  },
  {
    title: "How to Tell If Your Septic Tank Is Full",
    slug: "/blog/how-to-tell-if-septic-tank-is-full",
    excerpt: "Slow drains, gurgling sounds, and outdoor odors are the early signs your tank needs attention. Here is what each symptom means before it becomes a drain field problem.",
    category: "Troubleshooting",
    image: "/images/lawn-drain-field.jpg",
    readTime: "5 min read",
  },
  {
    title: "Buying a House with a Septic System",
    slug: "/blog/buying-house-with-septic-system",
    excerpt: "A standard home inspection does not cover the drain field. Here is what buyers need to know about inspections, permit records, and negotiating repairs before closing.",
    category: "Home Buying",
    image: "/images/residential-neighborhood-sewer-septic.jpg",
    readTime: "8 min read",
  },
];

const topics = [
  "Maintenance",
  "Troubleshooting",
  "Education",
  "Cost & Pricing",
  "Inspections",
  "Home Buying",
  "Emergency",
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

      {/* Featured Article */}
      <section className="max-w-6xl mx-auto px-4 pt-12 pb-8">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Featured Article</h2>
        <Link
          href={featured.slug}
          className="group flex flex-col md:flex-row overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="relative h-56 md:h-auto md:w-1/2 flex-shrink-0">
            <Image
              src={featured.image}
              alt={featured.imageAlt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="flex flex-col justify-center p-8 md:w-1/2">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${tagClass(featured.category)}`}>
                {featured.category}
              </span>
              <span className="text-xs text-gray-400">{featured.readTime}</span>
            </div>
            <h3 className="mb-3 text-2xl font-bold leading-snug text-gray-900 group-hover:text-[#0c4a6e]">
              {featured.title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-600 line-clamp-3">{featured.excerpt}</p>
            <span className="mt-5 inline-block text-sm font-semibold text-[#0c4a6e] group-hover:underline">
              Read guide →
            </span>
          </div>
        </Link>
      </section>

      {/* Browse by Topic */}
      <section className="max-w-6xl mx-auto px-4 pb-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 pr-2 border-r border-gray-300">Browse by Topic:</span>
          {topics.map((topic) => (
            <span
              key={topic}
              className={`inline-block rounded-full px-3 py-1 text-xs font-semibold cursor-default ${tagClass(topic)}`}
            >
              {topic}
            </span>
          ))}
        </div>
      </section>

      {/* Post Grid */}
      <section className="max-w-6xl mx-auto px-4 py-8 pb-16">
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.title}
              href={post.slug}
              className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="relative h-48 flex-shrink-0">
                <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${tagClass(post.category)}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">{post.readTime}</span>
                </div>
                <h2 className="font-bold text-gray-900 mb-2 leading-tight group-hover:text-[#0c4a6e] line-clamp-2">{post.title}</h2>
                <p className="flex-1 text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
                <span className="mt-3 text-xs font-semibold text-[#0c4a6e] group-hover:underline">Read guide →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
