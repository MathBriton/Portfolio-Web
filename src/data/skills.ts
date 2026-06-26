import type { Skills } from "./types";

/** Competências agrupadas, consumidas pela seção de Skills. */
export const skills: Skills = {
  core: [
    {
      name: ".NET",
      level: { "pt-br": "Proficiente", en: "Proficient" },
      years: 3,
    },
    {
      name: "Node.js",
      level: { "pt-br": "Proficiente", en: "Proficient" },
      years: 3,
    },
  ],
  learning: [
    {
      name: "Elixir",
      focus: {
        "pt-br":
          "Alta disponibilidade e tolerância a falhas com a VM da BEAM (OTP/supervisão).",
        en: "High availability and fault tolerance on the BEAM VM (OTP/supervision).",
      },
    },
    {
      name: "Go",
      focus: {
        "pt-br": "Concorrência e paralelismo com goroutines.",
        en: "Concurrency and parallelism with goroutines.",
      },
    },
  ],
  foundations: ["PostgreSQL", "REST / WebSockets", "Git / CI-CD", "Docker"],
};
