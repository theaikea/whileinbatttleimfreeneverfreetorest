/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'novatica': ['bc-novatica-cyr', 'sans-serif'],
        'neue': ['neue-haas-grotesk-display', 'sans-serif'],
        'cofo': ['cofo-gothic-variable', 'sans-serif'],
        'source': ['source-code-variable', 'sans-serif'],
      },
    },
  },
  plugins: [],
}