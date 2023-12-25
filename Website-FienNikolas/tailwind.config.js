/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'Primary': '#FFF5E9',
        'secondary': '#f9f9f4',
        'TextDark': '#D8BF9F',
        'Bronze': '#AF220E'
      }
    },
  },
  plugins: [],
}

