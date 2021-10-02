module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset: {
        '4/10': '40%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
