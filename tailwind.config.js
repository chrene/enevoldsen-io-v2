/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Satoshi', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "pink": {
          50: "#FBE9EF",
          100: "#F7D4E0",
          200: "#F1ACC3",
          300: "#E981A4",
          400: "#E25A87",
          500: "#DB3069",
          600: "#B62052",
          700: "#87173C",
          800: "#5B1029",
          900: "#2B0814"
        },
        "yellow": {
          50: "#FEFCF0",
          100: "#FDF8E2",
          200: "#FCF1C0",
          300: "#F9E899",
          400: "#F7DF73",
          500: "#F5D547",
          600: "#E8C00D",
          700: "#CBA80B",
          800: "#A98C09",
          900: "#796407"
        },
        "brand": {
          50: "#EEF5FC",
          100: "#DDEBF9",
          200: "#B6D5F2",
          300: "#86B9E9",
          400: "#4694DD",
          500: "#1C5D99",
          600: "#185186",
          700: "#154674",
          800: "#11395F",
          900: "#0C2741"
        }
      },
    },

  },
  plugins: [],
}