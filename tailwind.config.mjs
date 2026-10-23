import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md}'],
  theme: {
    extend: {
      colors: {
        zinc: colors.zinc,
        violet: colors.violet,
        blue: colors.blue,
        bg: '#09090b',
        surface: '#121215',
        line: '#27272a',
        ink: '#f4f4f5',
        mute: '#a1a1aa',
        accent: '#8b5cf6',
        accent2: '#3b82f6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(139,92,246,.45), 0 0 28px -6px rgba(139,92,246,.35)',
        glowBlue: '0 0 0 1px rgba(59,130,246,.45), 0 0 28px -6px rgba(59,130,246,.35)',
      },
    },
  },
  plugins: [],
};
