/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'lightBlue' : '#3252DF',
        'darkBlue' : '#152C5B',
        'gray' : '#B0B0B0',
        'pink' : '#FF498B',
        'inputBg' : '#F5F6F8',
      },
      fontFamily : {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}