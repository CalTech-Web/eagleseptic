import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Septic Emergency Guide - Eagle Septic Guide",
  description: "What to do during a septic emergency. Step-by-step guide for sewage backups, system failures, and drain field flooding. Available 24/7.",
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "What to Do During a Septic Emergency",
  description: "Step-by-step guide for handling a septic system emergency including sewage backup and drain field failure.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Stop all water use immediately",
      text: "Every toilet flush, shower, or sink use adds more water to an already overloaded system.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Keep people and pets away from wet outdoor areas",
      text: "Sewage is a serious health hazard. Do not let anyone walk in soggy areas near the tank or drain field.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Open windows if safe",
      text: "Sewage gases inside the home can be toxic. Ventilate without creating additional plumbing activity.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Call a septic professional immediately",
      text: "Most emergencies are resolved with an emergency pump-out. Do not wait to call.",
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://eaglesepticpumping.com" },
    { "@type": "ListItem", position: 2, name: "Emergency Guide", item: "https://eaglesepticpumping.com/emergency" },
  ],
};

const steps = [
  {
    step: "1",
    action: "Stop all water use immediately",
    detail: "Every toilet flush, shower, or sink use adds more water to an already overloaded system.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
  },
  {
    step: "2",
    action: "Keep people and pets away from wet outdoor areas",
    detail: "Sewage is a serious health hazard. Do not let anyone walk in soggy areas near the tank or drain field.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    step: "3",
    action: "Open windows if safe",
    detail: "Sewage gases inside the home can be toxic. Ventilate without creating additional plumbing activity.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64" />
      </svg>
    ),
  },
  {
    step: "4",
    action: "Call a septic professional immediately",
    detail: "Most emergencies are resolved with an emergency pump-out. Do not wait to call.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
];

export default function EmergencyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="bg-red-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Septic Emergency Guide</h1>
          <p className="text-red-100 text-lg max-w-2xl mx-auto">Step-by-step guidance for sewage backups and system failures. Stop water use now and call immediately.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:5558675309" className="inline-flex items-center gap-2 bg-white text-red-700 hover:bg-red-50 px-8 py-4 rounded-lg font-bold text-xl transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call Now: (555) 867-5309
            </a>
            <p className="text-red-200 text-sm">Available 24 hours a day, 7 days a week</p>
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="relative h-60 mb-8 rounded-xl overflow-hidden">
          <Image src="/images/rain-septic-stress.jpg" alt="Heavy rain falling on a yard with a septic system" fill className="object-cover" />
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-bold text-red-800 mb-4">Immediate Action Steps</h2>
          <ol className="space-y-4">
            {steps.map((item) => (
              <li key={item.step} className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-white">
                  {item.icon}
                </div>
                <div>
                  <strong className="text-red-800">{item.action}</strong>
                  <p className="text-sm text-red-700 mt-0.5">{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3">Common Septic Emergencies</h2>

        <div className="space-y-6 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">Sewage Backup Into the Home</h3>
            <p className="text-sm text-gray-600">Sewage coming out of floor drains, toilets, or shower drains is the most urgent emergency. This indicates the tank is completely full or the outlet is blocked. Stop water use. Call immediately. An emergency pump-out typically resolves the backup within hours.</p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">Sewage Surfacing in the Yard</h3>
            <p className="text-sm text-gray-600">Effluent or sewage appearing on the surface of the yard over the drain field or tank area indicates the soil can no longer absorb the liquid. Keep people and pets away. This may require a pump-out to relieve pressure plus assessment of the drain field condition.</p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">All Drains Slow or Stopped</h3>
            <p className="text-sm text-gray-600">When every drain in the house is slow simultaneously, the problem is almost always in the septic system rather than household plumbing. This suggests a full tank or blocked outlet pipe. An emergency pump-out is usually the first step.</p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">Strong Sewage Odors Outside</h3>
            <p className="text-sm text-gray-600">Persistent sewage odors in the yard, particularly near the tank or drain field, may indicate a full tank, damaged baffles, or a drain field that is not processing effluent properly. Do not ignore persistent outdoor odors.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3">What Happens During an Emergency Service Call</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">When you call, a real person answers and walks you through the situation. A technician is dispatched with priority scheduling. Typical on-site response time is 2 to 4 hours. The technician performs an emergency pump-out to relieve system pressure, assesses the cause of the failure, and provides a clear explanation and estimate for any additional work needed before proceeding.</p>

        <h2 className="text-2xl font-bold text-[#0c4a6e] mb-3 mt-8">After the Emergency</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">Once the immediate crisis is resolved, the technician will explain what caused the problem and what, if anything, needs to be repaired. Many emergencies stem from a tank that has never been pumped on schedule. See our guide on <Link href="/blog/how-often-pump-septic-tank" className="text-[#0c4a6e] underline hover:text-[#075985]">how often to pump your septic tank</Link> to avoid future crises. If the drain field is involved, read about <Link href="/blog/signs-drain-field-failing" className="text-[#0c4a6e] underline hover:text-[#075985]">signs of drain field failure</Link> to understand next steps. Enrolling in a <Link href="/maintenance-plan" className="text-[#0c4a6e] underline hover:text-[#075985]">maintenance plan</Link> prevents most future emergencies by keeping the system on a scheduled service cycle.</p>

        <div className="bg-[#0c4a6e] text-white rounded-xl p-6 mt-8 text-center">
          <h3 className="font-bold text-xl mb-2">Septic Emergency? Call Now.</h3>
          <p className="text-blue-200 mb-4">Real person answers. Available 24/7.</p>
          <a href="tel:5558675309" className="inline-block bg-[#16a34a] hover:bg-[#15803d] text-white px-6 py-3 rounded-lg font-bold text-lg transition-colors">(555) 867-5309</a>
        </div>
      </article>
    </>
  );
}
