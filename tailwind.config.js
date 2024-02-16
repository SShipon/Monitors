/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        yellow:"#EDC453",
        green:"#1DBB7D",
        red:"#D84A69",
        primary: "#f06123", 
        purple: '#3f3cbb',
        blue: '#1e40af',
      }
    },
  },
  plugins: [require("daisyui")],
}

