import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Septic Maintenance Plans - Eagle Septic Guide",
  description: "Essential ($299/year) and Complete Care ($499/year) septic maintenance plans. Prevent expensive failures with scheduled annual service.",
};

const productsSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Essential Septic Maintenance Plan",
    description: "Annual septic tank pump-out (up to 1,500-gallon tank), 10% off additional services, and priority scheduling within 48 hours. No contract, renews annually.",
    brand: { "@type": "Brand", name: "Eagle Septic Guide" },
    offers: {
      "@type": "Offer",
      price: "299",
      priceCurrency: "USD",
      priceValidUntil: "2027-01-01",
      availability: "https://schema.org/InStock",
      url: "https://eaglesepticpumping.com/maintenance-plan",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Complete Care Septic Maintenance Plan",
    description: "Annual pump-out and full tank cleaning, effluent filter service, drain field assessment, same-day emergency guarantee, and 15% off repairs. No contract, renews annually.",
    brand: { "@type": "Brand", name: "Eagle Septic Guide" },
    offers: {
      "@type": "Offer",
      price: "499",
      priceCurrency: "USD",
      priceValidUntil: "2027-01-01",
      availability: "https://schema.org/InStock",
      url: "https://eaglesepticpumping.com/maintenance-plan",
    },
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://eaglesepticpumping.com" },
    { "@type": "ListItem", position: 2, name: "Maintenance Plans", item: "https://eaglesepticpumping.com/maintenance-plan" },
  ],
};

export default function MaintenancePlanPage() {
  return (
    <>
      {productsSchema.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="bg-[#0c4a6e] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Septic Maintenance Plans</h1>
          <p className="text-blue-200 text-lg">Scheduled service, priority response, and repair discounts. Starting at $299 per year.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">A $299 maintenance plan prevents the $15,000 to $50,000 drain field failure that comes from neglect. No contract required. Renews annually.</p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Essential Plan */}
          <div className="border border-gray-200 rounded-xl p-8">
            <div className="text-sm font-semibold text-[#16a34a] mb-2">Essential Plan</div>
            <div className="text-4xl font-bold text-gray-900 mb-1">$299<span className="text-lg font-normal text-gray-500">/year</span></div>
            <p className="text-gray-600 text-sm mb-6">Best for single-family homes with a regularly serviced system.</p>
            <ul className="space-y-3 mb-8">
              {[
                "Annual pump-out (up to 1,500-gallon tank)",
                "10% off additional services",
                "Priority scheduling within 48 hours",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                  <svg className="w-4 h-4 text-[#16a34a] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a href="tel:5558675309" className="block text-center bg-[#16a34a] hover:bg-[#15803d] text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">Enroll Now</a>
          </div>

          {/* Complete Care Plan */}
          <div className="border-2 border-[#0c4a6e] rounded-xl p-8 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0c4a6e] text-white text-xs font-semibold px-3 py-1 rounded-full">Most Popular</div>
            <div className="text-sm font-semibold text-[#16a34a] mb-2">Complete Care Plan</div>
            <div className="text-4xl font-bold text-gray-900 mb-1">$499<span className="text-lg font-normal text-gray-500">/year</span></div>
            <p className="text-gray-600 text-sm mb-6">Best for households with older systems or those who want comprehensive coverage.</p>
            <ul className="space-y-3 mb-8">
              {[
                "Pump-out and full tank cleaning",
                "Effluent filter service",
                "Drain field assessment",
                "Same-day emergency guarantee",
                "15% off repairs",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                  <svg className="w-4 h-4 text-[#16a34a] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a href="tel:5558675309" className="block text-center bg-[#0c4a6e] hover:bg-[#075985] text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">Enroll Now</a>
          </div>
        </div>

        <div className="mt-10 bg-gray-50 rounded-xl p-6 text-center">
          <h3 className="font-bold text-gray-900 mb-2">No Contract Required</h3>
          <p className="text-gray-600 text-sm">Plans renew annually. Cancel at any time before renewal. No long-term commitment.</p>
        </div>
      </section>
    </>
  );
}
