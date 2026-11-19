/** @type {import('tailwindcss').Config} */
// Los colores salen de variables CSS definidas en src/styles/global.css,
// que cambian según el modo claro u oscuro del sistema (prefers-color-scheme).
// Modo oscuro basado en: https://coolors.co/b37ba4-d99ac5-dccde8-14bdeb-00100b
const v = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ['./src/**/*.{astro,html,js,ts,md}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        paper: v('paper'), // fondo
        panel: v('panel'), // fondo elevado: campos, menú y la etiqueta
        ink: v('ink'), // texto
        mute: v('mute'), // texto secundario
        line: 'var(--line)', // líneas finas (ya lleva su transparencia)
        signal: v('signal'), // acento: enlaces, estado, foco
      },
      fontFamily: {
        sans: ['Archivo', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
