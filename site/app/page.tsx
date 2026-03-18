import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eagle Septic Guide | Free Septic System Information for Homeowners",
  description: "Free educational resource for homeowners across California's Central Valley. Plain-language septic system guides, maintenance tips, troubleshooting, and cost information.",
};

const checkIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-accent-400" aria-hidden="true">
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
  </svg>
);

const arrowIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
  </svg>
);

const guides = [
  {
    href: "/blog/septic-system-vs-sewer-system",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=630&q=80&fit=crop&crop=center",
    alt: "Residential neighborhood illustrating the choice between septic and sewer systems",
    category: "Education",
    categoryColor: "bg-cyan-50 text-cyan-700",
    readTime: "8 min read",
    title: "Septic System vs. Sewer System: Key Differences, Costs, and What's Right for Your Home",
    excerpt: "If you're buying a home or building on a rural property, you'll face this question: septic or sewer? Both systems handle wastewater, but they work differently, cost differently, and require different levels of ongoing involvement from homeowners.",
  },
  {
    href: "/blog/how-does-a-septic-system-work",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=630&q=80&fit=crop&crop=center",
    alt: "Green grass lawn over a residential septic drain field on a sunny day",
    category: "Education",
    categoryColor: "bg-cyan-50 text-cyan-700",
    readTime: "10 min read",
    title: "How Does a Septic System Work? A Complete Guide for Homeowners",
    excerpt: "About 1 in 5 U.S. homes runs on a septic system, but most homeowners couldn't explain how one actually works. This guide walks through every stage: what happens inside the tank, how the drain field filters effluent, why bacteria are essential, and what your role is in keeping the system healthy.",
  },
  {
    href: "/blog/septic-backup-after-heavy-rain",
    image: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=1200&h=630&q=80&fit=crop&crop=center",
    alt: "Heavy rain falling on a residential yard representing septic system stress during storms",
    category: "Troubleshooting",
    categoryColor: "bg-amber-50 text-amber-700",
    readTime: "7 min read",
    title: "Septic Backup After Heavy Rain: Why It Happens & What to Do",
    excerpt: "Rain and septic systems have a complicated relationship. When heavy rain hits, many homeowners see slow drains, yard odors, or worse. Here's why it happens and what to do in the first 30 minutes.",
  },
];

const faqs = [
  {
    href: "/blog/how-often-pump-septic-tank",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    question: "How often should I pump my septic tank?",
    answer: "Most households need pumping every 3 to 5 years. A family of four with a 1,000-gallon tank typically pumps every 3 to 4 years. Waiting too long lets solids overflow into the drain field, turning a $400 pump job into a $15,000 or more repair.",
  },
  {
    href: "/blog/warning-signs-septic-system-failing",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    question: "What are the warning signs of a failing septic system?",
    answer: "Key warning signs include slow or gurgling drains, sewage odors inside or outside, unusually lush grass over the drain field, and wet or spongy ground near the tank. Any of these signals you need service soon.",
  },
  {
    href: "/blog/how-does-a-septic-system-work",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    question: "How does a septic system work?",
    answer: "Wastewater flows from your home into a buried tank where solids settle and bacteria break them down. Clarified liquid (effluent) exits through the outlet pipe into a drain field, where soil filters it before it re-enters the groundwater.",
  },
  {
    href: "/blog/septic-tank-pumping-cost-central-valley",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    question: "How much does septic pumping cost?",
    answer: "Residential septic pumping in the Central Valley typically runs $300 to $600, depending on tank size and access. Larger tanks (1,500 or more gallons) or difficult-to-reach locations cost more. We provide a firm quote before any work begins.",
  },
  {
    href: "/blog/septic-emergency-what-to-do",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    question: "What should I do during a septic emergency?",
    answer: "Stop all water use immediately, every flush makes it worse. Keep people away from wet areas outside (sewage is a health hazard). Then call a septic company right away; most emergencies can be resolved with an emergency pump-out.",
  },
];

const stats = [
  { value: "18+", label: "Years Experience" },
  { value: "4,200+", label: "Tanks Serviced" },
  { value: "4.9★", label: "Google Rating" },
  { value: "200+", label: "Reviews" },
];

