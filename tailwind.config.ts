import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#2D6A4F',
          light: '#40916C',
          dark: '#1B4332',
          muted: '#52B788',
        },
        bark: {
          DEFAULT: '#1C1917',
          light: '#292524',
          muted: '#44403C',
        },
        cream: {
          DEFAULT: '#FAFAF9',
          warm: '#F5F0E8',
          dark: '#E7E5E4',
        },
        gold: {
          DEFAULT: '#A16207',
          light: '#CA8A04',
          muted: '#D4A853',
        },
        earth: {
          DEFAULT: '#8B5E3C',
          light: '#A47551',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.08)',
        'glass-lg': '0 20px 60px rgba(0, 0, 0, 0.12)',
        'forest': '0 20px 60px rgba(45, 106, 79, 0.2)',
      },
      backdropBlur: {
        'glass': '16px',
      },
    },
  },
  plugins: [],
}

export default config
