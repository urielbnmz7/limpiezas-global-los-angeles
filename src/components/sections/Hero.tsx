'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { site, telHref, smsHref } from '@/config/site';
import { PhoneIcon, ChatIcon, CheckIcon, PinIcon, ShieldIcon, SparklesHomeIcon } from '@/components/ui/Icons';

const checkColors = ['text-sky-600', 'text-rose-500', 'text-gold-600', 'text-sky-600'];

export default function Hero() {
  const { t } = useLanguage();
  const [badgeTop, badgeBottom] = t.hero.badges;

  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white">
      {/* ── Manchas de color suaves (rosa y azul del logo) ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-rose-200/50 blur-3xl" />
        <div className="absolute top-20 -right-20 h-[28rem] w-[28rem] rounded-full bg-sky-200/60 blur-3xl" />
      </div>

      <div className="section-container relative grid items-center gap-14 pt-12 pb-20 sm:pt-16 lg:grid-cols-2 lg:gap-12 lg:pt-20 lg:pb-28">
        {/* ── Texto ── */}
        <div className="text-center lg:text-left animate-fadeSlideUp">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-sky-700 shadow-sm ring-1 ring-ink-900/5">
            <PinIcon className="w-4 h-4" />
            {t.hero.label}
          </span>

          <h1
            className="mt-6 font-heading font-bold leading-[1.08] text-ink-900"
            style={{ fontSize: 'clamp(2.3rem, 4vw + 1rem, 4rem)' }}
          >
            {t.hero.headline_1}{' '}
            <span className="italic text-rose-500">{t.hero.headline_accent}</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-400 lg:mx-0">
            {t.hero.subheadline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
            <a href={telHref} className="btn-gold px-7 py-3.5 text-base">
              <PhoneIcon className="w-5 h-5" />
              {t.hero.cta_call} {site.phone.display}
            </a>
            <a href={smsHref} className="btn-white px-7 py-3.5 text-base">
              <ChatIcon className="w-5 h-5" />
              {t.hero.cta_text}
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-ink-500 lg:justify-start">
            {t.hero.trust.map((item, i) => (
              <li key={item} className="inline-flex items-center gap-1.5">
                <CheckIcon className={`w-4 h-4 ${checkColors[i]}`} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Foto en tarjeta + sello del logo + etiquetas flotantes ── */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="relative aspect-[4/3.4] overflow-hidden rounded-[2.5rem] shadow-2xl shadow-sky-900/25 ring-8 ring-white">
            <Image
              src="/images/hero.webp"
              alt={t.hero.image_alt}
              fill
              priority
              sizes="(max-width: 1024px) 92vw, 576px"
              className="object-cover object-[62%_center]"
            />
          </div>

          <Image
            src="/images/brand/logo.png"
            alt=""
            aria-hidden="true"
            width={192}
            height={192}
            className="absolute -top-6 -left-3 h-20 w-20 rounded-full shadow-xl ring-4 ring-white sm:-top-8 sm:-left-6 sm:h-24 sm:w-24"
          />

          <div className="absolute -right-2 top-6 hidden items-center sm:flex gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl sm:-right-6 sm:top-8 xl:-right-8 sm:px-5 sm:py-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600">
              <ShieldIcon className="w-5 h-5" />
            </span>
            <span>
              <span className="block text-sm font-bold text-ink-900">{badgeTop.title}</span>
              <span className="block text-xs text-ink-400">{badgeTop.desc}</span>
            </span>
          </div>

          <div className="absolute -bottom-6 -left-2 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl sm:-left-10 sm:px-5 sm:py-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-rose-500">
              <SparklesHomeIcon className="w-5 h-5" />
            </span>
            <span>
              <span className="block text-sm font-bold text-ink-900">{badgeBottom.title}</span>
              <span className="block text-xs text-ink-400">{badgeBottom.desc}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
