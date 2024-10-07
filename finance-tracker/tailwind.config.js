const { withTV } = require('tailwind-variants/transformer');
/** @type {import('tailwindcss').Config} */

module.exports= withTV( {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark:'#000e0f',
        midGreen:'#004904',
        darkGreen:'#002f1b',
        green:'#00c600',
        blue:'#6894b9',
      },
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, #000e0f, #004904)', // Example gradient
        'gradient-to-b': 'linear-gradient(to bottom, #000e0f, #002f1b)',
        'gradient-to-mid':'linear-gradient(to right, #002f1b,#000e0f, #002f1b)', // Another example gradient
      },
    },
  },
  plugins: [],
})

