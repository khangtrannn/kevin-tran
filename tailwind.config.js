/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    screens: {
      'tablet': { 'raw': '(min-width: 600px) and (orientation: portrait), (min-width: 960px)  and (orientation: landscape)' },
    }
  },
  plugins: [],
}
