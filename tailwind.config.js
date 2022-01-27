// const defaultTheme = require('tailwindcss/defaultTheme')
// const { safelist } = require('@vuwi/plugin/dist/tailwindcss')
const colors = require('tailwindcss/colors')
// const typography = require('@tailwindcss/typography')
  // "exports": {
  //   "./vuwi.css": "./dist/vuwi.css",
  //   "./safelist": "./dist/safelist.js",
  //   "./dist/tailwindcss": "./dist/tailwindcss.js",
  //   "./tailwindcss": "./dist/tailwindcss.js",
  //   "./dist/windicss": "./dist/windicss.js",
  //   "./windicss": "./dist/windicss.js"
  // },
const safelist = require('@vuwi/plugin/safelist')
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  safelist: require('@vuwi/plugin/safelist'),
  theme: {
    minWidth: {
      '1/2': '50%',
    },
    extend: {
      colors: {
        primary: {
          light: '#0694ff', // For lighter primary color
          DEFAULT: '#1873e8', // Normal primary color
          dark: '#1d66ca', // Used for hover, active, etc.
        },
        dark: colors.slate,
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@vuwi/plugin/tailwindcss'),
  ],
}
