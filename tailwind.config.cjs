/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',

  ],
  theme: {
    extend: {
      backgroundImage:{
        bola: "url('/bola.png')",
      },
      colors:{
        rosinha: "#FFB3B3"
      },
      fontFamily:{
        russ: "'Russo One', sans-serif;"
      }
    },
  },

  plugins: [],
}
