/* eslint-disable no-undef */
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Circular Std', ...defaultTheme.fontFamily.sans],
      display: ['Splash', 'cursive']
    },
    extend: {}
  },
  darkMode: 'class',
  plugins: [require('tailwindcss-3d')({ legacy: true })]
}
