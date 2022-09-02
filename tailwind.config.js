/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        lightCream: '#f2ebe3',
        greenJade: '#3c8067',
        darkBlue: '#1c232b',
        darkGrayishBlue: '#6c7289',
      },

      fontFamily: {
        Fraunces: ['Fraunces', 'serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}