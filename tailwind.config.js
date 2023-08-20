/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    borderWidth: {
      '1' : '1px',
      '2' : '2px',
      '3' : '3px',
    },
    extend: {
      fontFamily: {
        'suit': ['SUIT Variable']
      }
    },
  },
  plugins: [],
}

