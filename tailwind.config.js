/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pensamento: '#3b82f6', // Azul
        mundo: '#10b981',      // Verde
        cultura: '#f59e0b',    // Amarelo/Laranja
      },
    },
  },
  plugins: [],
}