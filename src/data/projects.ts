import type { Project } from "./types";

/** Projetos de destaque do carrossel. Editar aqui adiciona/remove projetos. */
export const projects: Project[] = [
  {
    id: "erp",
    title: { "pt-br": "Sistema ERP", en: "ERP System" },
    summary: {
      "pt-br": "Gestão empresarial integrada: financeiro, estoque e vendas.",
      en: "Integrated business management: finance, inventory and sales.",
    },
    stack: ["ASP.NET Core", "Tailwind", "shadcn/ui", "React"],
    image: "/img/projects/placeholder.svg",
    links: { repo: "https://github.com/MathBriton/Obsidian-ERP" },
  },
  {
    id: "tickets",
    title: { "pt-br": "Sistema de Chamados", en: "Ticketing System" },
    summary: {
      "pt-br": "Comunicação e chamados em tempo real, inspirado no Slack.",
      en: "Real-time communication and ticketing, Slack-inspired.",
    },
    stack: ["Go", "Gin", "Tailwind", "React"],
    image: "/img/projects/placeholder.svg",
    links: { repo: "https://github.com/MathBriton/Obsidian-Chamados" },
  },
  {
    id: "crm",
    title: { "pt-br": "CRM", en: "CRM" },
    summary: {
      "pt-br": "Gestão de relacionamento com clientes e funil de vendas.",
      en: "Customer relationship management and sales funnel.",
    },
    stack: ["NestJS", "Tailwind", "shadcn/ui", "React"],
    image: "/img/projects/placeholder.svg",
    links: { repo: "https://github.com/MathBriton/CRM-Nexus" },
  },
  {
    id: "streaming",
    title: { "pt-br": "Plataforma de Streaming", en: "Streaming Platform" },
    summary: {
      "pt-br":
        "Streaming ao vivo e VOD inspirado em YouTube, Twitch, Kick e Netflix.",
      en: "Live streaming and VOD inspired by YouTube, Twitch, Kick and Netflix.",
    },
    stack: ["Elixir", "Phoenix", "LiveView"],
    image: "/img/projects/placeholder.svg",
    links: { repo: "https://github.com/MathBriton/Live-ChatBot" },
  },
];
