import { MetadataRoute } from "next";

const base = "https://eaglesepticpumping.com";

const blogSlugs = [
  "how-to-tell-if-septic-tank-is-full",
  "buying-house-with-septic-system",
  "how-often-pump-septic-tank",
  "what-does-a-septic-inspection-include",
  "drain-field-repair-cost",
  "warning-signs-septic-system-failing",
  "what-not-to-flush-septic-system",
  "how-does-a-septic-system-work",
  "how-to-find-your-septic-tank",
  "how-long-does-a-septic-system-last",
  "signs-drain-field-failing",
  "how-to-protect-your-drain-field",
  "septic-backup-after-heavy-rain",
  "do-septic-additives-work",
  "septic-emergency-what-to-do",
  "septic-system-vs-sewer-system",
  "septic-tank-pumping-cost-central-valley",
];

const serviceSlugs = [
  "septic-tank-pumping",
  "tank-cleaning-maintenance",
  "septic-inspections",
  "emergency-services",
  "drain-field-repair",
  "new-system-installation",
];

const citySlugs = [
  "modesto",
  "turlock",
  "ceres",
  "riverbank",
  "oakdale",
  "patterson",
  "waterford",
  "hughson",
  "newman",
  "denair",
  "escalon",
  "stockton",
  "tracy",
  "manteca",
  "ripon",
  "atwater",
  "merced",
  "los-banos",
  "livingston",
  "gustine",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: base, priority: 1.0, changeFrequency: "weekly" },
    { url: `${base}/blog`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${base}/faq`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/resources`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/services`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/emergency`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/about`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${base}/pricing`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${base}/maintenance-plan`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${base}/commercial`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${base}/real-estate-inspections`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${base}/service-areas`, priority: 0.7, changeFrequency: "monthly" },
  ];

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${base}/blog/${slug}`,
    priority: 0.8,
    changeFrequency: "monthly",
  }));

  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${base}/services/${slug}`,
    priority: 0.8,
    changeFrequency: "monthly",
  }));

  const cityPages: MetadataRoute.Sitemap = citySlugs.map((slug) => ({
    url: `${base}/service-areas/${slug}`,
    priority: 0.6,
    changeFrequency: "monthly",
  }));

  return [...staticPages, ...blogPages, ...servicePages, ...cityPages];
}
