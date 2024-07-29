/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      filter: {
        'invert': 'invert(100%)',
        'brightness-0': 'brightness(0%)',
      }
    },
  },
  plugins: [],
}

