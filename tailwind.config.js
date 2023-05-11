const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'deep-purple': {
          'accent-400': '#673ab7', // Change the color code to the desired one
          '50': '#ede7f6', // Change the color code to the desired one
        },
        'teal-accent': {
          '400': '#1de9b6', // Change the color code to the desired one
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
