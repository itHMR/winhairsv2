/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
  ],
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      googleSans: ['"Google Sans"', 'sans-serif'],
      googleSansText: ['"Google Sans Text"', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
