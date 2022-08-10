/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'] ,
        'eduvic' :['Edu VIC WA NT Beginner', 'cursive'],
        'mochi': ['Mochiy Pop One', 'sans-serif']
      },
      color: {
        sourLemon: "#ffeaa7"
      }
    },
  },
  plugins: [],
}
