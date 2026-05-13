// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#FAFAFA',
        'canvas-2': '#F4F3EF',
        panel: '#FFFFFF',
        'panel-2': '#F5F5F5',
        'panel-3': '#EFEFEF',
        frame: '#E5E5E5',
        'frame-2': '#D4D4D4',
        'frame-3': '#A3A3A3',
        ink: '#171717',
        'ink-2': '#3F3F3F',
        'ink-3': '#737373',
        rule: '#E5E1DA',
        'rule-2': '#CFC8BC',
        headline: '#1A1A1A',
        body: '#525252',
        caption: '#737373',
        quiet: '#A3A3A3',
        link: '#2563EB',
        'link-wash': 'rgba(37, 99, 235, 0.06)',
        online: '#22C55E',
        obsidian: '#101010',
        parchment: '#F8F2E8',
        'parchment-2': 'rgba(248, 242, 232, 0.64)',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      maxWidth: {
        site: '1280px',
        copy: '680px',
        narrow: '520px',
      },
      letterSpacing: {
        tightest: '0em',
        tighter: '0em',
        tight: '0em',
        label: '0.08em',
        wide: '0.12em',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.25' },
        },
        floatSoft: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -10px, 0)' },
        },
      },
      animation: {
        'pulse-dot': 'pulseDot 2.4s ease-in-out infinite',
        'float-soft': 'floatSoft 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
