const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#B8C1CD",
          100: "#A6B1C0",
          200: "#909DB0",
          300: "#74849C",
          400: "#516583",
          500: "#253F64",
          600: "#1E3250",
          700: "#182840",
          800: "#132033",
          900: "#0F1A29",
        },
        secondary: {},
      },
      fontFamily: {
        display: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
