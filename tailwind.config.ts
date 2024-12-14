import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        important: '#f2408b',
      },
      gridTemplateColumns: {
        'fill-100': 'repeat(auto-fill, minmax(100px, 1fr))',
        'fit-100': 'repeat(auto-fit, minmax(100px, 1fr))',
      },
      fontFamily: {
        'noto-sans': 'var(--noto-sans)',
      },
    },
  },
  plugins: [],
} satisfies Config
