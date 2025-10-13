/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      // Konfigurasi Font
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'system-ui', 'sans-serif'],
        serif: ['"Gabarito Variable"', 'ui-serif', 'serif'],
      },
      // Konfigurasi Warna
      colors: {
        primary: '#2563eb',
        neutral: '#94a3b8',
        white: '#e2e8f0',
        black: '#0e141b',
      },
      // Konfigurasi Ukuran Teks
      fontSize: {
        'xs': ['0.875rem', { lineHeight: '1.125rem' }],
        'sm': ['1rem', { lineHeight: '1.25rem' }],
        'base': ['1.125rem', { lineHeight: '1.625rem' }],
        'lg': ['1.25rem', { lineHeight: '1.75rem' }],
        'xl': ['1.5rem', { lineHeight: '1.813rem' }],
        '2xl': ['1.75rem', { lineHeight: '2.125rem' }],
        '3xl': ['2rem', { lineHeight: '2.375rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.688rem' }],
        '5xl': ['2.5rem', { lineHeight: '3rem' }],
        '6xl': ['3rem', { lineHeight: '3.625rem' }],
        '7xl': ['3.75rem', { lineHeight: '1' }],
        '8xl': ['4.5rem', { lineHeight: '4.875rem' }],
        '9xl': ['6rem', { lineHeight: '6.625rem' }],
      },
      // Konfigurasi Jarak Antar Huruf
      letterSpacing: {
        tightest: '-2px',
        tighter: '-1px',
        tight: '-0.25px',
      },
      // Konfigurasi Animasi Keyframes
      keyframes: {
        'slide-in': {
          '10%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      // Konfigurasi Animasi Utilitas
      animation: {
        'slide-in': 'slide-in 600ms ease both',
      },
    },
  },
  plugins: [],
};