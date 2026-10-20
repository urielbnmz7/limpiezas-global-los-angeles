'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { site, telHref, smsHref } from '@/config/site';
import Brand from '@/components/ui/Brand';
import LanguageToggle from '@/components/ui/LanguageToggle';
import { PhoneIcon, ChatIcon } from '@/components/ui/Icons';

export default function Navbar() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: t.nav.services, href: '#services' },
    { label: t.nav.why, href: '#why-us' },
    { label: t.nav.area, href: '#service-area' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-ink-900/5'
          : 'bg-white/80 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <nav className="section-container flex items-center justify-between h-20">
        <a href="#top" aria-label={`${site.name} — home`} onClick={closeMenu}>
          <Brand />
        </a>

        {/* Links desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-600 hover:text-rose-500 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Acciones */}
        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageToggle />

          <a href={telHref} className="btn-dark hidden sm:inline-flex px-4 py-2.5 text-xs">
            <PhoneIcon className="w-4 h-4" />
            {site.phone.display}
          </a>

          {/* Hamburguesa */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? t.nav.menu_close : t.nav.menu_open}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="lg:hidden p-2 rounded-lg text-ink-700 hover:bg-ink-50 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Menú móvil */}
      {isOpen && (
        <div id="mobile-menu" className="lg:hidden border-t border-ink-900/5 bg-white shadow-xl">
          <div className="section-container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="px-3 py-3 text-base font-medium text-ink-700 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="grid grid-cols-2 gap-3 pt-4 mt-2 border-t border-ink-900/5">
              <a href={telHref} onClick={closeMenu} className="btn-gold">
                <PhoneIcon className="w-4 h-4" />
                {t.hero.cta_call}
              </a>
              <a href={smsHref} onClick={closeMenu} className="btn-white">
                <ChatIcon className="w-4 h-4" />
                {t.hero.cta_text}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
