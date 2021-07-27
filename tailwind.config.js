const defaultColors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {},
    colors: {
      ...defaultColors,
      // Primary
      "soft-red": "hsl(7, 99%, 70%)",
      "primary-yellow": "hsl(51, 100%, 49%)",
      "desaturated-cyan": "hsl(167, 40%, 24%)",
      "dark-blue": "hsl(198, 62%, 26%)",
      "moderate-cyan": "hsl(168, 34%, 41%)",
      footer: "hsl(167, 44%, 70%)",
      // Neutral
      "desaturate-blue": "hsl(212, 27%, 19%)",
      "dark-grayish-blue": "hsl(213, 9%, 39%)",
      "grayish-blue": "hsl(210, 4%, 67%)",
    },
    fontFamily: {
      sans: ["Barlow", "sans-serif"],
      serif: ["Fraunces", "serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
