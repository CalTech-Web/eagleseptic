import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Septic Emergency Guide - Eagle Septic Guide",
  description: "What to do during a septic emergency. Step-by-step guide for sewage backups, system failures, and drain field flooding. Available 24/7.",
};

export default function EmergencyPage() {
  return (
    <>
      <section className="bg-red-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Septic Emergency Guide</h1>
          <p className="text-red-100 text-lg">Step-by-step guidance for sewage backups and system failures.</p>
          <div className="mt-6">
            <a href="tel:5558675309" className="inline-block bg-white text-red-700 hover:bg-red-50 px-6 py-3 rounded-lg font-bold text-xl transition-colors">(555) 867-5309</a>
            <p className="text-red-200 text-sm mt-2">Available 24 hours a day, 7 days a week</p>
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="relative h-60 mb-8 rounded-xl overflow-hidden">
          <Image src="/images/rain-septic-stress.jpg" alt="Heavy rain falling on a yard with a septic system" fill className="object-cover" />
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-bold text-red-800 mb-4">Immediate Action Steps</h2>
          <ol className="space-y-3">
            {[
              { step: "1", action: "Stop all water use immediately", detail: "Every toilet flush, shower, or sink use adds more water to an already overloaded system." },
              { step: "2", action: "Keep people and pets away from wet outdoor areas", detail: "Sewage is a serious health hazard. Do not let anyone walk in soggy areas near the tank or drain field." },
              { step: "3", action: "Open windows if safe", detail: "Sewage gases inside the home can be toxic. Ventilate without creating additional plumbing activity." },
              { step: "4", action: "Call a septic professional immediately", detail: "Most emergencies are resolved with an emergency pump-out. Do not wait to call." },
            ].map((item) => (
              <li key={item.step} className="flex gap-3">
                <span className="w-7 h-7 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">{item.step}</span>
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
        <p className="text-gray-700 mb-4 leading-relaxed">Once the immediate crisis is resolved, the technician will explain what caused the problem and what, if anything, needs to be repaired. A one-time emergency often signals a system that needs more attention. Enrolling in a maintenance plan prevents most future emergencies by keeping the system on a scheduled service cycle.</p>

        <div className="bg-[#0c4a6e] text-white rounded-xl p-6 mt-8 text-center">
          <h3 className="font-bold text-xl mb-2">Septic Emergency? Call Now.</h3>
          <p className="text-blue-200 mb-4">Real person answers. Available 24/7.</p>
          <a href="tel:5558675309" className="inline-block bg-[#16a34a] hover:bg-[#15803d] text-white px-6 py-3 rounded-lg font-bold text-lg transition-colors">(555) 867-5309</a>
        </div>
      </article>
    </>
  );
}
