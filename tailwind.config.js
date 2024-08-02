/** @type {import('tailwindcss').Config} */

const defaultTheme  = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', ...defaultTheme.fontFamily.sans]
      },
      spacing: {
        '128': '30rem',
      },
      colors: {
        green: 'hsl(75, 94%, 57%)',
        white: 'hsl(0, 0%, 100%)',
        grey700: 'hsl(0, 0%, 20%)',
        grey800: 'hsl(0, 0%, 12%)',
        grey900: 'hsl(0, 0%, 8%)',
      }
    },
  },
  plugins: [],
}

