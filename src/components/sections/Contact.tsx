'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { site, telHref, smsHref } from '@/config/site';
import { PhoneIcon, ChatIcon, Sparkle } from '@/components/ui/Icons';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-white px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-rose-400 via-rose-300 to-sky-400 px-6 py-14 text-center text-white sm:p-16">
        {/* Destellos decorativos */}
        <Sparkle className="absolute left-[8%] top-[18%] h-6 w-6 text-white/50 animate-twinkle" />
        <Sparkle className="absolute right-[10%] top-[30%] h-4 w-4 text-white/60 animate-twinkle [animation-delay:1s]" />
        <Sparkle className="absolute bottom-[16%] left-[18%] h-3 w-3 text-white/60 animate-twinkle [animation-delay:2s]" />

        <p className="relative text-xs font-bold uppercase tracking-[0.2em] text-white/85">{t.contact.label}</p>
        <h2 className="relative mt-3 text-4xl font-bold leading-tight text-white sm:text-5xl">
          {t.contact.title_pre}
          {t.contact.title_accent}
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-lg text-white/90">{t.contact.body}</p>

        <a
          href={telHref}
          className="relative mt-8 inline-block font-heading text-4xl font-bold tracking-tight text-white drop-shadow-sm sm:text-6xl"
        >
          {site.phone.display}
        </a>

        <div className="relative mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
          <a href={telHref} className="btn-white px-8 py-4 text-base ring-0">
            <PhoneIcon />
            {t.contact.call}
          </a>
          <a href={smsHref} className="btn-dark px-8 py-4 text-base">
            <ChatIcon />
            {t.contact.text}
          </a>
        </div>
        <p className="relative mt-5 text-sm text-white/80">{t.contact.note}</p>
      </div>
    </section>
  );
}
