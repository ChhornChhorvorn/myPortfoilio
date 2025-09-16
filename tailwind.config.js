/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html",
      "./src/*.{js,jsx,ts,tsx}",
    ],
  theme: {
    extend: {
      fontFamily:{
        inter: ['Inter', 'system-ui', 'sans-serif'],
        display:['Poppins', 'Inter', 'system-ui', 'sans-serif']
      },
      colors:{
        brand:{
          50: '#eef2ff',
          100: '#e0e7ff',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca'
        }
      },
    },
  },
  plugins: [],
}

