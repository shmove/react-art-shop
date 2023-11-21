/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'cara-white': '#F4ECD6',
        'cara-whiter': '#f8f3e7',
        'cara-black': '#231B1B',
        'cara-grey': '#aaaabc',
        'cara-violet': '#8B687F',
        'cara-magenta': '#7B435B',
        'cara-failure': '#BA1200',
        'cara-failure-dark': '#940e00',
        'cara-success': '#5DA271',
        'cara-success-dark': '#4a815a'
      }
    },
  },
  plugins: [
      require('flowbite/plugin'),
      require('tailwindcss-animated')
  ],
}

