'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { telHref, smsHref } from '@/config/site';
import { PhoneIcon, ChatIcon } from '@/components/ui/Icons';

/** Botones flotantes (solo móvil): Mensaje + Llamar. Aparecen al pasar el hero. */
export default function FloatingContact() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const check = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    check();
    window.addEventListener('scroll', check, { passive: true });
    return () => window.removeEventListener('scroll', check);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-4 z-40 flex flex-col items-center gap-3 lg:hidden transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <a
        href={smsHref}
        aria-label={t.floating.text}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-ink-900 text-white shadow-xl ring-1 ring-white/15 active:scale-95 transition-transform"
      >
        <ChatIcon />
      </a>
      <a href={telHref} aria-label={t.floating.call} className="relative">
        <span aria-hidden="true" className="absolute inset-0 rounded-full bg-gold-400 opacity-30 animate-ping" />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold-300 to-gold-500 text-ink-900 shadow-xl active:scale-95 transition-transform">
          <PhoneIcon className="w-6 h-6" />
        </span>
      </a>
    </div>
  );
}
