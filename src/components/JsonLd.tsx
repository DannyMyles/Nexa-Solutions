export default function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness"],
        "@id": "https://www.nexasolutions.co.ke/#organization",
        name: "NexaGen Solutions Limited",
        alternateName: "NexaGen Solutions",
        description:
          "Trusted ERPNext and Frappe implementation partner helping businesses across Kenya and East Africa gain full control of their operations with tailored ERP, integrations, and long-term support.",
        url: "https://www.nexasolutions.co.ke",
        logo: {
          "@type": "ImageObject",
          url: "https://www.nexasolutions.co.ke/images/NexaGen Final Logo Concept 111.svg",
          width: 200,
          height: 60,
        },
        image: "https://www.nexasolutions.co.ke/images/NexaGen Final Logo Concept 111.svg",
        telephone: "+254758269725",
        email: "info@nexasolutions.co.ke",
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
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "ERPNext Implementation Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "ERPNext Implementation" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "M-Pesa Integration" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "KRA eTIMS Integration" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "HR & Payroll Software" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Accounting Software" } },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.nexasolutions.co.ke/#website",
        url: "https://www.nexasolutions.co.ke",
        name: "NexaGen Solutions Limited",
        description: "ERPNext implementation partner in Kenya — solutions, integrations, and long-term support.",
        publisher: { "@id": "https://www.nexasolutions.co.ke/#organization" },
        inLanguage: "en-KE",
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
