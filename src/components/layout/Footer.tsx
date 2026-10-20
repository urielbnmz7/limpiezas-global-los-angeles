'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { site, telHref } from '@/config/site';
import Brand from '@/components/ui/Brand';
import { PhoneIcon, PinIcon } from '@/components/ui/Icons';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const navLinks = [
    { label: t.nav.services, href: '#services' },
    { label: t.nav.why, href: '#why-us' },
    { label: t.nav.area, href: '#service-area' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <footer className="border-t border-ink-900/5 bg-cream">
      <div className="section-container py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <Brand size={52} />
            <p className="font-heading text-sm italic text-ink-400">{site.tagline}</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Footer">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-ink-500 hover:text-rose-500 transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-2 text-sm md:items-end">
            <a href={telHref} className="flex items-center gap-2 font-semibold text-ink-900 hover:text-rose-500">
              <PhoneIcon className="w-4 h-4" />
              {site.phone.display}
            </a>
            <p className="flex items-center gap-2 text-ink-400">
              <PinIcon className="w-4 h-4" />
              {t.footer.area}
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-ink-900/5 pt-6 text-center">
          <p className="text-xs text-ink-400">
            © {year} {site.name}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
