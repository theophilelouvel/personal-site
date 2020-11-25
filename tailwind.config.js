module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'fake-black': '#333',
        'yellow-pope': '#ffbb00'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
