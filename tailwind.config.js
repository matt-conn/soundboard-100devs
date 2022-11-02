/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  variants: {
    extend: {
      button: ['first', 'last']
    }
  },
  theme: {
    extend: {},
  },
  plugins: [],
}