/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: { extend: {
      fontFamily: { sans: ['Inter', 'sans-serif'] },
      colors: {
        nhs: { blue: '#005EB8', darkblue: '#003087', brightblue: '#0072CE' },
      },
    } },
  plugins: [],
}
