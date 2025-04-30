/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        bleuRoi : '#034b65',
        bleuRoiFonce : '#09344a',
        bleuPolice : '#034B65',
      }
    },
  },
  plugins: [],
}