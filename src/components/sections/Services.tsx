'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { telHref } from '@/config/site';
import { BroomIcon, SparklesHomeIcon, BuildingIcon, CheckIcon, ArrowIcon } from '@/components/ui/Icons';

// Estilo por tarjeta: Ligera = azul cielo, Profunda = rosa (destacada)
const styles = [
  {
    Icon: BroomIcon,
    ring: 'ring-1 ring-ink-900/5 shadow-ink-900/5',
    header: 'from-sky-100 to-sky-300',
    icon: 'text-sky-600',
    check: 'text-sky-600',
    cta: 'bg-sky-50 text-sky-700 hover:bg-sky-100',
  },
  {
    Icon: SparklesHomeIcon,
    ring: 'ring-2 ring-rose-300 shadow-rose-900/10',
    header: 'from-rose-100 to-rose-300',
    icon: 'text-rose-500',
    check: 'text-rose-500',
    cta: 'bg-rose-500 text-white hover:bg-rose-600',
  },
  {
    Icon: BuildingIcon,
    ring: 'ring-1 ring-ink-900/5 shadow-ink-900/5',
    header: 'from-gold-100 to-gold-300',
    icon: 'text-gold-600',
    check: 'text-gold-600',
    cta: 'bg-gold-50 text-gold-700 hover:bg-gold-100',
  },
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="section-padding bg-white">
      <div className="section-container">
        {/* Encabezado */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">{t.services.label}</p>
          <h2 className="section-heading mt-3">
            {t.services.title_pre}
            <span className="italic text-rose-500">{t.services.title_accent}</span>
          </h2>
          <p className="section-subheading">{t.services.subtitle}</p>
        </div>

        {/* Tarjetas */}
        <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {t.services.items.map((item, i) => {
            const s = styles[i];
            const featured = i === 1;
            return (
              <article
                key={item.title}
                className={`relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-xl transition-transform duration-300 hover:-translate-y-1 ${s.ring} ${i === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                {i === 2 && (
                  <span className="absolute right-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gold-700">
                    {t.services.new_label}
                  </span>
                )}
                {featured && (
                  <span className="absolute right-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-rose-600">
                    {t.services.popular}
                  </span>
                )}

                <div className={`flex h-32 items-end bg-gradient-to-br p-6 ${s.header}`}>
                  <span className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow ${s.icon}`}>
                    <s.Icon className="w-7 h-7" />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-400">{item.desc}</p>

                  <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-400">
                    {t.services.includes}
                  </p>
                  <ul
                    className={`mt-4 grid flex-1 content-start gap-x-4 gap-y-3 sm:grid-cols-2 ${
                      i === 2 ? 'lg:grid-cols-1' : 'md:grid-cols-1'
                    }`}
                  >
                    {item.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-[0.95rem] text-ink-600">
                        <CheckIcon className={`mt-1 w-3.5 h-3.5 flex-shrink-0 ${s.check}`} />
                        {d}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={telHref}
                    className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full py-3 font-semibold transition-colors duration-200 ${s.cta}`}
                  >
                    {t.services.cta}
                    <ArrowIcon />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Servicio a la medida */}
        <p className="mx-auto mt-10 max-w-3xl text-center leading-relaxed text-ink-500">
          <span className="font-semibold text-ink-900">{t.custom.title}</span> {t.custom.body}{' '}
          <a href="#contact" className="inline-flex items-center gap-1 font-semibold text-sky-600 hover:text-sky-700">
            {t.custom.cta}
            <ArrowIcon className="w-3.5 h-3.5" />
          </a>
        </p>
      </div>
    </section>
  );
}
