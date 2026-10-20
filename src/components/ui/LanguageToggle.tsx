'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import type { Lang } from '@/lib/i18n';

const LANGS: Lang[] = ['en', 'es'];

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div role="group" aria-label="Language / Idioma" className="flex items-center rounded-full bg-ink-50 p-0.5">
      {LANGS.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-2.5 py-1 text-[11px] font-bold tracking-wider transition-all duration-200 ${
            lang === l ? 'bg-white text-ink-900 shadow-sm' : 'text-ink-400 hover:text-ink-900'
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
