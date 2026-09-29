export const profile = {
  name: "Adeogun",
  fullName: "Adeogun Ayanfeoluwa Daniel",
  role: "Fullstack Developer",
  stack: ["Python", "PHP Laravel", "FastAPI", "PostgreSQL"],
  phone: "07048677422",
  email: "adeogun.ayanfeoluwaa@gmail.com",
  github: "https://github.com/Heavenmonarch",
  linkedin: "https://www.linkedin.com/in/ayanfeoluwa-adeogun",
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  link: string;
};

export const projects: Project[] = [
  {
    title: "Novel Reader API",
    description:
      "Production-grade Laravel 13 REST API for a novel reading platform. Features custom JWT auth, dragon vote system, author analytics, reading progress tracking, library collections, and a ranking engine. Built with a layered architecture, versioned routes, Redis caching, and full Swagger documentation.",
    tech: ["PHP Laravel 13", "JWT", "Redis", "Swagger"],
    link: "https://github.com/Heavenmonarch/Novel-Reader-API",
  },
  {
    title: "Invoice Flow API",
    description:
      "A production-grade REST API for managing invoices, built with FastAPI and PostgreSQL.",
    tech: ["FastAPI", "PostgreSQL", "Python"],
    link: "https://github.com/Heavenmonarch/Invoice-Flow-API",
  },
  {
    title: "Social Media API",
    description:
      "A social media based REST API with CRUD functionality for accounts and a vote system, built with FastAPI and Laravel.",
    tech: ["FastAPI", "PHP Laravel", "REST"],
    link: "https://github.com/Heavenmonarch/FastApi-API",
  },
  {
    title: "Notepad",
    description: "A notepad built with Flask, HTML and SCSS.",
    tech: ["Flask", "HTML", "SCSS"],
    link: "https://github.com/Heavenmonarch",
  },
];