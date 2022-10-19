/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',

  ],
  theme: {
    extend: {
      backgroundImage:{
        bola: "url('/bola.png')"
      },
      colors:{
        rosinha: "#FFB3B3"
      }
    },
  },
  plugins: [],
}
