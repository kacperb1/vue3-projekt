const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
        backdropFilter: {
          'none': 'none',
          'blur': 'blur(20px)',
        },
      colors: {
        'deep-purple': {
          'accent-400': '#673ab7',
          '50': '#ede7f6',
        },
        'teal-accent': {
          '400': '#1de9b6',
        },
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
      },
      fontWeight: {
        '100': '100',
        '200': '200',
        '300': '300',
        '400': '400',
        '500': '500',
        '600': '600',
        '700': '700',
        '800': '800',
        '900': '900',
      },
    },
  },
  variants: {
    extend: {
      backdropFilter: ['responsive', 'hover', 'focus', 'active'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
