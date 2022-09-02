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
        lightCream: '#F3EAE3',
        greenJade: '#3D8168',
        blueBunker: '#242A31',
      },
    },
  },
  plugins: [],
}