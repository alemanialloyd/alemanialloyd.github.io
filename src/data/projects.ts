import type { Project } from "@/types/project";

/**
 * All portfolio projects live here. To add a new one, append an object to
 * this array — the homepage, cards and detail dialog pick it up automatically.
 *
 * `images` should stay short (4-8 shots) since it drives the detail carousel;
 * drop the rest of the screenshots in /public/images/projects/<slug>/ if you
 * want them archived without showing all of them. Each image's `type`
 * ("mobile" | "web") controls the aspect ratio it's shown at (9:16 vs 16:9).
 * Leave `images` empty (and `logo` as the no_logo.png placeholder) until real
 * assets are ready — the detail dialog handles both gracefully.
 */
export const projects: Project[] = [
  {
    slug: "baisic-restaurants",
    name: "Baisic Restaurants",
    tagline: "Cross-platform restaurant management with POS and analytics",
    description:
      "A restaurant management app covering POS, inventory management, order tracking, expense monitoring and business analytics — built to help restaurant owners streamline operations and manage sales efficiently.",
    date: "2024",
    stack: ["React Native", "TypeScript", "Expo", "Firebase"],
    logo: "/images/logos/no_logo.png",
    images: [],
    accent: "#f59e0b",
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.primeanalytiq.baisicrestaurants",
      appStore:
        "https://apps.apple.com/ph/app/baisic-restaurants/id6746391598",
    },
    featured: true,
  },
  {
    slug: "baisic-topics",
    name: "Baisic Topics",
    tagline: "Role-based task management and team collaboration platform",
    description:
      "A task management platform supporting role-based actions, chat functionality, progress tracking and collaboration between multiple users — focused on productivity and project organization.",
    date: "2023",
    stack: ["React Native", "TypeScript", "Expo", "Firebase"],
    logo: "/images/logos/no_logo.png",
    images: [],
    accent: "#14b8a6",
  },
  {
    slug: "popina",
    name: "Popina Queuing System",
    tagline: "Queuing and reservation system for disco bars and entertainment venues",
    description:
      "A queuing and reservation system tailored for disco bars and entertainment establishments, with interactive table management, reservations, and visitor and sales statistics monitoring.",
    date: "2023",
    stack: ["Flutter", "REST API", "Docker", "MySQL"],
    logo: "/images/logos/no_logo.png",
    images: [],
    accent: "#a855f7",
    featured: true,
  },
  {
    slug: "tabulation-system",
    name: "Tabulation System",
    tagline: "Real-time judge scoring and tabulation for pageants and events",
    description:
      "A web-based tabulation system used across multiple yearly events — including Binibining Camarines Norte, the Grand Festival Parade, Little Miss Camarines Norte and Street Moves Dance Battle — designed to accurately tabulate judges' scores and simplify event scoring workflows.",
    date: "2023",
    stack: ["React", "Firebase"],
    logo: "/images/logos/no_logo.png",
    images: [],
    accent: "#ec4899",
    links: {
      website: "https://bbcn2025.camsnorte.com/",
    },
  },
  {
    slug: "pgcn-dts",
    name: "PGCN Document Tracking System",
    tagline: "QR-based document tracking for the Provincial Government",
    description:
      "A mobile and web-based document tracking platform for the Provincial Government using QR codes, allowing efficient tracking and monitoring of government documents with authentication and real-time database functionality.",
    date: "2023",
    stack: ["React", "Android (Native)", "Firebase"],
    logo: "/images/logos/no_logo.png",
    images: [],
    accent: "#2563eb",
    links: {
      website: "https://dts.camsnorte.com/",
    },
    featured: true,
  },
  {
    slug: "perins-dias",
    name: "Perins Dias & Gaming Pins",
    tagline: "Online store for game top-ups and gaming pins",
    description:
      "An online store platform for digital products including game top-ups and gaming pins, with authentication, push notifications, cloud storage and real-time database features.",
    date: "2022",
    stack: ["Android (Native)", "Firebase"],
    logo: "/images/logos/no_logo.png",
    images: [],
    accent: "#7c3aed",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=sensei.perinsph",
    },
    featured: true,
  },
  {
    slug: "perins",
    name: "Perins",
    tagline: "Personnel information system with reporting and analytics",
    description:
      "An internal personnel management app streamlining record keeping with automated report generation via Apache POI.",
    date: "2022-08-15",
    stack: ["Android (Native)", "Java", "Firebase", "Apache POI"],
    logo: "/images/logos/perins.png",
    images: [
      { src: "/images/projects/perins/1.jpg", type: "mobile" },
      { src: "/images/projects/perins/2.jpg", type: "mobile" },
      { src: "/images/projects/perins/3.jpg", type: "mobile" },
      { src: "/images/projects/perins/4.jpg", type: "mobile" },
      { src: "/images/projects/perins/5.jpg", type: "mobile" },
      { src: "/images/projects/perins/6.jpg", type: "mobile" },
    ],
    accent: "#6366f1",
  },
  {
    slug: "apims",
    name: "APIMS",
    tagline: "Automated Personnel Information Management System",
    description:
      "A larger-scale personnel management system covering records, attendance and automated exports for HR teams.",
    date: "2022-05-22",
    stack: ["Android (Native)", "Java", "Firebase", "Apache POI"],
    logo: "/images/logos/apims.png",
    images: [
      { src: "/images/projects/apims/1.png", type: "mobile" },
      { src: "/images/projects/apims/2.png", type: "mobile" },
      { src: "/images/projects/apims/3.png", type: "mobile" },
      { src: "/images/projects/apims/4.png", type: "mobile" },
      { src: "/images/projects/apims/5.png", type: "mobile" },
      { src: "/images/projects/apims/6.png", type: "mobile" },
    ],
    accent: "#0ea5e9",
    featured: true,
  },
  {
    slug: "brankolei",
    name: "Brankolei Italian Vero Pizza",
    tagline: "Food ordering and delivery app with live tracking",
    description:
      "A customer-facing ordering app with OTP login, live delivery tracking via the Directions API, and push-notification order updates.",
    date: "2021-03-30",
    stack: [
      "Android (Native)",
      "Java",
      "Firebase",
      "Cloud Messaging",
      "Push Notification",
      "Direction API",
      "OTP",
    ],
    logo: "/images/logos/brankolei.png",
    images: [
      { src: "/images/projects/brankolei/1.png", type: "mobile" },
      { src: "/images/projects/brankolei/2.png", type: "mobile" },
      { src: "/images/projects/brankolei/3.png", type: "mobile" },
      { src: "/images/projects/brankolei/4.png", type: "mobile" },
      { src: "/images/projects/brankolei/5.png", type: "mobile" },
      { src: "/images/projects/brankolei/6.png", type: "mobile" },
    ],
    accent: "#1db954",
    featured: true,
  },
  {
    slug: "brankolei-admin",
    name: "Brankolei Admin",
    tagline: "Order and delivery management console for Brankolei staff",
    description:
      "The companion admin app for order fulfillment, dispatch and real-time delivery notifications for the Brankolei team.",
    date: "2021-03-30",
    stack: [
      "Android (Native)",
      "Java",
      "Firebase",
      "Cloud Messaging",
      "Push Notification",
    ],
    logo: "/images/logos/brankolei.png",
    images: [
      { src: "/images/projects/branko_admin/1.png", type: "mobile" },
      { src: "/images/projects/branko_admin/2.png", type: "mobile" },
      { src: "/images/projects/branko_admin/3.png", type: "mobile" },
      { src: "/images/projects/branko_admin/4.png", type: "mobile" },
      { src: "/images/projects/branko_admin/5.png", type: "mobile" },
      { src: "/images/projects/branko_admin/6.png", type: "mobile" },
    ],
    accent: "#1db954",
  },
  {
    slug: "emapped",
    name: "ALS e-MappEd",
    tagline:
      "Alternative Learning System Electronic Means for Advance and Productive Process and Access to Education",
    description:
      "A DepEd Alternative Learning System companion app that digitizes learner tracking and reporting, complete with chart-driven analytics via AnyChart.",
    date: "2020-10-15",
    stack: [
      "Android (Native)",
      "Java",
      "Firebase",
      "Push Notification",
      "Apache POI",
      "AnyChart",
    ],
    logo: "/images/logos/e_mapped.png",
    images: [
      { src: "/images/projects/emapped/1.png", type: "mobile" },
      { src: "/images/projects/emapped/2.png", type: "mobile" },
      { src: "/images/projects/emapped/3.png", type: "mobile" },
      { src: "/images/projects/emapped/4.png", type: "mobile" },
      { src: "/images/projects/emapped/5.png", type: "mobile" },
      { src: "/images/projects/emapped/6.png", type: "mobile" },
    ],
    accent: "#38bdf8",
    featured: true,
  },
  {
    slug: "palabit",
    name: "Palabit Delivery",
    tagline: "On-demand delivery app with live rider tracking",
    description:
      "A delivery platform pairing riders and customers with live map tracking, place search and OTP-secured accounts.",
    date: "2020-06-11",
    stack: [
      "Android (Native)",
      "Java",
      "Firebase",
      "Push Notification",
      "Direction API",
      "Place API",
      "OTP",
    ],
    logo: "/images/logos/palabit.png",
    images: [
      { src: "/images/projects/palabit/1.png", type: "mobile" },
      { src: "/images/projects/palabit/2.png", type: "mobile" },
      { src: "/images/projects/palabit/3.png", type: "mobile" },
      { src: "/images/projects/palabit/4.png", type: "mobile" },
      { src: "/images/projects/palabit/5.png", type: "mobile" },
      { src: "/images/projects/palabit/6.png", type: "mobile" },
    ],
    accent: "#f97316",
    featured: true,
  },
  {
    slug: "exclusave",
    name: "ExcluSave",
    tagline: "Exclusive deals and rewards discovery app",
    description:
      "A deals-discovery app surfacing nearby exclusive offers, ranked by distance, with push alerts for new promos.",
    date: "2019-01-14",
    stack: [
      "Android (Native)",
      "Java",
      "Firebase",
      "Cloud Messaging",
      "Push Notification",
      "Distance API",
    ],
    logo: "/images/logos/exclusave.png",
    images: [
      { src: "/images/projects/exclusave/1.png", type: "mobile" },
      { src: "/images/projects/exclusave/2.png", type: "mobile" },
      { src: "/images/projects/exclusave/3.png", type: "mobile" },
      { src: "/images/projects/exclusave/4.png", type: "mobile" },
      { src: "/images/projects/exclusave/5.png", type: "mobile" },
      { src: "/images/projects/exclusave/6.png", type: "mobile" },
    ],
    accent: "#f43f5e",
  },
  {
    slug: "essentials",
    name: "Ragnarok M: Essentials",
    tagline: "Companion app for the Ragnarok M: Eternal Love community",
    description:
      "A companion utility app for Ragnarok M players with guides, tools and push notifications for in-game events.",
    date: "2019-02-06",
    stack: ["Android (Native)", "Java", "Firebase", "Push Notification"],
    logo: "/images/logos/essentials.png",
    images: [
      { src: "/images/projects/essentials/1.jpg", type: "mobile" },
      { src: "/images/projects/essentials/2.jpg", type: "mobile" },
      { src: "/images/projects/essentials/3.jpg", type: "mobile" },
      { src: "/images/projects/essentials/4.jpg", type: "mobile" },
      { src: "/images/projects/essentials/5.jpg", type: "mobile" },
      { src: "/images/projects/essentials/6.jpg", type: "mobile" },
    ],
    accent: "#38bdf8",
  },
];
