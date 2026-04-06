export interface Experience {
  title: string;
  company: string;
  companyUrl?: string;
  date: string;
  location: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "TPZ Studio",
    date: "Dec 2022 – Nov 2023",
    location: "Seoul, South Korea",
    description: [
      "Designed and implemented RESTful APIs for reservation, user, and payment systems, enabling reliable transactional workflows across multiple service domains and supporting real-time operations.",
      "Integrated secure payment gateway systems, implementing validation, failure-handling, and reconciliation logic to improve transaction stability and reduce payment-related errors.",
      "Designed and optimised relational database schemas using PostgreSQL, improving query performance and ensuring efficient handling of transactional data.",
      "Improved system reliability by implementing structured error handling, logging, and monitoring using AWS CloudWatch, enabling faster detection and resolution of production issues.",
      "Collaborated closely with frontend engineers (React) to define API contracts and ensure seamless feature delivery across client and server systems.",
      "Standardised API response formats and error structures, improving debugging efficiency and reducing inconsistencies across services.",
      "Managed environment configurations across local, staging, and production environments, ensuring stable and consistent deployment workflows.",
    ],
  },
  {
    title: "Frontend Engineer",
    company: "Youniv",
    companyUrl: "https://youniv.com",
    date: "Jan 2021 – Jul 2022",
    location: "Seoul, South Korea",
    description: [
      "Led migration from legacy Vanilla JavaScript to React, transforming a monolithic codebase into a scalable component-based architecture and significantly improving maintainability.",
      "Built reusable UI components using modern React patterns (Hooks, state management), accelerating feature development and reducing duplicated code.",
      "Improved frontend performance through code splitting, lazy loading, and rendering optimisation techniques, enhancing overall user experience.",
      "Designed and developed an internal reservation system, automating studio and equipment booking workflows and improving operational efficiency.",
      "Managed AWS-based deployment, domain configuration, and production environment for a platform serving over 700K subscribers.",
      "Improved SEO and accessibility standards, increasing discoverability and enhancing user engagement across the platform.",
      "Collaborated with cross-functional teams in feature planning and requirement discussions, translating business needs into scalable technical solutions.",
    ],
  },
  {
    title: "Web Designer & Content Producer",
    company: "Youniv",
    companyUrl: "https://youniv.com",
    date: "Jan 2020 – Jan 2021",
    location: "Seoul, South Korea",
    description: [
      "Designed high-fidelity wireframes and interactive prototypes using Figma, contributing to the initial product direction and user experience design.",
      "Led the launch of company web assets, including branding, domain setup, and initial cloud environment configuration.",
      "Worked closely with developers to ensure accurate implementation of design systems and consistent UI/UX across platforms.",
    ],
  },
];
