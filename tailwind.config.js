/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': { 'max': '450px' },
    },
    extend: {
      backgroundImage: {
        'custom-radial': 'radial-gradient(273.9% 100% at 16.15% 100%, rgba(156, 255, 135, 0.2304) 0%, rgba(1, 142, 165, 0.1152) 44.72%, rgba(137, 70, 236, 0.2304) 100%)',
        'custom-linear': 'linear-gradient(0deg, rgba(255, 255, 255, 0.24), rgba(255, 255, 255, 0.24))',
      },
    },

  },
  plugins: [],
}