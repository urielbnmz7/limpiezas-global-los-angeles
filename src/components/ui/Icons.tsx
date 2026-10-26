// Íconos SVG en línea (stroke), mismo estilo que Krystal Tax — sin dependencias.
type P = { className?: string };
const base = {
  fill: 'none',
  viewBox: '0 0 24 24',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

export const PhoneIcon = ({ className = 'w-5 h-5' }: P) => (
  <svg className={className} {...base}>
    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

export const ChatIcon = ({ className = 'w-5 h-5' }: P) => (
  <svg className={className} {...base}>
    <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
  </svg>
);

export const CheckIcon = ({ className = 'w-3 h-3' }: P) => (
  <svg className={className} {...base} strokeWidth={2.6}>
    <path d="M5 13l4 4L19 7" />
  </svg>
);

export const ArrowIcon = ({ className = 'w-4 h-4' }: P) => (
  <svg className={className} {...base} strokeWidth={2}>
    <path d="M9 5l7 7-7 7" />
  </svg>
);

export const PinIcon = ({ className = 'w-5 h-5' }: P) => (
  <svg className={className} {...base}>
    <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

/** Destello de 4 puntas, como las estrellas del logo */
export const Sparkle = ({ className = 'w-4 h-4' }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0c.6 6.2 5.8 11.4 12 12-6.2.6-11.4 5.8-12 12-.6-6.2-5.8-11.4-12-12C6.2 11.4 11.4 6.2 12 0z" />
  </svg>
);

// ── Íconos de servicios / valores ─────────────────────────────────────
export const BroomIcon = ({ className = 'w-6 h-6' }: P) => (
  <svg className={className} {...base}>
    <path d="M19.5 3.5l-7 7" />
    <path d="M11.2 9.2l3.6 3.6-1.3 1.3c-1.4 1.4-1.7 3.8-1.3 6.4-3.4.2-6.9-1.1-9.2-3.4 1.8-.4 3.3-1.4 4.4-2.9l1.4-1.8-1.1-1.1" />
    <path d="M8 16l-1.5 1.5M10 18l-1 1.5" />
  </svg>
);

export const SparklesHomeIcon = ({ className = 'w-6 h-6' }: P) => (
  <svg className={className} {...base}>
    <path d="M3 11l9-7 9 7" />
    <path d="M5 9.5V20h14V9.5" />
    <path d="M12 11.5c.3 1.5 1.3 2.5 2.8 2.8-1.5.3-2.5 1.3-2.8 2.8-.3-1.5-1.3-2.5-2.8-2.8 1.5-.3 2.5-1.3 2.8-2.8z" />
  </svg>
);

export const ShieldIcon = ({ className = 'w-6 h-6' }: P) => (
  <svg className={className} {...base}>
    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

export const SearchIcon = ({ className = 'w-6 h-6' }: P) => (
  <svg className={className} {...base}>
    <path d="M21 21l-4.35-4.35M17 10.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" />
    <path d="M10.5 7.5v6M7.5 10.5h6" />
  </svg>
);

export const HeartHomeIcon = ({ className = 'w-6 h-6' }: P) => (
  <svg className={className} {...base}>
    <path d="M3 11l9-7 9 7" />
    <path d="M5 9.5V20h14V9.5" />
    <path d="M12 17.5l-2.6-2.5a1.6 1.6 0 012.3-2.3l.3.3.3-.3a1.6 1.6 0 012.3 2.3L12 17.5z" />
  </svg>
);

export const SprayIcon = ({ className = 'w-6 h-6' }: P) => (
  <svg className={className} {...base}>
    <path d="M9 7h5l1 3v10a1 1 0 01-1 1H8a1 1 0 01-1-1V10l2-3z" />
    <path d="M10 7V4h3v3M13 4h3" />
    <path d="M19 4h.01M20.5 6.5h.01M19 9h.01" />
  </svg>
);

export const BuildingIcon = ({ className = 'w-6 h-6' }: P) => (
  <svg className={className} {...base}>
    <path d="M3 21h18M5 21V8l7-4v17M12 21V10l7 3v8" />
    <path d="M8 10h1M8 13h1M8 16h1M15 15h1M15 18h1" />
  </svg>
);
