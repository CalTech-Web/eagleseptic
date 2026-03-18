import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Septic Service Areas - Central Valley California - Eagle Septic Guide",
  description: "Septic service areas in California's Central Valley. Modesto, Turlock, Ceres, Riverbank, Oakdale, Merced, Stockton, Tracy, and 12 more cities.",
};

const areas = [
  { name: "Modesto", county: "Stanislaus", href: "/service-areas/modesto" },
  { name: "Turlock", county: "Stanislaus", href: "/service-areas/turlock" },
  { name: "Ceres", county: "Stanislaus", href: "/service-areas/ceres" },
  { name: "Riverbank", county: "Stanislaus", href: "/service-areas/riverbank" },
  { name: "Oakdale", county: "Stanislaus", href: "/service-areas/oakdale" },
  { name: "Patterson", county: "Stanislaus", href: "/service-areas/patterson" },
  { name: "Waterford", county: "Stanislaus", href: "/service-areas/waterford" },
  { name: "Hughson", county: "Stanislaus", href: "/service-areas/hughson" },
  { name: "Newman", county: "Stanislaus", href: "/service-areas/newman" },
  { name: "Denair", county: "Stanislaus", href: "/service-areas/denair" },
  { name: "Escalon", county: "San Joaquin", href: "/service-areas/escalon" },
  { name: "Stockton", county: "San Joaquin", href: "/service-areas/stockton" },
  { name: "Tracy", county: "San Joaquin", href: "/service-areas/tracy" },
  { name: "Manteca", county: "San Joaquin", href: "/service-areas/manteca" },
  { name: "Ripon", county: "San Joaquin", href: "/service-areas/ripon" },
  { name: "Atwater", county: "Merced", href: "/service-areas/atwater" },
  { name: "Merced", county: "Merced", href: "/service-areas/merced" },
  { name: "Los Banos", county: "Merced", href: "/service-areas/los-banos" },
  { name: "Livingston", county: "Merced", href: "/service-areas/livingston" },
  { name: "Gustine", county: "Merced", href: "/service-areas/gustine" },
];

const counties = ["Stanislaus", "San Joaquin", "Merced"];

export default function ServiceAreasPage() {
  return (
    <>
      <section className="bg-[#0c4a6e] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Septic Service Areas</h1>
          <p className="text-blue-200 text-lg">Serving 20 communities across three counties in California&apos;s Central Valley.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16">
        {counties.map((county) => (
          <div key={county} className="mb-10">
            <h2 className="text-xl font-bold text-[#0c4a6e] mb-4 pb-2 border-b border-gray-200">{county} County</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {areas.filter((a) => a.county === county).map((area) => (
                <Link key={area.name} href={area.href} className="bg-white border border-gray-100 rounded-xl p-4 text-center hover:shadow-md transition-shadow hover:border-[#16a34a]">
                  <div className="font-semibold text-gray-900">{area.name}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{area.county} County</div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
