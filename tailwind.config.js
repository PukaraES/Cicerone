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
        teal: colors.teal
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active']
    }
  },
  plugins: []
}
