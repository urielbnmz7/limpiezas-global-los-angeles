'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { ShieldIcon, SearchIcon, HeartHomeIcon, SprayIcon } from '@/components/ui/Icons';

const icons = [ShieldIcon, SearchIcon, HeartHomeIcon, SprayIcon];
const accents = [
  'bg-gold-50 text-gold-600',
  'bg-sky-50 text-sky-600',
  'bg-rose-50 text-rose-500',
  'bg-gold-50 text-gold-600',
];
const stepColors = ['bg-rose-500', 'bg-gold-500', 'bg-sky-500'];

export default function WhyUs() {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="section-padding bg-cream">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">{t.why.label}</p>
          <h2 className="section-heading mt-3">
            {t.why.title_pre}
            <span className="italic text-gold-600">{t.why.title_accent}</span>
          </h2>
          <p className="section-subheading">{t.why.subtitle}</p>
        </div>

        {/* Valores */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.why.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-7 text-center transition-shadow duration-300 hover:shadow-xl hover:shadow-ink-900/5"
              >
                <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${accents[i]}`}>
                  <Icon />
                </div>
                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Cómo funciona */}
        <h3 className="mt-20 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-400 font-sans">
          {t.why.steps_title}
        </h3>
        <ol className="relative mt-8 grid gap-10 md:grid-cols-3 md:gap-8">
          <span
            aria-hidden="true"
            className="absolute left-[16%] right-[16%] top-6 hidden h-px bg-gradient-to-r from-rose-300 via-gold-300 to-sky-300 md:block"
          />
          {t.why.steps.map((s, i) => (
            <li key={s.title} className="relative text-center">
              <span
                className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full font-bold text-white shadow-lg ring-4 ring-cream ${stepColors[i]}`}
              >
                {i + 1}
              </span>
              <p className="mt-4 font-semibold text-ink-900">{s.title}</p>
              <p className="mt-1 text-sm text-ink-400">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
