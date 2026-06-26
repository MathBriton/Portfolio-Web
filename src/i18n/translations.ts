export const LANGUAGES = ["pt-br", "en"] as const;
export type Language = (typeof LANGUAGES)[number];

export const DEFAULT_LANGUAGE: Language = "pt-br";

/**
 * UI strings keyed by language. Mirrors the previous Hugo i18n files —
 * every visible string lives here, never hardcoded in components.
 */
export const translations = {
  "pt-br": {
    nav_about: "Sobre",
    nav_skills: "Skills",
    nav_projects: "Projetos",

    hero_prompt: "whoami",
    hero_role: "Desenvolvedor de Software Fullstack",
    hero_subtitle: "27 anos · 3 anos de experiência",
    hero_pitch:
      "Construo aplicações fullstack com .NET e Node.js, explorando Elixir e Go para concorrência e alta disponibilidade.",
    hero_avatar_alt: "Foto de Matheus Brito",

    btn_view_projects: "Ver projetos",
    btn_repo: "Repositório",
    btn_demo: "Demo",
    btn_back_to_top: "Voltar ao topo",

    section_about_title: "sobre / jornada",
    section_skills_title: "skills",
    section_projects_title: "projetos",

    about_body:
      "Desenvolvedor de software fullstack, 27 anos, com 3 anos de experiência construindo aplicações com **.NET** e **Node.js**. Atualmente me aprofundando em **Elixir** — explorando alta disponibilidade e tolerância a falhas na **VM da BEAM** — e em **Go**, com foco em concorrência e paralelismo com **goroutines**.",

    years_label: "anos",
    skills_core: "Principais",
    skills_learning: "Em aprendizado",
    skills_foundations: "Fundamentos",
    badge_learning: "Em aprendizado",

    aria_github: "Perfil no GitHub",
    aria_linkedin: "Perfil no LinkedIn",
    aria_email: "Enviar e-mail",
    aria_carousel_prev: "Projeto anterior",
    aria_carousel_next: "Próximo projeto",
    aria_carousel: "Carrossel de projetos",
    aria_stack: "Tecnologias",
    aria_theme_toggle: "Alternar tema",
    aria_language: "Mudar idioma",
  },
  en: {
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",

    hero_prompt: "whoami",
    hero_role: "Fullstack Software Developer",
    hero_subtitle: "27 years old · 3 years of experience",
    hero_pitch:
      "I build fullstack apps with .NET and Node.js, exploring Elixir and Go for concurrency and high availability.",
    hero_avatar_alt: "Photo of Matheus Brito",

    btn_view_projects: "View projects",
    btn_repo: "Repository",
    btn_demo: "Demo",
    btn_back_to_top: "Back to top",

    section_about_title: "about / journey",
    section_skills_title: "skills",
    section_projects_title: "projects",

    about_body:
      "Fullstack software developer, 27 years old, with 3 years building applications with **.NET** and **Node.js**. Currently diving deeper into **Elixir** — exploring high availability and fault tolerance on the **BEAM VM** — and **Go**, focusing on concurrency and parallelism with **goroutines**.",

    years_label: "years",
    skills_core: "Core",
    skills_learning: "Learning",
    skills_foundations: "Foundations",
    badge_learning: "Learning",

    aria_github: "GitHub profile",
    aria_linkedin: "LinkedIn profile",
    aria_email: "Send email",
    aria_carousel_prev: "Previous project",
    aria_carousel_next: "Next project",
    aria_carousel: "Projects carousel",
    aria_stack: "Tech stack",
    aria_theme_toggle: "Toggle theme",
    aria_language: "Change language",
  },
} as const;

export type TranslationKey = keyof (typeof translations)["pt-br"];
