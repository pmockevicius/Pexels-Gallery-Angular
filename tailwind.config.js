/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      width: {
        '71': '281px',
      },
      height: {
        '50': '196px',
      },
      colors: {
        'grey': '##636363',
      },
    },
  },
  plugins: [],
}