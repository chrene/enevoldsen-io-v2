const fontFamilySans = [
  "Proxima Nova",
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Oxygen",
  "Ubuntu",
  "Cantarell",
  "Fira Sans",
  "Droid Sans",
  "Helvetica Neue",
  "sans-serif",
];

const fontFamilySerif = ["utopia-std", "serif", " Georgia", "Cambria", "Times New Roman", "Times", "serif"];

const fontFamilyMono = ["Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"];

const colors = {
  gray: {
    DEFAULT: "#888888",
    50: "#FBFBFB",
    100: "#EEEEEE",
    200: "#D5D5D5",
    300: "#BBBBBB",
    400: "#A2A2A2",
    500: "#888888",
    600: "#6F6F6F",
    700: "#555555",
    800: "#3C3C3C",
    900: "#222222",
  },
  transparent: "transparent",
  white: "#fff",
  background: "#F0F3F5",
  blue: {
    DEFAULT: "#3E87D7",
    50: "#FCFDFE",
    100: "#E7F0FA",
    200: "#BDD6F1",
    300: "#92BCE9",
    400: "#68A1E0",
    500: "#3E87D7",
    600: "#276EBB",
    700: "#1E5591",
    800: "#153C67",
    900: "#0D233C",
  },
  eminence: {
    DEFAULT: "#9A50C7",
    50: "#C79EE0",
    100: "#BE8EDB",
    200: "#AC6FD1",
    300: "#9A50C7",
    400: "#863AB5",
    500: "#6F3096",
    600: "#50226C",
    700: "#301541",
    800: "#110717",
    900: "#000000",
  },
  yellow: {
    DEFAULT: "#E8C547",
    50: "#FFFFFF",
    100: "#FFFDF4",
    200: "#F9F0CF",
    300: "#F3E2A2",
    400: "#EED374",
    500: "#E8C547",
    600: "#E0B51C",
    700: "#B39116",
    800: "#856C11",
    900: "#58470B",
  },
  inputBorder: "#C8C8C8",
  border: "#cccccc",
  red: {
    DEFAULT: "#FF5A5F",
    50: "#FFFFFF",
    100: "#FCF6F6",
    200: "#FFD4D6",
    300: "#FFACAE",
    400: "#FF8387",
    500: "#FF5A5F",
    600: "#FF2229",
    700: "#E90007",
    800: "#B10005",
    900: "#790004",
  },
  black: {
    DEFAULT: "#30323D",
    50: "#9FA2B3",
    100: "#9194A8",
    200: "#747992",
    300: "#5D6176",
    400: "#46495A",
    500: "#30323D",
    600: "#1A1B20",
    700: "#030304",
    800: "#000000",
    900: "#000000",
  },
};

module.exports = {
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
      {
        custom: {
          primary: "#3BB2B2",
          "primary-content": "#ffffff",
          secondary: "#f43f5e",
          accent: "#7dd3fc",
          neutral: "#2C2C34",
          "neutral-content": "#ffffff",
          "base-100": "#f0f4f6",
          "base-200": "#f3f4f6",
          info: "#2563eb",
          success: "#22c55e",
          warning: "#9E7610",
          error: "#F2443A",
        },
      },
    ],
    theme: "cooporate",
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  variants: {
    extend: {
      padding: ["hover"],
      opacity: ["disabled"],
      wordBreak: ["responsive", "group-hover"],
      textOverflow: ["responsive", "group-hover", "hover", "focus"],
      whitespace: ["responsive", "group-hover", "hover", "focus"],
      overflow: ["responsive", "group-hover", "hover", "focus"],
      margin: ["first"],
      backgroundColor: ["active"],
      border: ["first", "last"],
      borderWidth: ["first", "last"],
      borderColor: ["first", "last"],
    },
  },
  theme: {
    fontFamily: {
      sans: fontFamilySans,
      serif: fontFamilySerif,
      mono: fontFamilyMono,
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    opacity: {
      0: "0",
      5: ".05",
      10: ".1",
      15: ".15",
      20: ".2",
      25: ".25",
      30: ".3",
      35: ".35",
      40: ".4",
      45: ".45",
      50: ".5",
      55: ".55",
      60: ".6",
      65: ".65",
      70: ".7",
      75: ".75",
      80: ".8",
      90: ".9",
      100: "1",
    },
    extend: {
      spacing: {
        112: "28rem",
        128: "32rem",
        192: "48rem",
        208: "52rem",
        224: "56rem",
      },
      gridTemplateColumns: {
        16: "repeat(16, minmax(0, 1fr))",
      },
      opacity: ["disabled"],
      fontFamily: {
        body: fontFamilySans,
        header: fontFamilySans,
      },
      zIndex: {
        20: "20",
        "-1": "-1",
        "-2": "-2",
        "-3": "-3",
        "-4": "-4",
        "-5": "-5",
        "-10": "-10",
        "-20": "-20",
        "-30": "-30",
        "-40": "-40",
        "-50": "-50",
      },
      fontSize: {
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        tiny: "0.875rem", // 14px
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.375rem", // 22px
        "3xl": "1.5rem", // 26px
        "4xl": "2rem", // 32px
        "5xl": "2.625rem", // 42px
        "6xl": "4rem", // 64px
        "7xl": "5rem", // 80px
      },
    },
  },
};