const steps = [
  {
    number: "1",
    title: "Call or Schedule",
    description: "You call or schedule online. We confirm tank size, location, and access needs, then give you an upfront price before anything else.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Arrive and Locate",
    description: "Our technician arrives with a vacuum truck, locates the tank, and excavates a buried lid if needed. No extra surprises.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Pump and Inspect",
    description: "We fully evacuate the tank, inspect baffles and walls, photograph any issues, and explain exactly what we found.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    number: "4",
    title: "Dispose and Document",
    description: "Waste is transported to a licensed facility. You receive a written summary with sludge readings and your next recommended service date.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    number: "5",
    title: "Stay Protected",
    description: "Enroll in our Essential ($299/yr) or Complete Care ($499/yr) plan to stay on a schedule and avoid costly drain field failures.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

const healthCategories = [
  {
    status: "All Clear",
    border: "border-accent-200",
    headerBg: "bg-accent-50",
    iconBg: "bg-accent-100 text-accent-700",
    badgeBg: "bg-accent-100 text-accent-800",
    subtitle: "Your system looks healthy if\u2026",
    href: "/blog/how-often-pump-septic-tank",
    linkText: "Maintain your healthy system",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
      </svg>
    ),
    items: [
      "Tank was pumped within the last 3 to 5 years",
      "No sewage odors inside or around your property",
      "All drains flow at normal speed",
      "No wet spots or unusually lush grass over the drain field",
      "You know the location of your tank and access lids",
    ],
  },
  {
    status: "Attention Needed",
    border: "border-amber-200",
    headerBg: "bg-amber-50",
    iconBg: "bg-amber-100 text-amber-700",
    badgeBg: "bg-amber-100 text-amber-800",
    subtitle: "Time to schedule service if\u2026",
    href: "/blog/warning-signs-septic-system-failing",
    linkText: "Understand warning signs",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
      </svg>
    ),
    items: [
      "It's been 3 to 5 or more years since your last pump-out",
      "Drains seem slower than they used to be",
      "You occasionally notice a faint sewage smell outside",
      "Grass over the drain field is noticeably greener or faster-growing",
      "You're buying or selling a home with a septic system",
    ],
  },
  {
    status: "Emergency",
    border: "border-red-200",
    headerBg: "bg-red-50",
    iconBg: "bg-red-100 text-red-700",
    badgeBg: "bg-red-100 text-red-800",
    subtitle: "Get emergency help if\u2026",
    href: "/blog/septic-emergency-what-to-do",
    linkText: "What to do in a septic emergency",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
        <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
      </svg>
    ),
    items: [
      "Sewage is backing up into sinks, tubs, or toilets",
      "Strong sewage smell inside your home",
      "Soggy or swampy ground near your septic tank or drain field",
      "Multiple drains are completely blocked at once",
      "Last pump-out was more than 7 years ago",
    ],
  },
];

const testimonials = [
  {
    quote: "Called at 8am and they were at my house by noon. The tech was professional, explained everything he was doing, and the price was exactly what they quoted over the phone. No surprises. Will be calling Eagle Septic every time.",
    name: "Michael R.",
    location: "Modesto, CA",
    service: "Septic Pumping",
  },
  {
    quote: "Sewage backup on a Sunday morning, every homeowner's nightmare. Eagle Septic answered immediately and had someone out within two hours. They cleared the blockage fast and charged a fair emergency rate. Absolute lifesavers.",
    name: "Sandra K.",
    location: "Turlock, CA",
    service: "Emergency Service",
  },
  {
    quote: "Had a failing drain field that two other companies told me needed full replacement. Eagle Septic diagnosed the actual problem, repaired it for a fraction of the price, and it's been running perfectly for three months. Honest and knowledgeable.",
    name: "Jennifer T.",
    location: "Patterson, CA",
    service: "Drain Field Repair",
  },
  {
    quote: "We were buying a house and needed a septic inspection before closing. Eagle Septic fit us in on short notice, gave us a thorough written report, and even walked us through what to watch for as new owners.",
    name: "Dave and Pam L.",
    location: "Ceres, CA",
    service: "Full Inspection",
  },
  {
    quote: "My system was way overdue for cleaning and I was nervous about the cost. These guys were upfront about pricing from the start. Fair, fast, and left the yard just as clean as they found it.",
    name: "Carlos M.",
    location: "Riverbank, CA",
    service: "Tank Cleaning",
  },
  {
    quote: "Been using Eagle Septic for five years now. They're always on time, always thorough, and they remember my system from visit to visit. That kind of consistency is hard to find. Wouldn't use anyone else.",
    name: "Tom B.",
    location: "Oakdale, CA",
    service: "Routine Maintenance",
  },
];

const starIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-accent-400" aria-hidden="true">
    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
  </svg>
);

const bulletIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400" aria-hidden="true">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v4.59L7.3 9.24a.75.75 0 00-1.1 1.02l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V6.75z" clipRule="evenodd" />
  </svg>
);

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[380px] items-center overflow-hidden bg-brand-900">
        <Image
          src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&h=675&q=60&fit=crop&crop=center"
          alt="Residential home with green lawn and healthy septic system"
          fill
          className="object-cover object-center opacity-30"
          priority
          quality={55}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/85 via-brand-800/75 to-brand-700/65" />
        <div className="container-max section-padding relative w-full">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent-500/20 px-4 py-2 text-sm font-semibold text-accent-400 ring-1 ring-accent-500/30">
              Free septic system information for homeowners
            </div>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Understand Your{" "}
              <span className="text-accent-400">Septic System</span>
            </h1>
            <p className="mb-8 text-lg text-brand-100 sm:text-xl">
              Plain-language guides, maintenance tips, and troubleshooting help for homeowners with septic systems. No jargon, no sales pitch.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/resources" className="btn-primary text-base">Browse All Guides</Link>
              <Link href="/blog" className="btn-secondary text-base">Read the Blog</Link>
            </div>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-brand-100">
              <div className="flex items-center gap-2">{checkIcon}Free to Read</div>
              <div className="flex items-center gap-2">{checkIcon}No Ads</div>
              <div className="flex items-center gap-2">{checkIcon}Homeowner Focused</div>
              <div className="flex items-center gap-2">{checkIcon}Plain Language</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar — Social Proof */}
      <section className="bg-brand-800 text-white">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold text-accent-400">{s.value}</div>
                <div className="mt-1 text-sm text-brand-200">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-14 sm:py-18">
        <div className="container-max section-padding">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-600">Simple Process</p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">What Happens During a Service Visit</h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-600">
              From your first call to a written summary, here&rsquo;s exactly what to expect when you schedule a service.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, i) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                {i < steps.length - 1 && (
                  <div className="absolute left-[calc(50%+2rem)] right-[calc(-50%+2rem)] top-7 hidden h-px bg-brand-100 lg:block" aria-hidden="true" />
                )}
                <div className="relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-700 text-white shadow-md">
                  {step.icon}
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent-500 text-xs font-bold text-white">
                    {step.number}
                  </span>
                </div>
                <h3 className="mb-2 text-base font-bold text-gray-900">{step.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Guides */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="container-max section-padding">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-600">Free Resources</p>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Septic System Guides</h2>
              <p className="mt-3 max-w-xl text-gray-600">
                Practical answers to common septic questions, from pumping schedules to warning signs, written by our licensed technicians.
              </p>
            </div>
            <Link href="/blog" className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-900">
              View all guides{arrowIcon}
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-colors hover:border-brand-300 hover:bg-brand-50"
              >
                <div className="relative h-44 w-full flex-shrink-0">
                  <Image
                    src={g.image}
                    alt={g.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${g.categoryColor}`}>{g.category}</span>
                    <span className="text-xs text-gray-400">{g.readTime}</span>
                  </div>
                  <h3 className="mb-2 line-clamp-2 text-lg font-bold leading-snug text-gray-900 group-hover:text-brand-700">{g.title}</h3>
                  <p className="flex-1 line-clamp-3 text-sm leading-relaxed text-gray-500">{g.excerpt}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-brand-700 group-hover:underline">Read guide →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Articles */}
      <section className="bg-white py-14 sm:py-18">
        <div className="container-max section-padding">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-600">Homeowner Guide</p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Common Septic Questions, Answered</h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-600">
              Quick, straightforward answers from licensed technicians who service hundreds of Central Valley systems every year.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {faqs.slice(0, 3).map((faq) => (
              <article key={faq.href} className="flex flex-col rounded-xl border border-gray-100 bg-gray-50 p-6 shadow-sm">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-700">
                  {faq.icon}
                </div>
                <h3 className="mb-3 text-base font-bold leading-snug text-gray-900">{faq.question}</h3>
                <p className="flex-1 text-sm leading-relaxed text-gray-600">{faq.answer}</p>
                <Link href={faq.href} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-900 hover:underline">
                  Read full guide{arrowIcon}
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {faqs.slice(3).map((faq) => (
              <article key={faq.href} className="flex flex-col rounded-xl border border-gray-100 bg-gray-50 p-6 shadow-sm">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-700">
                  {faq.icon}
                </div>
                <h3 className="mb-3 text-base font-bold leading-snug text-gray-900">{faq.question}</h3>
                <p className="flex-1 text-sm leading-relaxed text-gray-600">{faq.answer}</p>
                <Link href={faq.href} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-900 hover:underline">
                  Read full guide{arrowIcon}
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/resources" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-900">
              Browse all septic guides and resources{arrowIcon}
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-brand-900 py-16 sm:py-20">
        <div className="container-max section-padding">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent-400">What Homeowners Say</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">4.9 Stars Across 200+ Google Reviews</h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-brand-200">
              Real feedback from Central Valley homeowners we've helped with pumping, emergencies, inspections, and repairs.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="flex flex-col rounded-2xl bg-brand-800/60 p-6 ring-1 ring-white/10">
                <div className="mb-4 flex gap-0.5">
                  {starIcon}{starIcon}{starIcon}{starIcon}{starIcon}
                </div>
                <blockquote className="flex-1">
                  <p className="text-sm leading-relaxed text-brand-100">&ldquo;{t.quote}&rdquo;</p>
                </blockquote>
                <figcaption className="mt-5 border-t border-white/10 pt-4">
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="mt-0.5 text-xs text-brand-300">{t.location} &middot; {t.service}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Health Assessment */}
      <section className="bg-gray-50 py-14 sm:py-20">
        <div className="container-max section-padding">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-600">Homeowner Self-Assessment</p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">How Healthy Is Your Septic System?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-600">
              Match your situation to one of these three categories to know what action, if any, you should take next.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {healthCategories.map((cat) => (
              <div key={cat.status} className={`flex flex-col overflow-hidden rounded-2xl border ${cat.border} bg-white shadow-sm`}>
                <div className={`${cat.headerBg} px-6 py-4`}>
                  <div className="flex items-center gap-3">
                    <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl ${cat.iconBg}`}>
                      {cat.icon}
                    </div>
                    <span className={`inline-block rounded-full px-3 py-1 text-sm font-bold ${cat.badgeBg}`}>{cat.status}</span>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-gray-800">{cat.subtitle}</p>
                </div>
                <ul className="flex flex-1 flex-col gap-3 px-6 py-5">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-snug text-gray-700">
                      {bulletIcon}
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-gray-100 px-6 py-4">
                  <Link href={cat.href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-900 hover:underline">
                    {cat.linkText}{arrowIcon}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-gray-500">
            Not sure which category you&apos;re in?{" "}
            <Link href="/resources" className="font-semibold text-brand-700 hover:underline">Browse our full homeowner resource center</Link>
            {" "}or{" "}
            <Link href="/faq" className="font-semibold text-brand-700 hover:underline">read our FAQ</Link>.
          </p>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-white py-14 sm:py-18">
        <div className="container-max section-padding">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-600">Coverage Area</p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Serving Central Valley, California</h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-600">
              Our licensed technicians serve homeowners across Stanislaus, San Joaquin, and Merced counties.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                county: "Stanislaus County",
                cities: ["Modesto", "Turlock", "Ceres", "Riverbank", "Oakdale", "Patterson", "Waterford", "Hughson", "Newman", "Denair"],
              },
              {
                county: "San Joaquin County",
                cities: ["Stockton", "Tracy", "Manteca", "Ripon", "Escalon"],
              },
              {
                county: "Merced County",
                cities: ["Merced", "Atwater", "Los Banos", "Livingston", "Gustine"],
              },
            ].map((group) => (
              <div key={group.county} className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-brand-700 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                      <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 15.988 17 13.493 17 10a7 7 0 10-14 0c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.757.433 5.71 5.71 0 00.28.14l.018.008.006.003zM10 11.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900">{group.county}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.cities.map((city) => (
                    <Link
                      key={city}
                      href={`/service-areas/${city.toLowerCase().replace(/\s+/g, "-")}`}
                      className="rounded-full bg-white px-3 py-1 text-sm font-medium text-brand-700 ring-1 ring-brand-200 transition-colors hover:bg-brand-700 hover:text-white hover:ring-brand-700"
                    >
                      {city}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-gray-500">
            Don&apos;t see your city?{" "}
            <Link href="/service-areas" className="font-semibold text-brand-700 hover:underline">View all service areas</Link>
            {" "}or call us to confirm coverage.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-900 py-16 sm:py-20">
        <div className="container-max section-padding">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Emergency path */}
            <div className="flex flex-col rounded-2xl bg-red-900/40 p-8 ring-1 ring-red-500/30">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-red-400" aria-hidden="true">
                  <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Septic Emergency?</h3>
              <p className="mb-6 flex-1 text-brand-200">
                Sewage backup, strong odors inside, or wet soggy ground near your tank? Stop all water use now and get help. We answer 24/7, real person every time.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/emergency" className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-red-700">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                    <path d="M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2zM2 9a1 1 0 000 2h8a1 1 0 000-2H2zM2 14a1 1 0 000 2h8a1 1 0 000-2H2zM14 14a1 1 0 00-1 1v2a1 1 0 001 1h4a1 1 0 001-1v-2a1 1 0 00-1-1h-4z" />
                  </svg>
                  Emergency Guide
                </Link>
                <a href="tel:5558675309" className="text-sm font-semibold text-red-300 hover:text-white">
                  (555) 867-5309
                </a>
              </div>
              <p className="mt-4 text-xs text-brand-400">Typical on-site response within 2 to 4 hours</p>
            </div>

            {/* Scheduled service path */}
            <div className="flex flex-col rounded-2xl bg-accent-800/20 p-8 ring-1 ring-accent-500/30">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-accent-400" aria-hidden="true">
                  <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Schedule Routine Service</h3>
              <p className="mb-6 flex-1 text-brand-200">
                Due for a pump-out or inspection? Regular maintenance every 3 to 5 years prevents costly drain field failures. Upfront pricing before any work begins.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/services" className="inline-flex items-center gap-2 rounded-lg bg-accent-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-accent-700">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                  View Services
                </Link>
                <Link href="/pricing" className="text-sm font-semibold text-accent-300 hover:text-white">
                  See pricing
                </Link>
              </div>
              <div className="mt-4 flex flex-wrap gap-4 text-xs text-brand-400">
                <span className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5 text-accent-500" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                  </svg>
                  No surprise charges
                </span>
                <span className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5 text-accent-500" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                  </svg>
                  Free upfront estimate
                </span>
                <span className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5 text-accent-500" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                  </svg>
                  4.9 stars, 200+ reviews
                </span>
              </div>
            </div>
          </div>

          {/* Trust bar */}
          <div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-8 text-center sm:grid-cols-4">
            {[
              { label: "18+ Years Experience", icon: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" },
              { label: "Upfront Pricing Always", icon: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              { label: "24/7 Emergency Response", icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" },
              { label: "C-42 Licensed Technicians", icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 text-accent-400" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-brand-200">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
