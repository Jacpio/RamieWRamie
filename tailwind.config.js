/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#22D45D',
          dark: '#1CB04D',
          light: '#23DB60',
        },
        secondary: {
          DEFAULT: '#B78F3F',
          dark: '#126E30',
          deeper: '#0C4A21',
        },
      },
    },
  },
  plugins: [],
}