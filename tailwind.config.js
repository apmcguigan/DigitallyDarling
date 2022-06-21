const { purple } = require('tailwindcss/colors')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lime: colors.lime,
        beige: '#FDFAF0', 
        darkGreen: '#095d40',
        highlightGreen: '#557D70',
        green: '#11a772',
        purple: '#b3bbea'
      },
      spacing: {
        '1/2': '50%',
        '1/3': '33.33333%',
        '2/3': '66.66666%',
        '1/4': '25%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
      },
      height: {
        '8px': '4px',
        '44rem': '44rem',
      }
    },
  },
  variants: {
    extend: {
      translate: ['active', 'group-hover'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
