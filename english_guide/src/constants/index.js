import {
  burglared,
  cameras,
  moonshot,
  fast,
  billings,
  support,
} from "../assets/images";
const pages = [
  {
    title: { english: "BURGLARED", español: "ROBOS" },
    to: "/robbery",
    description: {
      english: "Process, speeches, tickets, and maintenance.",
      español: "Procesos, discursos, tickets y mantenimiento.",
    },
    ext: { english: "66111", español: "66065" },
    icon: burglared,
  },
  {
    title: { english: "CAMERAS", español: "CÁMARAS" },
    to: "/cameras",
    description: {
      english: "Guides, tools, and maintenance.",
      español: "Guías, herramientas y mantenimientos",
    },
    ext: { english: "66111", español: "66575" },
    icon: cameras,
  },
  {
    title: { english: "MOONSHOT", español: "MOONSHOT" },
    to: "/moonshot",
    description: {
      english: "Guides, tickets, and maintenance.",
      español: "Guías, tickets y mantenimientos",
    },
    ext: { english: "66111", español: "66596" },
    icon: moonshot,
  },
  {
    title: { english: "FAST", español: "FAST" },
    to: "/fast",
    description: {
      english: "Guides, tickets, and maintenance.",
      español: "Guías, tickets y mantenimientos",
    },
    ext: { english: "66111", español: "66297" },
    icon: fast,
  },
  {
    title: { english: "BILLING", español: "FACTURACION" },
    to: "/billings",
    description: {
      english: "Processes and notifications.",
      español: "Procesos y avisos",
    },
    ext: { english: "66111", español: "66110" },
    icon: billings,
  },
  {
    title:{ english: "SUPPORT", español: "SOPORTE" },
    to: "/support",
    description: {
      english: "Notifications and validation processes.",
      español: "Avisos y procesos de validaciones",
    },
    ext: { english: "66114", español: "66114" },
    icon: support,
  },
  {
    title:{ english: "TECHNICIANS", español: "TECNICOS" },
    to: "/technician",
    description: {
      english: "On-call Technicians",
      español: "Técnicos de guardia",
    },
    ext: { english: "66114", español: "66114" },
    icon: support,
  },
  {
    title:{ english: "CLASSIC", español: "CLASSIC" },
    to: "/classic",
    description: {
      english: "Guides, Configurations, and Maintenances.",
      español: "Guías, Programaciones, and maintenances",
    },
    ext: { english: "66111", español: "66256" },
    icon: support,
  },
];

export { pages };
