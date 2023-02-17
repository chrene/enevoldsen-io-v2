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
          500: "#006D77",
          600: "#B62052",
          700: "#87173C",
          800: "#5B1029",
          900: "#2B0814"
        },
        "brand1": {
          50: "#F3F4F6",
          100: "#EBEBF0",
          200: "#D4D5DE",
          300: "#B7B9C8",
          400: "#9497AD",
          500: "#666A86",
          600: "#5D607A",
          700: "#4F5268",
          800: "#424557",
          900: "#2E303D"
        },
        "brand3": {
          50: "#F7F0FA",
          100: "#F0E5F5",
          200: "#DEC3E9",
          300: "#C99EDC",
          400: "#AA66C7",
          500: "#451F55",
          600: "#391A47",
          700: "#391A47",
          800: "#24102D",
          900: "#24102D"
        },
        "brand2": {
          50: "#EFEEEB",
          100: "#E1DFDA",
          200: "#C4BFB5",
          300: "#A49C8E",
          400: "#857B6B",
          500: "#60594D",
          600: "#4C473D",
          700: "#39342D",
          800: "#282520",
          900: "#141210"
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