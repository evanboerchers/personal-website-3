import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/bits-ui/**/*.{js,ts,svelte}', // Include Bits UI components
  ],
  darkMode: 'class', // or 'media' if you prefer system preference
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E40AF', // Blue-800
          light: '#3B82F6',   // Blue-500
          dark: '#1E3A8A',    // Blue-900
        },
        accent: {
          DEFAULT: '#F59E0B', 
          light: '#FBBF24',   
          dark: '#B45309',    
        },
        surface: '#FFFFFF',
        background: '#F9FAFB',
        muted: '#6B7280',
        error: '#EF4444',
        success: '#10B981',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['"Space Grotesk"', 'sans-serif'],
      },
      spacing: {
        'layout': '1.5rem',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 2px 12px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [
    typography,
  ],
};

export default config;
