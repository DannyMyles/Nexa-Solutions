import type { MetadataRoute } from "next";

const BASE = "https://nexagensolutions.com";

const solutions = [
  "accounting-software",
  "hr-and-payroll-software",
  "crm-software",
  "hospital-management-system",
  "inventory-and-warehouse-management",
  "manufacturing-and-production-planning",
  "microfinance-core-banking-software",
  "e-commerce-integration",
  "pos-system",
  "real-estate-property-management",
  "legal-practice-management",
  "learning-management-system",
];

const integrations = [
  "mpesa-integration",
  "kra-tims-and-etims-integration",
  "biometric-data-integration",
  "custom-software-integrations",
  "digitax-integration-with-erpnext",
  "payment-gateway-integration",
  "ntsa-integration",
  "gava-connect-integration",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/company`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/industries`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/process`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms-and-conditions`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    ...solutions.map((slug) => ({
      url: `${BASE}/solutions/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...integrations.map((slug) => ({
      url: `${BASE}/integrations/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
  ];
}
