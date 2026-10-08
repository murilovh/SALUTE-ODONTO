/**
 * Design system da Salute Odontologia.
 * Contrastes (WCAG) sobre sand-50: ink-900 13.5 | ink-600 6.7 | sea-800 6.9 | clay-700 4.9
 * sea-500 (2.5) e clay-500 (2.9) são só decorativos, nunca para texto.
 */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#F7F4EF',
          100: '#F0EAE1',
          200: '#E6DCCD',
          300: '#D6C8B3',
        },
        sea: {
          100: '#DCEAE8',
          300: '#A3C7C4',
          500: '#6FA5A3',
          700: '#3D7173',
          800: '#2E5B5E',
          900: '#1F3F42',
        },
        clay: {
          500: '#D9783F',
          700: '#A8521F',
        },
        ink: {
          600: '#5C554E',
          900: '#2A2724',
        },
      },
      fontFamily: {
        display: ['Erode', 'Georgia', 'serif'],
        sans: ['Satoshi', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // escala fluida: mobile -> desktop
        'display-xl': ['clamp(2.75rem, 5vw + 1rem, 4.75rem)', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'display-lg': ['clamp(2.25rem, 4vw + 1rem, 4rem)', { lineHeight: '1.06', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.75rem, 2.5vw + 1rem, 2.75rem)', { lineHeight: '1.12', letterSpacing: '-0.015em' }],
        lead: ['clamp(1.125rem, 0.5vw + 1rem, 1.3125rem)', { lineHeight: '1.6' }],
      },
      spacing: {
        section: 'clamp(5rem, 10vw, 9rem)',
        gutter: 'clamp(1rem, 4vw, 3rem)',
      },
      borderRadius: {
        // um único sistema: cartões/fotos 16px ("soft"), botões em pílula
        soft: '1rem',
        organic: '2.5rem',
      },
      maxWidth: {
        page: '78rem',
        prose: '62ch',
      },
      transitionTimingFunction: {
        calm: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
};
