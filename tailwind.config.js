/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: true,
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: {
        DEFAULT: "#161B30",
      },
      surface: {
        DEFAULT: "#2A2F45",
      },
      text: {
        DEFAULT: "#8A91AB",
      },
      suggestion: {
        DEFAULT: "#30354B",
        hover: "#4e5574",
      },
      cards: {
        DEFAULT: "#292E44",
      },
      white: colors.white,
      // Configure your color palette here
    },
    extend: {},
  },
  plugins: [],
};
