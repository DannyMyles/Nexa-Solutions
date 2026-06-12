export type ServiceOption = { value: string; label: string };
export type ServiceGroup = { group: string; options: ServiceOption[] };

export const serviceGroups: ServiceGroup[] = [
  {
    group: "Getting Started",
    options: [
      { value: "demo", label: "Book a Guided Demo" },
      { value: "audit", label: "Free Business Process Audit" },
    ],
  },
  {
    group: "ERPNext Solutions",
    options: [
      { value: "implementation", label: "ERPNext Full Implementation" },
      { value: "accounting", label: "Accounting Software" },
      { value: "hr-payroll", label: "HR & Payroll Software" },
      { value: "inventory", label: "Inventory & Warehouse Management" },
      { value: "pos", label: "POS System" },
      { value: "crm", label: "CRM Software" },
      { value: "hospital", label: "Hospital Management System" },
      { value: "school", label: "School / University Management" },
      { value: "microfinance", label: "Microfinance Core Banking" },
      { value: "real-estate", label: "Real Estate Property Management" },
      { value: "manufacturing", label: "Manufacturing & Production Planning" },
      { value: "legal", label: "Legal Practice Management" },
      { value: "ecommerce", label: "E-commerce Integration" },
    ],
  },
  {
    group: "Integrations",
    options: [
      { value: "mpesa", label: "M-Pesa Integration" },
      { value: "kra-etims", label: "KRA eTIMS / TIMS Integration" },
      { value: "bank-recon", label: "Bank Reconciliation Integration" },
      { value: "biometric", label: "Biometric Attendance Integration" },
      { value: "payment-gateway", label: "Payment Gateway (Stripe, PayPal, Flutterwave)" },
      { value: "digitax", label: "DigiTax Integration" },
      { value: "custom-integration", label: "Custom Software Integration" },
    ],
  },
  {
    group: "Support & Consulting",
    options: [
      { value: "migration", label: "Data Migration" },
      { value: "customization", label: "System Customization & Automation" },
      { value: "training", label: "User Training" },
      { value: "support", label: "Ongoing Support & Maintenance" },
      { value: "other", label: "Other / Not Sure Yet" },
    ],
  },
];

// Flat list for components that don't use optgroups (e.g. WhatsApp widget)
export const services = [
  { value: "", label: "Select a service" },
  ...serviceGroups.flatMap((g) => g.options),
];
