import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0D1B33',
        navy: '#13294B',
        steel: '#4C6288',
        mist: '#EEF2F8',
        line: '#D9E1EE',
        accent: '#F28C28',
        success: '#1F8F5F'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Georgia', 'Cambria', 'Times New Roman', 'serif']
      },
      boxShadow: {
        panel: '0 20px 60px rgba(14, 27, 51, 0.08)',
        soft: '0 10px 30px rgba(14, 27, 51, 0.06)'
      },
      backgroundImage: {
        'hero-overlay': 'linear-gradient(90deg, rgba(9,18,35,0.88) 0%, rgba(12,30,58,0.76) 38%, rgba(12,30,58,0.22) 100%)',
        'section-glow': 'radial-gradient(circle at top, rgba(43,74,128,0.1), transparent 50%)'
      }
    }
  },
  plugins: []
} satisfies Config;
