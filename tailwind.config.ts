import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        card: {
          DEFAULT: 'var(--card-bg)',
          dark: '#151921',
        },
        coral: {
          start: '#FF8A5B',
          end: '#FF5E62',
        },
        // Semantic minimal tokens
        minimal: {
          bg: '#FFFFFF',
          text: '#111111',
          muted: '#6B7280',
          border: '#EEEEEE',
          darkBg: '#0E1116',
          darkText: '#F5F5F5',
          darkCard: '#151921',
          darkBorder: '#22272E',
        },
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        jakarta: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
      maxWidth: {
        site: '1200px',
        content: '1024px',
        narrow: '768px',
      },
      backgroundImage: {
        'coral-gradient': 'linear-gradient(to right, #FF8A5B, #FF5E62)',
      },
    },
  },
  plugins: [],
};

export default config;
