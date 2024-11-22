import type { Config } from "tailwindcss";
import daisyui from "daisyui";
const { withTV } = require('tailwind-variants/transformer');
 
/** @type {import('tailwindcss').Config} */

const config: Config = withTV({
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {

        primary: "#113d3c",
        secondary: "#dd6c29",
        accent: "#37cdbe",
        neutral: "#3d4451",
        base100: "#ffffff",
        text: "#464848",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#113d3c",
          secondary: "#dd6c29",
          accent: "#37cdbe",
          neutral: "#3d4451",
          background: "#f7f7f7",
          base100: "#ffffff",
          text: "#464848",
        },
      },
    ],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
});

export default config;
