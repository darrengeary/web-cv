export const profile = {
  name: "Darren Geary",
  title: "Software Engineer | Incident Response | Production Observability",
  location: "Ireland/UK",
  tagline:
    "I build software and dashboards that improve incident response and production visibility.",
  links: {
    email: "gearydarren@gmail.com",
    github: "https://github.com/yourhandle",
    linkedin: "https://linkedin.com/in/darren-geary",
    resumePdf: "/resume.pdf", // put a file in /public/resume.pdf
  },
  highlights: [
    "Incident response (P0/P1), structured debugging, root cause analysis",
    "Grafana dashboards, logs/metrics correlation, Reliability",
    "TypeScript/React/Next.js, Java + integration work",
  ],
experience: [
  {
    company: "Sky, London",
    role: "Technical Analyst",
    dates: "Contract | Apr 2023 — Sep 2024",
    bullets: [
      "Improved production observability using Grafana by refining dashboards and alerts, increasing signal-to-noise during incidents.",
      "Triaged and resolved P0/P1 ServiceNow incidents by analysing logs and runtime data to isolate root causes under time pressure.",
      "Worked closely with SRE and development teams during major incidents to restore service and minimise customer impact.",
      "Identified recurring failure patterns and visibility gaps that slowed detection and diagnosis."
    ],
  },
  {
    company: "Adenza NASDAQ, London",
    role: "Technical Analyst",
    dates: "Contract | Jun 2022 — Dec 2022",
    bullets: [
      "Diagnosed client-specific production issues by analysing application code and logs on a financial system.",
      "Reproduced defects in test environments to validate bugs and fixes before release.",
      "Collaborated with Business Analysts and Developers to triage defects and confirm root causes rather than symptoms.",
      "Maintained ServiceNow incidents and JIRA tickets, contributing documentation to reduce repeat issues."
    ],
  },
  {
    company: "SAP, Dublin",
    role: "Support Engineer",
    dates: "Full-time | May 2020 — Dec 2021",
    bullets: [
      "Worked on custom ABAP code and reporting pipelines supporting customer-facing systems.",
      "Consulted clients on performance bottlenecks and custom code issues in live production environments.",
      "End-to-end incident resolution for applications generating customer reports backed by Oracle databases.",
      "Led a graduate project building an internal cloud application with a Spring Boot backend."
    ],
  },
],

  skills: {
  strong: [
    "Linux",
    "Debugging production systems",
    "Incident response",
    "Grafana",
    "System observability"
  ],
  working: [
    "TypeScript",
    "Node.js",
    "React",
    "Next.js",
    "SQL",
    "Docker",
    "Nginx"
  ],
  exposure: [
    "CI/CD pipelines",
    "Kubernetes",
    "Cloud infrastructure",
    "SRE",
    "Performance tuning"
  ],
  },
  projects: [
        {
      name: "Observability Improvements at Sky",
      description:
        "Improved visibility into frontend data pipelines by refining Grafana dashboards and alerts, making previously hard-to-detect issues obvious during incidents.",
      tags: ["Grafana", "Observability", "Dynatrace", "ContentSquare", "Kibana"],
      href: "#",
    },
    {
      name: "LunchLog (School Lunch Ordering)",
      description:
        "A digital lunch ordering system for Irish schools and suppliers: allergy tracking, parent ordering, daily order lists, paperless workflows.",
      tags: ["Next.js", "TypeScript", "Product thinking"],
      href: "#", // link to demo/GitHub when ready
    },
  ],
  interests: [
    "Movies",
    "Drones",
    "Coding and Tech",
  ],
  askMe: [
    {
      q: "What’s your strongest lane?",
      a: "Production incidents and messy systems. I’m strongest when symptoms are unclear, logs are noisy, and time matters. I drive issues to root cause, document what actually fixed it, and do everything to prevent repeat incidents."
    },
    {
      q: "Why you over other candidates?",
      a: "I’ve handled high priority production incidents. I don’t panic and focus on actions that restore service and improve detection next time. I have designed Grafana dashboards to improve investigations."
    },
    {
      q: "What roles fit you right now?",
      a: "Production-leaning software engineering, reliability roles, and technical analyst roles where debugging, and improving system visibility are core to the job."
    },
  ],
} as const;
