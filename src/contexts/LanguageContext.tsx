'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { translations, Lang, T } from '@/lib/i18n';

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: T;
}

const STORAGE_KEY = 'lg-lang';
const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Inglés es el idioma principal (lo que se renderiza en el HTML estático)
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    // 1) Preferencia guardada  2) idioma del navegador  3) inglés
    let saved: string | null = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch {}
    if (saved === 'en' || saved === 'es') {
      setLangState(saved);
    } else if (navigator.language.toLowerCase().startsWith('es')) {
      setLangState('es');
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem(STORAGE_KEY, l); } catch {}
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
