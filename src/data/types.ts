import type { Language, TranslationKey } from "@/i18n/translations";

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
  /** Path to the language logo, shown in place of the name. */
  icon: string;
  level: Localized;
  years: number;
};

export type LearningSkill = {
  name: string;
  /** Path to the language logo, shown in place of the name. */
  icon: string;
  focus: Localized;
};

export type StackBadge = {
  /** Plain string, or a localized label when it differs between languages. */
  name: string | Localized;
  /** Brand color for the border — set on programming languages. */
  color?: string;
};

export type StackGroup = {
  /** i18n key for the group heading. */
  labelKey: TranslationKey;
  items: StackBadge[];
};

export type Skills = {
  core: CoreSkill[];
  learning: LearningSkill[];
  stack: StackGroup[];
};

export type SocialId = "github" | "linkedin" | "email";

export type Social = {
  id: SocialId;
  url: string;
};
