/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D60D0D',
        secondary: '#8D99AE',
        dark: '#2B2D42',
        light: '#EDF2F4',
        'gray-custom': '#8D99AE',
        'gray-dark': '#4A4E69',
        'primary-dark': '#B30B0B'
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Comfortaa', 'cursive']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
} 