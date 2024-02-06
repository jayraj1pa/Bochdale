/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      margin: {
        '14': '3.5rem',
        '20': '5rem',
      },
    },
  },
  plugins: [],
})

