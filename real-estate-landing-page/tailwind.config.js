const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        button: '2px 2px 2px 2px rgba(0, 0, 0, 0.12)',
      },

      fontFamily: {
        inter: ["Inter"],
        petitFormal: ["Petit Formal Script"],
        russonOne: ["Russon One"],
      },
      colors: {
        // royalBlue: "#4169e1",
        royalBlue:'#3a4072',
        darkBlue: "#faba52",
        // darkblue:"#B79CED",
        dark: "#0d1117",
        primary: "#3a4072'", // Royal Purple
  secondary: "#faba52", // Lavender Purple
  accent: "#4A148C",
      },
      backgroundImage: {
        // wrapperBg: "url('assets/images/wrapperBackground.svg')",
        // wrapperDark: "url('assets/images/wrapperDark.svg')",
      },
    },
    container: {
      screens: {
        sm: "640px",
        md: "767px",
        lg: "1140px",
        xl: "1400px",
        "2xl": "1800px",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
  },
  plugins: [],
});
