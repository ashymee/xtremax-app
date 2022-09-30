/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const backfaceVisibility = plugin(function ({ addUtilities }) {
  addUtilities({
    ".backface-visible": {
      "backface-visibility": "visible",
    },
    ".backface-hidden": {
      "backface-visibility": "hidden",
    },
  });
});

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        myriadproreg: "'MyriadPro-Regular', sans-serif",
        myriadprosmbold: "'MyriadPro-Semibold', sans-serif",
        robotoblack: "'Roboto-Black', sans-serif",
        robotoreg: "'Roboto-Regular', sans-serif",
        robotomed: "'Roboto-Medium', sans-serif",
      },
      colors: {
        gray_calm: "#80929A",
        gray_dark_deep: "#252831",
        gray_dark: "#292C36",
        gray_darken: "#292C35",
        gray_darkness: "#1D1F26",
        gray_light_med: "#697C7F",
        gray_light: "#86989F",
        green_leaves: "#91BF49",
        green_lime: "#8AB544",
        sky_light: "#87CBD0",
        white_smoke: "#EFF2F5",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), backfaceVisibility],
  important: true,
};
