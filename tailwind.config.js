/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
        '7/20': '35%'
      },
      colors: {
        primary: {
          DEFAULT: '#16b049',
          dark: '#199f46',
          light: '#1dc454',
        },
        secondary: {
          DEFAULT: '#29B93CFF',
          dark: '#126E30',
          deeper: '#0C4A21',
        },
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwindcss-animated'),
    // eslint-disable-next-line no-undef
    require('tailwindcss-border-gradients')()
  ],
}