import type { Skills } from "./types";

/** Competências agrupadas, consumidas pela seção de Skills. */
export const skills: Skills = {
  core: [
    {
      name: ".NET",
      icon: "/img/tech/dotnet.svg",
      level: { "pt-br": "Proficiente", en: "Proficient" },
      years: 3,
    },
    {
      name: "Node.js",
      icon: "/img/tech/nodejs.svg",
      level: { "pt-br": "Proficiente", en: "Proficient" },
      years: 3,
    },
  ],
  learning: [
    {
      name: "Elixir",
      icon: "/img/tech/elixir.svg",
      focus: {
        "pt-br":
          "Alta disponibilidade e tolerância a falhas com a VM da BEAM (OTP/supervisão).",
        en: "High availability and fault tolerance on the BEAM VM (OTP/supervision).",
      },
    },
    {
      name: "Go",
      icon: "/img/tech/go.svg",
      focus: {
        "pt-br": "Concorrência e paralelismo com goroutines.",
        en: "Concurrency and parallelism with goroutines.",
      },
    },
  ],
  stack: [
    {
      labelKey: "stack_languages",
      items: [
        { name: "C#", color: "#512BD4" },
        { name: "JavaScript", color: "#F7DF1E" },
        { name: "TypeScript", color: "#3178C6" },
        { name: "Go", color: "#00ADD8" },
        { name: "Elixir", color: "#6E4A7E" },
        { name: "PHP", color: "#777BB4" },
      ],
    },
    {
      labelKey: "stack_frameworks",
      items: [
        { name: "ASP.NET Core" },
        { name: "Node.js" },
        { name: "NestJS" },
        { name: "React" },
        { name: { "pt-br": "ASP Clássico", en: "Classic ASP" } },
      ],
    },
    {
      labelKey: "stack_styling",
      items: [{ name: "Tailwind" }, { name: "Bootstrap" }, { name: "shadcn/ui" }],
    },
    {
      labelKey: "stack_databases",
      items: [{ name: "SQL Server" }, { name: "PostgreSQL" }, { name: "Redis" }],
    },
    {
      labelKey: "stack_cloud",
      items: [{ name: "AWS" }, { name: "Azure" }],
    },
    {
      labelKey: "stack_testing",
      items: [
        { name: { "pt-br": "Unitário", en: "Unit" } },
        { name: { "pt-br": "Integração", en: "Integration" } },
        { name: "E2E" },
      ],
    },
    {
      labelKey: "stack_practices",
      items: [
        { name: "TDD" },
        { name: "Clean Code" },
        { name: "Clean Architecture" },
        { name: "Spec Driven Development" },
      ],
    },
    {
      labelKey: "stack_tools",
      items: [
        { name: "Docker" },
        { name: "Git / CI-CD" },
        { name: "REST / WebSockets" },
      ],
    },
  ],
};
