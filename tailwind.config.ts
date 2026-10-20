import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta tomada del logo — Negro, Dorado, Rosa y Azul cielo
        ink: {
          50:  "#F6F5F8",
          100: "#E9E7EE",
          300: "#A8A3B5",
          400: "#7C768B",
          500: "#58536A",
          600: "#3A3648",
          700: "#25222F",
          800: "#16141D",
          900: "#0E0C13", // fondo oscuro principal
          950: "#08070B",
        },
        gold: {
          50:  "#FCF8EE",
          100: "#F7EDD2",
          200: "#EFDCA6",
          300: "#E6C674",
          400: "#DAAE4C", // dorado brillante (texto sobre oscuro)
          500: "#C8952E", // primary
          600: "#A87A22", // primary dark / texto sobre claro
          700: "#835E1D",
          800: "#5E441A",
          900: "#3D2D13",
        },
        rose: {
          50:  "#FDF2F7",
          100: "#FCE4EF",
          200: "#F9C9DF",
          300: "#F3A3C6",
          400: "#EC7DAE", // rosa del logo
          500: "#DE5B97",
          600: "#C2417B",
          700: "#9E3263",
        },
        sky: {
          50:  "#F0F8FE",
          100: "#DDEFFC",
          200: "#BFE2FA",
          300: "#8FCDF5",
          400: "#5CB6EE", // azul del logo
          500: "#379CE0",
          600: "#237EC0",
          700: "#1E659B",
        },
        cream: "#FBF8F2",
      },
      fontFamily: {
        sans:    ['"Inter Variable"', "system-ui", "sans-serif"],
        heading: ['"Playfair Display Variable"', "Georgia", "serif"],
        script:  ['"Great Vibes"', "cursive"],
      },
      keyframes: {
        fadeSlideUp: {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.25', transform: 'scale(0.8)' },
          '50%':      { opacity: '1',    transform: 'scale(1)' },
        },
      },
      animation: {
        fadeSlideUp: 'fadeSlideUp 0.6s ease-out both',
        twinkle:     'twinkle 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
