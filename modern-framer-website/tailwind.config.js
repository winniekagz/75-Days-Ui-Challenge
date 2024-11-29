
const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        russonOne: ['Russo One', 'sans-serif'],
        ptSerif: ['PT Serif', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'], 
      },
      colors: {
        royalBlue: "#4169e1",   // Primary Accent
        darkBlue: "#0d1117",    // Primary Background / Text
        dark: "#0d1117",        // Secondary Background
        lightGray: "#f4f4f4",   // Secondary Background (neutral, for contrast)
        goldenYellow: "#ffbf47", // Secondary Accent (adds warmth)
      },
      
    },
  },
  plugins: [],
})

