import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Septic Service Areas - Central Valley California - Eagle Septic Guide",
  description: "Septic service areas in California's Central Valley. Modesto, Turlock, Ceres, Riverbank, Oakdale, Merced, Stockton, Tracy, and 12 more cities.",
};

const areas = [
  { name: "Modesto", county: "Stanislaus", href: "/service-areas/modesto", desc: "County seat, largest city" },
  { name: "Turlock", county: "Stanislaus", href: "/service-areas/turlock", desc: "Growing community" },
  { name: "Ceres", county: "Stanislaus", href: "/service-areas/ceres", desc: "Adjacent to Modesto" },
  { name: "Riverbank", county: "Stanislaus", href: "/service-areas/riverbank", desc: "Along Stanislaus River" },
  { name: "Oakdale", county: "Stanislaus", href: "/service-areas/oakdale", desc: "Cowboy Capital" },
  { name: "Patterson", county: "Stanislaus", href: "/service-areas/patterson", desc: "Western Stanislaus" },
  { name: "Waterford", county: "Stanislaus", href: "/service-areas/waterford", desc: "Along Tuolumne River" },
  { name: "Hughson", county: "Stanislaus", href: "/service-areas/hughson", desc: "Agricultural community" },
  { name: "Newman", county: "Stanislaus", href: "/service-areas/newman", desc: "Western Stanislaus" },
  { name: "Denair", county: "Stanislaus", href: "/service-areas/denair", desc: "Rural community" },
  { name: "Escalon", county: "San Joaquin", href: "/service-areas/escalon", desc: "Small city, SJ County" },
  { name: "Stockton", county: "San Joaquin", href: "/service-areas/stockton", desc: "Largest in SJ County" },
  { name: "Tracy", county: "San Joaquin", href: "/service-areas/tracy", desc: "Fast-growing city" },
  { name: "Manteca", county: "San Joaquin", href: "/service-areas/manteca", desc: "Expanding residential" },
  { name: "Ripon", county: "San Joaquin", href: "/service-areas/ripon", desc: "Almond country" },
  { name: "Atwater", county: "Merced", href: "/service-areas/atwater", desc: "Merced County city" },
  { name: "Merced", county: "Merced", href: "/service-areas/merced", desc: "County seat, UC Merced" },
  { name: "Los Banos", county: "Merced", href: "/service-areas/los-banos", desc: "Western Merced" },
  { name: "Livingston", county: "Merced", href: "/service-areas/livingston", desc: "Agricultural city" },
  { name: "Gustine", county: "Merced", href: "/service-areas/gustine", desc: "Small western city" },
];

const counties = ["Stanislaus", "San Joaquin", "Merced"];

const trustStats = [
  { value: "20", label: "Cities Served" },
  { value: "3", label: "Counties" },
  { value: "18+", label: "Years Experience" },
  { value: "24/7", label: "Emergency Service" },
];

export default function ServiceAreasPage() {
  return (
    <>
      <section className="bg-[#0c4a6e] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Septic Service Areas</h1>
          <p className="text-blue-200 text-lg">Serving 20 communities across three counties in California&apos;s Central Valley.</p>
        </div>
      </section>

      {/* Trust stat bar */}
      <section className="bg-[#075985] text-white">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {trustStats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-green-400">{s.value}</div>
                <div className="text-xs text-blue-200 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        {counties.map((county) => (
          <div key={county} className="mb-10">
            <h2 className="text-xl font-bold text-[#0c4a6e] mb-4 pb-2 border-b border-gray-200">{county} County</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {areas.filter((a) => a.county === county).map((area) => (
                <Link key={area.name} href={area.href} className="bg-white border border-gray-100 rounded-xl p-4 text-center hover:shadow-md transition-shadow hover:border-[#16a34a]">
                  <div className="font-semibold text-gray-900">{area.name}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{area.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* Don't See Your City - with more visual weight */}
        <div className="mt-8 rounded-2xl bg-[#0c4a6e]/5 border border-[#0c4a6e]/20 p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0c4a6e]/10 text-[#0c4a6e]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-bold text-[#0c4a6e] mb-2">Don&apos;t See Your City?</h3>
          <p className="text-gray-600 mb-4 max-w-md mx-auto">We serve many communities throughout the Central Valley. Call us to confirm coverage in your area. If we cannot help, we will point you to someone who can.</p>
          <a href="tel:5558675309" className="inline-block bg-[#16a34a] hover:bg-[#15803d] text-white px-6 py-3 rounded-lg font-semibold transition-colors">(555) 867-5309</a>
        </div>
      </section>
    </>
  );
}
