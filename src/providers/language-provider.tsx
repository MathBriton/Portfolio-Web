import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_LANGUAGE,
  LANGUAGES,
  translations,
  type Language,
  type TranslationKey,
} from "@/i18n/translations";

const STORAGE_KEY = "pf-lang";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readInitialLanguage(): Language {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && (LANGUAGES as readonly string[]).includes(stored)) {
    return stored as Language;
  }
  return window.navigator.language.startsWith("en") ? "en" : DEFAULT_LANGUAGE;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(readInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const setLanguage = useCallback((next: Language) => setLanguageState(next), []);

  const t = useCallback(
    (key: TranslationKey) => translations[language][key],
    [language],
  );

  const value = useMemo(
    () => ({ language, setLanguage, t }),
    [language, setLanguage, t],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
