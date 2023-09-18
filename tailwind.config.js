/** @type {import('tailwindcss').Config} */
// const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    screens: {
      xs: "240px",

      sm: "768px",
      // => @media (min-width: 640px) { ... }

      md: "1024px",
      // => @media (min-width: 768px) { ... }

      lg: "1624px",
      // => @media (min-width: 1024px) { ... }

      xl: "1980px",
      // => @media (min-width: 1280px) { ... }
    '2xl': "3020px",
      // => @media (min-width: 1280px) { ... }
    },
  },

  plugins: [],
};
