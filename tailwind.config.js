/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./index.html","./src/**/*.js"],
  theme:{
      extend:{
        fontFamily: {
          Montserrat: ['"Montserrat"', 'sans-serif']
        }
      }
  },
  darkMode:'class',
  plugins:[],
}
