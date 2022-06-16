const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        barlow: 'Barlow'
      },
      colors: {
        slate: colors.blueGray
      },
      width: {
        272: '272px'
      },
      height: {
        361: '361px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
