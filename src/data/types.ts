import type { Language } from "@/i18n/translations";

/** A value translated into every supported language. */
export type Localized<T = string> = Record<Language, T>;

export type Project = {
  id: string;
  title: Localized;
  summary: Localized;
  stack: string[];
  image: string;
  links: {
    repo?: string;
    demo?: string;
  };
};

export type CoreSkill = {
  name: string;
  level: Localized;
  years: number;
};

export type LearningSkill = {
  name: string;
  focus: Localized;
};

export type Skills = {
  core: CoreSkill[];
  learning: LearningSkill[];
  foundations: string[];
};

export type SocialId = "github" | "linkedin" | "email";

export type Social = {
  id: SocialId;
  label: string;
  url: string;
};
