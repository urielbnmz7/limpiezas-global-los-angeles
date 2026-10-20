import Image from 'next/image';
import { site } from '@/config/site';

/** Logo circular + nombre del negocio. `tone` según el fondo donde se usa. */
export default function Brand({ size = 48, tone = 'light' }: { size?: number; tone?: 'light' | 'dark' }) {
  return (
    <span className="flex items-center gap-3">
      <Image
        src="/images/brand/logo.png"
        alt={site.name}
        width={size}
        height={size}
        priority
        className="rounded-full"
        style={{ width: size, height: size }}
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-script text-[1.6rem] leading-[1.05] ${
            tone === 'dark' ? 'text-gold-gradient' : 'text-gold-600'
          }`}
        >
          Limpiezas Global
        </span>
        <span
          className={`font-heading text-[0.62rem] font-semibold tracking-[0.28em] ${
            tone === 'dark' ? 'text-rose-400' : 'text-rose-500'
          }`}
        >
          LOS ÁNGELES
        </span>
      </span>
    </span>
  );
}
