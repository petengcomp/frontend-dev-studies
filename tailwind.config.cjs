/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',

  ],
  theme: {
    extend: {
      screens: {
        'sc-1500': { 'max': "1500px" },
        'sc-1200': { 'max': "1200px" },
        'sc-1k': { 'max': "1000px" },
        'sc-630': { 'max': "630px" },
        'sc-510': { "max": "510px" }
      },
      backgroundImage: {
        bola: "url('/bola.png')",
        caixa: "url('/caixa.svg')",
        retanguloPlay: "url('/retanguloPlay.svg')"
      },
      colors: {
        rosinha: "#FFB3B3",
        roxin: "#3F0250",
        roxinClaro: "rgba(63, 2, 80, 0.64)",
        cinza: "#E2E2E2",
        laranja: "#E7561D"
      },
      fontFamily: {
        russ: "'Russo One', sans-serif;",
        sasita: "'Sansita', sans-serif;",
      },
      boxShadow: {
        playButton: "0px 10.2857px 10.2857px rgba(0, 0, 0, 0.25);"
      },
      gap: {
        '25': '6.25rem',
      },
      z: {
        '100': '100',
      }
    },
  },

  plugins: [],
}
