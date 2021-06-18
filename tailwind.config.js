module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      filter: ['dark'],
      invert: ['dark'],
      display: ['dark'],
      margin: ['hover']
    },
  },
  plugins: [],
}
