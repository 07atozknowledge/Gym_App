/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        hbutton:{
          400:"#aa17f1",
        }
      }
    },
    
  },
  plugins: [],
}