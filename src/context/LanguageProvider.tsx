import { createContext, useState, useEffect, ReactNode } from 'react';
import enTranslations from '../locales/en.json';
import esTranslations from '../locales/es.json';

export type Language = 'en' | 'es';

type Translations = typeof enTranslations;

export interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  tArray: (key: string) => string[];
}

const translations: Record<Language, Translations> = {
  en: enTranslations,
  es: esTranslations,
};

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(() => {
    // Get language from localStorage or default to 'en'
    const savedLanguage = localStorage.getItem('portfolio-language') as Language;
    return savedLanguage || 'en';
  });

  useEffect(() => {
    // Save language to localStorage whenever it changes
    localStorage.setItem('portfolio-language', language);
  }, [language]);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: Record<string, unknown> | string = translations[language];

    for (const k of keys) {
      if (typeof value === 'object' && value !== null && k in value) {
        value = value[k] as Record<string, unknown> | string;
      } else {
        console.warn(`Translation key "${key}" not found for language "${language}"`);
        return key; // Return the key itself if translation is not found
      }
    }

    return typeof value === 'string' ? value : key;
  };

  const tArray = (key: string): string[] => {
    const keys = key.split('.');
    let value: unknown = translations[language];

    for (const k of keys) {
      if (typeof value === 'object' && value !== null && value !== undefined) {
        value = (value as Record<string, unknown>)[k];
      } else {
        console.warn(`Translation key "${key}" not found for language "${language}"`);
        return []; // Return empty array if translation is not found
      }
    }

    if (Array.isArray(value)) {
      return value as string[];
    } else if (typeof value === 'string') {
      return [value]; // Convert single string to array
    }
    
    return []; // Return empty array if value is not string or array
  };

  const contextValue: LanguageContextType = {
    language,
    setLanguage,
    t,
    tArray,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}