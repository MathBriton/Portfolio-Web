export const LANGUAGES = ["pt-br", "en"] as const;
export type Language = (typeof LANGUAGES)[number];

export const DEFAULT_LANGUAGE: Language = "pt-br";

/**
 * UI strings keyed by language. Every visible string lives here,
 * never hardcoded in components.
 */
export const translations = {
  "pt-br": {
    nav_home: "Início",
    nav_skills: "Experiência",
    nav_projects: "Projetos",

    hero_role: "Engenheiro de Software Fullstack",
    hero_subtitle: "27 anos · 3 anos de experiência",
    hero_pitch:
      "Tenho 3 anos de experiência com ASP.NET Core Web API, MVC e WebForms para Desktop. Também com refatoração de projetos legados em ASP Clássico, utilizando boas práticas de clean code, reorientando os módulos legados em JavaScript para um padrão ES6+, atualizando a estilização para Bootstrap 5 e/ou Tailwind 4. Acrescento também experiência com PHP legado (sem framework) e Node.js com Express.",
    hero_avatar_alt: "Foto de Matheus Brito",

    btn_repo: "Repositório",
    btn_demo: "Demo",
    btn_copy_email: "Copiar e-mail",
    btn_copied: "Copiado!",
    btn_back_to_top: "Voltar ao topo",

    section_skills_title: "Experiência",
    section_projects_title: "Projetos",

    about_body:
      "Engenheiro de software fullstack, 27 anos, com 3 anos de experiência construindo aplicações com **.NET** e **Node.js**. Atualmente me aprofundando em **Elixir** — explorando alta disponibilidade e tolerância a falhas na **VM da BEAM** — e em **Go**, com foco em concorrência e paralelismo com **goroutines**.",
    about_card_title: "Mais sobre mim",

    years_label: "anos",
    skills_core: "Principais",
    skills_learning: "Entusiasta em",
    badge_learning: "Entusiasta",

    skills_stack_title: "Stacks/Linguagem",
    stack_languages: "Linguagens",
    stack_frameworks: "Frameworks",
    stack_styling: "Estilização",
    stack_databases: "Bancos de dados",
    stack_cloud: "Cloud",
    stack_testing: "Testes",
    stack_practices: "Boas práticas",
    stack_tools: "Ferramentas",

    aria_github: "Perfil no GitHub",
    aria_linkedin: "Perfil no LinkedIn",
    aria_email: "Enviar e-mail",
    aria_carousel_prev: "Projeto anterior",
    aria_carousel_next: "Próximo projeto",
    aria_carousel: "Carrossel de projetos",
    aria_stack: "Tecnologias",
    aria_theme_toggle: "Alternar tema",
    aria_language: "Mudar idioma",
    aria_sidenav: "Navegação por seções",
  },
  en: {
    nav_home: "Home",
    nav_skills: "Experience",
    nav_projects: "Projects",

    hero_role: "Fullstack Software Engineer",
    hero_subtitle: "27 years old · 3 years of experience",
    hero_pitch:
      "I have 3 years of experience with ASP.NET Core Web API, MVC and WebForms for Desktop. Also with refactoring legacy Classic ASP projects, applying clean code best practices, modernizing legacy JavaScript modules to an ES6+ standard, and updating styling to Bootstrap 5 and/or Tailwind 4. I also bring experience with legacy PHP (no framework) and Node.js with Express.",
    hero_avatar_alt: "Photo of Matheus Brito",

    btn_repo: "Repository",
    btn_demo: "Demo",
    btn_copy_email: "Copy email",
    btn_copied: "Copied!",
    btn_back_to_top: "Back to top",

    section_skills_title: "Experience",
    section_projects_title: "Projects",

    about_body:
      "Fullstack software engineer, 27 years old, with 3 years building applications with **.NET** and **Node.js**. Currently diving deeper into **Elixir** — exploring high availability and fault tolerance on the **BEAM VM** — and **Go**, focusing on concurrency and parallelism with **goroutines**.",
    about_card_title: "More about me",

    years_label: "years",
    skills_core: "Core",
    skills_learning: "Enthusiast in",
    badge_learning: "Enthusiast",

    skills_stack_title: "Stack/Languages",
    stack_languages: "Languages",
    stack_frameworks: "Frameworks",
    stack_styling: "Styling",
    stack_databases: "Databases",
    stack_cloud: "Cloud",
    stack_testing: "Testing",
    stack_practices: "Best practices",
    stack_tools: "Tooling",

    aria_github: "GitHub profile",
    aria_linkedin: "LinkedIn profile",
    aria_email: "Send email",
    aria_carousel_prev: "Previous project",
    aria_carousel_next: "Next project",
    aria_carousel: "Projects carousel",
    aria_stack: "Tech stack",
    aria_theme_toggle: "Toggle theme",
    aria_language: "Change language",
    aria_sidenav: "Section navigation",
  },
} as const;

export type TranslationKey = keyof (typeof translations)["pt-br"];
