'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { site } from '@/config/site';
import { PinIcon } from '@/components/ui/Icons';

export default function ServiceArea() {
  const { t } = useLanguage();

  return (
    <section id="service-area" className="section-padding bg-white">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 sm:px-6 md:grid-cols-[1fr_1.2fr] lg:px-8">
        <div className="text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">{t.area.label}</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">{t.area.title}</h2>
          <p className="mt-4 leading-relaxed text-ink-400">{t.area.body}</p>
        </div>

        <ul className="flex flex-wrap justify-center gap-2 rounded-3xl bg-sky-50 p-6 md:justify-start">
          {site.location.areasServed.map((city, i) => (
            <li
              key={city}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium ${
                i === 0 ? 'bg-sky-600 text-white' : 'bg-white text-ink-600'
              }`}
            >
              <PinIcon className={`w-3.5 h-3.5 ${i === 0 ? 'text-white' : 'text-rose-400'}`} />
              {city}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
