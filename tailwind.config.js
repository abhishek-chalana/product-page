/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'blue-hash': '#6497ce',
      },
      maxWidth: {
        'xxs': '10rem',
      }
    }
  },
  plugins: [],
}

