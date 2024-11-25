const { withTV } = require('tailwind-variants/dist/transformer.js');

/** @type {import('tailwindcss').Config} */
module.exports = withTV({
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        Primary: "#FF3B30",
        Secondary: "#121212",
        Accent: "#AAB2BD",
        Background: "#F2F2F7",
        Text: "#2C2C2E",
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'], // Set Nunito as the default sans-serif font
        poppins: ['Poppins', 'sans-serif'], // Optionally add Poppins if needed
      },
      fontSize:{
        xs:'14px',
        normal:'16px',
        cardTitle:'18px',
        lg:'20px',
        sectionTitle:'28px',
        sectionSubTitle:'24px',
        xl:'32px',
        xxl:'42px',
        xxxl:'80px',
      },
      padding: {
        base: 'p-4', 
        sm: 'sm:p-6', 
        md: 'md:p-8', 
        lg: 'lg:p-10',
        xl: 'xl:p-12', 
      },
      extend: {
    
        typography: {
          DEFAULT: {
            css: {
              whiteSpace: 'normal',
              overflowWrap: 'break-word',
            },
          },
        },
      },
    },
  },
  plugins: [require("daisyui"),require("@tailwindcss/forms")],
  daisyui: {
    themes: [
      {
        myCustomTheme: {
          primary: "#FF3B30",
          secondary: "#121212",
          accent: "#AAB2BD",
          neutral: "#2C2C2E",
          "base-100": "#F2F2F7",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
});
