"use client";

import { createContext, useContext, useState } from "react";
import { translations } from "@/data/translations";
import { TranslationKey } from "@/types/translations"; // Ensure to import the type

type Language = "en" | "es" | "fr" | "hi" | "zh";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;  // Use TranslationKey here
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  const t = (key: TranslationKey): string => {  // Ensure key is a TranslationKey
    return translations[language][key] || key;  // TypeScript will validate this now
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
