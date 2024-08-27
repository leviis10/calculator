// const defaultTheme = require('tailwindcss/defaultTheme')
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["'Open Sans'", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: {
          0: "#f8f9fa",
          9: "#212529",
        },
        grape: {
          0: "#f8f0fc",
          7: "#ae3ec9",
          8: "#9c36b5",
          9: "#862e9c",
        },
      },
    },
  },
  plugins: [],
};
