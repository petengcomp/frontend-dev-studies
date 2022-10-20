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
      },
      boxShadow: {
        playButton: "0px 10.2857px 10.2857px rgba(0, 0, 0, 0.25);"
      }
    },
  },

  plugins: [],
}
