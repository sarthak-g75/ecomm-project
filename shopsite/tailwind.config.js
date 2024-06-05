/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': '370px',
      ...defaultTheme.screens,
    },
  },fontFamily :{ 
    dev: ["devShop","sans"], 
  } ,
  plugins: [],
}