import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const cityData: Record<string, { name: string; county: string; description: string; nearbyCities: string[] }> = {
  modesto: {
    name: "Modesto",
    county: "Stanislaus",
    description: "Modesto is the county seat of Stanislaus County and one of the largest cities in the Central Valley. Many surrounding rural and semi-rural properties rely on private septic systems.",
    nearbyCities: ["Turlock", "Ceres", "Riverbank", "Oakdale", "Patterson", "Waterford", "Hughson"],
  },
  turlock: {
    name: "Turlock",
    county: "Stanislaus",
    description: "Turlock is a growing community in Stanislaus County with significant agricultural land and suburban development. Many residential properties on the outskirts use private septic systems.",
    nearbyCities: ["Modesto", "Ceres", "Denair", "Waterford", "Merced"],
  },
  ceres: {
    name: "Ceres",
    county: "Stanislaus",
    description: "Ceres is a residential city adjacent to Modesto in Stanislaus County. Properties outside city sewer boundaries depend on private septic systems for wastewater management.",
    nearbyCities: ["Modesto", "Turlock", "Riverbank", "Hughson"],
  },
  riverbank: {
    name: "Riverbank",
    county: "Stanislaus",
    description: "Riverbank is a small city along the Stanislaus River with many rural and agricultural properties that use private septic systems.",
    nearbyCities: ["Modesto", "Oakdale", "Escalon", "Ceres"],
  },
  oakdale: {
    name: "Oakdale",
    county: "Stanislaus",
    description: "Oakdale, known as the Cowboy Capital of the World, has extensive rural and ranch properties throughout the area that rely on private septic systems.",
    nearbyCities: ["Riverbank", "Modesto", "Escalon", "Waterford"],
  },
  patterson: {
    name: "Patterson",
    county: "Stanislaus",
    description: "Patterson is a growing community in western Stanislaus County with a mix of residential and agricultural properties. Many outlying homes use private septic systems.",
    nearbyCities: ["Newman", "Modesto", "Tracy", "Gustine"],
  },
  waterford: {
    name: "Waterford",
    county: "Stanislaus",
    description: "Waterford is a small community along the Tuolumne River in Stanislaus County. Rural properties throughout the area depend on septic systems.",
    nearbyCities: ["Modesto", "Turlock", "Oakdale", "Ceres"],
  },
  hughson: {
    name: "Hughson",
    county: "Stanislaus",
    description: "Hughson is a small agricultural community in Stanislaus County. Many properties in and around Hughson use private septic systems.",
    nearbyCities: ["Modesto", "Turlock", "Riverbank", "Denair"],
  },
  newman: {
    name: "Newman",
    county: "Stanislaus",
    description: "Newman is a small city in western Stanislaus County. Surrounding agricultural and rural residential properties commonly use private septic systems.",
    nearbyCities: ["Patterson", "Gustine", "Los Banos", "Modesto"],
  },
  denair: {
    name: "Denair",
    county: "Stanislaus",
    description: "Denair is an unincorporated community in Stanislaus County. Properties in this rural area typically rely on private septic systems.",
    nearbyCities: ["Turlock", "Modesto", "Hughson", "Ceres"],
  },
  escalon: {
    name: "Escalon",
    county: "San Joaquin",
    description: "Escalon is a small city in San Joaquin County. Rural and semi-rural properties throughout the area use private septic systems.",
    nearbyCities: ["Ripon", "Manteca", "Oakdale", "Riverbank"],
  },
  stockton: {
    name: "Stockton",
    county: "San Joaquin",
    description: "Stockton is the largest city in San Joaquin County. While much of the city is on municipal sewer, many outlying properties depend on private septic systems.",
    nearbyCities: ["Manteca", "Tracy", "Ripon", "Escalon"],
  },
  tracy: {
    name: "Tracy",
    county: "San Joaquin",
    description: "Tracy is a fast-growing city in San Joaquin County. Properties on the outskirts and in rural areas use private septic systems.",
    nearbyCities: ["Stockton", "Manteca", "Patterson", "Ripon"],
  },
  manteca: {
    name: "Manteca",
    county: "San Joaquin",
    description: "Manteca is a growing San Joaquin County community with residential expansion into areas served by private septic systems.",
    nearbyCities: ["Stockton", "Ripon", "Tracy", "Escalon"],
  },
  ripon: {
    name: "Ripon",
    county: "San Joaquin",
    description: "Ripon is a small city in San Joaquin County known for its almond orchards. Many surrounding rural and agricultural properties use septic systems.",
    nearbyCities: ["Manteca", "Escalon", "Stockton", "Modesto"],
  },
  atwater: {
    name: "Atwater",
    county: "Merced",
    description: "Atwater is a city in Merced County. Properties outside city limits and in surrounding rural areas typically use private septic systems.",
    nearbyCities: ["Merced", "Livingston", "Turlock", "Gustine"],
  },
  merced: {
    name: "Merced",
    county: "Merced",
    description: "Merced is the county seat of Merced County and home to UC Merced. Rural and outlying residential properties in the area depend on private septic systems.",
    nearbyCities: ["Atwater", "Los Banos", "Livingston", "Gustine"],
  },
  "los-banos": {
    name: "Los Banos",
    county: "Merced",
    description: "Los Banos is a city in western Merced County. The surrounding agricultural area includes many properties served by private septic systems.",
    nearbyCities: ["Gustine", "Merced", "Newman", "Patterson"],
  },
  livingston: {
    name: "Livingston",
    county: "Merced",
    description: "Livingston is a small city in Merced County. Properties outside the city core in this agricultural area commonly use septic systems.",
    nearbyCities: ["Atwater", "Merced", "Turlock", "Denair"],
  },
  gustine: {
    name: "Gustine",
    county: "Merced",
    description: "Gustine is a small city in western Merced County. Rural properties throughout the area rely on private septic systems for wastewater treatment.",
    nearbyCities: ["Los Banos", "Newman", "Patterson", "Merced"],
  },
};

