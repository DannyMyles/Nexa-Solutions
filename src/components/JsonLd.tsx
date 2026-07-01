export default function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness"],
        "@id": "https://nexagensolutions.com/#organization",
        name: "NexaGen Solutions Limited",
        alternateName: "NexaGen Solutions",
        description:
          "Trusted ERPNext and Frappe implementation partner helping businesses across Kenya and East Africa gain full control of their operations with tailored ERP, integrations, and long-term support.",
        url: "https://nexagensolutions.com",
        logo: {
          "@type": "ImageObject",
          url: "https://nexagensolutions.com/images/NexaGen Final Logo Concept 111.svg",
          width: 200,
          height: 60,
        },
        image: "https://nexagensolutions.com/images/NexaGen Final Logo Concept 111.svg",
        telephone: "+254758269725",
        email: "info@nexagensolutions.co.ke",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Riverside Drive, Kofisi",
          addressLocality: "Nairobi",
          addressRegion: "Nairobi County",
          postalCode: "00100",
          addressCountry: "KE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -1.2921,
          longitude: 36.8219,
        },
        areaServed: [
          { "@type": "Country", name: "Kenya" },
          { "@type": "AdministrativeArea", name: "East Africa" },
        ],
        priceRange: "$$",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "17:00",
          },
        ],
        sameAs: [
          "https://www.linkedin.com/in/nexagen-solutions-2518b441a/",
          "https://x.com/nexagensolution",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "ERPNext Implementation Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "ERPNext Implementation", url: "https://nexagensolutions.com/services" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "M-Pesa Integration", url: "https://nexagensolutions.com/integrations/mpesa-integration" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "KRA eTIMS Integration", url: "https://nexagensolutions.com/integrations/kra-tims-and-etims-integration" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "HR & Payroll Software", url: "https://nexagensolutions.com/solutions/hr-and-payroll-software" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Accounting Software", url: "https://nexagensolutions.com/solutions/accounting-software" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hospital Management System", url: "https://nexagensolutions.com/solutions/hospital-management-system" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "CRM Software", url: "https://nexagensolutions.com/solutions/crm-software" } },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://nexagensolutions.com/#website",
        url: "https://nexagensolutions.com",
        name: "NexaGen Solutions Limited",
        description: "ERPNext implementation partner in Kenya — solutions, integrations, and long-term support.",
        publisher: { "@id": "https://nexagensolutions.com/#organization" },
        inLanguage: "en-KE",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://nexagensolutions.com/contact?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
    />
  );
}
