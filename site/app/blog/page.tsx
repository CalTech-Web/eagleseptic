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
    title: "Septic System vs Sewer System: What Is the Difference?",
    slug: "/blog/septic-system-vs-sewer-system",
    excerpt: "Not sure which system you have? This guide explains the key differences, pros and cons, and what to expect from each.",
    category: "Basics",
    image: "/images/residential-neighborhood-sewer-septic.jpg",
  },
  {
    title: "Warning Signs of a Failing Septic System",
    slug: "/blog",
    excerpt: "Gurgling drains, soggy yard, foul odors. Learn the early warning signs that your system needs attention before it becomes a crisis.",
    category: "Troubleshooting",
    image: "/images/lawn-drain-field.jpg",
  },
  {
    title: "How Heavy Rain Affects Your Septic System",
    slug: "/blog",
    excerpt: "Heavy rain can saturate the soil around your drain field and overwhelm your system. Here is what to watch for during wet season.",
    category: "Seasonal Tips",
    image: "/images/rain-septic-stress.jpg",
  },
  {
    title: "How Often Should You Pump Your Septic Tank?",
    slug: "/faq",
    excerpt: "The answer depends on household size and tank capacity. We break down the general guidelines and what factors affect your pumping schedule.",
    category: "Maintenance",
    image: "/images/lawn-drain-field.jpg",
  },
  {
    title: "What Does a Septic Inspection Include?",
    slug: "/services/septic-inspections",
    excerpt: "Buying or selling a home? A septic inspection is not just about passing escrow. Here is what a thorough inspection covers.",
    category: "Inspections",
    image: "/images/hero-residential-home.jpg",
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
