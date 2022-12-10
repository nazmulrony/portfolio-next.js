/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#FF014F",
        dark: "#202020",
        light: "#f8f8f8",
      },
      fontFamily: {
        roboto: "'Roboto', 'sans-serif'",
      },
    },
  },
  plugins: [],
}