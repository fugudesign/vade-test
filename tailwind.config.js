/* eslint-disable no-undef */
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Circular Std', ...defaultTheme.fontFamily.sans],
      display: ['Splash', 'cursive']
    },
    extend: {}
  },
  darkMode: 'class',
  plugins: [
    require('tailwindcss-3d')({ legacy: true }),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.perspective-custom': {
          perspective: '5000px'
        }
      })
    })
  ]
}
