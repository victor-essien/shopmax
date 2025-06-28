import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#64748B',
        accent: '#FB923C',
        background: '#F9FAFB',
        success: '#22C55E',
        danger: '#EF4444',
      },
    },
  },
  plugins: [],
};

export default config;
