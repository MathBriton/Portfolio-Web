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
    stack: [".NET", "Node.js", "PostgreSQL"],
    image: "/img/projects/placeholder.svg",
    links: {},
  },
  {
    id: "tickets",
    title: { "pt-br": "Sistema de Chamados", en: "Ticketing System" },
    summary: {
      "pt-br": "Comunicação e chamados em tempo real, inspirado no Slack.",
      en: "Real-time communication and ticketing, Slack-inspired.",
    },
    stack: [".NET", "Node.js", "WebSockets"],
    image: "/img/projects/placeholder.svg",
    links: {},
  },
  {
    id: "crm",
    title: { "pt-br": "CRM", en: "CRM" },
    summary: {
      "pt-br": "Gestão de relacionamento com clientes e funil de vendas.",
      en: "Customer relationship management and sales funnel.",
    },
    stack: [".NET", "Node.js", "PostgreSQL"],
    image: "/img/projects/placeholder.svg",
    links: {},
  },
  {
    id: "streaming",
    title: { "pt-br": "Plataforma de Streaming", en: "Streaming Platform" },
    summary: {
      "pt-br":
        "Streaming ao vivo e VOD inspirado em YouTube, Twitch, Kick e Netflix.",
      en: "Live streaming and VOD inspired by YouTube, Twitch, Kick and Netflix.",
    },
    stack: ["Elixir", "Phoenix", "LiveView", "BEAM"],
    image: "/img/projects/placeholder.svg",
    links: {},
  },
];