export async function generateStaticParams() {
  return Object.keys(cityData).map((city) => ({ city }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const data = cityData[city];
  if (!data) return { title: "Service Area - Eagle Septic Guide" };
  return {
    title: `Septic Service in ${data.name}, CA - Eagle Septic Guide`,
    description: `Septic pumping, inspections, and repair in ${data.name}, ${data.county} County, California. Upfront pricing, licensed technicians, 24/7 emergency service.`,
  };
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const data = cityData[city];
  if (!data) notFound();

  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: `Eagle Septic Guide — ${data.name}, CA`,
        url: `https://eaglesepticpumping.com/service-areas/${city}`,
        areaServed: {
          "@type": "City",
          name: data.name,
          containedInPlace: { "@type": "State", name: "California" },
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "200",
          bestRating: "5",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://eaglesepticpumping.com" },
          { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://eaglesepticpumping.com/service-areas" },
          { "@type": "ListItem", position: 3, name: `${data.name}, CA` },
        ],
      },
    ],
  };

  // Hero stats with consistent numeric pattern
  const heroStats = [
    { value: "18+", label: "Years Experience" },
    { value: "4,200+", label: "Tanks Serviced" },
    { value: "4.9★", label: "Google Rating" },
    { value: "100%", label: "Licensed & Insured" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <section className="bg-[#0c4a6e] text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/service-areas" className="text-blue-300 text-sm hover:text-white mb-4 inline-block">← All Service Areas</Link>
          <h1 className="text-4xl font-bold mb-4">Septic Service in {data.name}, CA</h1>
          <p className="text-blue-200 text-lg">{data.county} County, California</p>

          {/* Hero stat boxes */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {heroStats.map((s) => (
              <div key={s.label} className="rounded-lg bg-white/10 px-4 py-3 text-center">
                <div className="text-xl font-bold text-green-400">{s.value}</div>
                <div className="text-xs text-blue-200 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12">
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">{data.description}</p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-4">Septic Services Available in {data.name}</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            { name: "Septic Tank Pumping", href: "/services/septic-tank-pumping", cost: "$300 to $550" },
            { name: "Tank Cleaning", href: "/services/tank-cleaning-maintenance", cost: "$400 to $750" },
            { name: "Septic Inspections", href: "/services/septic-inspections", cost: "$175 to $400" },
            { name: "Emergency Services", href: "/services/emergency-services", cost: "24/7 Available" },
            { name: "Drain Field Repair", href: "/services/drain-field-repair", cost: "$3,000 to $15,000" },
            { name: "Real Estate Inspections", href: "/real-estate-inspections", cost: "Report in 24 hours" },
          ].map((svc) => (
            <Link key={svc.name} href={svc.href} className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow">
              <div className="font-semibold text-gray-900 text-sm">{svc.name}</div>
              <div className="text-xs text-[#16a34a] mt-1 font-medium">{svc.cost}</div>
            </Link>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-4">Why Homeowners in {data.name} Choose Eagle Septic</h2>
        <ul className="space-y-3 mb-8">
          {[
            "Upfront pricing with no surprise charges",
            "18+ years of experience, 4,200+ tanks serviced",
            "Licensed C-42 technicians, background-checked",
            "24/7 emergency service, real person answers",
            "4.9 stars across 200+ Google Reviews",
            "Familiar with " + data.county + " County regulations",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-gray-700">
              <svg className="w-5 h-5 text-[#16a34a] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>

        {/* Also Serving Nearby Communities - pill badge style */}
        {data.nearbyCities.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-[#0c4a6e] mb-3">Also Serving Nearby Communities</h2>
            <div className="flex flex-wrap gap-2">
              {data.nearbyCities.map((nearCity) => {
                const slug = nearCity.toLowerCase().replace(/\s+/g, "-");
                return (
                  <Link
                    key={nearCity}
                    href={`/service-areas/${slug}`}
                    className="rounded-full bg-[#0c4a6e]/5 border border-[#0c4a6e]/20 px-3 py-1.5 text-sm font-medium text-[#0c4a6e] hover:bg-[#0c4a6e] hover:text-white hover:border-[#0c4a6e] transition-colors"
                  >
                    {nearCity}
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        <div className="bg-[#0c4a6e] text-white rounded-xl p-6 text-center">
          <h3 className="font-bold text-xl mb-2">Schedule Service in {data.name}</h3>
          <p className="text-blue-200 mb-5">Free upfront quote. No service call fee for routine work.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="tel:5558675309" className="inline-block bg-[#16a34a] hover:bg-[#15803d] text-white px-6 py-3 rounded-lg font-bold transition-colors">(555) 867-5309</a>
            <Link href="/services" className="inline-block border border-white text-white hover:bg-white hover:text-[#0c4a6e] px-6 py-3 rounded-lg font-semibold transition-colors">View All Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
