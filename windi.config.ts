import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'
import typography from 'windicss/plugin/typography'
import { vuwi, safelist } from '@vuwi/plugin/dist/windicss'
// import safelist from '@vuwi/plugin/dist/safelist'

export default defineConfig({
  darkMode: 'class',
  attributify: false,
  safelist,
  plugins: [
    typography(),
    vuwi(),
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#0694ff', // For lighter primary color
          DEFAULT: '#1873e8', // Normal primary color
          dark: '#1d66ca', // Used for hover, active, etc.
        },
        dark: colors.blueGray,
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              'color': 'inherit',
              'opacity': 0.75,
              'fontWeight': '500',
              'textDecoration': 'underline',
              '&:hover': {
                opacity: 1,
                color: colors.teal[600],
              },
            },
            b: { color: 'inherit' },
            strong: { color: 'inherit' },
            em: { color: 'inherit' },
            h1: { color: 'inherit' },
            h2: { color: 'inherit' },
            h3: { color: 'inherit' },
            h4: { color: 'inherit' },
            code: { color: 'inherit' },
          },
        },
      },
    },
  },
})
