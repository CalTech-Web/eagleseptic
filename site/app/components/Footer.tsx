import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0c4a6e] text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#0a2d42] flex items-center justify-center border-2 border-[#16a34a]">
                <svg className="w-5 h-5 text-[#16a34a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-sm leading-tight">Eagle Septic</div>
                <div className="text-xs text-blue-200 leading-tight">Septic Information Guide</div>
              </div>
            </div>
            <p className="text-sm text-blue-200">Free septic system information for homeowners. Plain-language guides, maintenance tips, and troubleshooting help.</p>
          </div>

          {/* Topics */}
          <div>
            <h3 className="font-semibold mb-3 text-white">Topics</h3>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><Link href="/blog/how-does-a-septic-system-work" className="hover:text-white transition-colors">How Septic Systems Work</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Septic Maintenance</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Signs of Problems</Link></li>
              <li><Link href="/blog/septic-system-vs-sewer-system" className="hover:text-white transition-colors">Septic vs Sewer</Link></li>
              <li><Link href="/emergency" className="hover:text-white transition-colors">Emergency Situations</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Drain Field Guide</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-3 text-white">Resources</h3>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><Link href="/resources" className="hover:text-white transition-colors">All Guides</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services Explained</Link></li>
              <li><Link href="/service-areas" className="hover:text-white transition-colors">Service Areas</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About This Site</Link></li>
            </ul>
          </div>

          {/* Emergency */}
          <div>
            <h3 className="font-semibold mb-3 text-white">Emergency Help</h3>
            <p className="text-sm text-blue-200 mb-3">Sewage backup? System failure? Get help now.</p>
            <Link href="/emergency" className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">Emergency Guide</Link>
            <p className="text-sm text-blue-200 mt-3">Phone: (555) 867-5309</p>
            <p className="text-xs text-blue-300 mt-1">Available 24/7</p>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-300">
          <p>© 2026 Eagle Septic Guide. Informational resource for homeowners.</p>
          <p>Serving Central Valley, California</p>
        </div>
      </div>
    </footer>
  );
}
