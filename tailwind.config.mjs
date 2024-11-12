/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'first-color': 'hsl(207, 90%, 61%)',
        'first-color-alt': 'hsl(207, 90%, 57%)',
      },
      boxShadow: {
        button: '0 8px 24px rgba(0, 112, 243, 0.25)',
      },
    },
  },
  plugins: [],
};
