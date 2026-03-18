import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eagle Septic Guide - Free Septic System Information for Homeowners",
  description: "Free educational resource for homeowners across California's Central Valley. Plain-language septic system guides, maintenance tips, troubleshooting, and cost information.",
};

const stats = [
  { value: "18+", label: "Years Experience" },
  { value: "4,200+", label: "Tanks Serviced" },
  { value: "4.9★", label: "Google Rating" },
  { value: "200+", label: "Reviews" },
];

const services = [
  { name: "Septic Tank Pumping", href: "/services/septic-tank-pumping", desc: "Full tank evacuation with inspection and written service summary." },
  { name: "Tank Cleaning", href: "/services/tank-cleaning-maintenance", desc: "High-pressure interior wash and complete residue removal." },
  { name: "Septic Inspections", href: "/services/septic-inspections", desc: "Thorough evaluation with detailed written report." },
  { name: "Emergency Services", href: "/services/emergency-services", desc: "24/7 response. Real person answers. On-site within 2 to 4 hours." },
  { name: "Drain Field Repair", href: "/services/drain-field-repair", desc: "Diagnosis and repair before replacement is needed." },
  { name: "New System Installation", href: "/services/new-system-installation", desc: "Site evaluation, permits, installation, and homeowner walkthrough." },
];

const testimonials = [
  { name: "Michael R.", city: "Modesto, CA", quote: "Called at 8am and they were at my house by noon. Professional, explained everything, and the price was exactly what they quoted. No surprises.", service: "Septic Pumping" },
  { name: "Sandra K.", city: "Turlock, CA", quote: "Sewage backup on a Sunday morning, every homeowner's nightmare. Eagle Septic answered immediately and had someone out within two hours. Absolute lifesavers.", service: "Emergency Service" },
  { name: "Jennifer T.", city: "Patterson, CA", quote: "Two other companies told me I needed full drain field replacement. Eagle Septic diagnosed the actual problem and repaired it for a fraction of the price. Honest and knowledgeable.", service: "Drain Field Repair" },
];

const faqs = [
  { q: "How often should I pump my septic tank?", a: "Most households need pumping every 3 to 5 years. A family of four with a 1,000-gallon tank typically pumps every 3 to 4 years. Waiting too long lets solids overflow into the drain field, turning a $400 pump job into a $15,000 or more repair." },
  { q: "What are the warning signs of a failing septic system?", a: "Key warning signs include slow or gurgling drains, sewage odors inside or outside, unusually lush grass over the drain field, and wet or spongy ground near the tank. Any of these signals you need service soon." },
  { q: "How much does septic pumping cost in the Central Valley?", a: "Residential septic pumping in the Modesto and Central Valley area typically runs $300 to $550 for a standard residential tank, depending on tank size and access." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0c4a6e] text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-residential-home.jpg"
            alt="Residential home with healthy lawn"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c4a6e]/85 via-[#075985]/75 to-[#0369a1]/65" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-32">
          <div className="max-w-2xl">
            <span className="inline-block bg-[#16a34a] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">Free Educational Resource</span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Honest Septic System Information for Homeowners
            </h1>
            <p className="text-lg text-blue-100 mb-8">
              Plain-language guides on septic maintenance, troubleshooting, costs, and emergency response. Written by licensed technicians with 18+ years of experience. No jargon, no sales pitch.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/resources" className="bg-[#16a34a] hover:bg-[#15803d] text-white px-6 py-3 rounded-lg font-semibold transition-colors">Browse All Guides</Link>
              <Link href="/blog" className="border border-white text-white hover:bg-white hover:text-[#0c4a6e] px-6 py-3 rounded-lg font-semibold transition-colors">Read the Blog</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#075985] text-white">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold text-[#16a34a]">{s.value}</div>
                <div className="text-sm text-blue-200 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Value Prop */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#0c4a6e] mb-4">Why Eagle Septic Guide?</h2>
            <p className="text-gray-600 mb-4">Most online septic information is buried in service company websites designed to sell. Eagle Septic Guide is different. We built this resource to give homeowners real answers without pressure or upselling.</p>
            <p className="text-gray-600 mb-6">Every guide is written in plain language, reviewed for accuracy, and designed to help you make informed decisions about your septic system.</p>
            <ul className="space-y-3">
              {[
                "Free, honest information with no sales pitch",
                "Written by licensed C-42 certified technicians",
                "Covers maintenance, costs, emergencies, and more",
                "Serving Central Valley homeowners since 2024",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[#16a34a] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <Image
              src="/images/lawn-drain-field.jpg"
              alt="Healthy green lawn over septic drain field"
              width={600}
              height={400}
              className="w-full h-72 object-cover rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0c4a6e] mb-3">Services Explained</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Understand what each septic service involves before you call a contractor.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((svc) => (
              <Link key={svc.name} href={svc.href} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-10 h-10 bg-[#0c4a6e]/10 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-[#0c4a6e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{svc.name}</h3>
                <p className="text-sm text-gray-600">{svc.desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services" className="inline-block bg-[#0c4a6e] hover:bg-[#075985] text-white px-6 py-3 rounded-lg font-medium transition-colors">View All Services</Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0c4a6e] mb-3">How a Septic Service Works</h2>
          <p className="text-gray-600 max-w-xl mx-auto">From your first call to completion, here is what to expect.</p>
        </div>
        <div className="grid md:grid-cols-5 gap-4">
          {[
            { step: "1", title: "Call or Schedule", desc: "Confirm tank size, location, access needs. Receive upfront price." },
            { step: "2", title: "Arrive and Locate", desc: "Technician arrives with vacuum truck and locates buried lid if needed." },
            { step: "3", title: "Pump and Inspect", desc: "Full tank evacuation. Baffles, walls, and effluent level inspected." },
            { step: "4", title: "Dispose and Document", desc: "Waste transported to licensed facility. Written summary provided." },
            { step: "5", title: "Maintenance Plan", desc: "Optional enrollment in Essential or Complete Care plan." },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-10 h-10 bg-[#16a34a] text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">{item.step}</div>
              <h3 className="font-semibold text-gray-900 mb-1 text-sm">{item.title}</h3>
              <p className="text-xs text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#0c4a6e] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">What Homeowners Say</h2>
            <p className="text-blue-200">4.9 stars across 200+ Google Reviews</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-[#075985] rounded-xl p-6">
                <div className="flex gap-0.5 mb-3">
                  {[1,2,3,4,5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-[#16a34a]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-blue-100 text-sm mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-blue-300">{t.city} &bull; {t.service}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#0c4a6e] mb-3">Common Septic Questions</h2>
          <p className="text-gray-600">Straight answers to the questions homeowners ask most.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-600 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/faq" className="inline-block bg-[#16a34a] hover:bg-[#15803d] text-white px-6 py-3 rounded-lg font-medium transition-colors">View All FAQs</Link>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="bg-red-50 border-t border-b border-red-100 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-red-800 mb-3">Septic Emergency?</h2>
          <p className="text-red-700 mb-6">Stop all water use immediately. Keep people and pets away from wet outdoor areas. Then read our emergency guide or call for help.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/emergency" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">Read Emergency Guide</Link>
            <a href="tel:5558675309" className="border border-red-600 text-red-700 hover:bg-red-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors">(555) 867-5309</a>
          </div>
        </div>
      </section>
    </>
  );
}
