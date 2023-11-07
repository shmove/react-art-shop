/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cara-white': '#F4ECD6',
        'cara-whiter': '#f8f3e7',
        'cara-black': '#231B1B',
        'cara-grey': '#9FA0C3',
        'cara-violet': '#8B687F',
        'cara-magenta': '#7B435B'
      }
    },
  },
  plugins: [],
}

